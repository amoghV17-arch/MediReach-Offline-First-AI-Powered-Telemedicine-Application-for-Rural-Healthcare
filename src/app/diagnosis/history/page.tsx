'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { db, SymptomLog } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { getSavedLanguage, translate, type Language } from '@/lib/translations';
import styles from './history.module.css';

export default function HistoryPage() {
  const router = useRouter();
  const [logs, setLogs] = useState<SymptomLog[]>([]);
  const [lang, setLang] = useState<Language>('en');

  // Handle language updates real-time
  useEffect(() => {
    setLang(getSavedLanguage());
    const handleLangChange = () => {
      setLang(getSavedLanguage());
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => {
      window.removeEventListener('languageChange', handleLangChange);
    };
  }, []);

  useEffect(() => {
    const session = getSession();
    if (!session) { router.push('/auth'); return; }

    async function loadAndSync() {
      // 1. Initial quick load of local history from Dexie (Offline-First)
      const localLogs = await db.symptomLogs
        .where('userId').equals(session!.userId)
        .reverse()
        .toArray();
      setLogs(localLogs);

      // 2. If online, trigger background sync
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        try {
          const { syncToCloud } = await import('@/lib/syncEngine');
          const result = await syncToCloud(session!.userId);
          
          // 3. If any logs were synced, reload from database to seamlessly update status badges
          if (result.success && result.synced.symptomLogs > 0) {
            const syncedLogs = await db.symptomLogs
              .where('userId').equals(session!.userId)
              .reverse()
              .toArray();
            setLogs(syncedLogs);
            console.log(`[History] Sync completed. Reloaded ${result.synced.symptomLogs} synced logs.`);
          }
        } catch (err) {
          console.error('[History] Background sync error:', err);
        }
      }
    }

    loadAndSync();
  }, [router]);

  const severityColor: Record<string, string> = {
    Low: '#0F6E56',
    Moderate: '#e67e22',
    Severe: '#c0392b',
    Emergency: '#7b0000',
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/dashboard" className={styles.backBtn}>{translate('back', lang)}</Link>
          <h1 className={styles.title}>{translate('medicalHistory', lang)}</h1>
        </div>

        {logs.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>📭</div>
            <p>{translate('noHistory', lang)}</p>
            <Link href="/diagnosis" className={styles.emptyBtn}>{translate('addSymptoms', lang)}</Link>
          </div>
        ) : (
          <div className={styles.timeline}>
            {logs.map(log => (
              <div key={log.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.date}>
                    {new Date(log.timestamp).toLocaleDateString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} 
                    {` ${translate('at', lang)} `} 
                    {new Date(log.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className={styles.badge} style={{ backgroundColor: severityColor[log.severity] + '20', color: severityColor[log.severity] }}>
                    {translate(log.severity, lang)}
                  </div>
                </div>
                
                <p className={styles.desc}>"{log.description}"</p>
                
                <div className={styles.metaRow}>
                  {log.duration !== 'Not specified' && <span className={styles.metaTag}>⏱️ {log.duration}</span>}
                  {log.bodyParts.map(part => (
                    <span key={part} className={styles.metaTag}>🧬 {translate(part, lang)}</span>
                  ))}
                </div>

                {!log.synced && (
                  <div className={styles.offlineNotice}>
                    {translate('offlineStored', lang)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
