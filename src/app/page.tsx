'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSavedLanguage, saveLanguage, translate, type Language } from '@/lib/translations';
import styles from './page.module.css';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    setLang(getSavedLanguage());
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Language;
    setLang(selected);
    saveLanguage(selected);
  };

  return (
    <main className={styles.page}>
      {/* Language Selector Top Bar */}
      <div className={styles.topNav}>
        <div className={styles.brandTitle}>🩺 {translate('brand', lang)}</div>
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

      {/* Animated Background Elements */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.glassContent}>
        <div className={styles.logoBadge}>🩺 {translate('brand', lang)}</div>
        
        <h1 className={styles.heroTitle}>
          {translate('heroTitle1', lang)} <br />
          <span>{translate('heroTitle2', lang)}</span>
        </h1>
        
        <p className={styles.heroSub}>
          {translate('heroSub', lang)}
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/auth" className={styles.primaryCta}>
            {translate('getStarted', lang)}
          </Link>
          <Link href="/dashboard" className={styles.secondaryCta}>
            {translate('launchDashboard', lang)}
          </Link>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <span className={styles.featIcon}>📶</span>
            <span>{translate('offlineSupport', lang)}</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featIcon}>🤖</span>
            <span>{translate('aiDiagnosis', lang)}</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featIcon}>🔐</span>
            <span>{translate('localEncryption', lang)}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
