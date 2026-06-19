'use client';

import { useState } from 'react';

export default function DebugPage() {
  const [log, setLog] = useState<string[]>(['Debug page loaded ✅']);

  function addLog(msg: string) {
    setLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }

  async function testLocalStorage() {
    try {
      localStorage.setItem('__test__', '1');
      localStorage.removeItem('__test__');
      addLog('✅ localStorage works');
    } catch (e: any) {
      addLog(`❌ localStorage FAILED: ${e.message}`);
    }
  }

  async function testIndexedDB() {
    try {
      const request = indexedDB.open('__test_db__', 1);
      request.onsuccess = () => {
        addLog('✅ IndexedDB works');
        request.result.close();
        indexedDB.deleteDatabase('__test_db__');
      };
      request.onerror = () => {
        addLog(`❌ IndexedDB FAILED: ${request.error}`);
      };
    } catch (e: any) {
      addLog(`❌ IndexedDB FAILED: ${e.message}`);
    }
  }

  async function testDexie() {
    try {
      const { db } = await import('@/lib/db');
      const count = await db.userProfiles.count();
      addLog(`✅ Dexie works — ${count} user profiles found`);
    } catch (e: any) {
      addLog(`❌ Dexie FAILED: ${e.message}`);
    }
  }

  async function testCrypto() {
    try {
      if (typeof crypto !== 'undefined' && crypto.subtle) {
        const encoder = new TextEncoder();
        const data = encoder.encode('test');
        await crypto.subtle.digest('SHA-256', data);
        addLog('✅ crypto.subtle works (secure context)');
      } else {
        addLog('⚠️ crypto.subtle NOT available (non-secure context — fallback will be used)');
      }
    } catch (e: any) {
      addLog(`❌ crypto.subtle FAILED: ${e.message}`);
    }
  }

  async function testRegister() {
    try {
      const { registerUser } = await import('@/lib/auth');
      const testName = `__test_user_${Date.now()}`;
      const result = await registerUser(testName, 'test1234');
      if (result.success) {
        addLog(`✅ Registration works — userId: ${result.userId}`);
        // Clean up
        const { db } = await import('@/lib/db');
        if (result.userId) await db.userProfiles.delete(result.userId);
        addLog('🧹 Test user cleaned up');
      } else {
        addLog(`❌ Registration FAILED: ${result.error}`);
      }
    } catch (e: any) {
      addLog(`❌ Registration CRASHED: ${e.message}`);
    }
  }

  async function testClipboard() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('test');
        addLog('✅ Clipboard API works');
      } else {
        addLog('⚠️ Clipboard API NOT available');
      }
    } catch (e: any) {
      addLog(`❌ Clipboard FAILED: ${e.message}`);
    }
  }

  function testNavigator() {
    addLog(`📱 User Agent: ${navigator.userAgent}`);
    addLog(`🌐 Online: ${navigator.onLine}`);
    addLog(`🔒 Secure Context: ${window.isSecureContext}`);
    addLog(`📍 Geolocation: ${!!navigator.geolocation}`);
    addLog(`📤 Web Share: ${!!navigator.share}`);
    addLog(`🔊 SpeechRecognition: ${!!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)}`);
  }

  async function runAllTests() {
    setLog(['🚀 Running all tests...']);
    testNavigator();
    await testLocalStorage();
    await testIndexedDB();
    await testCrypto();
    // Give IndexedDB time to respond
    setTimeout(async () => {
      await testDexie();
      await testRegister();
      await testClipboard();
      addLog('✅ All tests complete!');
    }, 500);
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0b0f19',
      color: '#f8fafc',
      padding: '24px',
      fontFamily: 'monospace'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>🔧 MediReach Debug</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '14px' }}>
        Open this page on your phone to diagnose what is broken.
      </p>

      <button
        onClick={runAllTests}
        style={{
          padding: '16px 32px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          color: 'white',
          border: 'none',
          borderRadius: '16px',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          marginBottom: '24px',
          width: '100%'
        }}
      >
        🧪 Run All Tests
      </button>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '16px',
        maxHeight: '60vh',
        overflowY: 'auto'
      }}>
        {log.map((entry, i) => (
          <div key={i} style={{
            padding: '8px 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            fontSize: '13px',
            lineHeight: '1.5',
            wordBreak: 'break-all'
          }}>
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
}
