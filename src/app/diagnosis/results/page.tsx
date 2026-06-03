'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import type { DiagnosisResult } from '@/lib/diagnosisEngine';
import { getSavedLanguage, translate, type Language } from '@/lib/translations';
import styles from './results.module.css';

const SEVERITY_CONFIG = {
  Low: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', icon: '🟢', label: 'Low Risk' },
  Moderate: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)', icon: '🟡', label: 'Moderate' },
  Severe: { color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)', icon: '🔴', label: 'Severe' },
  Emergency: { color: '#dc2626', bg: 'rgba(220, 38, 38, 0.15)', border: 'rgba(220, 38, 38, 0.5)', icon: '🚨', label: 'EMERGENCY' },
};

const CONFIDENCE_CONFIG = {
  High: { color: '#10b981', label: 'High Match' },
  Medium: { color: '#f59e0b', label: 'Possible' },
  Low: { color: '#94a3b8', label: 'Less Likely' },
};

// Local specific translation dictionary for Results Page
const resultsTranslations: Record<string, Record<Language, string>> = {
  resultsTitle: {
    en: "AI Diagnosis Results",
    hi: "एआई निदान परिणाम",
    mr: "एआय निदानाचे निकाल"
  },
  emergencyAlert: {
    en: "EMERGENCY ALERT: Your symptoms indicate a potentially life-threatening condition. Please call emergency services (112) or go to the nearest hospital immediately.",
    hi: "आपातकालीन चेतावनी: आपके लक्षण संभावित रूप से जानलेवा स्थिति की ओर संकेत करते हैं। कृपया तुरंत आपातकालीन सेवाओं (112) को कॉल करें या निकटतम अस्पताल जाएं।",
    mr: "आणीबाणीचा इशारा: तुमची लक्षणे जीवघेण्या आजाराचे संकेत देतात. कृपया त्वरित आणीबाणी सेवांना (112) कॉल करा किंवा जवळच्या रुग्णालयात जा."
  },
  aiAnalysis: {
    en: "🌐 AI Analysis",
    hi: "🌐 एआई विश्लेषण",
    mr: "🌐 एआय विश्लेषण"
  },
  offlineAnalysis: {
    en: "📚 Offline Analysis",
    hi: "📚 ऑफलाइन विश्लेषण",
    mr: "📚 ऑफलाईन विश्लेषण"
  },
  riskLevel: {
    en: "Risk Level",
    hi: "जोखिम स्तर",
    mr: "धोका पातळी"
  },
  analysisSummary: {
    en: "Analysis Summary",
    hi: "विश्लेषण सारांश",
    mr: "विश्लेषण सारांश"
  },
  imageFindings: {
    en: "Image Analysis Findings",
    hi: "चित्र विश्लेषण निष्कर्ष",
    mr: "छायाचित्र विश्लेषण अहवाल"
  },
  conditionsTab: {
    en: "🔬 Conditions",
    hi: "🔬 बीमारियां",
    mr: "🔬 आजार"
  },
  remediesTab: {
    en: "🌿 Remedies",
    hi: "🌿 घरेलू उपचार",
    mr: "🌿 घरगुती उपाय"
  },
  medicinesTab: {
    en: "💊 Medicines",
    hi: "💊 दवाएं",
    mr: "💊 औषधे"
  },
  emergencyTab: {
    en: "🚨 Emergency",
    hi: "🚨 आपातकालीन",
    mr: "🚨 आणीबाणी"
  },
  noConditions: {
    en: "No specific conditions identified. Please consult a General Physician.",
    hi: "कोई विशिष्ट बीमारी नहीं पहचानी गई। कृपया एक सामान्य चिकित्सक से परामर्श करें।",
    mr: "कोणताही विशिष्ट आजार आढळला नाही. कृपया डॉक्टरांचा सल्ला घ्या."
  },
  mostLikely: {
    en: "Most Likely",
    hi: "सबसे अधिक संभावना",
    mr: "सर्वात जास्त शक्यता"
  },
  recommendedSpecialist: {
    en: "Recommended Specialist",
    hi: "अनुशंसित विशेषज्ञ",
    mr: "शिफारस केलेले तज्ज्ञ"
  },
  homeRemediesTitle: {
    en: "Home Remedies & Self-Care",
    hi: "घरेलू उपचार और आत्म-देखभाल",
    mr: "घरगुती उपचार आणि काळजी"
  },
  remediesNote: {
    en: "💡 These remedies are supportive measures. They do not replace medical treatment.",
    hi: "💡 ये उपचार सहायक उपाय हैं। ये चिकित्सा उपचार का विकल्प नहीं हैं।",
    mr: "💡 हे घरगुती उपाय फक्त प्राथमिक काळजीसाठी आहेत, डॉक्टरी उपचारांना पर्याय नाही."
  },
  otcMedicinesTitle: {
    en: "Over-the-Counter Medicines",
    hi: "डॉक्टर के पर्चे के बिना मिलने वाली दवाएं (OTC)",
    mr: "थेट मिळणारी औषधे (OTC)"
  },
  noMedicines: {
    en: "No OTC medicines identified. Please consult a doctor for prescription.",
    hi: "कोई ओटीसी दवाएं नहीं मिलीं। कृपया नुस्खे के लिए डॉक्टर से परामर्श करें।",
    mr: "कोणतीही थेट मिळणारी औषधे सुचवली नाहीत, कृपया डॉक्टरांचा सल्ला घ्या."
  },
  dosageLabel: {
    en: "Dosage",
    hi: "खुराक",
    mr: "मात्रा/डोस"
  },
  medicinesWarning: {
    en: "⚠️ Always read medicine labels carefully. Consult a pharmacist or doctor before taking any medication, especially if you have pre-existing conditions or are on other medicines.",
    hi: "⚠️ हमेशा दवा के लेबल को ध्यान से पढ़ें। कोई भी दवा लेने से पहले डॉक्टर से सलाह लें, खासकर यदि आपको पहले से कोई बीमारी है।",
    mr: "⚠️ नेहमी औषधांचे लेबल काळजीपूर्वक वाचा. कोणतेही औषध घेण्यापूर्वी डॉक्टरांचा सल्ला घ्या."
  },
  seekEmergencyTitle: {
    en: "🚨 Seek Emergency Care If...",
    hi: "🚨 आपातकालीन देखभाल लें यदि...",
    mr: "🚨 आणीबाणीच्या उपचारांची गरज भासेल जर..."
  },
  emergencyNumbersTitle: {
    en: "Emergency Numbers (India)",
    hi: "आपातकालीन नंबर (भारत)",
    mr: "आणीबाणीचे क्रमांक (भारत)"
  },
  nationalEmergency: {
    en: "📞 112 — National Emergency",
    hi: "📞 112 — राष्ट्रीय आपातकालीन",
    mr: "📞 ११२ — राष्ट्रीय आणीबाणी"
  },
  ambulanceText: {
    en: "🚑 108 — Ambulance",
    hi: "🚑 108 — एम्बुलेंस",
    mr: "🚑 १०८ — रुग्णवाहिका"
  },
  medicalHelpline: {
    en: "🏥 102 — Medical Helpline",
    hi: "🏥 102 — चिकित्सा हेल्पलाइन",
    mr: "🏥 १०२ — वैद्यकीय हेल्पलाईन"
  },
  healthHelpline: {
    en: "💊 1800-111-565 — Health Helpline",
    hi: "💊 1800-111-565 — स्वास्थ्य हेल्पलाइन",
    mr: "💊 १८००-१११-५६५ — आरोग्य हेल्पलाईन"
  },
  checkAgain: {
    en: "🔄 Check Again",
    hi: "🔄 पुनः जाँच करें",
    mr: "🔄 पुन्हा तपासा"
  },
  highMatch: {
    en: "High Match",
    hi: "सटीक मिलान",
    mr: "अचूक जुळणी"
  },
  possibleMatch: {
    en: "Possible",
    hi: "संभाव्य",
    mr: "शक्यता"
  },
  lowMatch: {
    en: "Less Likely",
    hi: "कम संभावना",
    mr: "कमी शक्यता"
  }
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resultId = searchParams.get('id');

  const [result, setResult] = useState<(DiagnosisResult & { id?: number }) | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'remedies' | 'medicines' | 'emergency'>('overview');
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
    const item = resultsTranslations[key];
    if (!item) return key;
    return item[lang] || item['en'] || key;
  };

  useEffect(() => {
    async function loadResult() {
      if (!resultId) { setError('No result ID found.'); setLoading(false); return; }

      try {
        const data = await db.diagnosisResults.get(Number(resultId));
        if (!data) { setError('Analysis result not found. Please re-submit your symptoms.'); setLoading(false); return; }
        setResult(data);
      } catch (e) {
        setError('Failed to load results. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    loadResult();
  }, [resultId]);

  if (loading) {
    return (
      <div className={styles.loadingPage}>
        <div className={styles.brainAnimation}>
          <div className={styles.brainPulse}>🧠</div>
          <div className={styles.brainRings}>
            <div className={styles.ring1} /><div className={styles.ring2} /><div className={styles.ring3} />
          </div>
        </div>
        <h2 className={styles.loadingTitle}>{lang === 'mr' ? 'निकाल तयार होत आहेत...' : lang === 'hi' ? 'रिपोर्ट तैयार की जा रही है...' : 'Loading your analysis...'}</h2>
        <p className={styles.loadingSubtitle}>{lang === 'mr' ? 'वैयक्तिक आरोग्य अहवाल लोड करत आहे' : lang === 'hi' ? 'आपके लिए स्वास्थ्य रिपोर्ट लोड हो रही है' : 'Fetching your personalized health report'}</p>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className={styles.errorPage}>
        <div className={styles.errorIcon}>⚠️</div>
        <h2>{error || 'Result not found'}</h2>
        <Link href="/diagnosis" className={styles.retryBtn}>{translate('back', lang)}</Link>
      </div>
    );
  }

  const sev = SEVERITY_CONFIG[result.severity];
  const isEmergency = result.severity === 'Emergency';

  const severityLabels: Record<string, Record<Language, string>> = {
    Low: { en: "Low Risk", hi: "कम जोखिम", mr: "कमी धोका" },
    Moderate: { en: "Moderate Risk", hi: "मध्यम जोखिम", mr: "मध्यम धोका" },
    Severe: { en: "Severe Risk", hi: "गंभीर जोखिम", mr: "गंभीर धोका" },
    Emergency: { en: "EMERGENCY", hi: "आपातकालीन", mr: "आणीबाणी" }
  };

  const confidenceLabels: Record<string, Record<Language, string>> = {
    High: { en: "High Match", hi: "सटीक मिलान", mr: "अचूक जुळणी" },
    Medium: { en: "Possible", hi: "संभाव्य आजार", mr: "शक्यता" },
    Low: { en: "Less Likely", hi: "कम संभावना", mr: "कमी शक्यता" }
  };

  return (
    <div className={styles.page}>
      {/* Emergency Banner */}
      {isEmergency && (
        <div className={styles.emergencyBanner}>
          🚨 <strong>{tLocal('emergencyAlert')}</strong>
        </div>
      )}

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Link href="/dashboard" className={styles.backBtn}>{translate('back', lang)}</Link>
          <div className={styles.headerBadge}>
            <span>{result.mode === 'online' ? tLocal('aiAnalysis') : tLocal('offlineAnalysis')}</span>
          </div>
        </div>

        {/* Severity Card */}
        <div
          className={styles.severityCard}
          style={{ background: sev.bg, borderColor: sev.border }}
        >
          <div className={styles.severityLeft}>
            <span className={styles.severityIcon}>{sev.icon}</span>
            <div>
              <div className={styles.severityLabel} style={{ color: sev.color }}>
                {tLocal('riskLevel')}: {severityLabels[result.severity]?.[lang] || sev.label}
              </div>
              <div className={styles.severityReason}>{result.severityReason}</div>
            </div>
          </div>
          <div className={styles.severityBadge} style={{ background: sev.color }}>
            {translate(result.severity, lang)}
          </div>
        </div>

        {/* Summary */}
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>🩺</div>
          <div className={styles.summaryContent}>
            <h2 className={styles.summaryTitle}>{tLocal('analysisSummary')}</h2>
            <p className={styles.summaryText}>{result.summary}</p>
          </div>
        </div>

        {/* Image Analysis */}
        {result.imageAnalysis && 
         result.imageAnalysis !== 'No medical images uploaded for analysis.' && 
         result.imageAnalysis !== 'No images uploaded' && (
          <div className={styles.imageAnalysisCard}>
            <div className={styles.imageAnalysisIcon}>📷</div>
            <div className={styles.imageAnalysisContent}>
              <h2 className={styles.imageAnalysisTitle}>{tLocal('imageFindings')}</h2>
              <p className={styles.imageAnalysisText}>{result.imageAnalysis}</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className={styles.tabs}>
          {(['overview', 'remedies', 'medicines', 'emergency'] as const).map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'overview' && tLocal('conditionsTab')}
              {tab === 'remedies' && tLocal('remediesTab')}
              {tab === 'medicines' && tLocal('medicinesTab')}
              {tab === 'emergency' && tLocal('emergencyTab')}
            </button>
          ))}
        </div>

        {/* Tab: Possible Conditions */}
        {activeTab === 'overview' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>{translate('possibleConditions', lang)}</h3>
            {result.possibleConditions.length === 0 ? (
              <div className={styles.emptyState}>
                <span>❓</span>
                <p>{tLocal('noConditions')}</p>
              </div>
            ) : (
              <div className={styles.conditionsList}>
                {result.possibleConditions.map((cond, i) => {
                  const conf = CONFIDENCE_CONFIG[cond.matchConfidence];
                  const confidenceText = confidenceLabels[cond.matchConfidence]?.[lang] || conf.label;
                  return (
                    <div key={i} className={`${styles.conditionCard} ${i === 0 ? styles.conditionCardPrimary : ''}`}>
                      <div className={styles.conditionHeader}>
                        <div className={styles.conditionName}>
                          {i === 0 && <span className={styles.primaryBadge}>{tLocal('mostLikely')}</span>}
                          <h4>{cond.name}</h4>
                        </div>
                        <span
                          className={styles.confidenceBadge}
                          style={{ color: conf.color, borderColor: conf.color }}
                        >
                          {confidenceText}
                        </span>
                      </div>
                      <p className={styles.conditionDesc}>{cond.description}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Specialist Referral */}
            <div className={styles.specialistCard}>
              <div className={styles.specialistIcon}>🏥</div>
              <div className={styles.specialistContent}>
                <h4>{tLocal('recommendedSpecialist')}</h4>
                <strong>{result.specialistRecommended}</strong>
                <p>{result.specialistReason}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Home Remedies */}
        {activeTab === 'remedies' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>{tLocal('homeRemediesTitle')}</h3>
            <div className={styles.remediesList}>
              {result.homeRemedies.map((remedy, i) => (
                <div key={i} className={styles.remedyItem}>
                  <div className={styles.remedyBullet}>{i + 1}</div>
                  <p>{remedy}</p>
                </div>
              ))}
            </div>
            <div className={styles.infoNote}>
              {tLocal('remediesNote')}
            </div>
          </div>
        )}

        {/* Tab: OTC Medicines */}
        {activeTab === 'medicines' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>{tLocal('otcMedicinesTitle')}</h3>
            {result.otcMedicines.length === 0 ? (
              <div className={styles.emptyState}>
                <span>💊</span>
                <p>{tLocal('noMedicines')}</p>
              </div>
            ) : (
              <div className={styles.medicinesList}>
                {result.otcMedicines.map((med, i) => (
                  <div key={i} className={styles.medicineCard}>
                    <div className={styles.medicineHeader}>
                      <span className={styles.medicineIcon}>💊</span>
                      <h4 className={styles.medicineName}>{med.name}</h4>
                    </div>
                    <div className={styles.medicineDosage}>
                      <span className={styles.dosageLabel}>{tLocal('dosageLabel')}:</span>
                      <span>{med.dosage}</span>
                    </div>
                    {med.warning && (
                      <div className={styles.medicineWarning}>
                        ⚠️ {med.warning}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className={styles.warningNote}>
              {tLocal('medicinesWarning')}
            </div>
          </div>
        )}

        {/* Tab: Emergency */}
        {activeTab === 'emergency' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>{tLocal('seekEmergencyTitle')}</h3>
            <div className={styles.emergencyList}>
              {result.seekEmergencyIf.map((item, i) => (
                <div key={i} className={styles.emergencyItem}>
                  <span className={styles.emergencyBullet}>!</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className={styles.emergencyContacts}>
              <h4>{tLocal('emergencyNumbersTitle')}</h4>
              <div className={styles.contactGrid}>
                <a href="tel:112" className={styles.contactBtn}>{tLocal('nationalEmergency')}</a>
                <a href="tel:108" className={styles.contactBtn}>{tLocal('ambulanceText')}</a>
                <a href="tel:102" className={styles.contactBtn}>{tLocal('medicalHelpline')}</a>
                <a href="tel:1800111565" className={styles.contactBtn}>{tLocal('healthHelpline')}</a>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <span className={styles.disclaimerIcon}>ℹ️</span>
          <p>{result.disclaimer}</p>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <Link href="/diagnosis" className={styles.actionBtnSecondary}>
            {tLocal('checkAgain')}
          </Link>
          <Link href="/diagnosis/history" className={styles.actionBtnSecondary}>
            {translate('pastDiagnoses', lang)}
          </Link>
          <Link href="/dashboard" className={styles.actionBtnPrimary}>
            {translate('dashboard', lang)}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0f19', color: 'white' }}>
        <div>Loading...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
