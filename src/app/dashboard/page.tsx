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
  }
};

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(0);
  const [recentLogs, setRecentLogs] = useState<SymptomLog[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [lang, setLang] = useState<Language>('en');

  // Notifications
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  const [syncToast, setSyncToast] = useState('');
  const notifRef = useRef<HTMLDivElement>(null);

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

    // Online/offline detection + auto-sync
    setIsOnline(navigator.onLine);

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
    </div>
  );
}
