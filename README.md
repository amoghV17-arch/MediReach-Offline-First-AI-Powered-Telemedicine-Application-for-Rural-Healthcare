# 🩺 MediReach

> **AI-powered healthcare assistant for underserved communities** — works fully offline, speaks your language, and puts medical guidance in everyone's hands.

---

## 📌 What is MediReach?

MediReach is a Progressive Web App (PWA) that brings AI-powered medical diagnosis and doctor appointment booking to patients in rural and low-connectivity areas of India. It works **fully offline**, stores data **encrypted locally**, and supports **English, Hindi, and Marathi** — so no one is left behind due to language or internet barriers.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI Symptom Diagnosis** | Describe symptoms and get possible conditions, home remedies, OTC medicine suggestions, and specialist referrals — powered by Claude AI |
| 📶 **Offline-First** | Full functionality without internet. Uses a built-in knowledge base as fallback when offline |
| 🔐 **Local Encryption** | All medical data (reports, diagnoses, images) stored encrypted on-device using Dexie.js (IndexedDB) |
| ☁️ **Background Sync** | Automatically syncs data to the cloud when connectivity is restored |
| 📅 **Doctor Appointments** | Browse available doctors and book video call appointments |
| 📷 **Image Analysis** | Upload photos of wounds, rashes, or lab reports — Claude Vision analyzes them alongside your symptoms |
| 🌐 **Multilingual** | Full UI in English, Hindi (हिन्दी), and Marathi (मराठी) |
| 📋 **Diagnosis History** | Timeline of all past symptom logs and diagnoses with severity tracking |
| 🔔 **Notifications** | Appointment reminders, follow-up alerts, sync status updates |
| 📤 **Report Sharing** | Share diagnosis reports with doctors before or during appointments |

---

## 🖼️ Screenshots


---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + React 19
- **Language:** TypeScript 5
- **Offline/PWA:** [Serwist](https://serwist.pages.dev/) (Service Worker)
- **Local DB:** [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
- **AI Engine:** Claude API (claude-sonnet) with offline knowledge base fallback
- **Styling:** CSS Modules
- **Deployment:** Vercel-ready

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/               # Login & profile setup
│   ├── dashboard/          # Main dashboard
│   ├── diagnosis/          # Symptom input, results, history
│   ├── appointments/       # Doctor booking & video calls
│   └── api/                # API routes (diagnosis, appointments, sync)
├── lib/
│   ├── diagnosisEngine.ts  # AI + offline diagnosis orchestrator
│   ├── knowledgeBase.ts    # Offline symptom → condition mapping
│   ├── syncEngine.ts       # Cloud sync logic
│   ├── db.ts               # Dexie IndexedDB schema
│   ├── encryption.ts       # Local data encryption
│   ├── auth.ts             # Session management
│   └── translations.ts     # EN / HI / MR language strings
└── app/sw.ts               # Service worker (PWA)
```

---

## 🧠 How the AI Diagnosis Works

1. User enters symptoms (text), selects body parts, sets severity level, and optionally uploads images
2. If **online** → Claude API analyzes symptoms + images and returns structured diagnosis
3. If **offline** → local knowledge base matches symptoms to conditions using keyword matching
4. Result includes: possible conditions (with confidence), home remedies, OTC medicines, specialist referral, and emergency warning signs
5. Everything is saved locally (encrypted) and synced to cloud when connectivity returns

---

## 🌍 Offline Support

MediReach is built as a PWA with full offline capability:

- Service worker caches all app assets on first load
- Dexie.js stores symptom logs, diagnosis results, appointments, and medical reports in IndexedDB
- Background sync triggers automatically when the device reconnects
- Offline status is shown in the UI with a persistent banner

---

## 🔒 Privacy & Security

- All medical data is stored **locally on the user's device**
- Data is **encrypted at rest** before being written to IndexedDB
- No sensitive data is sent to any server without user action
- Sessions are managed client-side with no persistent tokens

---

## 🤝 Contributing

Pull requests are welcome! To contribute:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built with ❤️ for accessible healthcare in India.

> ⚠️ **Disclaimer:** MediReach is an informational tool and does not replace professional medical advice. Always consult a qualified doctor for medical decisions.




