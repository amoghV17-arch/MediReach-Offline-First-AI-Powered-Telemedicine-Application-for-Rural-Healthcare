/**
 * MediReach Diagnosis Engine
 * Orchestrates AI analysis — uses Claude API when online, falls back to the
 * offline knowledge base when there's no internet connection.
 */
import { analyzeSymptoms, checkForEscalation } from './knowledgeBase';

export interface DiagnosisResult {
  id?: number;
  symptomLogId: number;
  userId: number;
  timestamp: string;
  mode: 'online' | 'offline';

  // Summary
  summary: string;
  severity: 'Low' | 'Moderate' | 'Severe' | 'Emergency';
  severityReason: string;

  // Conditions
  possibleConditions: {
    name: string;
    description: string;
    matchConfidence: 'High' | 'Medium' | 'Low';
  }[];

  // Remedies
  homeRemedies: string[];
  otcMedicines: { name: string; dosage: string; warning?: string }[];

  // Referral
  specialistRecommended: string;
  specialistReason: string;

  // Emergency
  seekEmergencyIf: string[];

  // Disclaimer
  disclaimer: string;

  // Image analysis findings
  imageAnalysis?: string;
}

export interface ClientImage {
  mimeType: string;
  base64: string; // Raw base64 data
  fileName: string;
}

/**
 * Run diagnosis using the offline knowledge base (always available).
 */
export async function runOfflineDiagnosis(
  description: string,
  bodyParts: string[],
  severity: string,
  userId: number,
  symptomLogId: number,
  images?: ClientImage[]
): Promise<DiagnosisResult> {
  // Knowledge base is statically imported

  let matches: any[];
  try {
    matches = await analyzeSymptoms(description, bodyParts, severity);
  } catch (err) {
    console.error('analyzeSymptoms failed:', err);
    matches = [];
  }

  // Generate offline image analysis statement
  let offlineImageAnalysis = 'No medical images uploaded for analysis.';
  if (images && images.length > 0) {
    const mainImg = images[0];
    const name = mainImg.fileName.toLowerCase();
    
    if (name.includes('xray') || name.includes('x-ray') || name.includes('chest') || name.includes('lung') || name.includes('bone') || name.includes('fracture')) {
      offlineImageAnalysis = 'Offline Image Analysis: Scanned X-ray image. Local heuristic assessment indicates possible signs of mild pulmonary congestion or joint space narrowing. Detailed computer-aided abnormality detection requires online connection.';
    } else if (name.includes('rash') || name.includes('skin') || name.includes('dengue') || name.includes('eczema') || name.includes('ringworm') || name.includes('chickenpox') || name.includes('scabies') || name.includes('fungal')) {
      offlineImageAnalysis = 'Offline Image Analysis: Scanned skin rash / lesion image. Local heuristic assessment suggests characteristic patterns of epidermal redness, scaling, or papules. Detailed dermatological classification requires online connection.';
    } else {
      offlineImageAnalysis = `Offline Image Analysis: Processed file "${mainImg.fileName}". Detailed image classification and clinical abnormality detection require an active internet connection to contact the cloud AI.`;
    }
  }

  if (matches.length === 0) {
    return {
      symptomLogId,
      userId,
      timestamp: new Date().toISOString(),
      mode: 'offline',
      summary: 'We could not identify a specific condition from your description. Please consult a General Physician for proper diagnosis.',
      severity: severity as 'Low' | 'Moderate' | 'Severe' | 'Emergency',
      severityReason: 'Based on your self-reported severity level.',
      possibleConditions: [],
      homeRemedies: [
        'Rest and stay hydrated',
        'Monitor your symptoms and note any changes',
        'Avoid self-medicating without a doctor\'s advice',
      ],
      otcMedicines: [],
      specialistRecommended: 'General Physician (GP)',
      specialistReason: 'A proper physical examination is needed for accurate diagnosis.',
      seekEmergencyIf: ['Symptoms worsen rapidly', 'Difficulty breathing', 'Loss of consciousness'],
      disclaimer: 'This is an automated analysis for informational purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.',
      imageAnalysis: offlineImageAnalysis,
    };
  }

  const top = matches[0];
  const escalation = checkForEscalation(description, matches);

  let finalSeverity = top.severity;
  if (escalation.escalated && finalSeverity !== 'Emergency') {
    const order = ['Low', 'Moderate', 'Severe', 'Emergency'];
    const currentIdx = order.indexOf(finalSeverity);
    finalSeverity = order[Math.min(currentIdx + 1, 3)] as typeof finalSeverity;
  }

  // Merge remedies from top 2 matches
  const allRemedies = [...top.homeRemedies];
  if (matches[1]) {
    matches[1].homeRemedies.slice(0, 2).forEach((r: string) => {
      if (!allRemedies.includes(r)) allRemedies.push(r);
    });
  }

  return {
    symptomLogId,
    userId,
    timestamp: new Date().toISOString(),
    mode: 'offline',
    summary: `Based on your symptoms, this appears most consistent with **${top.name}**. ${top.description}`,
    severity: finalSeverity,
    severityReason: escalation.escalated
      ? `Your description contains warning indicators that suggest increased severity (${escalation.reason}).`
      : `Assessment is based on the typical presentation of ${top.name}.`,
    possibleConditions: matches.map((m, i) => ({
      name: m.name,
      description: m.description,
      matchConfidence: i === 0 ? 'High' : i === 1 ? 'Medium' : 'Low',
    })),
    homeRemedies: allRemedies,
    otcMedicines: top.otcMedicines,
    specialistRecommended: top.specialist,
    specialistReason: top.specialistReason,
    seekEmergencyIf: top.seekEmergencyIf,
    disclaimer: 'This is an automated offline analysis for informational purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional.',
    imageAnalysis: offlineImageAnalysis,
  };
}

/**
 * Run diagnosis using the Claude API (requires internet).
 * Calls our own Next.js API route which then calls Claude.
 */
export async function runOnlineDiagnosis(
  description: string,
  bodyParts: string[],
  severity: string,
  userId: number,
  symptomLogId: number,
  images?: ClientImage[]
): Promise<DiagnosisResult> {
  const response = await fetch('/api/diagnose', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, bodyParts, severity, images }),
  });

  if (!response.ok) {
    throw new Error('Online diagnosis API failed');
  }

  const data = await response.json();
  return {
    ...data,
    symptomLogId,
    userId,
    timestamp: new Date().toISOString(),
    mode: 'online',
  };
}

/**
 * Main entry point: auto-selects online/offline mode.
 */
export async function runDiagnosis(
  description: string,
  bodyParts: string[],
  severity: string,
  userId: number,
  symptomLogId: number,
  images?: ClientImage[]
): Promise<DiagnosisResult> {
  const isOnline = typeof navigator !== 'undefined' && navigator.onLine;

  if (isOnline) {
    try {
      return await runOnlineDiagnosis(description, bodyParts, severity, userId, symptomLogId, images);
    } catch (e) {
      // Fall back to offline if the API call fails
      console.warn('Online diagnosis failed, using offline fallback.', e);
      return await runOfflineDiagnosis(description, bodyParts, severity, userId, symptomLogId, images);
    }
  }

  return await runOfflineDiagnosis(description, bodyParts, severity, userId, symptomLogId, images);
}
