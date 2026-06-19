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
  Skin: { en: "Skin", hi: "त्वचा", mr: "त्वचा" },
  Joints: { en: "Joints", hi: "जोड़", mr: "सांधे" },

  // Voice Input Translation Keys
  startVoice: {
    en: "Speak Symptoms",
    hi: "लक्षण बोलें",
    mr: "लक्षणे सांगा"
  },
  stopVoice: {
    en: "Stop Speaking",
    hi: "बोलना बंद करें",
    mr: "बोलणे थांबवा"
  },
  listeningState: {
    en: "Listening... Speak now",
    hi: "सुन रहा है... अब बोलें",
    mr: "ऐकत आहे... आता बोला"
  },
  micErrorUnsupported: {
    en: "Speech-to-text not supported in this browser. Please type symptoms.",
    hi: "इस ब्राउज़र में स्पीच-टू-टेक्स्ट समर्थित नहीं है। कृपया लिखकर लक्षण बताएं।",
    mr: "या ब्राउझरमध्ये स्पीच-टू-टेक्स्ट समर्थित नाही. कृपया लिहून सांगा."
  },
  micErrorPermission: {
    en: "Microphone permission denied. Enable microphone access in browser settings.",
    hi: "माइक्रोफ़ोन अनुमति अस्वीकृत। ब्राउज़र सेटिंग्स में माइक्रोफ़ोन अनुमति सक्षम करें।",
    mr: "मायक्रोफोन परवानगी नाकारली. ब्राउझर सेटिंग्जमध्ये मायक्रोफोन सुरू करा."
  },
  attachedSymptomTitle: {
    en: "Recent AI Health Summary Attached",
    hi: "हालिया एआई स्वास्थ्य सारांश संलग्न",
    mr: "अलीकडील एआय आरोग्य सारांश जोडला"
  },
  attachedSymptomDesc: {
    en: "This analysis will be automatically shared with the doctor to assist with your diagnosis.",
    hi: "यह विश्लेषण आपकी बीमारी के सटीक निदान के लिए डॉक्टर के साथ साझा किया जाएगा।",
    mr: "हे विश्लेषण अचूक निदानासाठी डॉक्टरांसोबत शेअर केले जाईल."
  },
  profileDrawerBio: {
    en: "Doctor Biography & Reviews",
    hi: "डॉक्टर प्रोफ़ाइल और समीक्षाएं",
    mr: "डॉक्टर प्रोफाइल आणि पुनरावलोकने"
  },
  lobbyTitle: {
    en: "Consultation Lobby",
    hi: "परामर्श लॉबी",
    mr: "सल्ला कक्ष"
  },
  lobbyEnter: {
    en: "Enter Consultation Room",
    hi: "परामर्श कक्ष में प्रवेश करें",
    mr: "सल्ला कक्षात प्रवेश करा"
  },
  patientRecordTab: {
    en: "Patient Case Sheet",
    hi: "मरीज का केस शीट",
    mr: "रुग्णाची माहिती"
  },
  experienceText: {
    en: "Years Experience",
    hi: "वर्षों का अनुभव",
    mr: "वर्षांचा अनुभव"
  },
  morning: {
    en: "Morning",
    hi: "सुबह",
    mr: "सकाळ"
  },
  afternoon: {
    en: "Afternoon",
    hi: "दोपहर",
    mr: "दुपार"
  },
  evening: {
    en: "Evening",
    hi: "शाम",
    mr: "संध्याकाळ"
  },
  cameraBlocked: {
    en: "📷 Camera Access Blocked",
    hi: "📷 कैमरा एक्सेस अवरुद्ध है",
    mr: "📷 कॅमेरा ऍक्सेस ब्लॉक केला आहे"
  },
  emergencySOSCardTitle: {
    en: "🚨 Emergency SOS & First Aid",
    hi: "🚨 आपातकालीन एसओएस और प्राथमिक चिकित्सा",
    mr: "🚨 आपत्कालीन एसओएस आणि प्रथमोपचार"
  },
  emergencySOSCardDesc: {
    en: "Quick-access offline first aid manuals and emergency alert dispatch",
    hi: "त्वरित-पहुंच ऑफलाइन प्राथमिक चिकित्सा नियमावली और आपातकालीन अलर्ट प्रेषण",
    mr: "त्वरित ऑफलाईन प्रथमोपचार मार्गदर्शिका आणि आणीबाणी मदत संदेश"
  },
  sosTitle: {
    en: "🚨 Emergency SOS Center",
    hi: "🚨 आपातकालीन एसओएस केंद्र",
    mr: "🚨 आपत्कालीन एसओएस केंद्र"
  },
  sosTriggerTab: {
    en: "Trigger SOS Alert",
    hi: "एसओएस अलर्ट भेजें",
    mr: "एसओएस अलर्ट पाठवा"
  },
  firstAidGuideTab: {
    en: "First Aid Manuals",
    hi: "प्राथमिक चिकित्सा नियमावली",
    mr: "प्रथमोपचार मार्गदर्शिका"
  },
  emergencyContactsHeader: {
    en: "Emergency Contacts",
    hi: "आपातकालीन संपर्क",
    mr: "आपातकालीन संपर्क"
  },
  addContactBtn: {
    en: "+ Add Contact",
    hi: "+ संपर्क जोड़ें",
    mr: "+ संपर्क जोडा"
  },
  saveContactsBtn: {
    en: "Save Contacts",
    hi: "संपर्क सहेजें",
    mr: "संपर्क साठवा"
  },
  noContacts: {
    en: "No emergency contacts saved yet.",
    hi: "अभी तक कोई आपातकालीन संपर्क सहेजा नहीं गया है।",
    mr: "अद्याप कोणताही आपत्कालीन संपर्क साठवलेला नाही."
  },
  contactNameLabel: {
    en: "Name",
    hi: "नाम",
    mr: "नाव"
  },
  contactPhoneLabel: {
    en: "Phone Number",
    hi: "फ़ोन नंबर",
    mr: "फोन नंबर"
  },
  gpsStatusLabel: {
    en: "GPS Location Status",
    hi: "जीपीएस स्थान स्थिति",
    mr: "जीपीएस स्थान स्थिती"
  },
  gpsFetching: {
    en: "Fetching your GPS location...",
    hi: "आपका जीपीएस स्थान प्राप्त किया जा रहा है...",
    mr: "तुमची जीपीएस जागा शोधत आहे..."
  },
  gpsSuccess: {
    en: "Location Found",
    hi: "स्थान मिल गया",
    mr: "जागा सापडली"
  },
  gpsFailed: {
    en: "Failed to fetch GPS location. Permission denied or unavailable.",
    hi: "जीपीएस स्थान प्राप्त करने में विफल। अनुमति अस्वीकृत या अनुपलब्ध।",
    mr: "जीपीएस जागा शोधण्यात अयशस्वी. परवानगी नाकारली किंवा अनुपलब्ध."
  },
  sendSmsBtn: {
    en: "📤 Send Emergency SMS",
    hi: "📤 आपातकालीन एसएमएस भेजें",
    mr: "📤 आपत्कालीन एसएमएस पाठवा"
  },
  sendSmsDesc: {
    en: "Constructs a pre-filled SMS with your GPS location and opens your device messaging app to your emergency contacts.",
    hi: "आपके जीपीएस स्थान के साथ एक पूर्व-भरे एसएमएस का निर्माण करता है और आपके सहेजे गए आपातकालीन संपर्कों को संदेश भेजने के लिए मूल एसएमएस ऐप खोलता है।",
    mr: "तुमच्या जीपीएस जागेसह संदेश तयार करतो आणि साठवलेल्या संपर्कांना पाठवण्यासाठी फोनचे मेसेज ॲप उघडतो."
  },
  searchFirstAidPlaceholder: {
    en: "Search first aid manuals (e.g. CPR, Snakebite...)",
    hi: "प्राथमिक चिकित्सा नियमावली खोजें (जैसे सीपीआर, सांप का काटना...)",
    mr: "प्रथमोपचार मार्गदर्शिका शोधा (उदा. सीपीआर, सर्पदंश...)"
  },
  firstAidIntro: {
    en: "Quick offline manuals for life-saving emergencies. Always seek professional help immediately.",
    hi: "जीवन-रक्षक आपात स्थितियों के लिए त्वरित ऑफलाइन नियमावली। हमेशा तुरंत पेशेवर मदद लें।",
    mr: "तातडीच्या आणि जीवघेण्या प्रसंगात उपयुक्त ऑफलाईन मार्गदर्शिका. नेहमी त्वरित तज्ज्ञ डॉक्टरांची मदत घ्या."
  },
  immediateSteps: {
    en: "Immediate Actions Required",
    hi: "तत्काल आवश्यक कदम",
    mr: "तातडीने करायच्या कृती"
  },
  whatNotToDo: {
    en: "❌ What NOT to Do (Warnings)",
    hi: "❌ क्या न करें (चेतावनी)",
    mr: "❌ काय करू नये (चेतावणी)"
  },
  emergencyHotline: {
    en: "📞 National Emergency Hotline: Call 108 or 102",
    hi: "📞 राष्ट्रीय आपातकालीन हॉटलाइन: 108 या 102 पर कॉल करें",
    mr: "📞 राष्ट्रीय आपत्कालीन हॉटलाईन: १०८ किंवा १०२ वर कॉल करा"
  },
  saveSuccess: {
    en: "Saved successfully!",
    hi: "सफलतापूर्वक सहेजा गया!",
    mr: "यशस्वीरित्या साठवले!"
  },
  deleteBtn: {
    en: "Delete",
    hi: "हटाएं",
    mr: "काढून टाका"
  },
  fa_cpr_title: {
    en: "Cardiac Arrest & CPR",
    hi: "हृदय गति रुकना और सीपीआर",
    mr: "हृदयविकाराचा झटका आणि सीपीआर"
  },
  fa_cpr_steps: {
    en: "1. Check responsiveness: Tap shoulders and shout. \n2. Call emergency: Call 102 or 108 immediately. \n3. Push hard & fast: Place hands on center of chest. Push down 2 inches at 100-120 compressions per minute. \n4. Give rescue breaths: 2 breaths after every 30 compressions if trained.",
    hi: "1. प्रतिक्रिया की जाँच करें: कंधे थपथपाएं और जोर से बोलें। \n2. आपातकालीन कॉल करें: तुरंत 102 या 108 पर कॉल करें। \n3. जोर से और तेजी से दबाएं: छाती के बीच में हाथ रखें। प्रति मिनट 100-120 बार की गति से 2 इंच नीचे दबाएं। \n4. सांस दें: यदि प्रशिक्षित हैं, तो प्रत्येक 30 बार दबाने के बाद 2 बार मुंह से सांस दें।",
    mr: "1. प्रतिसाद तपासा: खांदे हलवून जोरात विचारा. \n2. मदत कॉल करा: तातडीने १०२ किंवा १०८ वर फोन करा. \n3. छातीवर जोरात दाब द्या: हाताचे तळवे छातीच्या मध्यभागी ठेवून प्रति मिनिट १०० ते १२० वेगाने २ इंच खोल दाबा. \n4. कृत्रिम श्वासोच्छवास द्या: प्रत्येक ३० दाबांनंतर २ वेळा तोंडातून हवा फुंका (प्रशिक्षित असल्यास)."
  },
  fa_cpr_warnings: {
    en: "Do NOT stop chest compressions until medical help arrives or the person wakes up. Do NOT press on the lower ribs.",
    hi: "जब तक चिकित्सा सहायता न आ जाए या व्यक्ति होश में न आ जाए, तब तक छाती दबाना बंद न करें। निचली पसलियों पर दबाव न डालें।",
    mr: "डॉक्टर येईपर्यंत किंवा हालचाल सुरू होईपर्यंत छातीवर दाब देणे थांबवू नका. छातीच्या खालच्या बरगड्यांवर दाब देऊ नका."
  },
  fa_bleeding_title: {
    en: "Severe Bleeding",
    hi: "गंभीर रक्तस्राव",
    mr: "तीव्र रक्तस्त्राव"
  },
  fa_bleeding_steps: {
    en: "1. Apply pressure: Place clean cloth or sterile bandage directly on the wound. Press firmly. \n2. Elevate: Raise the bleeding limb above heart level if no bones are broken. \n3. Keep pressing: If blood leaks through, add another cloth on top. Do not remove the first one. \n4. Bind: Wrap tightly with a clean bandage.",
    hi: "1. दबाव डालें: घाव पर सीधे साफ कपड़ा या पट्टी रखें। जोर से दबाएं। \n2. ऊपर उठाएं: यदि कोई हड्डी नहीं टूटी है, तो बहते हुए अंग को हृदय के स्तर से ऊपर उठाएं। \n3. दबाते रहें: यदि खून कपड़े से बाहर आ रहा है, तो उसके ऊपर दूसरा कपड़ा रखें। पहले वाले को न हटाएं। \n4. बांधें: एक साफ पट्टी से कसकर लपेटें।",
    mr: "1. थेट दाब द्या: जखमेवर स्वच्छ कापड किंवा पट्टी ठेवून हाताने जोरात दाबा. \n2. भाग उंच करा: हाड तुटलेले नसल्यास, जखमेचा भाग हृदयाच्या पातळीपेक्षा उंच धरा. \n3. दाबून ठेवा: रक्त कापडातून बाहेर आल्यास त्यावर दुसरे कापड ठेवा, पहिले काढू नका. \n4. पट्टी बांधा: स्वच्छ पट्टीने जखम घट्ट बांधून ठेवा."
  },
  fa_bleeding_warnings: {
    en: "Do NOT remove blood-soaked cloths as it disrupts clotting. Do NOT apply a tight tourniquet unless trained and bleeding is life-threatening.",
    hi: "खून से सने कपड़ों को न हटाएं क्योंकि इससे थक्का बनना रुक जाता है। जब तक प्रशिक्षित न हों और खून बहना जानलेवा न हो, तब तक कसकर टूर्निकेट न बांधें।",
    mr: "रक्ताने माखलेले कापड जखमेवरून काढू नका, यामुळे रक्ताची गुठळी होण्यास अडथळा येतो. प्रशिक्षित असल्याशिवाय आणि रक्तस्त्राव जीवघेणा असल्याशिवाय आवळपट्टी (Tourniquet) बांधू नका."
  },
  fa_snakebite_title: {
    en: "Snakebites & Poisoning",
    hi: "साँप का काटना और जहर",
    mr: "सर्पदंश आणि विषबाधा"
  },
  fa_snakebite_steps: {
    en: "1. Stay calm & still: Restrict movement to prevent venom from spreading. \n2. Position below heart: Keep the bitten limb lower than or at heart level. \n3. Clean the bite: Wash gently with soap and water. Cover with clean dry dressing. \n4. Identify the snake: Note its color, shape, and pattern if safe to do so. \n5. Go to hospital: Transport the patient immediately to a facility with anti-venom.",
    hi: "1. शांत और स्थिर रहें: जहर को फैलने से रोकने के लिए हलचल कम करें। \n2. हृदय से नीचे रखें: कटे हुए अंग को हृदय के स्तर से नीचे रखें। \n3. घाव साफ करें: साबुन और पानी से धीरे से धोएं। साफ सूखी पट्टी से ढकें। \n4. सांप की पहचान करें: यदि सुरक्षित हो, तो उसका रंग, आकार और पैटर्न नोट करें। \n5. अस्पताल जाएं: मरीज को तुरंत एंटी-वेनम वाले अस्पताल ले जाएं।",
    mr: "1. शांत आणि स्थिर राहा: विष पसरू नये म्हणून शरीराची हालचाल पूर्णपणे थांबवा. \n2. हृदयाच्या पातळीखाली ठेवा: दंश झालेला भाग हृदयाच्या पातळीपेक्षा खाली ठेवा. \n3. दंश साफ करा: साबण आणि पाण्याने हळूवार धुवा आणि कोरड्या कापडाने झाका. \n4. सापाची ओळख पटवा: सुरक्षित अंतर ठेवून सापाचा रंग, आकार किंवा प्रकार लक्षात ठेवा. \n5. तातडीने धाव घ्या: रुग्णाला त्वरित सर्पदंश प्रतिबंधक लस (Anti-venom) उपलब्ध असलेल्या रुग्णालयात न्या."
  },
  fa_snakebite_warnings: {
    en: "Do NOT cut the wound or try to suck out venom. Do NOT apply ice, electricity, or tight tourniquets. Do NOT give alcohol or caffeinated drinks.",
    hi: "घाव को न काटें और न ही जहर चूसने की कोशिश करें। बर्फ, बिजली या कसकर टूर्निकेट न लगाएं। शराब या कैफीनयुक्त पेय न दें।",
    mr: "जखम चिरू नका किंवा तोंड लावून विष शोषून घेण्याचा प्रयत्न करू नका. दंशावर बर्फ लावू नका, विजेचा शॉक देऊ नका किंवा घट्ट आवळपट्टी बांधू नका. मद्य किंवा चहा/कॉफी देऊ नका."
  },
  fa_choking_title: {
    en: "Severe Choking",
    hi: "दम घुटना / गला रुंधना",
    mr: "घास घशात अडकणे (Choking)"
  },
  fa_choking_steps: {
    en: "1. Give 5 back blows: Lean the person forward. Give 5 firm blows between the shoulder blades with the heel of your hand. \n2. Give 5 abdominal thrusts (Heimlich): Stand behind, wrap arms around waist. Make a fist, press forcefully inward and upward below their ribcage. \n3. Alternate: Repeat 5 back blows and 5 abdominal thrusts until object is clear or person passes out.",
    hi: "1. पीठ पर 5 बार थपथपाएं: व्यक्ति को आगे की ओर झुकाएं। अपने हाथ के निचले हिस्से से दोनों कंधों के बीच 5 बार जोर से थपथपाएं। \n2. पेट को 5 बार दबाएं (हीमलिच): पीछे खड़े होकर कमर के चारों ओर हाथ लपेटें। एक मुट्ठी बनाएं, पसलियों के नीचे अंदर और ऊपर की ओर बलपूर्वक दबाएं। \n3. दोहराएं: वस्तु बाहर आने तक या व्यक्ति के बेहोश होने तक पीठ पर मारना और पेट दबाना जारी रखें।",
    mr: "1. पाठीवर ५ फटके द्या: रुग्णाला पुढे झुकवा. हाताच्या तळव्याने दोन्ही खांद्यांच्या मधोमध ५ वेळा जोरात फटके द्या. \n2. पोटावर ५ दाब द्या (Heimlich): रुग्णाच्या पाठीमागे उभे राहून दोन्ही हात पोटाभोवती घ्या. मूठ बांधून बरगड्यांच्या खाली जोरात आत आणि वरच्या दिशेने ५ वेळा दाबा. \n3. आलटून-पालटून करा: जोपर्यंत अडकलेला घास बाहेर येत नाही किंवा रुग्ण बेशुद्ध होत नाही, तोपर्यंत ही प्रक्रिया सुरू ठेवा."
  },
  fa_choking_warnings: {
    en: "Do NOT perform abdominal thrusts on infants under 1 year or pregnant women. For them, use chest thrusts instead.",
    hi: "1 वर्ष से कम उम्र के शिशुओं या गर्भवती महिलाओं पर पेट दबाने वाली क्रिया (हीमलिच) न करें। उनके लिए छाती दबाने का उपयोग करें।",
    mr: "१ वर्षाखालील लहान बाळ किंवा गरोदर महिलांच्या पोटावर दाब देऊ नका (Heimlich). त्यांच्यासाठी छातीवर हलके दाब द्या."
  },
  fa_burns_title: {
    en: "Burns & Scalds",
    hi: "जलना और झुलसना",
    mr: "भाजणे किंवा होरपळणे"
  },
  fa_burns_steps: {
    en: "1. Cool the burn: Hold burn under cool running tap water for 15-20 minutes. Do not use ice. \n2. Remove restrictions: Take off rings, watches, or clothing near the burn unless they are stuck. \n3. Cover loosely: Wrap burn loosely with clean plastic cling film or sterile bandage to protect from infection. \n4. Seek care: Go to doctor if burn is larger than 3 inches, on face, hands, or joints.",
    hi: "1. जलन को ठंडा करें: जलने वाली जगह को 15-20 मिनट के लिए नल के ठंडे बहते पानी के नीचे रखें। बर्फ का उपयोग न करें। \n2. बंधन हटाएं: जलने वाली जगह के पास की अंगूठी, घड़ी या कपड़े उतार दें जब तक कि वे चिपक न गए हों। \n3. ढीला ढकें: संक्रमण से बचाने के लिए साफ प्लास्टिक की पन्नी या बांझ पट्टी से ढीला लपेटें। \n4. डॉक्टर से मिलें: यदि जलना 3 इंच से बड़ा हो, चेहरे, हाथों या जोड़ों पर हो, तो डॉक्टर के पास जाएं।",
    mr: "1. भाग थंड करा: भाजलेला भाग नळाच्या वाहत्या थंड पाण्याखाली १५ ते २० मिनिटे धरा. बर्फाचा वापर करू नका. \n2. दागिने/कपडे काढा: जळलेल्या भागाजवळील अंगठी, घड्याळ किंवा सैल कपडे काढून टाका (त्वचेला चिकटले नसल्यास). \n3. हलके झाकून ठेवा: जंतुसंसर्ग टाळण्यासाठी स्वच्छ प्लास्टिकची पारदर्शक फिल्म (cling film) किंवा निर्जंतुक पट्टी जखमेवर सैल गुंडाळा. \n4. डॉक्टरांकडे जा: जखम ३ इंचापेक्षा मोठी असल्यास, चेहऱ्यावर, हातावर किंवा सांध्यांवर असल्यास डॉक्टरांना दाखवा."
  },
  fa_burns_warnings: {
    en: "Do NOT apply toothpaste, butter, oil, or ointments as they trap heat. Do NOT pop any blisters.",
    hi: "टूथपेस्ट, मक्खन, तेल या मलहम न लगाएं क्योंकि वे गर्मी को रोकते हैं। किसी भी छाले को न फोड़ें।",
    mr: "भाजलेल्या जखमेवर टूथपेस्ट, लोणी, तेल किंवा मलम लावू नका, यामुळे उष्णता आतच राहते. फोड आले असल्यास ते फोडू नका."
  }
};

// Local storage key for language selection
const LANG_KEY = 'medireach_lang';

export function getSavedLanguage(): Language {
  if (typeof window !== 'undefined') {
    try {
      const lang = localStorage.getItem(LANG_KEY) as Language;
      if (lang === 'en' || lang === 'hi' || lang === 'mr') {
        return lang;
      }
    } catch (e) {
      console.warn("localStorage not available:", e);
    }
  }
  return 'en';
}

export function saveLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      console.warn("localStorage not available:", e);
    }
    // Dispatch custom event to notify other components in real-time
    window.dispatchEvent(new Event('languageChange'));
  }
}

export function translate(key: string, lang: Language): string {
  const item = translations[key];
  if (!item) return key;
  return item[lang] || item['en'] || key;
}
