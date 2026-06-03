'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { getSavedLanguage, saveLanguage, translate, type Language } from '@/lib/translations';
import styles from './profile.module.css';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const COMMON_CONDITIONS = ['Diabetes', 'Hypertension', 'Asthma', 'Heart Disease', 'Thyroid', 'Arthritis'];
const COMMON_ALLERGIES = ['Penicillin', 'Aspirin', 'Pollen', 'Dust', 'Peanuts', 'Shellfish'];
const GENDER_OPTIONS: Record<Language, string[]> = {
  en: ['Male', 'Female', 'Other'],
  hi: ['पुरुष', 'महिला', 'अन्य'],
  mr: ['पुरुष', 'महिला', 'इतर']
};

// Profile specific translation dict (kept local to simplify)
const localProfileTranslations: Record<string, Record<Language, string>> = {
  profileTitle: {
    en: "Set Up Your Health Profile",
    hi: "अपनी स्वास्थ्य प्रोफ़ाइल सेट करें",
    mr: "तुमची आरोग्य प्रोफाइल सेट करा"
  },
  profileSub: {
    en: "This helps us give you accurate health guidance.",
    hi: "यह हमें आपको सटीक स्वास्थ्य मार्गदर्शन देने में मदद करता है।",
    mr: "हे आम्हाला तुम्हाला अचूक आरोग्य मार्गदर्शन देण्यास मदत करते."
  },
  stepLabel: {
    en: "Step",
    hi: "चरण",
    mr: "पायरी"
  },
  of: {
    en: "of",
    hi: "का",
    mr: "पैकी"
  },
  basicInfo: {
    en: "Basic Information",
    hi: "बुनियादी जानकारी",
    mr: "मूलभूत माहिती"
  },
  ageLabel: {
    en: "Age *",
    hi: "आयु *",
    mr: "वय *"
  },
  genderLabel: {
    en: "Gender *",
    hi: "लिंग *",
    mr: "लिंग *"
  },
  bloodGroupLabel: {
    en: "Blood Group",
    hi: "रक्त समूह",
    mr: "रक्त गट"
  },
  weightLabel: {
    en: "Weight (kg)",
    hi: "वजन (किलोग्राम)",
    mr: "वजन (किग्रॅ)"
  },
  heightLabel: {
    en: "Height (cm)",
    hi: "ऊंचाई (सेमी)",
    mr: "उंची (सेंमी)"
  },
  conditionsSub: {
    en: "Select any that apply to you.",
    hi: "उन सभी का चयन करें जो आप पर लागू होते हैं।",
    mr: "लागू होणारे पर्याय निवडा."
  },
  customConditionPlaceholder: {
    en: "Add custom condition...",
    hi: "कस्टम स्थिति जोड़ें...",
    mr: "इतर आजार टाका..."
  },
  customAllergyPlaceholder: {
    en: "Add custom allergy...",
    hi: "कस्टम एलर्जी जोड़ें...",
    mr: "इतर ॲलर्जी टाका..."
  },
  addBtn: {
    en: "Add",
    hi: "जोड़ें",
    mr: "जोडा"
  },
  nextStep: {
    en: "Next →",
    hi: "आगे →",
    mr: "पुढे →"
  },
  saveProfile: {
    en: "Go to Dashboard 🚀",
    hi: "डैशबोर्ड पर जाएं 🚀",
    mr: "डॅशबोर्डवर जा 🚀"
  },
  saving: {
    en: "Saving...",
    hi: "सहेजा जा रहा है...",
    mr: "साठवत आहे..."
  },
  skipForNow: {
    en: "Skip for now",
    hi: "अभी छोड़ें",
    mr: "सध्या वगळा"
  },
  knownAllergies: {
    en: "Known Allergies",
    hi: "ज्ञात एलर्जी",
    mr: "ज्ञात ॲलर्जी"
  },
  allergiesSub: {
    en: "Select any allergies you have.",
    hi: "आपकी किसी भी एलर्जी का चयन करें।",
    mr: "तुम्हाला असलेली कोणतीही ॲलर्जी निवडा."
  },
  fillAgeGender: {
    en: "Please fill in age and gender.",
    hi: "कृपया आयु और लिंग भरें।",
    mr: "कृपया वय आणि लिंग भरा."
  },
  saveFailed: {
    en: "Failed to save profile. Please try again.",
    hi: "प्रोफ़ाइल सहेजने में विफल। कृपया पुनः प्रयास करें।",
    mr: "प्रोफाइल साठवण्यात त्रुटी. कृपया पुन्हा प्रयत्न करा."
  },
  selectGender: {
    en: "Select",
    hi: "चुनें",
    mr: "निवडा"
  }
};

