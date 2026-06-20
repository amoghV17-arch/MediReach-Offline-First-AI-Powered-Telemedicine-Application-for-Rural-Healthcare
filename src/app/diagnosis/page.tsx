'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { runDiagnosis } from '@/lib/diagnosisEngine';
import { getSavedLanguage, translate, type Language } from '@/lib/translations';
import styles from './diagnosis.module.css';

const COMMON_BODY_PARTS = [
  'Head',
  'Eyes',
  'Ears',
  'Nose',
  'Mouth/Throat',
  'Neck',
  'Chest',
  'Stomach/Abdomen',
  'Pelvis/Groin',
  'Back',
  'Arms/Hands',
  'Legs/Feet',
  'Skin',
  'Joints'
];
const SEVERITY_LEVELS = ['Low', 'Moderate', 'Severe', 'Emergency'] as const;

export default function SymptomInputPage() {
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [severityIndex, setSeverityIndex] = useState(0); // 0-3
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [error, setError] = useState('');
  const [lang, setLang] = useState<Language>('en');

  // Speech Recognition States
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const recognitionRef = useRef<any>(null);

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

  // Initialize Speech Recognition Client-side
  useEffect(() => {
    let recognition: any = null;
    if (typeof window !== 'undefined') {
      try {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
          recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = false;
          
          recognition.onstart = () => {
            setIsListening(true);
            setSpeechError('');
          };
        
          recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            if (transcript) {
              setDescription(prev => prev ? `${prev} ${transcript}` : transcript);
            }
          };
          
          recognition.onerror = (event: any) => {
            console.error('[SpeechRecognition] Error:', event.error);
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
              setSpeechError(translate('micErrorPermission', lang));
            } else if (event.error !== 'no-speech') {
              setSpeechError(event.error);
            }
            setIsListening(false);
          };
          
          recognition.onend = () => {
            setIsListening(false);
          };
          
          recognitionRef.current = recognition;
        }
      } catch (e) {
        console.warn("Speech recognition init failed:", e);
      }
    }
    
    return () => {
      if (recognition) {
        try {
          recognition.stop();
        } catch {}
      }
    };
  }, [lang]);

  function toggleListening() {
    if (!recognitionRef.current) {
      setSpeechError(translate('micErrorUnsupported', lang));
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setSpeechError('');
      const langCodeMap: Record<Language, string> = {
        en: 'en-IN',
        hi: 'hi-IN',
        mr: 'mr-IN'
      };
      recognitionRef.current.lang = langCodeMap[lang];
      
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Failed to start speech recognition:', err);
        setSpeechError('Failed to start microphone.');
        setIsListening(false);
      }
    }
  }

  useEffect(() => {
    if (!getSession()) { router.push('/auth'); }
  }, [router]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  }

  function removeFile(index: number) {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }

  function togglePart(part: string) {
    setSelectedParts(prev => 
      prev.includes(part) ? prev.filter(p => p !== part) : [...prev, part]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    
    if (!description.trim()) {
      setError(translate('fillFields', lang)); return;
    }

    const session = getSession();
    if (!session) return;

    setLoading(true);
    setLoadingStep(lang === 'mr' ? 'आरोग्य माहिती सुरक्षितपणे साठवत आहे...' : lang === 'hi' ? 'स्वास्थ्य जानकारी सुरक्षित रूप से सहेजी जा रही है...' : 'Saving your symptoms securely...');

    try {
      const timestamp = new Date().toISOString();
      
      // Save symptom log offline
      const symptomLogId = await db.symptomLogs.add({
        userId: session.userId,
        timestamp,
        description,
        severity: SEVERITY_LEVELS[severityIndex],
        duration: duration || 'Not specified',
        bodyParts: selectedParts,
        synced: false
      });

      // Save each file securely to offline DB
      for (const file of files) {
        await db.medicalReports.add({
          userId: session.userId,
          timestamp,
          fileType: file.type,
          fileName: file.name,
          fileData: file, // Store blob locally
          synced: false
        });
      }

      const isOnline = navigator.onLine;
      setLoadingStep(
        isOnline 
          ? (lang === 'mr' ? '🧠 एआय विश्लेषण चालू आहे...' : lang === 'hi' ? '🧠 एआई आपके लक्षणों का विश्लेषण कर रहा है...' : '🧠 AI is analyzing your symptoms & files...')
          : (lang === 'mr' ? '📚 ऑफलाईन निदान सुरू आहे...' : lang === 'hi' ? '📚 ऑफलाइन विश्लेषण चल रहा है...' : '📚 Running offline analysis...')
      );

      // Convert uploaded image files to base64 for Claude Vision API
      const imageFiles = files.filter(f => f.type.startsWith('image/'));
      const base64Images = await Promise.all(
        imageFiles.map(async (file) => {
          return new Promise<{ mimeType: string; base64: string; fileName: string }>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                mimeType: file.type,
                base64: reader.result as string,
                fileName: file.name
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      const result = await runDiagnosis(
        description,
        selectedParts,
        SEVERITY_LEVELS[severityIndex],
        session.userId,
        symptomLogId as number,
        base64Images
      );

      // Save the result to local DB
      setLoadingStep(lang === 'mr' ? '✅ विश्लेषण पूर्ण झाले! निकाल लोड होत आहेत...' : lang === 'hi' ? '✅ विश्लेषण पूरा हुआ! परिणाम लोड हो रहे हैं...' : '✅ Analysis complete! Loading results...');
      const resultId = await db.diagnosisResults.add(result);

      // Trigger background sync if online, without blocking transition to results
      if (isOnline) {
        import('@/lib/syncEngine').then(async ({ syncToCloud }) => {
          try {
            await syncToCloud(session.userId);
          } catch (syncErr) {
            console.error('[Auto-Sync] Background sync error:', syncErr);
          }
        });
      }

      router.push(`/diagnosis/results?id=${resultId}`);

    } catch (err) {
      console.error('Diagnosis submission failed:', err);
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(`Error: ${errMsg}`);
      setLoading(false);
      setLoadingStep('');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/dashboard" className={styles.backBtn}>{translate('back', lang)}</Link>
          <h1 className={styles.title}>{translate('symptomEntry', lang)}</h1>
          <div style={{ width: '70px' }} /> {/* Spacer */}
        </div>

        {error && <div className={styles.errorMsg}>{error}</div>}
        {loading && loadingStep && (
          <div className={styles.loadingStep}>
            <div className={styles.loadingSpinner} />
            <span>{loadingStep}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Description */}
          <div className={styles.formGroup}>
            <div className={styles.labelRow}>
              <label className={styles.label}>{translate('describeSymptom', lang)}</label>
              <button
                type="button"
                className={`${styles.micBtn} ${isListening ? styles.micBtnActive : ''}`}
                onClick={toggleListening}
                title={isListening ? translate('stopVoice', lang) : translate('startVoice', lang)}
                aria-label={isListening ? translate('stopVoice', lang) : translate('startVoice', lang)}
              >
                <span className={`${styles.micIcon} ${isListening ? styles.micIconActive : ''}`}>🎙️</span>
                <span>{isListening ? translate('stopVoice', lang) : translate('startVoice', lang)}</span>
              </button>
            </div>
            <textarea
              className={styles.textarea}
              placeholder={translate('symptomPlaceholder', lang)}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            {isListening && (
              <div className={styles.listeningStatus}>
                <span className={styles.listeningSpinner} />
                <span>{translate('listeningState', lang)}</span>
              </div>
            )}
            {speechError && (
              <div className={styles.speechErrorMsg}>
                ⚠️ {speechError}
              </div>
            )}
          </div>

          {/* Severity */}
          <div className={styles.formGroup}>
            <label className={styles.label}>{translate('severityLevel', lang)}</label>
            <div className={styles.severityWrapper}>
              <input 
                type="range" 
                min="0" max="3" step="1" 
                className={styles.slider}
                value={severityIndex}
                onChange={e => setSeverityIndex(Number(e.target.value))}
              />
              <div className={styles.severityLabels}>
                <span className={styles.sev1}>{translate('Low', lang)}</span>
                <span className={styles.sev2}>{translate('Moderate', lang)}</span>
                <span className={styles.sev3}>{translate('Severe', lang)}</span>
                <span className={styles.sev4}>{translate('Emergency', lang)}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Duration */}
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.label}>{translate('duration', lang)}</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder={translate('durationPlaceholder', lang)}
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
            </div>
          </div>

          {/* Body Parts */}
          <div className={styles.formGroup}>
            <label className={styles.label}>{translate('affectedBodyParts', lang)}</label>
            <div className={styles.chipGrid}>
              {COMMON_BODY_PARTS.map(part => (
                <div 
                  key={part} 
                  className={`${styles.chip} ${selectedParts.includes(part) ? styles.chipActive : ''}`}
                  onClick={() => togglePart(part)}
                >
                  {translate(part, lang)}
                </div>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className={styles.formGroup}>
            <label className={styles.label}>{translate('uploadImages', lang)}</label>
            <div className={styles.uploadZone}>
              <div className={styles.uploadIcon}>📷</div>
              <div className={styles.uploadText}>{translate('tapUpload', lang)}</div>
              <div className={styles.uploadSub}>{translate('uploadFormats', lang)}</div>
              <input 
                type="file" 
                multiple 
                accept="image/*,application/pdf"
                className={styles.fileInput}
                onChange={handleFileChange}
              />
            </div>

            {files.length > 0 && (
              <div className={styles.fileList}>
                {files.map((file, idx) => (
                  <div key={idx} className={styles.fileItem}>
                    <span>📎 {file.name}</span>
                    <button type="button" className={styles.removeFile} onClick={() => removeFile(idx)}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? (lang === 'mr' ? '⏳ विश्लेषण चालू आहे...' : lang === 'hi' ? '⏳ विश्लेषण चल रहा है...' : '⏳ Analyzing...') : translate('submitAndAnalyze', lang)}
          </button>
        </form>
      </div>
    </div>
  );
}
