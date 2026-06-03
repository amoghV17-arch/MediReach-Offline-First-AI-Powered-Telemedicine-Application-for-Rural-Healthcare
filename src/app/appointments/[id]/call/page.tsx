'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { db, type Appointment } from '@/lib/db';
import { getSavedLanguage, translate, type Language } from '@/lib/translations';
import styles from './call.module.css';

// Local specific translation dictionary for Consultation Call
const localCallTranslations: Record<string, Record<Language, string>> = {
  connectingTo: {
    en: "Connecting to",
    hi: "से कनेक्ट किया जा रहा है",
    mr: "शी संपर्क जोडत आहे"
  },
  connectingSub: {
    en: "Please wait while we establish a secure connection",
    hi: "कृपया सुरक्षित कनेक्शन स्थापित होने तक प्रतीक्षा करें",
    mr: "कृपया सुरक्षित संपर्क प्रस्थापित होईपर्यंत प्रतीक्षा करा"
  },
  callEnded: {
    en: "Call Ended",
    hi: "कॉल समाप्त हो गया",
    mr: "कॉल समाप्त झाला"
  },
  durationText: {
    en: "Duration",
    hi: "अवधि",
    mr: "कालावधी"
  },
  redirectingText: {
    en: "Redirecting to appointments...",
    hi: "अपॉइंटमेंट्स पर वापस जा रहे हैं...",
    mr: "अपॉइंटमेंट्स पेजवर परत जात आहे..."
  },
  encryptedBadge: {
    en: "🔒 Encrypted",
    hi: "🔒 एन्क्रिप्टेड",
    mr: "🔒 सुरक्षित"
  },
  cameraOffLabel: {
    en: "Camera off",
    hi: "कैमरा बंद है",
    mr: "कॅमेरा बंद"
  },
  you: {
    en: "You",
    hi: "आप",
    mr: "तुम्ही"
  },
  mute: {
    en: "Mute",
    hi: "म्यूट",
    mr: "आवाज बंद"
  },
  unmute: {
    en: "Unmute",
    hi: "आवाज़ खोलें",
    mr: "आवाज सुरू"
  },
  cameraOn: {
    en: "Camera On",
    hi: "कैमरा चालू",
    mr: "कॅमेरा सुरू"
  },
  cameraOff: {
    en: "Camera Off",
    hi: "कैमरा बंद",
    mr: "कॅमेरा बंद"
  },
  end: {
    en: "End",
    hi: "समाप्त",
    mr: "बंद"
  },
  consultationText: {
    en: "consultation",
    hi: "परामर्श",
    mr: "सल्ला"
  },
  reportSharedText: {
    en: "✅ Report Shared",
    hi: "✅ रिपोर्ट साझा की गई",
    mr: "✅ रिपोर्ट शेअर केली"
  }
};

