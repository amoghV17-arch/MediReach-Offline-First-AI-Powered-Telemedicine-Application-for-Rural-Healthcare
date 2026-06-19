'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { db, type Appointment, type SymptomLog } from '@/lib/db';
import { DOCTORS, SPECIALTIES, CITIES, type Doctor } from '@/lib/doctors';
import { scheduleAppointmentReminder } from '@/lib/syncEngine';
import { getSavedLanguage, saveLanguage, translate, type Language } from '@/lib/translations';
import type { DiagnosisResult } from '@/lib/diagnosisEngine';
import styles from './appointments.module.css';

type Tab = 'find' | 'book' | 'mine';

// Local specific translation dictionary for appointments page
const localApptTranslations: Record<string, Record<Language, string>> = {
  findTab: {
    en: "🔍 Find Doctors",
    hi: "🔍 डॉक्टर खोजें",
    mr: "🔍 डॉक्टर शोधा"
  },
  bookTab: {
    en: "📋 Book Slot",
    hi: "📋 स्लॉट बुक करें",
    mr: "📋 स्लॉट बुक करा"
  },
  mineTab: {
    en: "🗂️ My Appointments",
    hi: "🗂️ मेरे अपॉइंटमेंट्स",
    mr: "🗂️ माझे अपॉइंटमेंट्स"
  },
  placeholderSearch: {
    en: "Search doctor, specialty, hospital...",
    hi: "डॉक्टर, विशेषता, अस्पताल खोजें...",
    mr: "डॉक्टर, आजार, रुग्णालय शोधा..."
  },
  doctorsFound: {
    en: "doctors found",
    hi: "डॉक्टर मिले",
    mr: "डॉक्टर सापडले"
  },
  noDoctorsFound: {
    en: "No doctors found for these filters. Try broadening your search.",
    hi: "इन फिल्टरों के लिए कोई डॉक्टर नहीं मिला। अपनी खोज को व्यापक बनाने का प्रयास करें।",
    mr: "या फिल्टरसाठी डॉक्टर सापडले नाहीत. कृपया इतर पर्याय निवडून पहा."
  },
  selectDoctorFirst: {
    en: "Select a doctor from the Find Doctors tab to book a slot.",
    hi: "स्लॉट बुक करने के लिए डॉक्टर खोजें टैब से एक डॉक्टर चुनें।",
    mr: "वेळ बुक करण्यासाठी आधी डॉक्टर शोधा टॅबमधून डॉक्टर निवडा."
  },
  browseDoctorsBtn: {
    en: "Browse Doctors",
    hi: "डॉक्टर ब्राउज़ करें",
    mr: "डॉक्टर तपासा"
  },
  bookNow: {
    en: "Book Now",
    hi: "अभी बुक करें",
    mr: "आता बुक करा"
  },
  pickSlotTitle: {
    en: "Pick a Time Slot",
    hi: "एक समय स्लॉट चुनें",
    mr: "एक वेळ निवडा"
  },
  notesPlaceholder: {
    en: "E.g. I have been having chest pain for 3 days, please review my recent diagnosis...",
    hi: "जैसे, मुझे 3 दिनों से छाती में दर्द हो रहा है, कृपया मेरे हालिया निदान की समीक्षा करें...",
    mr: "उदा., ३ दिवसांपासून माझ्या छातीत दुखत आहे, कृपया जुने रिपोर्ट तपासा..."
  },
  notesLabel: {
    en: "Notes for Doctor (Optional)",
    hi: "डॉक्टर के लिए नोट्स (वैकल्पिक)",
    mr: "डॉक्टरांसाठी माहिती (पर्यायी)"
  },
  pickSlotAbove: {
    en: "⬆️ Pick a slot above",
    hi: "⬆️ ऊपर से एक स्लॉट चुनें",
    mr: "⬆️ वरील वेळ निवडा"
  },
  confirmingText: {
    en: "⏳ Confirming...",
    hi: "⏳ पुष्टि की जा रही है...",
    mr: "⏳ निश्चित करत आहे..."
  },
  chooseDifferentDoctor: {
    en: "← Choose Different Doctor",
    hi: "← दूसरा डॉक्टर चुनें",
    mr: "← दुसरा डॉक्टर निवडा"
  },
  videoCallLinkLabel: {
    en: "Video Call Link",
    hi: "वीडियो कॉल लिंक",
    mr: "व्हिडिओ कॉलची लिंक"
  },
  viewMyAppointmentsBtn: {
    en: "View My Appointments →",
    hi: "मेरे अपॉइंटमेंट्स देखें →",
    mr: "माझे अपॉइंटमेंट्स पहा →"
  },
  noAppointmentsBooked: {
    en: "No appointments booked yet.",
    hi: "अभी तक कोई अपॉइंटमेंट बुक नहीं हुआ है।",
    mr: "अद्याप कोणतीही अपॉइंटमेंट बुक केलेली नाही."
  },
  loadingAppointments: {
    en: "Loading your appointments...",
    hi: "आपके अपॉइंटमेंट्स लोड हो रहे हैं...",
    mr: "तुमचे अपॉइंटमेंट्स लोड होत आहेत..."
  },
  consultationFeeLabel: {
    en: "consultation fee",
    hi: "परामर्श शुल्क",
    mr: "सल्ला शुल्क"
  },
  cancelSmall: {
    en: "✕ Cancel",
    hi: "✕ रद्द करें",
    mr: "✕ रद्द करा"
  },
  notSyncedSmall: {
    en: "⚠️ Not synced",
    hi: "⚠️ सिंक नहीं हुआ",
    mr: "⚠️ सिंक नाही"
  },
  offlineTitle: {
    en: "You're Offline",
    hi: "आप ऑफलाइन हैं",
    mr: "तुम्ही ऑफलाईन आहात"
  },
  offlineDesc: {
    en: "Doctor browsing and booking require an internet connection. Your existing appointments are saved locally below.",
    hi: "डॉक्टर की खोज और बुकिंग के लिए इंटरनेट कनेक्शन की आवश्यकता होती है। आपके मौजूदा अपॉइंटमेंट्स नीचे स्थानीय रूप से सहेजे गए हैं।",
    mr: "डॉक्टर शोधण्यासाठी आणि वेळ बुक करण्यासाठी इंटरनेट आवश्यक आहे. तुमचे जुने बुकिंग खाली ऑफलाईन उपलब्ध आहे."
  },
  savedAppointments: {
    en: "Saved Appointments",
    hi: "सहेजे गए अपॉइंटमेंट",
    mr: "साठवलेले अपॉइंटमेंट"
  },
  backToDashboard: {
    en: "← Back to Dashboard",
    hi: "← डैशबोर्ड पर वापस जाएं",
    mr: "← डॅशबोर्डवर परत जा"
  },
  apptStatusUpcoming: {
    en: "Upcoming", hi: "आगामी", mr: "येणारे"
  },
  apptStatusCompleted: {
    en: "Completed", hi: "पूर्ण", mr: "पूर्ण"
  },
  apptStatusCancelled: {
    en: "Cancelled", hi: "रद्द", mr: "रद्द"
  }
};

