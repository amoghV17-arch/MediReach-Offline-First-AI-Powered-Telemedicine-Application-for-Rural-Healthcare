import Dexie, { type Table } from 'dexie';
import type { DiagnosisResult } from './diagnosisEngine';

export interface UserProfile {
  id?: number;
  name: string;
  age: number | null;
  gender: string;
  bloodGroup: string;
  weight: number | null;
  height: number | null;
  allergies: string[];
  chronicConditions: string[];
  pinHash?: string;
  emergencyContacts?: { name: string; phone: string }[];
}

export interface SymptomLog {
  id?: number;
  userId: number;
  timestamp: string;
  description: string;
  severity: 'Low' | 'Moderate' | 'Severe' | 'Emergency';
  duration: string;
  bodyParts: string[];
  aiDiagnosisSummary?: string;
  synced: boolean;
}

export interface MedicalReport {
  id?: number;
  userId: number;
  timestamp: string;
  fileType: string;
  fileName: string;
  fileData: Blob | string;
  synced: boolean;
}

export interface Appointment {
  id?: number;
  userId: number;
  doctorId: string;
  doctorName: string;
  specialty: string;
  doctorCity: string;
  slot: string;          // ISO date-time string
  fee: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  notes?: string;
  symptomLogId?: number;
  reportShared?: boolean;
  synced: boolean;
  createdAt: string;
}

export interface AppNotification {
  id?: number;
  userId: number;
  type: 'appointment_reminder' | 'follow_up' | 'medicine' | 'sync_complete' | 'report_shared';
  title: string;
  body: string;
  scheduledAt: string;
  read: boolean;
  appointmentId?: number;
}

export interface DiseaseRecord {
  id?: number;
  name: string;
  keywords: string[];
  bodyParts: string[];
  severity: 'Low' | 'Moderate' | 'Severe' | 'Emergency';
  description: string;
  homeRemedies: string[];
  otcMedicines: { name: string; dosage: string; warning?: string }[];
  specialist: string;
  specialistReason: string;
  warningFlags: string[];
  seekEmergencyIf: string[];
  catalogVersion?: number; // For tracking OTA updates
}

export class MediReachDB extends Dexie {
  userProfiles!: Table<UserProfile>;
  symptomLogs!: Table<SymptomLog>;
  medicalReports!: Table<MedicalReport>;
  diagnosisResults!: Table<DiagnosisResult & { id?: number }>;
  appointments!: Table<Appointment>;
  notifications!: Table<AppNotification>;
  diseases!: Table<DiseaseRecord>;

  constructor() {
    super('MediReachDB');

    this.version(1).stores({
      userProfiles: '++id, name',
      symptomLogs: '++id, userId, timestamp, severity, synced',
      medicalReports: '++id, userId, timestamp, synced'
    });

    this.version(2).stores({
      userProfiles: '++id, name',
      symptomLogs: '++id, userId, timestamp, severity, synced',
      medicalReports: '++id, userId, timestamp, synced',
      diagnosisResults: '++id, symptomLogId, userId, timestamp'
    });

    // Phase 5: Appointments + Notifications
    this.version(3).stores({
      userProfiles: '++id, name',
      symptomLogs: '++id, userId, timestamp, severity, synced',
      medicalReports: '++id, userId, timestamp, synced',
      diagnosisResults: '++id, symptomLogId, userId, timestamp',
      appointments: '++id, userId, doctorId, status, synced, createdAt',
      notifications: '++id, userId, type, read, scheduledAt'
    });

    // Phase 7: Scalable Offline Disease Catalog (500+ diseases)
    this.version(4).stores({
      userProfiles: '++id, name',
      symptomLogs: '++id, userId, timestamp, severity, synced',
      medicalReports: '++id, userId, timestamp, synced',
      diagnosisResults: '++id, symptomLogId, userId, timestamp',
      appointments: '++id, userId, doctorId, status, synced, createdAt',
      notifications: '++id, userId, type, read, scheduledAt',
      diseases: '++id, name, *keywords, *bodyParts, severity, catalogVersion'
    });
  }
}

export const db = new MediReachDB();

