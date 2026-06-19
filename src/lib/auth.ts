/**
 * Local authentication utilities.
 * Uses Web Crypto API (SHA-256) for password hashing.
 * All auth data is stored locally via Dexie.js — works fully offline.
 */

import { db } from './db';

// Hash a password using SHA-256
export async function hashPassword(password: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } else {
    // Fallback for non-secure contexts (e.g., local network HTTP testing)
    return btoa(password).split('').reverse().join('');
  }
}

// Register a new user locally
export async function registerUser(name: string, password: string): Promise<{ success: boolean; error?: string; userId?: number }> {
  try {
    // Check if user already exists
    const existing = await db.userProfiles.where('name').equals(name).first();
    if (existing) {
      return { success: false, error: 'A user with this name already exists.' };
    }

    const pinHash = await hashPassword(password);
    const userId = await db.userProfiles.add({
      name,
      age: null,
      gender: '',
      bloodGroup: '',
      weight: null,
      height: null,
      allergies: [],
      chronicConditions: [],
      pinHash,
    });

    return { success: true, userId: userId as number };
  } catch (err) {
    return { success: false, error: 'Registration failed. Please try again.' };
  }
}

// Login with local credentials
export async function loginUser(name: string, password: string): Promise<{ success: boolean; error?: string; userId?: number }> {
  try {
    const user = await db.userProfiles.where('name').equals(name).first();
    if (!user) {
      return { success: false, error: 'No account found with this name.' };
    }

    const pinHash = await hashPassword(password);
    if (user.pinHash !== pinHash) {
      return { success: false, error: 'Incorrect password.' };
    }

    return { success: true, userId: user.id };
  } catch (err) {
    return { success: false, error: 'Login failed. Please try again.' };
  }
}

// Save session to localStorage
export function saveSession(userId: number, userName: string) {
  try {
    localStorage.setItem('medireach_session', JSON.stringify({ userId, userName, loggedInAt: Date.now() }));
  } catch (e) {
    console.warn("localStorage not available:", e);
  }
}

// Get current session
export function getSession(): { userId: number; userName: string; loggedInAt: number } | null {
  try {
    const raw = localStorage.getItem('medireach_session');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

// Logout
export function clearSession() {
  try {
    localStorage.removeItem('medireach_session');
  } catch (e) {
    console.warn("localStorage not available:", e);
  }
}
