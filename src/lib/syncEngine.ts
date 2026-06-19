import { db } from './db';

export interface SyncResult {
  success: boolean;
  synced: {
    symptomLogs: number;
    medicalReports: number;
    diagnosisResults: number;
    appointments: number;
  };
  error?: string;
}

/**
 * Syncs all un-synced local data to the cloud API.
 * Called automatically when the 'online' event fires.
 */
export async function syncToCloud(userId: number): Promise<SyncResult> {
  try {
    const [symptomLogs, medicalReports, diagnosisResults, appointments] = await Promise.all([
      db.symptomLogs.where('userId').equals(userId).filter(item => !item.synced).toArray(),
      db.medicalReports.where('userId').equals(userId).filter(item => !item.synced).toArray(),
      db.diagnosisResults.where('userId').equals(userId).toArray(),
      db.appointments.where('userId').equals(userId).filter(item => !item.synced).toArray(),
    ]);

    // Filter diagnosis results that haven't been synced
    const unSyncedDiagnosis = diagnosisResults;

    // Prepare payload (strip Blob from medicalReports for JSON transmission)
    const sanitizedReports = medicalReports.map(r => ({
      ...r,
      fileData: typeof r.fileData === 'string' ? r.fileData.slice(0, 100) + '...' : '[binary]'
    }));

    const payload = {
      userId,
      timestamp: new Date().toISOString(),
      symptomLogs,
      medicalReports: sanitizedReports,
      diagnosisResults: unSyncedDiagnosis,
      appointments,
    };

    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Sync server error');

    // Mark everything as synced in Dexie
    await Promise.all([
      ...symptomLogs.map(l => l.id !== undefined ? db.symptomLogs.update(l.id, { synced: true }) : Promise.resolve()),
      ...medicalReports.map(r => r.id !== undefined ? db.medicalReports.update(r.id, { synced: true }) : Promise.resolve()),
      ...appointments.map(a => a.id !== undefined ? db.appointments.update(a.id, { synced: true }) : Promise.resolve()),
    ]);

    // Also sync the offline disease catalog OTA in background
    let diseasesUpdated = 0;
    try {
      const catResult = await syncDiseaseCatalog();
      if (catResult.success) {
        diseasesUpdated = catResult.updated;
      }
    } catch (catErr) {
      console.error('[SyncEngine] Disease catalog sync failed in background:', catErr);
    }

    // Save a sync_complete notification
    await db.notifications.add({
      userId,
      type: 'sync_complete',
      title: '☁️ Data Synced',
      body: `${symptomLogs.length} logs, ${appointments.length} appointments synced. ${diseasesUpdated > 0 ? `Updated ${diseasesUpdated} diseases in catalog.` : 'Disease catalog up-to-date.'}`,
      scheduledAt: new Date().toISOString(),
      read: false,
    });

    return {
      success: true,
      synced: {
        symptomLogs: symptomLogs.length,
        medicalReports: medicalReports.length,
        diagnosisResults: unSyncedDiagnosis.length,
        appointments: appointments.length,
      }
    };
  } catch (err) {
    console.error('[SyncEngine] Error:', err);
    return {
      success: false,
      synced: { symptomLogs: 0, medicalReports: 0, diagnosisResults: 0, appointments: 0 },
      error: err instanceof Error ? err.message : 'Unknown sync error',
    };
  }
}

/**
 * Syncs the offline disease catalog from the server to Dexie.
 * Fetches the latest catalog from /api/diseases and upserts new/updated records.
 */
export async function syncDiseaseCatalog(): Promise<{ success: boolean; updated: number; error?: string }> {
  try {
    const res = await fetch('/api/diseases');
    if (!res.ok) throw new Error('Failed to fetch disease catalog');
    const data = await res.json();
    if (!data.success || !Array.isArray(data.diseases)) {
      throw new Error('Invalid catalog data format');
    }

    const localDiseases = await db.diseases.toArray();
    const localMap = new Map(localDiseases.map(d => [d.name.toLowerCase(), d]));
    
    let updatedCount = 0;
    const toAdd: any[] = [];
    const toUpdate: { id: number; data: any }[] = [];

    for (const disease of data.diseases) {
      const nameLower = disease.name.toLowerCase();
      const local = localMap.get(nameLower);
      if (!local) {
        toAdd.push(disease);
        updatedCount++;
      } else if ((disease.catalogVersion || 1) > (local.catalogVersion || 0)) {
        toUpdate.push({ id: local.id!, data: disease });
        updatedCount++;
      }
    }

    if (toAdd.length > 0) {
      await db.diseases.bulkAdd(toAdd);
    }
    if (toUpdate.length > 0) {
      await Promise.all(toUpdate.map(item => db.diseases.update(item.id, item.data)));
    }

    console.log(`[SyncEngine] Disease catalog sync complete. Added/Updated ${updatedCount} diseases.`);
    return { success: true, updated: updatedCount };
  } catch (err) {
    console.error('[SyncEngine] Disease catalog sync failed:', err);
    return {
      success: false,
      updated: 0,
      error: err instanceof Error ? err.message : 'Unknown error during catalog sync'
    };
  }
}

/**
 * Schedule an appointment reminder notification (stored in Dexie).
 */
export async function scheduleAppointmentReminder(
  userId: number,
  appointmentId: number,
  doctorName: string,
  slot: string
): Promise<void> {
  const slotDate = new Date(slot);
  const reminderTime = new Date(slotDate.getTime() - 60 * 60 * 1000); // 1 hour before

  await db.notifications.add({
    userId,
    type: 'appointment_reminder',
    title: '🗓️ Appointment Reminder',
    body: `Your appointment with ${doctorName} is in 1 hour at ${slotDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}.`,
    scheduledAt: reminderTime.toISOString(),
    read: false,
    appointmentId,
  });

  // Try browser Notification API
  if ('Notification' in window && Notification.permission === 'granted') {
    const msUntilReminder = reminderTime.getTime() - Date.now();
    if (msUntilReminder > 0) {
      setTimeout(() => {
        new Notification('MediReach Reminder 🩺', {
          body: `Appointment with ${doctorName} in 1 hour!`,
          icon: '/icon-192x192.png',
        });
      }, msUntilReminder);
    }
  }
}
