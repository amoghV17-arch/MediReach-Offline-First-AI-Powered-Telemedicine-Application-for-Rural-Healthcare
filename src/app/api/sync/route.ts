import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/sync
 * Receives local Dexie data and simulates cloud backup.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, timestamp, symptomLogs, medicalReports, diagnosisResults, appointments } = body;

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 });
    }

    // In production: save to a real database (Firestore, Supabase, etc.)
    // For now: log and acknowledge
    console.log(`[SYNC] User ${userId} at ${timestamp}:`, {
      symptomLogs: symptomLogs?.length ?? 0,
      medicalReports: medicalReports?.length ?? 0,
      diagnosisResults: diagnosisResults?.length ?? 0,
      appointments: appointments?.length ?? 0,
    });

    return NextResponse.json({
      success: true,
      synced: true,
      timestamp: new Date().toISOString(),
      message: 'Data successfully backed up to cloud.',
      counts: {
        symptomLogs: symptomLogs?.length ?? 0,
        medicalReports: medicalReports?.length ?? 0,
        diagnosisResults: diagnosisResults?.length ?? 0,
        appointments: appointments?.length ?? 0,
      }
    });
  } catch (err) {
    console.error('[SYNC] Error:', err);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}