export default function VideoCallPage() {
  const router = useRouter();
  const params = useParams();
  const apptId = Number(params.id);

  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [callState, setCallState] = useState<'connecting' | 'connected' | 'ended'>('connecting');
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [callDuration, setCallDuration] = useState(0); // seconds
  const [connectionDots, setConnectionDots] = useState('');
  const [lang, setLang] = useState<Language>('en');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dotsRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    const item = localCallTranslations[key];
    if (!item) return key;
    return item[lang] || item['en'] || key;
  };

  useEffect(() => {
    const session = getSession();
    if (!session) { router.push('/auth'); return; }

    db.appointments.get(apptId).then(appt => {
      setAppointment(appt ?? null);
    });

    // Simulate connecting → connected after 3s
    const connectTimer = setTimeout(() => setCallState('connected'), 3000);

    // Animated dots
    dotsRef.current = setInterval(() => {
      setConnectionDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearTimeout(connectTimer);
      if (dotsRef.current) clearInterval(dotsRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [apptId, router]);

  // Start call timer once connected
  useEffect(() => {
    if (callState === 'connected') {
      if (dotsRef.current) clearInterval(dotsRef.current);
      timerRef.current = setInterval(() => setCallDuration(d => d + 1), 1000);
    }
    if (callState === 'ended') {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [callState]);

  function formatDuration(s: number) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  async function handleEndCall() {
    setCallState('ended');
    // Mark appointment as completed
    if (apptId) {
      await db.appointments.update(apptId, { status: 'completed' });
    }
  }

  // After ended, auto-redirect to appointments after 3.5s
  useEffect(() => {
    if (callState === 'ended') {
      const t = setTimeout(() => router.push('/appointments'), 3500);
      return () => clearTimeout(t);
    }
  }, [callState, router]);

  const doctorName = appointment?.doctorName ?? 'Doctor';
  const specialty  = appointment?.specialty ?? '';

  return (
    <div className={styles.page}>
      {/* Doctor Video Feed (simulated) */}
      <div className={styles.doctorVideo}>
        <div className={styles.doctorVideoInner}>
          {callState === 'connecting' && (
            <div className={styles.connectingOverlay}>
              <div className={styles.connectingRing} />
              <div className={styles.doctorAvatarLg}>👨‍⚕️</div>
              <div className={styles.connectingText}>
                {lang === 'hi' ? `${doctorName} ${tLocal('connectingTo')}${connectionDots}` : lang === 'mr' ? `${doctorName} ${tLocal('connectingTo')}${connectionDots}` : `${tLocal('connectingTo')} ${doctorName}${connectionDots}`}
              </div>
              <div className={styles.connectingSub}>{tLocal('connectingSub')}</div>
            </div>
          )}

          {callState === 'connected' && (
            <div className={styles.connectedDoctor}>
              <div className={styles.doctorAvatarConn}>👨‍⚕️</div>
              <div className={styles.connectedName}>{doctorName}</div>
              <div className={styles.connectedSpec}>{specialty}</div>
              {/* Simulated wave animation */}
              <div className={styles.audioWave}>
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={styles.wavebar} style={{ animationDelay: `${i * 0.12}s` }} />
                ))}
              </div>
            </div>
          )}

          {callState === 'ended' && (
            <div className={styles.endedOverlay}>
              <div className={styles.endedIcon}>📞</div>
              <div className={styles.endedTitle}>{tLocal('callEnded')}</div>
              <div className={styles.endedDuration}>{tLocal('durationText')}: {formatDuration(callDuration)}</div>
              <div className={styles.endedRedirect}>{tLocal('redirectingText')}</div>
            </div>
          )}
        </div>

        {/* Top bar overlay */}
        <div className={styles.topOverlay}>
          <Link href="/appointments" className={styles.closeCallBtn}>✕</Link>
          <div className={styles.callInfo}>
            <div className={styles.callInfoName}>{doctorName}</div>
            {callState === 'connected' && (
              <div className={styles.callTimer}>
                <span className={styles.liveIndicator} />
                {formatDuration(callDuration)}
              </div>
            )}
            {callState === 'connecting' && (
              <div className={styles.callConnecting}>{lang === 'hi' ? 'कनेक्ट किया जा रहा है' : lang === 'mr' ? 'जोडत आहे' : 'Connecting'}{connectionDots}</div>
            )}
          </div>
          <div className={styles.encryptedBadge}>{tLocal('encryptedBadge')}</div>
        </div>
      </div>

      {/* Self View (picture-in-picture) */}
      <div className={styles.selfView}>
        {isCameraOff ? (
          <div className={styles.selfCamOff}>
            <span>👤</span>
            <span className={styles.selfCamOffLabel}>{tLocal('cameraOffLabel')}</span>
          </div>
        ) : (
          <div className={styles.selfViewPlaceholder}>
            <div className={styles.selfAvatar}>😊</div>
          </div>
        )}
        <div className={styles.selfLabel}>{tLocal('you')}</div>
      </div>

      {/* Controls */}
      {callState !== 'ended' && (
        <div className={styles.controls}>
          <button
            id="toggle-mute"
            className={`${styles.controlBtn} ${isMuted ? styles.controlActive : ''}`}
            onClick={() => setIsMuted(m => !m)}
            title={isMuted ? tLocal('unmute') : tLocal('mute')}
          >
            <span className={styles.controlIcon}>{isMuted ? '🔇' : '🎤'}</span>
            <span className={styles.controlLabel}>{isMuted ? tLocal('unmute') : tLocal('mute')}</span>
          </button>

          <button
            id="end-call"
            className={styles.endCallBtn}
            onClick={handleEndCall}
            title={tLocal('end')}
          >
            <span className={styles.endCallIcon}>📵</span>
            <span className={styles.controlLabel}>{tLocal('end')}</span>
          </button>

          <button
            id="toggle-camera"
            className={`${styles.controlBtn} ${isCameraOff ? styles.controlActive : ''}`}
            onClick={() => setIsCameraOff(c => !c)}
            title={isCameraOff ? tLocal('cameraOn') : tLocal('cameraOff')}
          >
            <span className={styles.controlIcon}>{isCameraOff ? '📷' : '📸'}</span>
            <span className={styles.controlLabel}>{isCameraOff ? tLocal('cameraOn') : tLocal('cameraOff')}</span>
          </button>
        </div>
      )}

      {/* Bottom Info Bar */}
      {callState === 'connected' && (
        <div className={styles.bottomBar}>
          <div className={styles.bottomChip}>🏥 {appointment?.doctorCity}</div>
          <div className={styles.bottomChip}>💰 ₹{appointment?.fee} {tLocal('consultationText')}</div>
          {appointment?.reportShared && (
            <div className={`${styles.bottomChip} ${styles.reportSharedChip}`}>{tLocal('reportSharedText')}</div>
          )}
        </div>
      )}
    </div>
  );
}
