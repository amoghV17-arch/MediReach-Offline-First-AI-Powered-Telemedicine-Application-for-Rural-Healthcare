'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getSession, clearSession } from '@/lib/auth';
import { db } from '@/lib/db';
import type { SymptomLog, AppNotification } from '@/lib/db';
import { getSavedLanguage, saveLanguage, translate, type Language } from '@/lib/translations';
import styles from './dashboard.module.css';

// Local specific translation dict for greetings and dashboard
const localTranslations: Record<string, Record<Language, string>> = {
  morning: {
    en: "Good Morning",
    hi: "सुप्रभात",
    mr: "शुभ सकाळ"
  },
  afternoon: {
    en: "Good Afternoon",
    hi: "नमस्कार",
    mr: "शुभ दुपार"
  },
  evening: {
    en: "Good Evening",
    hi: "शुभ संध्या",
    mr: "शुभ संध्याकाळ"
  },
  noNotifs: {
    en: "No notifications yet",
    hi: "अभी कोई सूचना नहीं है",
    mr: "अद्याप कोणतीही सूचना नाही"
  },
  notifHeader: {
    en: "Notifications",
    hi: "सूचनाएं",
    mr: "सूचना"
  },
  offlineToast: {
    en: "📴 You are offline. All local features are still working. Data will sync when you reconnect.",
    hi: "📴 आप ऑफलाइन हैं। सभी स्थानीय सुविधाएँ अभी भी काम कर रही हैं। दोबारा कनेक्ट होने पर डेटा सिंक हो जाएगा।",
    mr: "📴 तुम्ही ऑफलाईन आहात. सर्व स्थानिक वैशिष्ट्ये कार्यरत आहेत. तुम्ही पुन्हा कनेक्ट झाल्यावर डेटा सिंक होईल."
  },
  sosSuccessToast: {
    en: "🚨 Emergency message copied to clipboard & SMS app triggered! If your SMS app did not open, paste the message directly.",
    hi: "🚨 आपातकालीन संदेश क्लिपबोर्ड पर कॉपी हो गया और SMS शुरू किया गया! यदि SMS ऐप नहीं खुला, तो कृपया संदेश सीधे पेस्ट करें।",
    mr: "🚨 आपत्कालीन संदेश क्लिपबोर्डवर कॉपी झाला आणि SMS सुरू झाला! जर SMS ॲप उघडले नसेल, तर संदेश थेट पेस्ट करा।"
  },
  copySuccess: {
    en: "📋 Copied emergency message to clipboard!",
    hi: "📋 आपातकालीन संदेश क्लिपबोर्ड पर कॉपी किया गया!",
    mr: "📋 आपत्कालीन संदेश क्लिपबोर्डवर कॉपी केला आहे!"
  },
  shareSuccess: {
    en: "📤 Sharing dialog opened!",
    hi: "📤 साझा करने का विकल्प खोला गया!",
    mr: "📤 शेअर करण्याचा पर्याय उघडला!"
  },
  copyBtn: {
    en: "Copy SOS Text",
    hi: "संदेश कॉपी करें",
    mr: "संदेश कॉपी करा"
  },
  shareBtn: {
    en: "Share Alert",
    hi: "साझा करें",
    mr: "शेअर करा"
  }
};

const FIRST_AID_GUIDES = [
  { id: 'cpr', titleKey: 'fa_cpr_title', stepsKey: 'fa_cpr_steps', warningsKey: 'fa_cpr_warnings', icon: '🫀' },
  { id: 'bleeding', titleKey: 'fa_bleeding_title', stepsKey: 'fa_bleeding_steps', warningsKey: 'fa_bleeding_warnings', icon: '🩸' },
  { id: 'snakebite', titleKey: 'fa_snakebite_title', stepsKey: 'fa_snakebite_steps', warningsKey: 'fa_snakebite_warnings', icon: '🐍' },
  { id: 'choking', titleKey: 'fa_choking_title', stepsKey: 'fa_choking_steps', warningsKey: 'fa_choking_warnings', icon: '🗣️' },
  { id: 'burns', titleKey: 'fa_burns_title', stepsKey: 'fa_burns_steps', warningsKey: 'fa_burns_warnings', icon: '🔥' },
];

