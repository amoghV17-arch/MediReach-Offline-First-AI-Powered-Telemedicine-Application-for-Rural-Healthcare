// MediReach Translation System - Supports English, Hindi, and Marathi
export type Language = 'en' | 'hi' | 'mr';

export interface TranslationDict {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

export const translations: TranslationDict = {
  // Navigation & Branding
  brand: {
    en: "MediReach v1.0",
    hi: "MediReach v1.0",
    mr: "MediReach v1.0"
  },
  dashboard: {
    en: "Dashboard",
    hi: "डैशबोर्ड",
    mr: "डॅशबोर्ड"
  },
  aiDiagnosis: {
    en: "AI Diagnosis",
    hi: "एआई निदान",
    mr: "एआय निदान"
  },
  history: {
    en: "History",
    hi: "इतिहास",
    mr: "इतिहास"
  },
  appointments: {
    en: "Appointments",
    hi: "अपॉइंटमेंट्स",
    mr: "अपॉइंटमेंट्स"
  },
  profileSetup: {
    en: "Profile Setup",
    hi: "प्रोफ़ाइल सेटअप",
    mr: "प्रोफाइल सेटअप"
  },
  logout: {
    en: "Logout",
    hi: "लॉगआउट",
    mr: "लॉगआउट"
  },
  online: {
    en: "Online",
    hi: "ऑनलाइन",
    mr: "ऑनलाइन"
  },
  offline: {
    en: "Offline",
    hi: "ऑफलाइन",
    mr: "ऑफलाईन"
  },
  back: {
    en: "← Back",
    hi: "← वापस",
    mr: "← मागे"
  },
  confirm: {
    en: "Confirm",
    hi: "पुष्टि करें",
    mr: "नक्की करा"
  },
  cancel: {
    en: "Cancel",
    hi: "रद्द करें",
    mr: "रद्द करा"
  },

  // Landing Page
  heroTitle1: {
    en: "Healthcare",
    hi: "स्वास्थ्य सेवा",
    mr: "आरोग्य सेवा"
  },
  heroTitle2: {
    en: "Without Boundaries",
    hi: "सीमाओं के बिना",
    mr: "सीमांशिवाय"
  },
  heroSub: {
    en: "The world's first truly offline-first telemedicine platform. Get instant AI diagnosis and medical support, even without internet.",
    hi: "दुनिया का पहला पूरी तरह से offline-first टेलीमेडिसिन प्लेटफॉर्म। इंटरनेट के बिना भी तुरंत एआई निदान और चिकित्सा सहायता प्राप्त करें।",
    mr: "जगातील पहिले खरोखर ऑफलाइन-फर्स्ट टेलिमेडिसिन प्लॅटफॉर्म. इंटरनेटशिवाय त्वरित एआय निदान आणि वैद्यकीय मदत मिळवा."
  },
  getStarted: {
    en: "Get Started Free",
    hi: "मुफ़्त में शुरू करें",
    mr: "मोफत सुरू करा"
  },
  launchDashboard: {
    en: "Launch Dashboard",
    hi: "डैशबोर्ड खोलें",
    mr: "डॅशबोर्ड सुरू करा"
  },
  offlineSupport: {
    en: "100% Offline Support",
    hi: "100% ऑफलाइन सहायता",
    mr: "१००% ऑफलाईन मदत"
  },
  localEncryption: {
    en: "Local Encryption",
    hi: "स्थानीय एन्क्रिप्शन",
    mr: "स्थानिक एन्क्रिप्शन"
  },

  // Auth Page
  signIn: {
    en: "Sign In",
    hi: "साइन इन करें",
    mr: "साइन इन करा"
  },
  register: {
    en: "Register",
    hi: "पंजीकरण",
    mr: "नोंदणी"
  },
  fullNamePlaceholder: {
    en: "Your full name",
    hi: "आपका पूरा नाम",
    mr: "तुमचे पूर्ण नाव"
  },
  passwordPlaceholder: {
    en: "Password / PIN",
    hi: "पासवर्ड / पिन",
    mr: "पासवर्ड / पिन"
  },
  confirmPasswordPlaceholder: {
    en: "Confirm password",
    hi: "पासवर्ड की पुष्टि करें",
    mr: "पासवर्डची पुष्टी करा"
  },
  createAccount: {
    en: "Create Account",
    hi: "खाता बनाएं",
    mr: "खाते तयार करा"
  },
  healthAccessSub: {
    en: "Health Access — Anytime, Anywhere",
    hi: "स्वास्थ्य सेवा — कभी भी, कहीं भी",
    mr: "आरोग्य सेवा — कधीही, कुठेही"
  },
  worksOffline: {
    en: "Works Offline",
    hi: "ऑफलाइन काम करता है",
    mr: "ऑफलाईन काम करते"
  },
  fillFields: {
    en: "Please fill in all fields.",
    hi: "कृपया सभी फ़ील्ड भरें।",
    mr: "कृपया सर्व रकाने भरा."
  },
  passwordsMismatch: {
    en: "Passwords do not match.",
    hi: "पासवर्ड मेल नहीं खाते।",
    mr: "पासवर्ड जुळत नाहीत."
  },
  passwordMinLength: {
    en: "Password must be at least 4 characters.",
    hi: "पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।",
    mr: "पासवर्ड किमान ४ अक्षरांचा असावा."
  },
  accountCreated: {
    en: "Account created! Redirecting...",
    hi: "खाता बन गया! पुनर्निर्देशित किया जा रहा है...",
    mr: "खाते तयार झाले! पुढील पानावर जात आहे..."
  },
  loginSuccess: {
    en: "Login successful! Redirecting...",
    hi: "लॉगिन सफल! पुनर्निर्देशित किया जा रहा है...",
    mr: "लॉगिन यशस्वी! पुढील पानावर जात आहे..."
  },
  pleaseWait: {
    en: "Please wait...",
    hi: "कृपया प्रतीक्षा करें...",
    mr: "कृपया प्रतीक्षा करा..."
  },
  errorMessage: {
    en: "Something went wrong. Please try again.",
    hi: "कुछ गलत हो गया। कृपया पुन: प्रयास करें।",
    mr: "काहीतरी चुकले. कृपया पुन्हा प्रयत्न करा."
  },

  // Dashboard Page
  welcomeBack: {
    en: "Welcome Back,",
    hi: "स्वागत है,",
    mr: "स्वागत आहे,"
  },
  today: {
    en: "Today",
    hi: "आज",
    mr: "आज"
  },
  actions: {
    en: "Quick Actions",
    hi: "त्वरित कार्य",
    mr: "जलद कृती"
  },
  checkSymptoms: {
    en: "Check New Symptoms",
    hi: "नए लक्षणों की जाँच करें",
    mr: "नवीन लक्षणांची तपासणी करा"
  },
  checkSymptomsDesc: {
    en: "Enter symptoms for offline or online AI diagnosis",
    hi: "ऑफ़लाइन या ऑनलाइन एआई निदान के लिए लक्षण दर्ज करें",
    mr: "ऑफलाईन किंवा ऑनलाईन एआय निदानासाठी लक्षणे टाका"
  },
  bookAppointment: {
    en: "Consult a Doctor",
    hi: "डॉक्टर से परामर्श लें",
    mr: "डॉक्टरांचा सल्ला घ्या"
  },
  bookAppointmentDesc: {
    en: "Book audio/video calls with specialized doctors",
    hi: "विशेषज्ञ डॉक्टरों के साथ ऑडियो/वीडियो कॉल बुक करें",
    mr: "तज्ज्ञ डॉक्टरांसोबत ऑडिओ/व्हिडिओ कॉल बुक करा"
  },
  pastDiagnoses: {
    en: "Diagnosis History",
    hi: "निदान इतिहास",
    mr: "निदान इतिहास"
  },
  pastDiagnosesDesc: {
    en: "Review your previous diagnosis reports and medical history",
    hi: "अपनी पिछली निदान रिपोर्ट और चिकित्सा इतिहास की समीक्षा करें",
    mr: "तुमचे मागील निदान अहवाल आणि इतिहास तपासा"
  },
  medicalReportsDesc: {
    en: "Manage and share your uploaded health records safely",
    hi: "अपने अपलोड किए गए स्वास्थ्य रिकॉर्ड को सुरक्षित रूप से प्रबंधित और साझा करें",
    mr: "तुमचे अपलोड केलेले वैद्यकीय रेकॉर्ड सुरक्षितपणे व्यवस्थापित आणि शेअर करा"
  },
  recentLogs: {
    en: "Recent Health Logs",
    hi: "हाल के स्वास्थ्य लॉग",
    mr: "अलीकडील आरोग्य लॉग"
  },
  emptyLogs: {
    en: "No health logs found. Let's record your first symptom check!",
    hi: "कोई स्वास्थ्य लॉग नहीं मिला। आइए आपका पहला लक्षण परीक्षण रिकॉर्ड करें!",
    mr: "कोणतेही लॉग आढळले नाहीत. पहिली लक्षणे नोंदवा!"
  },
  viewAll: {
    en: "View All",
    hi: "सभी देखें",
    mr: "सर्व पहा"
  },
  offlineBanner: {
    en: "⚠️ You are offline. Online consulting features are locked, but AI Diagnosis is fully functional.",
    hi: "⚠️ आप ऑफलाइन हैं। ऑनलाइन परामर्श सुविधाएँ बंद हैं, लेकिन एआई निदान पूरी तरह से सक्रिय है।",
    mr: "⚠️ तुम्ही ऑफलाईन आहात. ऑनलाईन सल्ला सेवा बंद आहेत, पण एआय निदान पूर्णपणे कार्यरत आहे."
  },
  syncComplete: {
    en: "Data Synced to Cloud",
    hi: "डेटा क्लाउड पर सिंक हो गया",
    mr: "माहिती क्लाउडवर सिंक झाली"
  },

  // Diagnosis Entry
  symptomEntry: {
    en: "Symptom Entry",
    hi: "लक्षण प्रविष्टि",
    mr: "लक्षणे नोंदवा"
  },
  describeSymptom: {
    en: "What symptoms are you experiencing? *",
    hi: "आप किन लक्षणों का अनुभव कर रहे हैं? *",
    mr: "तुम्हाला कोणती लक्षणे जाणवत आहेत? *"
  },
  symptomPlaceholder: {
    en: "Describe how you feel (e.g., headache, fever for 2 days, chest pain)...",
    hi: "वर्णन करें कि आप कैसा महसूस कर रहे हैं (जैसे, सिरदर्द, 2 दिनों से बुखार, छाती में दर्द)...",
    mr: "तुम्हाला कसे वाटत आहे याचे वर्णन करा (उदा., डोकेदुखी, २ दिवसांपासून ताप, छातीत दुखणे)..."
  },
  severityLevel: {
    en: "Severity Level",
    hi: "तीव्रता का स्तर",
    mr: "तीव्रतेची पातळी"
  },
  duration: {
    en: "Duration",
    hi: "अवधि",
    mr: "कालावधी"
  },
  durationPlaceholder: {
    en: "E.g., 2 days, 1 week",
    hi: "जैसे, 2 दिन, 1 सप्ताह",
    mr: "उदा., २ दिवस, १ आठवडा"
  },
  affectedBodyParts: {
    en: "Affected Body Parts",
    hi: "प्रभावित शरीर के अंग",
    mr: "प्रभावित शरीराचे अवयव"
  },
  uploadImages: {
    en: "Upload Medical Images / Reports (Optional)",
    hi: "चिकित्सा चित्र / रिपोर्ट अपलोड करें (वैकल्पिक)",
    mr: "चिकित्सा छायाचित्रे / अहवाल अपलोड करा (पर्यायी)"
  },
  analyzing: {
    en: "Analyzing Symptoms...",
    hi: "लक्षणों का विश्लेषण किया जा रहा है...",
    mr: "लक्षणांचे विश्लेषण चालू आहे..."
  },
  startAnalysis: {
    en: "Start AI Diagnosis",
    hi: "एआई निदान शुरू करें",
    mr: "एआय निदान सुरू करा"
  },
  tapUpload: {
    en: "Tap to open camera or gallery",
    hi: "कैमरा या गैलरी खोलने के लिए टैप करें",
    mr: "कॅमेरा किंवा गॅलरी उघडण्यासाठी दाबा"
  },
  uploadFormats: {
    en: "Supports Images & PDFs",
    hi: "छवियों और पीडीएफ का समर्थन करता है",
    mr: "छायाचित्रे आणि पीडीएफ चालतात"
  },
  submitAndAnalyze: {
    en: "🔍 Submit & Analyze",
    hi: "🔍 जमा करें और विश्लेषण करें",
    mr: "🔍 सबमिट आणि विश्लेषण"
  },

  // Severity labels
  Low: {
    en: "Low",
    hi: "कम",
    mr: "कमी"
  },
  Moderate: {
    en: "Moderate",
    hi: "मध्यम",
    mr: "मध्यम"
  },
  Severe: {
    en: "Severe",
    hi: "गंभीर",
    mr: "गंभीर"
  },
  Emergency: {
    en: "Emergency",
    hi: "आपातकालीन",
    mr: "आपातकालीन"
  },

  // Medical History Page
  medicalHistory: {
    en: "Medical History",
    hi: "चिकित्सा इतिहास",
    mr: "वैद्यकीय इतिहास"
  },
  noHistory: {
    en: "No history found. Try checking your symptoms first.",
    hi: "कोई चिकित्सा इतिहास नहीं मिला। पहले अपने लक्षणों की जाँच करें।",
    mr: "वैद्यकीय इतिहास आढळला नाही. आधी तुमच्या लक्षणांची तपासणी करा."
  },
  addSymptoms: {
    en: "Add Symptoms",
    hi: "लक्षण जोड़ें",
    mr: "लक्षणे जोडा"
  },
  at: {
    en: "at",
    hi: "बजे",
    mr: "वाजता"
  },
  offlineStored: {
    en: "⚠️ Stored securely offline. Will sync when online.",
    hi: "⚠️ ऑफ़लाइन सुरक्षित रूप से सहेजा गया। ऑनलाइन होने पर सिंक होगा।",
    mr: "⚠️ ऑफलाईन सुरक्षित साठवले आहे. ऑनलाईन आल्यावर सिंक होईल."
  },

  // Diagnosis Results
  resultsTitle: {
    en: "AI Diagnosis Results",
    hi: "एआई निदान परिणाम",
    mr: "एआय निदानाचे निकाल"
  },
  resultsSummary: {
    en: "Clinical Summary",
    hi: "नैदानिक सारांश",
    mr: "वैद्यकीय सारांश"
  },
  severityReason: {
    en: "Severity Evaluation",
    hi: "तीव्रता मूल्यांकन",
    mr: "तीव्रतेचे मूल्यांकन"
  },
  possibleConditions: {
    en: "Possible Conditions",
    hi: "संभाव्य स्थितियां",
    mr: "संभाव्य आजार"
  },
  homeRemedies: {
    en: "Home Remedies & First Aid",
    hi: "घरेलू उपचार और प्राथमिक चिकित्सा",
    mr: "घरगुती उपचार आणि प्रथमोपचार"
  },
  otcMedicines: {
    en: "Suggested OTC Medicines",
    hi: "सुझाव दी गई ओटीसी दवाएं",
    mr: "सुचवलेली ओटीसी औषधे"
  },
  disclaimer: {
    en: "Disclaimer: This is an offline-capable AI tool. For medical emergencies, consult a doctor immediately.",
    hi: "अस्वीकरण: यह एक ऑफलाइन-सक्षम एआई टूल है। चिकित्सा आपातकाल के लिए तुरंत डॉक्टर से सलाह लें।",
    mr: "अस्वीकरण: हे ऑफलाईन-सक्षम एआय साधन आहे. आपत्कालीन परिस्थितीत त्वरित डॉक्टरांचा सल्ला घ्या."
  },
  bookConsultation: {
    en: "Book Consultation with Specialist",
    hi: "विशेषज्ञ के साथ परामर्श बुक करें",
    mr: "तज्ज्ञ डॉक्टरांशी संपर्क साधा"
  },

  // Appointments Page
  appointmentsTitle: {
    en: "Consult & Book Appointments",
    hi: "परामर्श और बुकिंग",
    mr: "अपॉइंटमेंट बुकिंग"
  },
  searchDoctors: {
    en: "Search Doctors",
    hi: "डॉक्टर खोजें",
    mr: "डॉक्टर शोधा"
  },
  bookConsultationTab: {
    en: "Book Slot",
    hi: "समय बुक करें",
    mr: "वेळ बुक करा"
  },
  myBookings: {
    en: "My Bookings",
    hi: "मेरी बुकिंग",
    mr: "माझ्या बुकिंग"
  },
  rating: {
    en: "Rating",
    hi: "रेटिंग",
    mr: "रेटिंग"
  },
  experience: {
    en: "Exp",
    hi: "अनुभव",
    mr: "अनुभव"
  },
  consultationFeeText: {
    en: "Nominal Consultation Fee",
    hi: "नाममात्र परामर्श शुल्क",
    mr: "नाममात्र सल्ला शुल्क"
  },
  selectSlot: {
    en: "Select a Time Slot",
    hi: "समय स्लॉट चुनें",
    mr: "वेळ निवडा"
  },
  additionalNotes: {
    en: "Additional Notes / Symptoms for Doctor",
    hi: "डॉक्टर के लिए अतिरिक्त जानकारी / लक्षण",
    mr: "डॉक्टरांसाठी अतिरिक्त माहिती / लक्षणे"
  },
  bookConfirm: {
    en: "Confirm Consultation Booking",
    hi: "परामर्श बुकिंग की पुष्टि करें",
    mr: "बुकिंग निश्चित करा"
  },
  bookingProgress: {
    en: "Booking...",
    hi: "बुकिंग चालू है...",
    mr: "बुकिंग चालू आहे..."
  },
  bookingSuccess: {
    en: "Appointment Confirmed!",
    hi: "अपॉइंटमेंट की पुष्टि हो गई!",
    mr: "अपॉइंटमेंट निश्चित झाली!"
  },
  shareReportText: {
    en: "Share Medical History Pre-Call",
    hi: "कॉल से पहले मेडिकल इतिहास साझा करें",
    mr: "कॉलपूर्वी वैद्यकीय इतिहास शेअर करा"
  },
  startCallText: {
    en: "Start Video Consultation",
    hi: "वीडियो परामर्श शुरू करें",
    mr: "व्हिडिओ कॉल सुरू करा"
  },

  // Body Parts
  Head: { en: "Head", hi: "सिर", mr: "डोके" },
  Eyes: { en: "Eyes", hi: "आँखें", mr: "डोळे" },
  Ears: { en: "Ears", hi: "कान", mr: "कान" },
  Nose: { en: "Nose", hi: "नाक", mr: "नाक" },
  "Mouth/Throat": { en: "Mouth/Throat", hi: "मुंह/गला", mr: "तोंड/घसा" },
  Neck: { en: "Neck", hi: "गर्दन", mr: "मान" },
  Chest: { en: "Chest", hi: "छाती", mr: "छाती" },
  "Stomach/Abdomen": { en: "Stomach/Abdomen", hi: "पेट", mr: "पोट" },
  "Pelvis/Groin": { en: "Pelvis/Groin", hi: "पेल्विस/कमर", mr: "पेल्विस/कमर" },
  Back: { en: "Back", hi: "पीठ", mr: "पाठ" },
  "Arms/Hands": { en: "Arms/Hands", hi: "हाथ/बांहें", mr: "हात" },
  "Legs/Feet": { en: "Legs/Feet", hi: "पैर", mr: "पाय" },
  Skin: { en: "Skin", hi: "त्वचा", mr: "त्वचा" },
  Joints: { en: "Joints", hi: "जोड़", mr: "सांधे" }
};

// Local storage key for language selection
const LANG_KEY = 'medireach_lang';

export function getSavedLanguage(): Language {
  if (typeof window !== 'undefined') {
    const lang = localStorage.getItem(LANG_KEY) as Language;
    if (lang === 'en' || lang === 'hi' || lang === 'mr') {
      return lang;
    }
  }
  return 'en';
}

export function saveLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANG_KEY, lang);
    // Dispatch custom event to notify other components in real-time
    window.dispatchEvent(new Event('languageChange'));
  }
}

export function translate(key: string, lang: Language): string {
  const item = translations[key];
  if (!item) return key;
  return item[lang] || item['en'] || key;
}