// Simple translations for specialties & cities (to fit local rural user needs)
const specTranslations: Record<string, Record<Language, string>> = {
  All: { en: "All Specialties", hi: "सभी विशेषताएँ", mr: "सर्व आजार/तज्ज्ञ" },
  "General Physician": { en: "General Physician", hi: "सामान्य चिकित्सक", mr: "सामान्य डॉक्टर" },
  Cardiologist: { en: "Cardiologist (Heart)", hi: "हृदय रोग विशेषज्ञ", mr: "हृदयरोग तज्ज्ञ" },
  Dermatologist: { en: "Dermatologist (Skin)", hi: "त्वचा रोग विशेषज्ञ", mr: "त्वचारोग तज्ज्ञ" },
  Pulmonologist: { en: "Pulmonologist (Lungs)", hi: "फेफड़े के विशेषज्ञ", mr: "फुफ्फुसरोग तज्ज्ञ" },
  Pediatrician: { en: "Pediatrician (Child)", hi: "बाल रोग विशेषज्ञ", mr: "बालरोग तज्ज्ञ" },
  Neurologist: { en: "Neurologist (Brain)", hi: "मस्तिष्क रोग विशेषज्ञ", mr: "मेंदूचे डॉक्टर" },
  Gynaecologist: { en: "Gynaecologist (Women)", hi: "महिला रोग विशेषज्ञ", mr: "स्त्रीरोग तज्ज्ञ" },
  "Orthopaedic Surgeon": { en: "Orthopaedic (Bones)", hi: "हड्डी रोग विशेषज्ञ", mr: "हाडांचे डॉक्टर" },
  Endocrinologist: { en: "Endocrinologist (Metabolism)", hi: "हार्मोन विशेषज्ञ", mr: "हार्मोन तज्ज्ञ" },
  Ophthalmologist: { en: "Ophthalmologist (Eyes)", hi: "नेत्र रोग विशेषज्ञ", mr: "डोळ्यांचे डॉक्टर" },
  Gastroenterologist: { en: "Gastroenterologist (Stomach)", hi: "पेट के रोग विशेषज्ञ", mr: "पोटाचे डॉक्टर" },
  Psychiatrist: { en: "Psychiatrist (Mind)", hi: "मनोचिकित्सक", mr: "मानसोपचार तज्ज्ञ" },
  Urologist: { en: "Urologist (Urinary)", hi: "मूत्र रोग विशेषज्ञ", mr: "मूत्ररोग तज्ज्ञ" },
  "Ayurvedic Physician": { en: "Ayurvedic Doctor", hi: "आयुर्वेदिक चिकित्सक", mr: "आयुर्वेदिक डॉक्टर" }
};