export default function ProfileSetupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lang, setLang] = useState<Language>('en');

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [conditions, setConditions] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [customCondition, setCustomCondition] = useState('');
  const [customAllergy, setCustomAllergy] = useState('');

  useEffect(() => {
    setLang(getSavedLanguage());
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Language;
    setLang(selected);
    saveLanguage(selected);
  };

  const tLocal = (key: string): string => {
    const item = localProfileTranslations[key];
    if (!item) return key;
    return item[lang] || item['en'] || key;
  };

  function toggleItem(list: string[], setList: (v: string[]) => void, item: string) {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  }

  function addCustom(list: string[], setList: (v: string[]) => void, value: string, setValue: (v: string) => void) {
    const trimmed = value.trim();
    if (trimmed && !list.includes(trimmed)) {
      setList([...list, trimmed]);
    }
    setValue('');
  }

  async function handleFinish() {
    const session = getSession();
    if (!session) { router.push('/auth'); return; }

    if (!age || !gender) {
      setError(tLocal('fillAgeGender'));
      return;
    }

    setLoading(true);
    try {
      await db.userProfiles.update(session.userId, {
        age: parseInt(age),
        gender,
        bloodGroup,
        weight: weight ? parseFloat(weight) : null,
        height: height ? parseFloat(height) : null,
        chronicConditions: conditions,
        allergies,
      });
      router.push('/dashboard');
    } catch {
      setError(tLocal('saveFailed'));
    } finally {
      setLoading(false);
    }
  }

  const genderOptions = GENDER_OPTIONS[lang] || GENDER_OPTIONS['en'];
  const baseGenders = ['Male', 'Female', 'Other']; // stored in db in English for standard engine matches

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Language select header */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
          <select 
            className="langSelect"
            value={lang} 
            onChange={handleLanguageChange}
            aria-label="Select Language"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="mr">मराठी (Marathi)</option>
          </select>
        </div>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.icon}>📋</div>
          <h1 className={styles.title}>{tLocal('profileTitle')}</h1>
          <p className={styles.sub}>{tLocal('profileSub')}</p>
        </div>

        {/* Progress */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <p className={styles.stepLabel}>{tLocal('stepLabel')} {step} {tLocal('of')} 3</p>

        {error && <div className={styles.error}>⚠️ {error}</div>}

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{tLocal('basicInfo')}</h2>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{tLocal('ageLabel')}</label>
                <input id="profile-age" className={styles.input} type="number" placeholder="e.g. 28" value={age} onChange={e => setAge(e.target.value)} min="1" max="120" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>{tLocal('bloodGroupLabel')}</label>
                <select id="profile-blood-group" className={styles.input} value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
                  <option value="">{tLocal('selectGender')}</option>
                  {BLOOD_GROUPS.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{tLocal('genderLabel')}</label>
              <div className={styles.genderRow}>
                {baseGenders.map((g, idx) => (
                  <button key={g} id={`profile-gender-${g.toLowerCase()}`} type="button"
                    className={`${styles.genderBtn} ${gender === g ? styles.genderBtnActive : ''}`}
                    onClick={() => setGender(g)}>
                    {g === 'Male' ? '👨' : g === 'Female' ? '👩' : '🧑'} {genderOptions[idx]}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{tLocal('weightLabel')}</label>
                <input id="profile-weight" className={styles.input} type="number" placeholder="e.g. 65" value={weight} onChange={e => setWeight(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>{tLocal('heightLabel')}</label>
                <input id="profile-height" className={styles.input} type="number" placeholder="e.g. 170" value={height} onChange={e => setHeight(e.target.value)} />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Chronic Conditions */}
        {step === 2 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{translate('pastDiagnoses', lang)}</h2>
            <p className={styles.stepSub}>{tLocal('conditionsSub')}</p>
            <div className={styles.chipGrid}>
              {COMMON_CONDITIONS.map(c => (
                <button key={c} type="button"
                  className={`${styles.chip} ${conditions.includes(c) ? styles.chipActive : ''}`}
                  onClick={() => toggleItem(conditions, setConditions, c)}>
                  {conditions.includes(c) ? '✓ ' : ''}{c}
                </button>
              ))}
              {conditions.filter(c => !COMMON_CONDITIONS.includes(c)).map(c => (
                <button key={c} type="button" className={`${styles.chip} ${styles.chipActive}`}
                  onClick={() => toggleItem(conditions, setConditions, c)}>✓ {c}</button>
              ))}
            </div>
            <div className={styles.customRow}>
              <input id="profile-custom-condition" className={styles.input} placeholder={tLocal('customConditionPlaceholder')} value={customCondition} onChange={e => setCustomCondition(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCustom(conditions, setConditions, customCondition, setCustomCondition)} />
              <button type="button" className={styles.addBtn} onClick={() => addCustom(conditions, setConditions, customCondition, setCustomCondition)}>{tLocal('addBtn')}</button>
            </div>
          </div>
        )}

        {/* Step 3: Allergies */}
        {step === 3 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>{tLocal('knownAllergies')}</h2>
            <p className={styles.stepSub}>{tLocal('allergiesSub')}</p>
            <div className={styles.chipGrid}>
              {COMMON_ALLERGIES.map(a => (
                <button key={a} type="button"
                  className={`${styles.chip} ${allergies.includes(a) ? styles.chipActive : ''}`}
                  onClick={() => toggleItem(allergies, setAllergies, a)}>
                  {allergies.includes(a) ? '✓ ' : ''}{a}
                </button>
              ))}
              {allergies.filter(a => !COMMON_ALLERGIES.includes(a)).map(a => (
                <button key={a} type="button" className={`${styles.chip} ${styles.chipActive}`}
                  onClick={() => toggleItem(allergies, setAllergies, a)}>✓ {a}</button>
              ))}
            </div>
            <div className={styles.customRow}>
              <input id="profile-custom-allergy" className={styles.input} placeholder={tLocal('customAllergyPlaceholder')} value={customAllergy} onChange={e => setCustomAllergy(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCustom(allergies, setAllergies, customAllergy, setCustomAllergy)} />
              <button type="button" className={styles.addBtn} onClick={() => addCustom(allergies, setAllergies, customAllergy, setCustomAllergy)}>{tLocal('addBtn')}</button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className={styles.navRow}>
          {step > 1 && (
            <button type="button" className={styles.backBtn} onClick={() => setStep(s => s - 1)}>{translate('back', lang)}</button>
          )}
          {step < 3 ? (
            <button type="button" className={styles.nextBtn} onClick={() => { setError(''); setStep(s => s + 1); }}>
              {tLocal('nextStep')}
            </button>
          ) : (
            <button type="button" className={styles.nextBtn} onClick={handleFinish} disabled={loading}>
              {loading ? tLocal('saving') : tLocal('saveProfile')}
            </button>
          )}
        </div>

        <p className={styles.skip}>
          <button type="button" onClick={() => router.push('/dashboard')} style={{ background: 'none', border: 'none', color: '#718096', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}>
            {tLocal('skipForNow')}
          </button>
        </p>
      </div>
    </div>
  );
}
