import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/diagnose
 * Calls Google Gemini API to get an AI-powered medical diagnosis with image analysis.
 * The API key should be stored in .env.local as GEMINI_API_KEY
 * Falls back to smart mock responses when no API key is configured.
 */
export async function POST(req: NextRequest) {
  try {
    const { description, bodyParts, severity, images } = await req.json();

    if (!description || description.trim().length < 5) {
      return NextResponse.json({ error: 'Invalid symptom description' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('[MediReach AI] GEMINI_API_KEY is not configured. Falling back to offline diagnosis engine.');
      return NextResponse.json({ error: 'AI service not configured on server' }, { status: 503 });
    }

    const systemPrompt = `You are MediReach AI, an expert medical assistant integrated into an offline-first telemedicine platform serving patients in rural and underserved areas of India. 

Your role is to provide INFORMATIONAL guidance only. Always include a clear disclaimer. Be compassionate, clear, and precise.

Respond ONLY with a valid JSON object matching exactly this structure — no markdown, no extra text, no code fences:
{
  "summary": "A clear, compassionate 2-3 sentence summary of the likely condition",
  "severity": "Low" | "Moderate" | "Severe" | "Emergency",
  "severityReason": "Brief explanation of why this severity level was chosen",
  "possibleConditions": [
    { "name": "...", "description": "...", "matchConfidence": "High" | "Medium" | "Low" }
  ],
  "homeRemedies": ["remedy 1", "remedy 2", ...],
  "otcMedicines": [
    { "name": "...", "dosage": "...", "warning": "..." }
  ],
  "specialistRecommended": "Type of specialist",
  "specialistReason": "Why this specialist",
  "seekEmergencyIf": ["condition 1", "condition 2", ...],
  "disclaimer": "This analysis is for informational purposes only...",
  "imageAnalysis": "A detailed 2-3 sentence clinical finding of the uploaded images (skin rash classification or X-ray abnormality detection), or 'No images uploaded' if none."
}

Rules:
- List 1-3 possible conditions, most likely first
- Provide 3-6 practical home remedies
- List 1-3 OTC medications with proper dosage and warnings; suggest 'Prescription required' for serious medications
- Always include 2-4 emergency red flag conditions
- Severity must be one of: Low, Moderate, Severe, Emergency
- Use Indian medicine brand names where applicable (e.g., Crocin, Combiflam, Dolo)
- Be cautious — when in doubt, recommend a higher severity and specialist visit
- If images (X-rays, skin rashes, etc.) are provided, perform a clinical visual assessment. Act as a skin condition classifier (e.g., classifying rashes, ringworm, chickenpox, eczema) and detect basic X-ray abnormalities (e.g., consolidations, chest congestion, joint narrowing, fracture). Put your image analysis findings in the "imageAnalysis" field of the JSON.`;

    const userMessage = `Patient symptoms report:

Description: ${description}
Affected body parts: ${bodyParts.length > 0 ? bodyParts.join(', ') : 'Not specified'}
Patient-reported severity: ${severity}

Please analyze these symptoms and any uploaded images, and provide your assessment in the specified JSON format.`;

    // Build Gemini request parts
    const parts: any[] = [];

    // Add images if present (Gemini supports inline_data for images)
    if (images && Array.isArray(images)) {
      for (const img of images) {
        if (img.base64) {
          // Remove data:image/...;base64, prefix if present
          const pureBase64 = img.base64.includes(';base64,')
            ? img.base64.split(';base64,')[1]
            : img.base64;

          parts.push({
            inline_data: {
              mime_type: img.mimeType || 'image/jpeg',
              data: pureBase64,
            },
          });
        }
      }
    }

    // Add text part
    parts.push({ text: userMessage });

    const modelsToTry = ['gemini-2.5-flash', 'gemini-3.5-flash', 'gemini-2.0-flash'];
    let content = null;
    let success = false;
    let lastErrorMsg = '';

    for (const model of modelsToTry) {
      try {
        console.log(`[MediReach AI] Attempting diagnosis with model: ${model}`);
        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              system_instruction: {
                parts: [{ text: systemPrompt }],
              },
              contents: [
                {
                  role: 'user',
                  parts,
                },
              ],
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 2000,
                responseMimeType: 'application/json',
              },
            }),
          }
        );

        if (!geminiResponse.ok) {
          const errorText = await geminiResponse.text();
          console.warn(`[MediReach AI] Model ${model} failed:`, errorText);
          lastErrorMsg = `Model ${model} returned status ${geminiResponse.status}: ${errorText}`;
          continue;
        }

        const geminiData = await geminiResponse.json();
        const responseText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

        if (responseText) {
          content = responseText;
          success = true;
          console.log(`[MediReach AI] Successfully generated content using model: ${model}`);
          break;
        } else {
          console.warn(`[MediReach AI] Empty response from model ${model}:`, JSON.stringify(geminiData));
          lastErrorMsg = `Empty response from model ${model}`;
        }
      } catch (err) {
        console.error(`[MediReach AI] Fetch error for model ${model}:`, err);
        lastErrorMsg = err instanceof Error ? err.message : String(err);
      }
    }

    if (!success || !content) {
      console.error('[MediReach AI] All Gemini models failed. Last error:', lastErrorMsg);
      return NextResponse.json({ error: `AI service temporarily unavailable. Details: ${lastErrorMsg}` }, { status: 502 });
    }

    // Parse the JSON response from Gemini
    let parsed;
    try {
      // Extract JSON from potential markdown code blocks (safety fallback)
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || [null, content];
      parsed = JSON.parse(jsonMatch[1] || content);
    } catch {
      console.error('Failed to parse Gemini response:', content);
      return NextResponse.json({ error: 'AI response parse error' }, { status: 502 });
    }

    return NextResponse.json(parsed);

  } catch (error) {
    console.error('Diagnosis API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

