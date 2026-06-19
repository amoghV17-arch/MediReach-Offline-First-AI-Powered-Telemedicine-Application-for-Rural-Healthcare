'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { db, type Appointment, type SymptomLog } from '@/lib/db';
import { getSavedLanguage, translate, type Language } from '@/lib/translations';
import type { DiagnosisResult } from '@/lib/diagnosisEngine';
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
  },
  chatTab: {
    en: "Chat",
    hi: "चैट",
    mr: "चॅट"
  },
  typeMessage: {
    en: "Type a message...",
    hi: "संदेश लिखें...",
    mr: "संदेश लिहा..."
  },
  noMessages: {
    en: "No messages yet. Say hi!",
    hi: "अभी तक कोई संदेश नहीं। हाय कहें!",
    mr: "अद्याप कोणतेही संदेश नाहीत. हाय म्हणा!"
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

  // Video call stream refs
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const [cameraPermissionError, setCameraPermissionError] = useState(false);

  // Case sheet state
  const [showCaseSheet, setShowCaseSheet] = useState(false);
  const [symptomLog, setSymptomLog] = useState<SymptomLog | null>(null);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);

  // Chat state
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<{sender: 'user' | 'doctor', text: string, time: string}[]>([]);
  const [chatInput, setChatInput] = useState('');
  const chatScrollRef = useRef<HTMLDivElement>(null);

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
      if (appt?.symptomLogId) {
        db.symptomLogs.get(appt.symptomLogId).then(log => {
          setSymptomLog(log ?? null);
        });
        db.diagnosisResults.where('symptomLogId').equals(appt.symptomLogId).first().then(res => {
          setDiagnosisResult(res ?? null);
        });
      }
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

  // Camera capture logic
  const startCamera = async () => {
    try {
      setCameraPermissionError(false);
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: 'user' },
        audio: true
      });
      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      // Apply mute state
      stream.getAudioTracks().forEach(track => {
        track.enabled = !isMuted;
      });
    } catch (err) {
      console.error('Error starting camera:', err);
      setCameraPermissionError(true);
    }
  };

  const stopCamera = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
      localStreamRef.current = null;
    }
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    if (callState !== 'ended' && !isCameraOff) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isCameraOff, callState]);

  useEffect(() => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !isMuted;
      });
    }
  }, [isMuted]);

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

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, showChat]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: 'user', text: chatInput.trim(), time }]);
    setChatInput('');
    
    // Simulate doctor reply
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        sender: 'doctor', 
        text: 'I understand. Could you please tell me if you have any other symptoms?', 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2500);
  };

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
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {appointment?.symptomLogId && (
              <button
                type="button"
                className={styles.caseSheetToggleBtn}
                onClick={() => { setShowCaseSheet(c => !c); setShowChat(false); }}
                aria-label="Toggle Case Sheet"
              >
                📋 {tLocal('patientRecordTab')}
              </button>
            )}
            <button
              type="button"
              className={styles.caseSheetToggleBtn}
              onClick={() => { setShowChat(c => !c); setShowCaseSheet(false); }}
              aria-label="Toggle Chat"
            >
              💬 {tLocal('chatTab')}
            </button>
            <div className={styles.encryptedBadge}>{tLocal('encryptedBadge')}</div>
          </div>
        </div>
      </div>

      {/* Self View (picture-in-picture) */}
      <div className={styles.selfView}>
        {isCameraOff || cameraPermissionError ? (
          <div className={styles.selfCamOff}>
            <span>{cameraPermissionError ? '⚠️' : '👤'}</span>
            <span className={styles.selfCamOffLabel}>
              {cameraPermissionError ? translate('cameraBlocked', lang) : tLocal('cameraOffLabel')}
            </span>
          </div>
        ) : (
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className={styles.selfVideoElement}
          />
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

      {/* Case Sheet Drawer Overlay */}
      {showCaseSheet && symptomLog && (
        <div className={styles.caseSheetOverlay}>
          <div className={styles.caseSheetHeader}>
            <h3 className={styles.caseSheetTitle}>📋 {tLocal('patientRecordTab')}</h3>
            <button className={styles.caseSheetClose} onClick={() => setShowCaseSheet(false)}>✕</button>
          </div>
          <div className={styles.caseSheetBody}>
            <div className={styles.caseSection}>
              <div className={styles.caseLabel}>{translate('describeSymptom', lang)}</div>
              <p className={styles.caseText}>{symptomLog.description}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div className={styles.caseBadge}>
                ⏱️ {symptomLog.duration}
              </div>
              <div className={styles.caseBadge} style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}>
                🚨 {translate(symptomLog.severity, lang)}
              </div>
            </div>

            <div className={styles.caseSection}>
              <div className={styles.caseLabel}>{translate('affectedBodyParts', lang)}</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                {symptomLog.bodyParts.map(part => (
                  <span key={part} className={styles.bodyPartTag}>
                    📍 {translate(part, lang)}
                  </span>
                ))}
              </div>
            </div>

            {diagnosisResult && (
              <>
                <div className={styles.caseSection}>
                  <div className={styles.caseLabel}>🧠 {lang === 'mr' ? 'एआय संभाव्य आजार' : lang === 'hi' ? 'एआई संभावित बीमारियाँ' : 'AI Possible Conditions'}</div>
                  {diagnosisResult.possibleConditions?.map((cond, idx) => (
                    <div key={idx} className={styles.conditionItem}>
                      <div className={styles.conditionNameRow}>
                        <span className={styles.conditionName}>{cond.name}</span>
                        <span className={`${styles.confidenceBadge} ${styles[cond.matchConfidence.toLowerCase()]}`}>
                          {cond.matchConfidence}
                        </span>
                      </div>
                      <p className={styles.conditionDesc}>{cond.description}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.caseSection}>
                  <div className={styles.caseLabel}>🏡 {lang === 'mr' ? 'घरगुती उपाय' : lang === 'hi' ? 'घरेलू उपचार' : 'Home Remedies'}</div>
                  <ul className={styles.remedyList}>
                    {diagnosisResult.homeRemedies?.map((rem, idx) => (
                      <li key={idx}>{rem}</li>
                    ))}
                  </ul>
                </div>

                {diagnosisResult.otcMedicines && diagnosisResult.otcMedicines.length > 0 && (
                  <div className={styles.caseSection}>
                    <div className={styles.caseLabel}>💊 {lang === 'mr' ? 'तात्पुरती औषधे (OTC)' : lang === 'hi' ? 'सामान्य दवाएं (OTC)' : 'Suggested OTC Medicines'}</div>
                    {diagnosisResult.otcMedicines.map((med, idx) => (
                      <div key={idx} className={styles.otcItem}>
                        <div className={styles.otcName}>{med.name}</div>
                        <div className={styles.otcDosage}>{med.dosage}</div>
                        {med.warning && <div className={styles.otcWarning}>⚠️ {med.warning}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Chat Drawer Overlay */}
      {showChat && (
        <div className={styles.caseSheetOverlay}>
          <div className={styles.caseSheetHeader}>
            <h3 className={styles.caseSheetTitle}>💬 {tLocal('chatTab')}</h3>
            <button className={styles.caseSheetClose} onClick={() => setShowChat(false)}>✕</button>
          </div>
          <div className={styles.chatBody} ref={chatScrollRef}>
            {chatMessages.length === 0 ? (
              <div className={styles.chatEmpty}>{tLocal('noMessages')}</div>
            ) : (
              chatMessages.map((msg, i) => (
                <div key={i} className={`${styles.chatMsg} ${msg.sender === 'user' ? styles.chatMsgUser : styles.chatMsgDoc}`}>
                  <div className={styles.chatMsgText}>{msg.text}</div>
                  <div className={styles.chatMsgTime}>{msg.time}</div>
                </div>
              ))
            )}
          </div>
          <form className={styles.chatInputArea} onSubmit={handleSendChat}>
            <input 
              type="text" 
              className={styles.chatInput} 
              placeholder={tLocal('typeMessage')}
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit" className={styles.chatSendBtn}>➤</button>
          </form>
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