// SVG Visual Illustrations for Offline First Aid Guides
function CprSvg() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <defs>
        <radialGradient id="cprGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="45" fill="url(#cprGlow)" />
      <circle cx="60" cy="60" r="35" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.6">
        <animate attributeName="r" values="25;48;25" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="60" r="25" stroke="#ef4444" strokeWidth="1.5" opacity="0.8">
        <animate attributeName="r" values="15;35;15" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <path d="M30 85 C30 55 45 40 60 40 C75 40 90 55 90 85" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      <g transform="translate(48, 50)">
        <path d="M8 22 C4 20 2 16 4 12 C6 8 10 8 13 11 L18 16 C20 18 20 20 18 22 Z" fill="#94a3b8" opacity="0.7" />
        <path d="M12 18 C8 16 6 12 8 8 C10 4 14 4 17 7 L22 12 C24 14 24 16 22 18 Z" fill="url(#handGrad)" />
      </g>
    </svg>
  );
}

function BleedingSvg() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <defs>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#f87171" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="45" fill="#ef4444" fillOpacity="0.05" />
      <path d="M20 75 C35 72 50 70 75 72 C90 73 100 75 105 75 C105 75 105 60 100 58 C85 55 65 56 45 53 C30 51 20 48 20 48 Z" fill="url(#armGrad)" opacity="0.8" />
      <circle cx="60" cy="63" r="10" fill="#dc2626" fillOpacity="0.4">
        <animate attributeName="fill-opacity" values="0.2;0.6;0.2" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <rect x="52" y="52" width="16" height="22" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(5 60 63)" />
      <path d="M57 63 H63 M60 60 V66" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      <g transform="translate(48, 20)">
        <path d="M12 5 V18 M7 13 L12 18 L17 13" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="transform" type="translate" values="0,0; 0,4; 0,0" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

function SnakebiteSvg() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <defs>
        <linearGradient id="legGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="45" fill="#f59e0b" fillOpacity="0.05" />
      <path d="M25 80 C40 78 55 74 70 70 C85 66 100 55 105 50 C100 45 80 44 65 48 C50 52 35 56 25 58 Z" fill="url(#legGrad)" opacity="0.9" />
      <circle cx="62" cy="58" r="3" fill="#dc2626">
        <animate attributeName="r" values="2;3.5;2" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="56" r="3" fill="#dc2626">
        <animate attributeName="r" values="2;3.5;2" dur="1s" repeatCount="indefinite" />
      </circle>
      <path d="M20 90 H80 M80 90 L72 85 M80 90 L72 95" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="25" y="105" fill="#3b82f6" fontSize="8" fontWeight="bold">KEEP LIMB LOW</text>
      <g transform="translate(15, 15)">
        <circle cx="15" cy="15" r="12" stroke="#ef4444" strokeWidth="2" />
        <line x1="6" y1="6" x2="24" y2="24" stroke="#ef4444" strokeWidth="2" />
        <path d="M11 19 L19 11" stroke="#cbd5e1" strokeWidth="2" />
      </g>
    </svg>
  );
}

function ChokingSvg() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <circle cx="60" cy="60" r="45" fill="#f59e0b" fillOpacity="0.05" />
      <path d="M50 45 C50 45 42 42 42 35 C42 28 48 24 55 24 C62 24 65 30 65 35 C65 40 60 44 60 47 C65 52 75 58 75 75 C75 85 70 95 70 95 H45 C45 95 40 85 40 75 C40 65 48 55 50 45 Z" fill="#64748b" opacity="0.6" />
      <path d="M72 55 C72 55 78 50 82 55 C86 60 88 75 88 85 C88 95 80 95 80 95 H65 C68 85 70 65 72 55 Z" fill="#475569" opacity="0.4" />
      <circle cx="53" cy="66" r="6" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1.5" />
      <path d="M75 66 C65 65 60 65 54 66" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round" />
      <path d="M48 80 C48 72 52 62 55 58 M50 63 L55 58 L60 63" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="transform" type="translate" values="0,0; -2,-3; 0,0" dur="0.8s" repeatCount="indefinite" />
      </path>
      <circle cx="43" cy="35" r="2" fill="#ef4444" />
    </svg>
  );
}

