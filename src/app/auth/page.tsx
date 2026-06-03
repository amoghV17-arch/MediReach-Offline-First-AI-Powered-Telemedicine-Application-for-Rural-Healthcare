'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser, loginUser, saveSession } from '@/lib/auth';
import { getSavedLanguage, saveLanguage, translate, type Language } from '@/lib/translations';
import styles from './auth.module.css';

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    setLang(getSavedLanguage());
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Language;
    setLang(selected);
    saveLanguage(selected);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim() || !password.trim()) {
      setError(translate('fillFields', lang));
      return;
    }

    if (mode === 'register' && password !== confirmPassword) {
      setError(translate('passwordsMismatch', lang));
      return;
    }

    if (password.length < 4) {
      setError(translate('passwordMinLength', lang));
      return;
    }

    setLoading(true);

    try {
      if (mode === 'register') {
        const result = await registerUser(name.trim(), password);
        if (result.success && result.userId) {
          saveSession(result.userId, name.trim());
          setSuccess(translate('accountCreated', lang));
          setTimeout(() => router.push('/auth/profile-setup'), 800);
        } else {
          setError(result.error || 'Registration failed.');
        }
      } else {
        const result = await loginUser(name.trim(), password);
        if (result.success && result.userId) {
          saveSession(result.userId, name.trim());
          setSuccess(translate('loginSuccess', lang));
          setTimeout(() => router.push('/dashboard'), 800);
        } else {
          setError(result.error || 'Login failed.');
        }
      }
    } catch {
      setError(translate('errorMessage', lang));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.authPage}>
      {/* Floating back button */}
      <div style={{ position: 'absolute', top: 24, left: 24, zIndex: 10 }}>
        <button className="btn-premium btn-primary" onClick={() => router.push('/')} style={{ padding: '8px 16px', fontSize: 14 }}>
          {translate('back', lang)}
        </button>
      </div>

      <div className={styles.authCard}>
        {/* Language selector in card */}
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

        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>🩺</div>
          <div className={styles.logoTitle}>MediReach</div>
          <div className={styles.logoSub}>{translate('healthAccessSub', lang)}</div>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${mode === 'login' ? styles.tabActive : ''}`}
            onClick={() => { setMode('login'); setError(''); setSuccess(''); }}
          >
            {translate('signIn', lang)}
          </button>
          <button
            className={`${styles.tab} ${mode === 'register' ? styles.tabActive : ''}`}
            onClick={() => { setMode('register'); setError(''); setSuccess(''); }}
          >
            {translate('register', lang)}
          </button>
        </div>

        {/* Error / Success Messages */}
        {error && <div className={styles.error}>⚠️ {error}</div>}
        {success && <div className={styles.success}>✅ {success}</div>}

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>👤</span>
            <input
              id="auth-name"
              className={styles.input}
              type="text"
              placeholder={translate('fullNamePlaceholder', lang)}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>🔒</span>
            <input
              id="auth-password"
              className={styles.input}
              type="password"
              placeholder={translate('passwordPlaceholder', lang)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
            />
          </div>

          {mode === 'register' && (
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>🔒</span>
              <input
                id="auth-confirm-password"
                className={styles.input}
                type="password"
                placeholder={translate('confirmPasswordPlaceholder', lang)}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          )}

          <button
            id="auth-submit"
            className={styles.submitBtn}
            type="submit"
            disabled={loading}
          >
            {loading ? translate('pleaseWait', lang) : mode === 'login' ? translate('signIn', lang) : translate('createAccount', lang)}
          </button>
        </form>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.offlineChip}>
            <span className={styles.dot}></span>
            {translate('worksOffline', lang)}
          </div>
        </div>
      </div>
    </div>
  );
}
