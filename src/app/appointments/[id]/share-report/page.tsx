'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { db, type Appointment } from '@/lib/db';
import type { DiagnosisResult } from '@/lib/diagnosisEngine';
import { getSavedLanguage, translate, type Language } from '@/lib/translations';
import styles from './share.module.css';

// Local specific translation dictionary for Share Report page
const localShareTranslations: Record<string, Record<Language, string>> = {
  shareReportHeader: {
    en: "📤 Share Report with Doctor",
    hi: "📤 डॉक्टर के साथ रिपोर्ट साझा करें",
    mr: "📤 डॉक्टरांसोबत रिपोर्ट शेअर करा"
  },
  shareSuccessTitle: {
    en: "Report Shared Successfully!",
    hi: "रिपोर्ट सफलतापूर्वक साझा की गई!",
    mr: "अहवाल यशस्वीरित्या शेअर केला आहे!"
  },
  shareSuccessDesc: {
    en: "Your doctor will review your medical history before your appointment.",
    hi: "आपके अपॉइंटमेंट से पहले आपके डॉक्टर आपके चिकित्सा इतिहास की समीक्षा करेंगे।",
    mr: "तुमचे डॉक्टर अपॉइंटमेंटपूर्वी तुमच्या जुन्या वैद्यकीय इतिहासाची पाहणी करतील."
  },
  joinVideoCall: {
    en: "🎥 Join Video Call",
    hi: "🎥 वीडियो कॉल में शामिल हों",
    mr: "🎥 व्हिडिओ कॉल सुरू करा"
  },
  backToAppts: {
    en: "← Back to Appointments",
    hi: "← अपॉइंटमेंट्स पर वापस जाएं",
    mr: "← अपॉइंटमेंट्स पेजवर परत जा"
  },
  introDesc: {
    en: "The following information will be securely sent to your doctor before the call.",
    hi: "कॉल से पहले निम्नलिखित जानकारी आपके डॉक्टर को सुरक्षित रूप से भेजी जाएगी।",
    mr: "कॉल सुरू होण्यापूर्वी खालील सर्व माहिती डॉक्टरांकडे सुरक्षितपणे पाठवली जाईल."
  },
  patientProfileTitle: {
    en: "👤 Patient Profile",
    hi: "👤 मरीज की प्रोफ़ाइल",
    mr: "👤 रुग्णाची माहिती"
  },
  profileName: {
    en: "Name",
    hi: "नाम",
    mr: "नाव"
  },
  profileAge: {
    en: "Age",
    hi: "उम्र",
    mr: "वय"
  },
  profileBlood: {
    en: "Blood Group",
    hi: "रक्त समूह",
    mr: "रक्त गट"
  },
  profileAllergies: {
    en: "Allergies",
    hi: "एलर्जी",
    mr: "ॲलर्जी"
  },
  profileChronic: {
    en: "Chronic Conditions",
    hi: "पुरानी बीमारियां",
    mr: "जुने आजार"
  },
  noneListed: {
    en: "None listed",
    hi: "कोई नहीं",
    mr: "काहीही नाही"
  },
  shareWithDoctorBtn: {
    en: "📤 Send Report to Doctor",
    hi: "📤 डॉक्टर को रिपोर्ट भेजें",
    mr: "📤 डॉक्टरांकडे रिपोर्ट पाठवा"
  },
  sendingReport: {
    en: "⏳ Sending Report...",
    hi: "⏳ रिपोर्ट भेजी जा रही है...",
    mr: "⏳ रिपोर्ट पाठवत आहे..."
  },
  offlineWarn: {
    en: "⚠️ Internet connection required to share reports.",
    hi: "⚠️ रिपोर्ट साझा करने के लिए इंटरनेट कनेक्शन आवश्यक है।",
    mr: "⚠️ रिपोर्ट शेअर करण्यासाठी इंटरनेट कनेक्शन आवश्यक आहे."
  },
  shareFailed: {
    en: "Failed to share report. Please check your connection.",
    hi: "रिपोर्ट साझा करने में विफल। कृपया अपना कनेक्शन जांचें।",
    mr: "रिपोर्ट पाठवण्यात त्रुटी आली. कृपया इंटरनेट कनेक्शन तपासा."
  }
};