const cityTranslations: Record<string, Record<Language, string>> = {
  All: { en: "All Cities", hi: "सभी शहर", mr: "सर्व शहरे" }
};

export default function AppointmentsPage() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('find');
  const [lang, setLang] = useState<Language>('en');

  // Find Doctors state
  const [specialty, setSpecialty] = useState('All');
  const [city, setCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [doctors, setDoctors] = useState<Doctor[]>(DOCTORS);

  // Book state
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [booking, setBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<{ doctorName: string; slot: string; meetingLink?: string } | null>(null);
  const [latestSymptomLog, setLatestSymptomLog] = useState<SymptomLog | null>(null);
  const [latestDiagnosisResult, setLatestDiagnosisResult] = useState<DiagnosisResult | null>(null);
  const [shouldAttachSymptoms, setShouldAttachSymptoms] = useState(true);

  // Profile Detail Drawer state
  const [activeProfileDoctor, setActiveProfileDoctor] = useState<Doctor | null>(null);

  // My Appointments state
  const [myAppointments, setMyAppointments] = useState<Appointment[]>([]);
  const [loadingMine, setLoadingMine] = useState(false);

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

  const handleLanguageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Language;
    setLang(selected);
    saveLanguage(selected);
  };

  const tLocal = (key: string): string => {
    const item = localApptTranslations[key];
    if (!item) return key;
    return item[lang] || item['en'] || key;
  };

  useEffect(() => {
    const session = getSession();
    if (!session) { router.push('/auth'); return; }

    setIsOnline(navigator.onLine);
    const handleOnline  = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online',  handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online',  handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [router]);

  // Filter doctors
  useEffect(() => {
    let filtered = DOCTORS;
    if (specialty !== 'All') filtered = filtered.filter(d => d.specialty === specialty);
    if (city !== 'All') filtered = filtered.filter(d => d.city === city);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.city.toLowerCase().includes(q) ||
        d.hospital.toLowerCase().includes(q)
      );
    }
    setDoctors(filtered);
  }, [specialty, city, searchQuery]);

  const loadMyAppointments = useCallback(async () => {
    const session = getSession();
    if (!session) return;
    setLoadingMine(true);
    const appts = await db.appointments
      .where('userId').equals(session.userId)
      .reverse()
      .toArray();
    setMyAppointments(appts);
    setLoadingMine(false);
  }, []);

  useEffect(() => {
    if (activeTab === 'mine') loadMyAppointments();
  }, [activeTab, loadMyAppointments]);

  // Fetch latest symptom log & AI diagnosis when doctor selected
  useEffect(() => {
    if (selectedDoctor) {
      const session = getSession();
      if (session) {
        db.symptomLogs
          .where('userId')
          .equals(session.userId)
          .reverse()
          .sortBy('timestamp')
          .then(logs => {
            if (logs && logs.length > 0) {
              const latestLog = logs[0];
              setLatestSymptomLog(latestLog);
              if (latestLog.id) {
                db.diagnosisResults
                  .where('symptomLogId')
                  .equals(latestLog.id)
                  .first()
                  .then(res => {
                    setLatestDiagnosisResult(res ?? null);
                  });
              }
            } else {
              setLatestSymptomLog(null);
              setLatestDiagnosisResult(null);
            }
          })
          .catch(err => {
            console.error('[AppointmentsPage] Error fetching latest symptoms:', err);
          });
      }
    } else {
      setLatestSymptomLog(null);
      setLatestDiagnosisResult(null);
    }
  }, [selectedDoctor]);

  function handleSelectDoctor(doc: Doctor) {
    setSelectedDoctor(doc);
    setSelectedSlot('');
    setNotes('');
    setBookingSuccess(null);
    setShouldAttachSymptoms(true);
    setActiveTab('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleBook() {
    if (!selectedDoctor || !selectedSlot) return;
    const session = getSession();
    if (!session) return;

    setBooking(true);
    try {
      const appt: Omit<Appointment, 'id'> = {
        userId: session.userId,
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        doctorCity: selectedDoctor.city,
        slot: selectedSlot,
        fee: selectedDoctor.fee,
        status: 'upcoming',
        notes,
        symptomLogId: (shouldAttachSymptoms && latestSymptomLog?.id) ? latestSymptomLog.id : undefined,
        reportShared: false,
        synced: false,
        createdAt: new Date().toISOString(),
      };

      const apptId = await db.appointments.add(appt);

      // Schedule reminder
      await scheduleAppointmentReminder(
        session.userId,
        apptId as number,
        selectedDoctor.name,
        selectedSlot
      );

      // Try to confirm online
      let meetingLink: string | undefined;
      if (navigator.onLine) {
        try {
          const res = await fetch('/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...appt, id: apptId }),
          });
          const data = await res.json();
          meetingLink = data.meetingLink;
          await db.appointments.update(apptId as number, { synced: true });
        } catch {}
      }

      setBookingSuccess({
        doctorName: selectedDoctor.name,
        slot: selectedSlot,
        meetingLink,
      });
    } catch (err) {
      console.error(err);
    }
    setBooking(false);
  }

  async function cancelAppointment(appt: Appointment) {
    if (!appt.id) return;
    await db.appointments.update(appt.id, { status: 'cancelled' });
    loadMyAppointments();
  }

  function formatSlot(iso: string) {
    const d = new Date(iso);
    return d.toLocaleString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', {
      weekday: 'short', day: 'numeric', month: 'short',
      hour: '2-digit', minute: '2-digit'
    });
  }

  const statusColor: Record<string, string> = {
    upcoming: '#0F6E56',
    completed: '#2563eb',
    cancelled: '#dc2626',
  };

  if (!isOnline) {
    return (
      <div className={styles.page}>
        <div className={styles.offlinePage}>
          <div className={styles.offlineIcon}>📵</div>
          <h2 className={styles.offlineTitle}>{tLocal('offlineTitle')}</h2>
          <p className={styles.offlineDesc}>{tLocal('offlineDesc')}</p>
          <Link href="/dashboard" className={styles.backLink}>{tLocal('backToDashboard')}</Link>
          {myAppointments.length > 0 && (
            <div className={styles.offlineAppts}>
              <h3>{tLocal('savedAppointments')}</h3>
              {myAppointments.map(a => (
                <div key={a.id} className={styles.apptCard}>
                  <div className={styles.apptDoc}>{a.doctorName}</div>
                  <div className={styles.apptSlot}>{formatSlot(a.slot)}</div>
                  <span className={styles.statusBadge} style={{ background: statusColor[a.status] + '22', color: statusColor[a.status] }}>
                    {tLocal(`apptStatus${a.status.charAt(0).toUpperCase() + a.status.slice(1)}`) || a.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <span className={styles.sidebarLogoIcon}>🩺</span>
          <span className={styles.sidebarLogoText}>MediReach</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/dashboard"    className={styles.navItem}>🏠 {translate('dashboard', lang)}</Link>
          <Link href="/diagnosis"    className={styles.navItem}>🔬 {translate('aiDiagnosis', lang)}</Link>
          <Link href="/appointments" className={`${styles.navItem} ${styles.navActive}`}>📅 {translate('appointments', lang)}</Link>
          <Link href="/auth/profile-setup" className={styles.navItem}>👤 {translate('profileSetup', lang)}</Link>
        </nav>
        <div className={styles.sidebarFooter}>
          <div className={`${styles.statusChip} ${styles.online}`}>
            <span className={styles.statusDot} />{translate('online', lang)}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.pageTitle}>📅 {translate('appointments', lang)}</h1>
            <p className={styles.pageSubtitle}>{lang === 'mr' ? 'डॉक्टर शोधा, वेळा बुक करा आणि सल्ला मिळवा' : lang === 'hi' ? 'डॉक्टर खोजें, समय बुक करें और अपनी देखभाल प्रबंधित करें' : 'Find doctors, book slots & manage your care'}</p>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            {/* Language Selector inside Main Header */}
            <select 
              className="langSelect"
              value={lang} 
              onChange={handleLanguageSelect}
              aria-label="Select Language"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="mr">मराठी</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'find' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('find')}
          >
            {tLocal('findTab')}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'book' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('book')}
          >
            {tLocal('bookTab')}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'mine' ? styles.tabActive : ''}`}
            onClick={() => { setActiveTab('mine'); }}
          >
            {tLocal('mineTab')}
          </button>
        </div>

        {/* ─── TAB: FIND DOCTORS ─── */}
        {activeTab === 'find' && (
          <div className={styles.tabContent}>
            {/* Filters */}
            <div className={styles.filterBar}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder={tLocal('placeholderSearch')}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <select className={styles.select} value={specialty} onChange={e => setSpecialty(e.target.value)}>
                {SPECIALTIES.map(s => (
                  <option key={s} value={s}>
                    {specTranslations[s]?.[lang] || s}
                  </option>
                ))}
              </select>
              <select className={styles.select} value={city} onChange={e => setCity(e.target.value)}>
                {CITIES.map(c => (
                  <option key={c} value={c}>
                    {cityTranslations[c]?.[lang] || c}
                  </option>
                ))}
              </select>
            </div>

            <p className={styles.resultCount}>{doctors.length} {tLocal('doctorsFound')}</p>

            {doctors.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔭</div>
                <p>{tLocal('noDoctorsFound')}</p>
              </div>
            ) : (
              <div className={styles.doctorGrid}>
                {doctors.map(doc => (
                  <div key={doc.id} className={styles.doctorCard}>
                    <div className={styles.doctorHeader}>
                      <div className={styles.doctorAvatar}>{doc.avatar}</div>
                      <div className={styles.doctorInfo}>
                        <h3 className={styles.doctorName}>{doc.name}</h3>
                        <div className={styles.doctorSpec}>{specTranslations[doc.specialty]?.[lang] || doc.specialty}</div>
                        <div className={styles.doctorQual}>{doc.qualifications}</div>
                      </div>
                    </div>
                    <div className={styles.doctorMeta}>
                      <span className={styles.metaChip}>🏥 {doc.hospital}</span>
                      <span className={styles.metaChip}>📍 {cityTranslations[doc.city]?.[lang] || doc.city}, {doc.state}</span>
                    </div>
                    <div className={styles.doctorMeta}>
                      <span className={styles.metaChip}>⏱ {doc.experience}{lang === 'mr' ? ' वर्षे अनुभव' : lang === 'hi' ? ' वर्ष अनुभव' : 'y exp'}</span>
                      <span className={styles.metaChip}>🗣 {doc.languages.slice(0, 2).join(', ')}</span>
                    </div>
                    <p className={styles.doctorAbout}>{doc.about}</p>
                    <div className={styles.doctorFooter}>
                      <div className={styles.ratingRow}>
                        <span className={styles.stars}>{'★'.repeat(Math.round(doc.rating))}{'☆'.repeat(5 - Math.round(doc.rating))}</span>
                        <span className={styles.ratingNum}>{doc.rating} ({doc.reviewCount})</span>
                      </div>
                      <div className={styles.feeRow} style={{ gap: '8px' }}>
                        <span className={styles.fee}>₹{doc.fee}</span>
                        <button
                          type="button"
                          className={styles.viewProfileBtn}
                          onClick={() => setActiveProfileDoctor(doc)}
                          aria-label={`View profile of ${doc.name}`}
                        >
                          ℹ️ {lang === 'mr' ? 'माहिती' : lang === 'hi' ? 'जानकारी' : 'Profile'}
                        </button>
                        <button
                          id={`book-${doc.id}`}
                          className={styles.bookBtn}
                          onClick={() => handleSelectDoctor(doc)}
                        >
                          {tLocal('bookNow')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── TAB: BOOK SLOT ─── */}
        {activeTab === 'book' && (
          <div className={styles.tabContent}>
            {!selectedDoctor ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>👆</div>
                <p>{tLocal('selectDoctorFirst')}</p>
                <button className={styles.bookBtn} style={{ marginTop: '1rem' }} onClick={() => setActiveTab('find')}>
                  {tLocal('browseDoctorsBtn')}
                </button>
              </div>
            ) : bookingSuccess ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>🎉</div>
                <h2 className={styles.successTitle}>{tLocal('bookingSuccess')}</h2>
                <p className={styles.successMsg}>
                  {lang === 'mr' ? 'डॉक्टर ' : lang === 'hi' ? 'डॉक्टर ' : ''}<strong>{bookingSuccess.doctorName}</strong>{lang === 'mr' ? ' यांच्यासोबत तुमची वेळ ' : lang === 'hi' ? ' के साथ आपका समय ' : ' confirmed for'}<br />
                  <strong>{formatSlot(bookingSuccess.slot)}</strong>{lang === 'mr' ? ' ला निश्चित झाली आहे' : lang === 'hi' ? ' को निश्चित हो गया है।' : ''}
                </p>
                {bookingSuccess.meetingLink && (
                  <div className={styles.meetingBox}>
                    <div className={styles.meetingLabel}>{tLocal('videoCallLinkLabel')}</div>
                    <a href={bookingSuccess.meetingLink} className={styles.meetingLink} target="_blank" rel="noopener noreferrer">
                      🎥 {bookingSuccess.meetingLink}
                    </a>
                  </div>
                )}
                <div className={styles.successActions}>
                  <button
                    className={styles.shareBtn}
                    onClick={() => {
                      const appts = myAppointments.find(a => a.doctorName === bookingSuccess.doctorName);
                      if (appts?.id) router.push(`/appointments/${appts.id}/share-report`);
                    }}
                  >
                    {translate('shareReportText', lang)}
                  </button>
                  <button className={styles.bookBtn} onClick={() => { setBookingSuccess(null); setSelectedDoctor(null); setActiveTab('mine'); }}>
                    {tLocal('viewMyAppointmentsBtn')}
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.bookingPanel}>
                {/* Doctor summary */}
                <div className={styles.selectedDocCard}>
                  <div className={styles.selectedDocAvatar}>{selectedDoctor.avatar}</div>
                  <div>
                    <h3 className={styles.doctorName}>{selectedDoctor.name}</h3>
                    <p className={styles.doctorSpec}>{specTranslations[selectedDoctor.specialty]?.[lang] || selectedDoctor.specialty} · {cityTranslations[selectedDoctor.city]?.[lang] || selectedDoctor.city}</p>
                    <p className={styles.doctorQual}>{selectedDoctor.hospital}</p>
                  </div>
                  <div className={styles.feeBadge}>₹{selectedDoctor.fee}</div>
                </div>

                {/* Auto-attached Symptom Analysis */}
                {latestSymptomLog && (
                  <div className={styles.attachedSymptomCard}>
                    <div className={styles.attachedHeader}>
                      <h4 className={styles.attachedTitle}>
                        🩺 {tLocal('attachedSymptomTitle')}
                      </h4>
                      <span className={styles.attachedBadge}>
                        {translate(latestSymptomLog.severity, lang)}
                      </span>
                    </div>
                    <p className={styles.attachedText}>
                      {latestSymptomLog.description}
                    </p>
                    <div className={styles.attachedMetaGrid}>
                      <span className={styles.attachedMetaChip}>
                        ⏱️ {latestSymptomLog.duration}
                      </span>
                      {latestSymptomLog.bodyParts.map(part => (
                        <span key={part} className={styles.attachedMetaChip}>
                          📍 {translate(part, lang)}
                        </span>
                      ))}
                      {latestDiagnosisResult && latestDiagnosisResult.possibleConditions && latestDiagnosisResult.possibleConditions.length > 0 && (
                        <span className={styles.attachedMetaChip} style={{ borderColor: 'rgba(59, 130, 246, 0.4)', color: '#60a5fa' }}>
                          🧠 AI: {latestDiagnosisResult.possibleConditions[0].name}
                        </span>
                      )}
                    </div>
                    <p className={styles.attachedShareText} style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 12px 0' }}>
                      {tLocal('attachedSymptomDesc')}
                    </p>
                    <div className={styles.attachedShareRow}>
                      <span className={styles.attachedShareText} style={{ fontWeight: '600', color: 'white' }}>
                        {lang === 'mr' ? 'आरोग्य माहिती डॉक्टरांसोबत शेअर करा' : lang === 'hi' ? 'स्वास्थ्य जानकारी डॉक्टर के साथ साझा करें' : 'Share health summary with doctor'}
                      </span>
                      <input
                        type="checkbox"
                        checked={shouldAttachSymptoms}
                        onChange={e => setShouldAttachSymptoms(e.target.checked)}
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                        aria-label="Share health summary with doctor"
                      />
                    </div>
                  </div>
                )}

                {/* Slot picker */}
                <div className={styles.slotSection}>
                  <h3 className={styles.slotTitle}>{tLocal('pickSlotTitle')}</h3>
                  
                  {/* Morning Slots */}
                  {(() => {
                    const morningSlots = selectedDoctor.availableSlots.filter(s => new Date(s).getHours() < 12);
                    if (morningSlots.length === 0) return null;
                    return (
                      <div className={styles.periodSection}>
                        <div className={styles.periodHeader}>🌅 {tLocal('morning')}</div>
                        <div className={styles.periodGrid}>
                          {morningSlots.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              className={`${styles.slotBtn} ${selectedSlot === slot ? styles.slotSelected : ''}`}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              <span className={styles.slotDay}>
                                {new Date(slot).toLocaleDateString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                              </span>
                              <span className={styles.slotTime}>
                                {new Date(slot).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Afternoon Slots */}
                  {(() => {
                    const afternoonSlots = selectedDoctor.availableSlots.filter(s => {
                      const hr = new Date(s).getHours();
                      return hr >= 12 && hr < 17;
                    });
                    if (afternoonSlots.length === 0) return null;
                    return (
                      <div className={styles.periodSection}>
                        <div className={styles.periodHeader}>☀️ {tLocal('afternoon')}</div>
                        <div className={styles.periodGrid}>
                          {afternoonSlots.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              className={`${styles.slotBtn} ${selectedSlot === slot ? styles.slotSelected : ''}`}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              <span className={styles.slotDay}>
                                {new Date(slot).toLocaleDateString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                              </span>
                              <span className={styles.slotTime}>
                                {new Date(slot).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Evening Slots */}
                  {(() => {
                    const eveningSlots = selectedDoctor.availableSlots.filter(s => new Date(s).getHours() >= 17);
                    if (eveningSlots.length === 0) return null;
                    return (
                      <div className={styles.periodSection}>
                        <div className={styles.periodHeader}>🌙 {tLocal('evening')}</div>
                        <div className={styles.periodGrid}>
                          {eveningSlots.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              className={`${styles.slotBtn} ${selectedSlot === slot ? styles.slotSelected : ''}`}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              <span className={styles.slotDay}>
                                {new Date(slot).toLocaleDateString(lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                              </span>
                              <span className={styles.slotTime}>
                                {new Date(slot).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Notes */}
                <div className={styles.notesSection}>
                  <label className={styles.notesLabel}>{tLocal('notesLabel')}</label>
                  <textarea
                    className={styles.notesInput}
                    placeholder={tLocal('notesPlaceholder')}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                <button
                  id="confirm-booking"
                  className={styles.confirmBtn}
                  onClick={handleBook}
                  disabled={!selectedSlot || booking}
                >
                  {booking ? tLocal('confirmingText') : selectedSlot ? `✅ ${translate('confirm', lang)} — ${formatSlot(selectedSlot)}` : tLocal('pickSlotAbove')}
                </button>
                <button className={styles.changeDoctorBtn} onClick={() => { setSelectedDoctor(null); setSelectedSlot(''); setNotes(''); setActiveTab('find'); }}>
                  {tLocal('chooseDifferentDoctor')}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ─── TAB: MY APPOINTMENTS ─── */}
        {activeTab === 'mine' && (
          <div className={styles.tabContent}>
            {loadingMine ? (
              <div className={styles.loadingState}>
                <div className={styles.spinner} />
                <p>{tLocal('loadingAppointments')}</p>
              </div>
            ) : myAppointments.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📭</div>
                <p>{tLocal('noAppointmentsBooked')}</p>
                <button className={styles.bookBtn} style={{ marginTop: '1rem' }} onClick={() => setActiveTab('find')}>
                  {tLocal('browseDoctorsBtn')}
                </button>
              </div>
            ) : (
              <div className={styles.myApptList}>
                {myAppointments.map(appt => (
                  <div key={appt.id} className={styles.myApptCard}>
                    <div className={styles.myApptLeft}>
                      <div className={styles.myApptAvatar}>👨‍⚕️</div>
                      <div>
                        <div className={styles.myApptDoctor}>{appt.doctorName}</div>
                        <div className={styles.myApptSpec}>{specTranslations[appt.specialty]?.[lang] || appt.specialty} · {cityTranslations[appt.doctorCity]?.[lang] || appt.doctorCity}</div>
                        <div className={styles.myApptSlot}>🗓 {formatSlot(appt.slot)}</div>
                        <div className={styles.myApptFee}>₹{appt.fee} {tLocal('consultationFeeLabel')}</div>
                        {appt.notes && <div className={styles.myApptNotes}>📝 {appt.notes}</div>}
                      </div>
                    </div>
                    <div className={styles.myApptRight}>
                      <span
                        className={styles.statusBadge}
                        style={{ background: statusColor[appt.status] + '22', color: statusColor[appt.status] }}
                      >
                        {tLocal(`apptStatus${appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}`) || appt.status}
                      </span>
                      {appt.status === 'upcoming' && (
                        <div className={styles.apptActions}>
                          <Link href={`/appointments/${appt.id}/share-report`} className={styles.shareSmallBtn}>
                            {translate('shareReportText', lang)}
                          </Link>
                          <Link href={`/appointments/${appt.id}/call`} className={styles.callBtn}>
                            {translate('startCallText', lang)}
                          </Link>
                          <button className={styles.cancelBtn} onClick={() => cancelAppointment(appt)}>
                            {tLocal('cancelSmall')}
                          </button>
                        </div>
                      )}
                      {!appt.synced && (
                        <span className={styles.unsyncedBadge}>{tLocal('notSyncedSmall')}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ─── DOCTOR PROFILE DRAWER ─── */}
      {activeProfileDoctor && (
        <>
          <div className={styles.profileDrawerOverlay} onClick={() => setActiveProfileDoctor(null)} />
          <div className={styles.profileDrawer}>
            <div className={styles.drawerHeader}>
              <h3 className={styles.drawerTitle}>{tLocal('profileDrawerBio')}</h3>
              <button className={styles.drawerClose} onClick={() => setActiveProfileDoctor(null)}>✕</button>
            </div>
            <div className={styles.drawerBody}>
              <div className={styles.drawerProfileInfo}>
                <div className={styles.drawerAvatar}>{activeProfileDoctor.avatar}</div>
                <div className={styles.drawerMeta}>
                  <h4 className={styles.drawerName}>{activeProfileDoctor.name}</h4>
                  <div className={styles.drawerSpec}>{specTranslations[activeProfileDoctor.specialty]?.[lang] || activeProfileDoctor.specialty}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
                    🌟 {activeProfileDoctor.rating} ({activeProfileDoctor.reviewCount} {lang === 'mr' ? 'पुनरावलोकने' : lang === 'hi' ? 'समीक्षाएं' : 'reviews'})
                  </div>
                </div>
              </div>

              <div className={styles.drawerBioCard}>
                <div className={styles.drawerBioTitle}>{lang === 'mr' ? 'अनुभव आणि शिक्षण' : lang === 'hi' ? 'अनुभव और योग्यता' : 'Qualifications & Experience'}</div>
                <p className={styles.drawerBioText} style={{ marginBottom: '12px' }}>
                  🎓 {activeProfileDoctor.qualifications}<br />
                  ⏱️ {activeProfileDoctor.experience} {tLocal('experienceText') || (lang === 'mr' ? 'वर्षांचा अनुभव' : lang === 'hi' ? 'वर्षों का अनुभव' : 'years experience')}
                </p>
                <div className={styles.drawerBioTitle}>{lang === 'mr' ? 'भाषा' : lang === 'hi' ? 'भाषाएँ' : 'Languages'}</div>
                <p className={styles.drawerBioText}>
                  🗣️ {activeProfileDoctor.languages.join(', ')}
                </p>
              </div>

              <div className={styles.drawerBioCard}>
                <div className={styles.drawerBioTitle}>{lang === 'mr' ? 'डॉक्टरांबद्दल' : lang === 'hi' ? 'चिकित्सक के बारे में' : 'About Doctor'}</div>
                <p className={styles.drawerBioText}>
                  {activeProfileDoctor.about}
                </p>
              </div>

              <div className={styles.drawerBioCard}>
                <div className={styles.drawerBioTitle}>{lang === 'mr' ? 'रुग्णालय आणि पत्ता' : lang === 'hi' ? 'अस्पताल और पता' : 'Hospital & Location'}</div>
                <p className={styles.drawerBioText}>
                  🏥 {activeProfileDoctor.hospital}<br />
                  📍 {cityTranslations[activeProfileDoctor.city]?.[lang] || activeProfileDoctor.city}, {activeProfileDoctor.state}
                </p>
              </div>

              <div>
                <div className={styles.drawerBioTitle} style={{ marginBottom: '12px' }}>💬 {lang === 'mr' ? 'रुग्णांचे अभिप्राय' : lang === 'hi' ? 'मरीजों की समीक्षाएं' : 'Patient Reviews'}</div>
                <div className={styles.drawerReviewCard}>
                  <div className={styles.drawerReviewAuthor}>
                    <span>Ramesh K.</span>
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.drawerReviewText}>
                    "{lang === 'mr' ? 'खूप चांगले डॉक्टर आहेत, शांतपणे ऐकून घेतात.' : lang === 'hi' ? 'बहुत अच्छे डॉक्टर हैं, ध्यान से सुनते हैं।' : 'Very professional doctor, patient listener.'}"
                  </p>
                </div>
                <div className={styles.drawerReviewCard}>
                  <div className={styles.drawerReviewAuthor}>
                    <span>Sunita D.</span>
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className={styles.drawerReviewText}>
                    "{lang === 'mr' ? 'औषधांनी त्वरित फरक पडला.' : lang === 'hi' ? 'दवाइयों से बहुत जल्दी आराम मिला।' : 'Medicines worked fast. Great advice.'}"
                  </p>
                </div>
              </div>
            </div>
            <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <button 
                type="button" 
                className={styles.bookBtn} 
                style={{ width: '100%', padding: '14px' }}
                onClick={() => {
                  handleSelectDoctor(activeProfileDoctor);
                  setActiveProfileDoctor(null);
                }}
              >
                {tLocal('bookNow')} — ₹{activeProfileDoctor.fee}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
