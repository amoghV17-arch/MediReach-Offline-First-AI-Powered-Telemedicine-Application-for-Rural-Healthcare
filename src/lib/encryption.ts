/**
 * Basic Web Crypto API implementation for encrypting local data.
 * Used for storing sensitive medical info in IndexedDB.
 */

// Generate a random key for symmetric encryption (AES-GCM)
export async function generateKey(): Promise<CryptoKey> {
  return await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
}

// Encrypt a string and return as a Base64-encoded string
export async function encryptData(text: string, key: CryptoKey): Promise<{ cipherTextBase64: string, ivBase64: string }> {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encodedText = new TextEncoder().encode(text);
  
  const cipherBuffer = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encodedText
  );

  const cipherTextBase64 = btoa(String.fromCharCode(...new Uint8Array(cipherBuffer)));
  const ivBase64 = btoa(String.fromCharCode(...iv));

  return { cipherTextBase64, ivBase64 };
}

// Decrypt a Base64-encoded string back to the original text
export async function decryptData(cipherTextBase64: string, ivBase64: string, key: CryptoKey): Promise<string> {
  const cipherBytes = new Uint8Array(atob(cipherTextBase64).split("").map(c => c.charCodeAt(0)));
  const iv = new Uint8Array(atob(ivBase64).split("").map(c => c.charCodeAt(0)));

  const decryptedBuffer = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv },
    key,
    cipherBytes
  );

  return new TextDecoder().decode(decryptedBuffer);
}