export default function ShareReportPage() {
  const router = useRouter();
  const params = useParams();
  const apptId = Number(params.id);

  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [latestDiagnosis, setLatestDiagnosis] = useState<(DiagnosisResult & { id?: number }) | null>(null);
  const [recentLogs, setRecentLogs] = useState<{ description: string; severity: string; timestamp: string }[]>([]);
  const [userProfile, setUserProfile] = useState<{ name: string; age: number | null; bloodGroup: string; allergies: string[]; chronicConditions: string[] } | null>(null);
  const [sharing, setSharing] = useState(false);
  const [shared, setShared] = useState(false);
  const [error, setError] = useState('');
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

  const tLocal = (key: string): string => {
    const item = localShareTranslations[key];
    if (!item) return key;
    return item[lang] || item['en'] || key;
  };

  useEffect(() => {
    const session = getSession();
    if (!session) { router.push('/auth'); return; }

    async function loadData() {
      const [appt, profile, logs, diagnoses] = await Promise.all([
        db.appointments.get(apptId),
        db.userProfiles.where('id').equals(session!.userId).first(),
        db.symptomLogs.where('userId').equals(session!.userId).reverse().limit(5).toArray(),
        db.diagnosisResults.where('userId').equals(session!.userId).reverse().limit(1).toArray(),
      ]);

      setAppointment(appt ?? null);
      setUserProfile(profile ? {
        name: profile.name,
        age: profile.age,
        bloodGroup: profile.bloodGroup,
        allergies: profile.allergies,
        chronicConditions: profile.chronicConditions,
      } : null);
      setRecentLogs(logs.map(l => ({ description: l.description, severity: l.severity, timestamp: l.timestamp })));
      if (diagnoses.length > 0) setLatestDiagnosis(diagnoses[0]);
    }

    loadData();
  }, [apptId, router]);

  async function handleShare() {
    if (!appointment) return;
    setSharing(true);
    setError('');

    try {
      const report = {
        appointmentId: apptId,
        doctorName: appointment.doctorName,
        slot: appointment.slot,
        patientProfile: userProfile,
        recentSymptomLogs: recentLogs,
        latestDiagnosis: latestDiagnosis ? {
          possibleConditions: latestDiagnosis.possibleConditions?.slice(0, 3).map(c => ({
            name: c.name,
            description: c.description,
            matchConfidence: c.matchConfidence,
          })),
          summary: latestDiagnosis.summary,
          homeRemedies: latestDiagnosis.homeRemedies,
        } : null,
        sharedAt: new Date().toISOString(),
      };

      const res = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userProfile?.name, reportPayload: report }),
      });

      if (!res.ok) throw new Error('Share failed');

      // Mark as shared in DB
      await db.appointments.update(apptId, { reportShared: true });

      // Add notification
      const session = getSession();
      if (session) {
        await db.notifications.add({
          userId: session.userId,
          type: 'report_shared',
          title: lang === 'mr' ? '📤 अहवाल शेअर केला' : lang === 'hi' ? '📤 रिपोर्ट साझा की गई' : '📤 Report Shared',
          body: lang === 'mr' 
            ? `तुमचा वैद्यकीय अहवाल डॉक्टर ${appointment.doctorName} यांच्यासोबत यशस्वीरित्या शेअर केला.`
            : lang === 'hi'
              ? `आपकी मेडिकल रिपोर्ट डॉक्टर ${appointment.doctorName} के साथ सफलतापूर्वक साझा की गई।`
              : `Your medical report was successfully shared with ${appointment.doctorName}.`,
          scheduledAt: new Date().toISOString(),
          read: false,
          appointmentId: apptId,
        });
      }

      setShared(true);
    } catch {
      setError(tLocal('shareFailed'));
    }
    setSharing(false);
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function formatSlot(iso: string) {
    return new Date(iso).toLocaleString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', {
      weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
    });
  }

  const severityColor: Record<string, string> = {
    Low: '#0F6E56', Moderate: '#e67e22', Severe: '#c0392b', Emergency: '#7b0000'
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Link href="/appointments" className={styles.backBtn}>{translate('back', lang)}</Link>
          <h1 className={styles.title}>{tLocal('shareReportHeader')}</h1>
          <div style={{ width: 70 }} />
        </div>

        {/* Appointment Info */}
        {appointment && (
          <div className={styles.apptBanner}>
            <div className={styles.apptAvatarLg}>👨‍⚕️</div>
            <div>
              <div className={styles.apptDocName}>{appointment.doctorName}</div>
              <div className={styles.apptSpecialty}>{appointment.specialty}</div>
              <div className={styles.apptSlot}>🗓 {formatSlot(appointment.slot)}</div>
            </div>
          </div>
        )}

        {shared ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✅</div>
            <h2 className={styles.successTitle}>{tLocal('shareSuccessTitle')}</h2>
            <p className={styles.successDesc}>{tLocal('shareSuccessDesc')}</p>
            <div className={styles.successActions}>
              <Link href={`/appointments/${apptId}/call`} className={styles.joinCallBtn}>
                {tLocal('joinVideoCall')}
              </Link>
              <Link href="/appointments" className={styles.backToApptBtn}>
                {tLocal('backToAppts')}
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p className={styles.intro}>{tLocal('introDesc')}</p>

            {/* Patient Profile */}
            {userProfile && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{tLocal('patientProfileTitle')}</h2>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}><span className={styles.infoLabel}>{tLocal('profileName')}</span><span className={styles.infoVal}>{userProfile.name}</span></div>
                  <div className={styles.infoItem}><span className={styles.infoLabel}>{tLocal('profileAge')}</span><span className={styles.infoVal}>{userProfile.age ?? '—'}</span></div>
                  <div className={styles.infoItem}><span className={styles.infoLabel}>{tLocal('profileBlood')}</span><span className={styles.infoVal}>{userProfile.bloodGroup || '—'}</span></div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>{tLocal('profileAllergies')}</span>
                    <span className={styles.infoVal}>{userProfile.allergies.length > 0 ? userProfile.allergies.join(', ') : tLocal('noneListed')}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>{tLocal('profileChronic')}</span>
                    <span className={styles.infoVal}>{userProfile.chronicConditions.length > 0 ? userProfile.chronicConditions.join(', ') : tLocal('noneListed')}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Symptom Logs */}
            {recentLogs.length > 0 && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{lang === 'mr' ? '🩺 अलीकडील आरोग्य नोंदी' : lang === 'hi' ? '🩺 हाल के लक्षण लॉग' : '🩺 Recent Symptom Logs'}</h2>
                <div className={styles.logList}>
                  {recentLogs.map((log, i) => (
                    <div key={i} className={styles.logItem}>
                      <div className={styles.logDesc}>{log.description}</div>
                      <div className={styles.logMeta}>
                        <span>{formatDate(log.timestamp)}</span>
                        <span
                          className={styles.logSeverity}
                          style={{ color: severityColor[log.severity], background: severityColor[log.severity] + '22' }}
                        >
                          {translate(log.severity, lang)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Latest Diagnosis */}
            {latestDiagnosis && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{lang === 'mr' ? '🧠 नवीन एआय विश्लेषण' : lang === 'hi' ? '🧠 नवीनतम एआई निदान' : '🧠 Latest AI Diagnosis'}</h2>
                {latestDiagnosis.summary && (
                  <div className={styles.aiSummaryBox}>
                    <p className={styles.aiSummaryText}>{latestDiagnosis.summary}</p>
                  </div>
                )}
                {latestDiagnosis.possibleConditions && latestDiagnosis.possibleConditions.length > 0 && (
                  <div className={styles.conditionList}>
                    {latestDiagnosis.possibleConditions.slice(0, 3).map((c, i) => (
                      <div key={i} className={styles.conditionItem}>
                        <span className={styles.conditionName}>{c.name}</span>
                        <span className={styles.conditionProb}>{lang === 'mr' ? 'अचूकता' : lang === 'hi' ? 'सटीकता' : 'Confidence'}: {c.matchConfidence === 'High' ? (lang === 'mr' ? 'जास्त' : lang === 'hi' ? 'उच्च' : 'High') : c.matchConfidence === 'Medium' ? (lang === 'mr' ? 'मध्यम' : lang === 'hi' ? 'मध्यम' : 'Medium') : (lang === 'mr' ? 'कमी' : lang === 'hi' ? 'कम' : 'Low')}</span>
                      </div>
                    ))}
                  </div>
                )}
                {latestDiagnosis.homeRemedies && latestDiagnosis.homeRemedies.length > 0 && (
                  <div className={styles.recommendations}>
                    <div className={styles.recLabel}>{lang === 'mr' ? 'सुचवलेले उपाय' : lang === 'hi' ? 'सुझाव दिए गए उपाय' : 'Remedies'}:</div>
                    {latestDiagnosis.homeRemedies.slice(0, 3).map((r, i) => (
                      <div key={i} className={styles.recItem}>• {r}</div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {error && <div className={styles.errorMsg}>{error}</div>}

            <button
              id="share-report-btn"
              className={styles.shareBtn}
              onClick={handleShare}
              disabled={sharing || !navigator.onLine}
            >
              {sharing ? tLocal('sendingReport') : tLocal('shareWithDoctorBtn')}
            </button>
            {!navigator.onLine && (
              <p className={styles.offlineWarn}>{tLocal('offlineWarn')}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