function BurnsSvg() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <defs>
        <linearGradient id="coolWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="45" fill="#3b82f6" fillOpacity="0.05" />
      <path d="M85 20 H65 V28 H85 Z" fill="#64748b" />
      <path d="M72 20 V38 H60 V44 H55 V48 H77 V38 H72" fill="#94a3b8" />
      <path d="M60 48 V90 M63 48 V85 M66 48 V92" stroke="url(#coolWater)" strokeWidth="3" strokeLinecap="round" strokeDasharray="100">
        <animate attributeName="stroke-dashoffset" values="100;0" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M30 80 C38 80 44 78 52 75 C60 72 75 72 82 72 C88 72 90 75 92 78 C90 82 85 82 78 82 C70 82 62 85 52 87 C44 89 36 90 30 90 Z" fill="#fed7aa" opacity="0.9" />
      <path d="M60 74 C63 74 65 76 66 78 C65 80 62 82 59 82 C56 82 55 80 56 78 C57 76 59 74 60 74 Z" fill="#ef4444" opacity="0.8">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function getFirstAidSvg(id: string) {
  switch (id) {
    case 'cpr': return <CprSvg />;
    case 'bleeding': return <BleedingSvg />;
    case 'snakebite': return <SnakebiteSvg />;
    case 'choking': return <ChokingSvg />;
    case 'burns': return <BurnsSvg />;
    default: return null;
  }
}

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(0);
  const [recentLogs, setRecentLogs] = useState<SymptomLog[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [lang, setLang] = useState<Language>('en');

  // Emergency SOS & First Aid Guide states
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [activeSosTab, setActiveSosTab] = useState<'sos' | 'firstAid'>('sos');
  const [emergencyContacts, setEmergencyContacts] = useState<{ name: string; phone: string }[]>([]);
  const [gpsCoords, setGpsCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [gpsStatus, setGpsStatus] = useState<'idle' | 'fetching' | 'success' | 'failed'>('idle');
  const [firstAidQuery, setFirstAidQuery] = useState('');
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [contactSaveMessage, setContactSaveMessage] = useState('');
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  const [syncToast, setSyncToast] = useState('');
  const notifRef = useRef<HTMLDivElement>(null);

  // States for sending and copying emergency SOS alerts
  const [sosSentStatus, setSosSentStatus] = useState<'idle' | 'success' | 'copied' | 'shared'>('idle');
  const [canShare, setCanShare] = useState(false);

  const loadNotifications = useCallback(async (uid: number) => {
    const notifs = await db.notifications
      .where('userId').equals(uid)
      .reverse()
      .limit(20)
      .toArray();
    setNotifications(notifs);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  async function markAllRead(uid: number) {
    const unread = notifications.filter(n => !n.read && n.id !== undefined);
    await Promise.all(unread.map(n => db.notifications.update(n.id!, { read: true })));
    loadNotifications(uid);
  }

  const fetchGPSLocation = useCallback(() => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setGpsStatus('failed');
      return;
    }
    setGpsStatus('fetching');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGpsCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setGpsStatus('success');
      },
      (error) => {
        console.error('GPS fetch failed:', error);
        setGpsStatus('failed');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  useEffect(() => {
    if (isSosOpen) {
      fetchGPSLocation();
    }
  }, [isSosOpen, fetchGPSLocation]);

  async function handleSaveContact(e: React.FormEvent) {
    e.preventDefault();
    if (!newContactName.trim() || !newContactPhone.trim()) return;
    const updated = [...emergencyContacts, { name: newContactName.trim(), phone: newContactPhone.trim() }].slice(0, 3);
    
    if (userId) {
      await db.userProfiles.update(userId, { emergencyContacts: updated });
      setEmergencyContacts(updated);
      setNewContactName('');
      setNewContactPhone('');
      setIsAddingContact(false);
      setContactSaveMessage(translate('saveSuccess', lang));
      setTimeout(() => setContactSaveMessage(''), 3000);
    }
  }

  async function handleDeleteContact(index: number) {
    const updated = emergencyContacts.filter((_, i) => i !== index);
    if (userId) {
      await db.userProfiles.update(userId, { emergencyContacts: updated });
      setEmergencyContacts(updated);
    }
  }

  const handleSendSOS = async () => {
    const gpsPart = gpsCoords 
      ? `GPS: https://maps.google.com/?q=${gpsCoords.latitude},${gpsCoords.longitude}`
      : "Location not found";
    
    let msg = "";
    if (lang === 'mr') {
      msg = `आपत्कालीन संदेश! मला तातडीने मदतीची गरज आहे. माझे स्थान: ${gpsPart}`;
    } else if (lang === 'hi') {
      msg = `आपातकालीन संदेश! मुझे तुरंत मदद की आवश्यकता है। मेरा स्थान: ${gpsPart}`;
    } else {
      msg = `EMERGENCY ALERT! I need immediate help. My location: ${gpsPart}`;
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    const separator = isIOS ? ';' : ',';
    const paramChar = isIOS ? '&' : '?';
    const phoneList = emergencyContacts.map(c => c.phone).join(separator);
    const smsUrl = `sms:${phoneList}${paramChar}body=${encodeURIComponent(msg)}`;

    // Set href synchronously so iOS Safari doesn't block the custom scheme
    window.location.href = smsUrl;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(msg);
      }
    } catch (err) {
      console.error("Failed to copy message to clipboard:", err);
    }

    setSosSentStatus('success');
    setTimeout(() => setSosSentStatus('idle'), 6000);
  };

  const handleShareSOS = async () => {
    const gpsPart = gpsCoords 
      ? `GPS: https://maps.google.com/?q=${gpsCoords.latitude},${gpsCoords.longitude}`
      : "Location not found";
    
    let msg = "";
    if (lang === 'mr') {
      msg = `आपत्कालीन संदेश! मला तातडीने मदतीची गरज आहे. माझे स्थान: ${gpsPart}`;
    } else if (lang === 'hi') {
      msg = `आपातकालीन संदेश! मुझे तुरंत मदद की आवश्यकता है। मेरा स्थान: ${gpsPart}`;
    } else {
      msg = `EMERGENCY ALERT! I need immediate help. My location: ${gpsPart}`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'EMERGENCY SOS',
          text: msg,
        });
        setSosSentStatus('shared');
        setTimeout(() => setSosSentStatus('idle'), 5000);
      } catch (err) {
        console.error("Web Share failed:", err);
      }
    }
  };

  const handleCopySOS = async () => {
    const gpsPart = gpsCoords 
      ? `GPS: https://maps.google.com/?q=${gpsCoords.latitude},${gpsCoords.longitude}`
      : "Location not found";
    
    let msg = "";
    if (lang === 'mr') {
      msg = `आपत्कालीन संदेश! मला तातडीने मदतीची गरज आहे. माझे स्थान: ${gpsPart}`;
    } else if (lang === 'hi') {
      msg = `आपातकालीन संदेश! मुझे तुरंत मदद की आवश्यकता है। मेरा स्थान: ${gpsPart}`;
    } else {
      msg = `EMERGENCY ALERT! I need immediate help. My location: ${gpsPart}`;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(msg);
        setSosSentStatus('copied');
        setTimeout(() => setSosSentStatus('idle'), 5000);
      } else {
        console.warn("Clipboard API not available");
      }
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

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

  // First-boot database seeding hook for 500+ diseases
  useEffect(() => {
    async function seedDiseases() {
      try {
        const count = await db.diseases.count();
        if (count === 0) {
          console.log('Seeding disease database for first boot...');
          const { KNOWLEDGE_BASE } = await import('@/lib/knowledgeBase');
          const { EXPANDED_DISEASES } = await import('@/lib/seeds/diseases');
          const allDiseases = [...KNOWLEDGE_BASE, ...EXPANDED_DISEASES];
          await db.diseases.bulkAdd(allDiseases);
          console.log(`Successfully seeded ${allDiseases.length} diseases.`);
        }
      } catch (err) {
        console.error('Failed to seed disease catalog:', err);
      }
    }
    seedDiseases();
  }, []);

  const handleLanguageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Language;
    setLang(selected);
    saveLanguage(selected);
  };

  const tLocal = (key: string): string => {
    const item = localTranslations[key];
    if (!item) return key;
    return item[lang] || item['en'] || key;
  };

  useEffect(() => {
    const session = getSession();
    if (!session) { router.push('/auth'); return; }
    setUserName(session.userName);
    setUserId(session.userId);

    db.symptomLogs
      .where('userId').equals(session.userId)
      .reverse()
      .limit(3)
      .toArray()
      .then(setRecentLogs);

    loadNotifications(session.userId);

    db.userProfiles.get(session.userId).then(profile => {
      if (profile?.emergencyContacts) {
        setEmergencyContacts(profile.emergencyContacts);
      }
    });

    // Online/offline detection + auto-sync
    setIsOnline(navigator.onLine);
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share);

    async function handleOnline() {
      setIsOnline(true);
      // Trigger sync
      try {
        const { syncToCloud } = await import('@/lib/syncEngine');
        const result = await syncToCloud(session!.userId);
        if (result.success && (result.synced.symptomLogs + result.synced.appointments) > 0) {
          setSyncToast(`${translate('syncComplete', lang)}: ☁️ ${result.synced.symptomLogs} symptom logs & ${result.synced.appointments} appointments`);
          setTimeout(() => setSyncToast(''), 4000);
        }
        loadNotifications(session!.userId);
      } catch {}
    }

    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // If already online on load, trigger sync immediately
    if (navigator.onLine) {
      handleOnline();
    }

    // Clock
    const tick = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const interval = setInterval(tick, 30000);

    // Close notif panel on outside click
    function handleOutsideClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifPanel(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [router, loadNotifications, lang]);

  function handleLogout() {
    clearSession();
    router.push('/auth');
  }

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return tLocal('morning');
    if (hour < 17) return tLocal('afternoon');
    return tLocal('evening');
  }

  const severityColor: Record<string, string> = {
    Low: '#0F6E56', Moderate: '#e67e22', Severe: '#c0392b', Emergency: '#7b0000',
  };

  function notifIcon(type: AppNotification['type']) {
    const icons: Record<string, string> = {
      appointment_reminder: '🗓️',
      follow_up: '🔁',
      medicine: '💊',
      sync_complete: '☁️',
      report_shared: '📤',
    };
    return icons[type] ?? '🔔';
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
          <Link href="/dashboard"          className={`${styles.navItem} ${styles.navActive}`}>🏠 {translate('dashboard', lang)}</Link>
          <Link href="/diagnosis"          className={styles.navItem}>🔬 {translate('aiDiagnosis', lang)}</Link>
          <Link href="/appointments"       className={styles.navItem}>📅 {translate('appointments', lang)}</Link>
          <Link href="/auth/profile-setup" className={styles.navItem}>👤 {translate('profileSetup', lang)}</Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={`${styles.statusChip} ${isOnline ? styles.online : styles.offline}`}>
            <span className={styles.statusDot} />
            {isOnline ? translate('online', lang) : translate('offline', lang)}
          </div>
          <button id="dashboard-logout" className={styles.logoutBtn} onClick={handleLogout}>
            {translate('logout', lang)}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Sync Toast */}
        {syncToast && (
          <div className={styles.syncToast}>{syncToast}</div>
        )}

        {/* Top Bar */}
        <div className={styles.topBar}>
          <div>
            <p className={styles.greeting}>{getGreeting()},</p>
            <h1 className={styles.userName}>{userName || '...'} 👋</h1>
          </div>
          <div className={styles.topRight}>
            {/* Language Selector Dropdown */}
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

            {/* Notification Bell */}
            <div className={styles.notifWrapper} ref={notifRef}>
              <button
                id="notification-bell"
                className={styles.bellBtn}
                onClick={() => {
                  setShowNotifPanel(v => !v);
                  if (!showNotifPanel && userId) markAllRead(userId);
                }}
              >
                🔔
                {unreadCount > 0 && (
                  <span className={styles.notifBadge}>{unreadCount > 9 ? '9+' : unreadCount}</span>
                )}
              </button>

              {showNotifPanel && (
                <div className={styles.notifPanel}>
                  <div className={styles.notifHeader}>
                    <span className={styles.notifTitle}>{tLocal('notifHeader')}</span>
                    <span className={styles.notifCount}>{notifications.length}</span>
                  </div>
                  {notifications.length === 0 ? (
                    <div className={styles.notifEmpty}>
                      <div>🔕</div>
                      <p>{tLocal('noNotifs')}</p>
                    </div>
                  ) : (
                    <div className={styles.notifList}>
                      {notifications.map(n => (
                        <div
                          key={n.id}
                          className={`${styles.notifItem} ${!n.read ? styles.notifUnread : ''}`}
                        >
                          <span className={styles.notifItemIcon}>{notifIcon(n.type)}</span>
                          <div className={styles.notifItemBody}>
                            <div className={styles.notifItemTitle}>{n.title}</div>
                            <div className={styles.notifItemMsg}>{n.body}</div>
                            <div className={styles.notifItemTime}>
                              {new Date(n.scheduledAt).toLocaleString('en-IN', {
                                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className={styles.clock}>{currentTime}</div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{translate('actions', lang)}</h2>
          <div className={styles.actionGrid}>
            <Link href="/diagnosis" id="action-diagnose" className={`${styles.actionCard} ${styles.actionPrimary}`}>
              <div className={styles.actionIcon}>🔬</div>
              <div className={styles.actionLabel}>{translate('checkSymptoms', lang)}</div>
              <div className={styles.actionSub}>{translate('checkSymptomsDesc', lang)}</div>
            </Link>

            <Link href="/diagnosis/history" id="action-history" className={`${styles.actionCard} ${styles.actionGreen}`}>
              <div className={styles.actionIcon}>📋</div>
              <div className={styles.actionLabel}>{translate('pastDiagnoses', lang)}</div>
              <div className={styles.actionSub}>{translate('pastDiagnosesDesc', lang)}</div>
            </Link>

            <Link href="/appointments" id="action-appointments" className={`${styles.actionCard} ${styles.actionOrange}`}>
              <div className={styles.actionIcon}>📅</div>
              <div className={styles.actionLabel}>{translate('bookAppointment', lang)}</div>
              <div className={styles.actionSub}>{isOnline ? translate('bookAppointmentDesc', lang) : translate('offline', lang)}</div>
              {!isOnline && <span className={styles.lockedBadge}>🔒 {translate('offline', lang)}</span>}
            </Link>

            <Link href="/auth/profile-setup" id="action-profile" className={`${styles.actionCard} ${styles.actionGray}`}>
              <div className={styles.actionIcon}>👤</div>
              <div className={styles.actionLabel}>{translate('profileSetup', lang)}</div>
              <div className={styles.actionSub}>{translate('medicalReportsDesc', lang)}</div>
            </Link>

            <button 
              id="action-sos" 
              className={`${styles.actionCard} ${styles.actionRed}`}
              onClick={() => setIsSosOpen(true)}
              style={{ cursor: 'pointer', textAlign: 'left', border: 'none', font: 'inherit' }}
            >
              <div className={styles.actionIcon}>🚨</div>
              <div className={styles.actionLabel}>{translate('emergencySOSCardTitle', lang)}</div>
              <div className={styles.actionSub}>{translate('emergencySOSCardDesc', lang)}</div>
            </button>
          </div>
        </section>

        {/* Recent Logs */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{translate('recentLogs', lang)}</h2>
            <Link href="/diagnosis/history" className={styles.viewAll}>{translate('viewAll', lang)} →</Link>
          </div>

          {recentLogs.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📭</div>
              <p className={styles.emptyText}>{translate('emptyLogs', lang)}</p>
              <Link href="/diagnosis" className={styles.emptyBtn}>{translate('checkSymptoms', lang)} →</Link>
            </div>
          ) : (
            <div className={styles.logList}>
              {recentLogs.map(log => (
                <div key={log.id} className={styles.logItem}>
                  <div className={styles.logLeft}>
                    <div className={styles.logDesc}>{log.description}</div>
                    <div className={styles.logMeta}>
                      {new Date(log.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      {' · '}{log.duration}
                    </div>
                  </div>
                  <span
                    className={styles.logBadge}
                    style={{ color: severityColor[log.severity], background: severityColor[log.severity] + '18' }}
                  >
                    {log.severity}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Offline Notice */}
        {!isOnline && (
          <div className={styles.offlineBanner}>
            {tLocal('offlineToast')}
          </div>
        )}
      </main>

      {/* Emergency SOS Overlay */}
      {isSosOpen && (
        <div className={styles.overlay} onClick={(e) => {
          if (e.target === e.currentTarget) setIsSosOpen(false);
        }}>
          <div className={styles.sosContainer}>
            <div className={styles.sosHeader}>
              <h2 className={styles.sosTitle}>{translate('sosTitle', lang)}</h2>
              <button className={styles.closeBtn} onClick={() => setIsSosOpen(false)}>✕</button>
            </div>

            <div className={styles.tabs}>
              <button 
                className={`${styles.tab} ${activeSosTab === 'sos' ? styles.tabActive : styles.tabInactive}`}
                onClick={() => setActiveSosTab('sos')}
              >
                🚨 {translate('sosTriggerTab', lang)}
              </button>
              <button 
                className={`${styles.tab} ${activeSosTab === 'firstAid' ? styles.tabActive : styles.tabInactive}`}
                onClick={() => setActiveSosTab('firstAid')}
              >
                📚 {translate('firstAidGuideTab', lang)}
              </button>
            </div>

            <div className={styles.sosBody}>
              {activeSosTab === 'sos' ? (
                <div className={styles.sosAlertSection}>
                  <div className={styles.gpsCard}>
                    <span className={styles.gpsIcon}>
                      {gpsStatus === 'fetching' ? '⏳' : gpsStatus === 'success' ? '📍' : '⚠️'}
                    </span>
                    <div className={styles.gpsDetails}>
                      <div className={styles.gpsTitle}>{translate('gpsStatusLabel', lang)}</div>
                      <div className={styles.gpsText}>
                        {gpsStatus === 'fetching' && translate('gpsFetching', lang)}
                        {gpsStatus === 'success' && gpsCoords && `${translate('gpsSuccess', lang)}: ${gpsCoords.latitude.toFixed(5)}, ${gpsCoords.longitude.toFixed(5)}`}
                        {gpsStatus === 'failed' && translate('gpsFailed', lang)}
                        {gpsStatus === 'idle' && "Click Trigger to locate..."}
                      </div>
                    </div>
                  </div>

                  <div className={styles.triggerBox}>
                    <div className={styles.triggerTitle}>{translate('emergencySOSCardTitle', lang)}</div>
                    <div className={styles.triggerDesc}>{translate('sendSmsDesc', lang)}</div>
                    
                    {emergencyContacts.length > 0 ? (
                      <div className={styles.sosButtonGroup}>
                        <button onClick={handleSendSOS} className={styles.sendBtn}>
                          🚨 {translate('sendSmsBtn', lang)}
                        </button>
                        {canShare && (
                          <button onClick={handleShareSOS} className={styles.copySosBtn}>
                            📤 {tLocal('shareBtn')}
                          </button>
                        )}
                        <button onClick={handleCopySOS} className={styles.copySosBtn}>
                          📋 {tLocal('copyBtn')}
                        </button>
                        
                        {sosSentStatus === 'success' && (
                          <div className={styles.sosStatusToast}>
                            {tLocal('sosSuccessToast')}
                          </div>
                        )}
                        {sosSentStatus === 'copied' && (
                          <div className={styles.sosStatusToast}>
                            {tLocal('copySuccess')}
                          </div>
                        )}
                        {sosSentStatus === 'shared' && (
                          <div className={styles.sosStatusToast}>
                            {tLocal('shareSuccess')}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className={styles.alertDanger} style={{ color: '#f87171', fontSize: '13px', fontWeight: 'bold' }}>
                        ⚠️ Please add at least one emergency contact below to trigger the alert.
                      </div>
                    )}
                  </div>

                  <div className={styles.contactsHeaderRow}>
                    <h3 className={styles.contactsTitle}>{translate('emergencyContactsHeader', lang)}</h3>
                    {emergencyContacts.length < 3 && !isAddingContact && (
                      <button className={styles.addBtn} onClick={() => setIsAddingContact(true)}>
                        {translate('addContactBtn', lang)}
                      </button>
                    )}
                  </div>

                  {contactSaveMessage && (
                    <div style={{ color: '#34d399', fontSize: '13px', fontWeight: 'bold', marginTop: '8px' }}>
                      {contactSaveMessage}
                    </div>
                  )}

                  {isAddingContact && (
                    <form onSubmit={handleSaveContact} className={styles.contactForm}>
                      <div className={styles.formFields}>
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>{translate('contactNameLabel', lang)}</label>
                          <input 
                            type="text" 
                            className={styles.textInput}
                            value={newContactName}
                            onChange={e => setNewContactName(e.target.value)}
                            required
                            placeholder="Name"
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>{translate('contactPhoneLabel', lang)}</label>
                          <input 
                            type="tel" 
                            className={styles.textInput}
                            value={newContactPhone}
                            onChange={e => setNewContactPhone(e.target.value)}
                            required
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className={styles.formActions}>
                        <button type="button" className={styles.cancelBtn} onClick={() => setIsAddingContact(false)}>
                          {translate('cancel', lang)}
                        </button>
                        <button type="submit" className={styles.saveBtn}>
                          {translate('confirm', lang)}
                        </button>
                      </div>
                    </form>
                  )}

                  <div className={styles.contactsGrid}>
                    {emergencyContacts.length === 0 ? (
                      <div className={styles.emptyContacts}>
                        {translate('noContacts', lang)}
                      </div>
                    ) : (
                      emergencyContacts.map((contact, idx) => (
                        <div key={idx} className={styles.contactCard}>
                          <div>
                            <div className={styles.contactInfoName}>{contact.name}</div>
                            <div className={styles.contactInfoPhone}>{contact.phone}</div>
                          </div>
                          <button className={styles.deleteBtn} onClick={() => handleDeleteContact(idx)}>
                            {translate('deleteBtn', lang)}
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.faSection}>
                  <div className={styles.searchWrapper}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input 
                      type="text" 
                      className={styles.searchBar}
                      placeholder={translate('searchFirstAidPlaceholder', lang)}
                      value={firstAidQuery}
                      onChange={e => setFirstAidQuery(e.target.value)}
                    />
                  </div>

                  <p className={styles.faIntro}>
                    💡 {translate('firstAidIntro', lang)}
                  </p>

                  <div className={styles.faAccordion}>
                    {FIRST_AID_GUIDES.filter(guide => {
                      const title = translate(guide.titleKey, lang).toLowerCase();
                      const steps = translate(guide.stepsKey, lang).toLowerCase();
                      const query = firstAidQuery.toLowerCase();
                      return title.includes(query) || steps.includes(query);
                    }).map(guide => {
                      const isOpen = activeAccordion === guide.id;
                      return (
                        <div key={guide.id} className={`${styles.faItem} ${isOpen ? styles.faItemOpen : ''}`}>
                          <button 
                            className={styles.faHeading}
                            onClick={() => setActiveAccordion(isOpen ? null : guide.id)}
                          >
                            <span>{guide.icon} {translate(guide.titleKey, lang)}</span>
                            <span className={`${styles.faHeadingArrow} ${isOpen ? styles.faHeadingArrowOpen : ''}`}>▼</span>
                          </button>
                          {isOpen && (
                            <div className={styles.faContent}>
                              <div className={styles.faFlexLayout}>
                                <div className={styles.faSvgContainer}>
                                  {getFirstAidSvg(guide.id)}
                                </div>
                                <div className={styles.faDetailsContainer}>
                                  <div className={styles.faStepsTitle}>{translate('immediateSteps', lang)}</div>
                                  <p className={styles.faStepsText}>{translate(guide.stepsKey, lang)}</p>
                                  
                                  <div className={styles.warningBox}>
                                    <div className={styles.warningTitle}>{translate('whatNotToDo', lang)}</div>
                                    <p className={styles.warningText}>{translate(guide.warningsKey, lang)}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className={styles.hotlineBanner}>
                    {translate('emergencyHotline', lang)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
