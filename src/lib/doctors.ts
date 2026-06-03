// Mock doctor data for MediReach — 25 fictional Indian doctors (all names are made up)

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  city: string;
  state: string;
  hospital: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  fee: number; // in INR — kept low for rural accessibility
  experience: number; // years
  avatar: string; // emoji fallback
  availableSlots: string[]; // ISO datetime strings
  about: string;
}

function generateSlots(daysAhead: number = 3, count: number = 8): string[] {
  const slots: string[] = [];
  const now = new Date();
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '15:30', '16:00'];
  for (let d = 1; d <= daysAhead; d++) {
    const day = new Date(now);
    day.setDate(now.getDate() + d);
    if (day.getDay() === 0) continue;
    const dayStr = day.toISOString().split('T')[0];
    const picked = [...times].sort(() => 0.5 - Math.random()).slice(0, Math.ceil(count / daysAhead));
    picked.forEach(t => { slots.push(`${dayStr}T${t}:00`); });
    if (slots.length >= count) break;
  }
  return slots.slice(0, count);
}

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-001',
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    qualifications: 'MBBS, MD (Internal Medicine)',
    city: 'Mumbai',
    state: 'Maharashtra',
    hospital: 'Lilavati Hospital',
    languages: ['Hindi', 'English', 'Marathi'],
    rating: 4.8,
    reviewCount: 312,
    fee: 10,
    experience: 14,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(4, 10),
    about: 'Specialist in diagnosing and treating common illnesses, infections, and chronic conditions. Fluent in 3 languages for rural outreach.'
  },
  {
    id: 'doc-002',
    name: 'Dr. Ramesh Iyer',
    specialty: 'Cardiologist',
    qualifications: 'MBBS, DM (Cardiology)',
    city: 'Chennai',
    state: 'Tamil Nadu',
    hospital: 'Apollo Hospitals',
    languages: ['Tamil', 'English', 'Hindi'],
    rating: 4.9,
    reviewCount: 528,
    fee: 30,
    experience: 22,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(5, 8),
    about: 'Interventional cardiologist with expertise in angioplasty, heart failure management, and preventive cardiology.'
  },
  {
    id: 'doc-003',
    name: 'Dr. Anjali Mehta',
    specialty: 'Dermatologist',
    qualifications: 'MBBS, MD (Dermatology)',
    city: 'Delhi',
    state: 'Delhi',
    hospital: 'AIIMS',
    languages: ['Hindi', 'English'],
    rating: 4.7,
    reviewCount: 445,
    fee: 20,
    experience: 11,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(3, 9),
    about: 'Expert in skin disorders, acne, eczema, psoriasis, and cosmetic dermatology. Widely consulted for difficult rash cases.'
  },
  {
    id: 'doc-004',
    name: 'Dr. Suresh Patel',
    specialty: 'Pulmonologist',
    qualifications: 'MBBS, MD (Pulmonary Medicine)',
    city: 'Ahmedabad',
    state: 'Gujarat',
    hospital: 'Sterling Hospital',
    languages: ['Gujarati', 'Hindi', 'English'],
    rating: 4.6,
    reviewCount: 203,
    fee: 20,
    experience: 16,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Specialises in TB, asthma, COPD, and respiratory infections. Strong background in infectious pulmonary diseases.'
  },
  {
    id: 'doc-005',
    name: 'Dr. Kavitha Nair',
    specialty: 'Pediatrician',
    qualifications: 'MBBS, MD (Pediatrics), DCH',
    city: 'Kochi',
    state: 'Kerala',
    hospital: 'Aster Medcity',
    languages: ['Malayalam', 'English', 'Hindi'],
    rating: 4.9,
    reviewCount: 671,
    fee: 15,
    experience: 18,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(3, 10),
    about: 'Dedicated to child health from newborns to adolescents. Expert in developmental disorders, vaccinations, and childhood infections.'
  },
  {
    id: 'doc-006',
    name: 'Dr. Arjun Verma',
    specialty: 'Neurologist',
    qualifications: 'MBBS, DM (Neurology)',
    city: 'Hyderabad',
    state: 'Telangana',
    hospital: 'Yashoda Hospitals',
    languages: ['Telugu', 'Hindi', 'English'],
    rating: 4.7,
    reviewCount: 289,
    fee: 30,
    experience: 19,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 7),
    about: 'Treats epilepsy, migraines, Parkinson\'s disease, stroke, and multiple sclerosis. Expert in neurodiagnostics.'
  },
  {
    id: 'doc-007',
    name: 'Dr. Sunita Rao',
    specialty: 'Gynaecologist',
    qualifications: 'MBBS, MS (Obs & Gynae)',
    city: 'Bengaluru',
    state: 'Karnataka',
    hospital: 'Manipal Hospital',
    languages: ['Kannada', 'English', 'Hindi'],
    rating: 4.8,
    reviewCount: 534,
    fee: 20,
    experience: 20,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(4, 9),
    about: 'Specialises in high-risk pregnancies, PCOS, endometriosis, and minimally invasive surgery for women\'s health.'
  },
  {
    id: 'doc-008',
    name: 'Dr. Mohit Gupta',
    specialty: 'Orthopaedic Surgeon',
    qualifications: 'MBBS, MS (Orthopaedics)',
    city: 'Jaipur',
    state: 'Rajasthan',
    hospital: 'SMS Medical College',
    languages: ['Hindi', 'Rajasthani', 'English'],
    rating: 4.6,
    reviewCount: 178,
    fee: 20,
    experience: 13,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(5, 8),
    about: 'Expert in joint replacement, sports injuries, spine disorders, and fracture management.'
  },
  {
    id: 'doc-009',
    name: 'Dr. Fatima Khan',
    specialty: 'Endocrinologist',
    qualifications: 'MBBS, DM (Endocrinology)',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    hospital: 'KGMU',
    languages: ['Urdu', 'Hindi', 'English'],
    rating: 4.8,
    reviewCount: 367,
    fee: 25,
    experience: 15,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Specialises in diabetes management, thyroid disorders, adrenal diseases, and hormonal imbalances.'
  },
  {
    id: 'doc-010',
    name: 'Dr. Rajesh Kumar',
    specialty: 'General Physician',
    qualifications: 'MBBS, PGDM',
    city: 'Patna',
    state: 'Bihar',
    hospital: 'PMCH',
    languages: ['Hindi', 'Bhojpuri', 'English'],
    rating: 4.5,
    reviewCount: 142,
    fee: 10,
    experience: 10,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(3, 10),
    about: 'Provides accessible primary care to rural and semi-urban populations. Experienced with malaria, typhoid, and dengue outbreaks.'
  },
  {
    id: 'doc-011',
    name: 'Dr. Meera Krishnan',
    specialty: 'Ophthalmologist',
    qualifications: 'MBBS, MS (Ophthalmology)',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    hospital: 'Aravind Eye Hospital',
    languages: ['Tamil', 'English'],
    rating: 4.9,
    reviewCount: 812,
    fee: 15,
    experience: 24,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(4, 9),
    about: 'World-renowned eye specialist. Expert in cataract surgery, glaucoma, retinal disorders, and refractive error correction.'
  },
  {
    id: 'doc-012',
    name: 'Dr. Sanjay Bose',
    specialty: 'Gastroenterologist',
    qualifications: 'MBBS, DM (Gastroenterology)',
    city: 'Kolkata',
    state: 'West Bengal',
    hospital: 'SSKM Hospital',
    languages: ['Bengali', 'Hindi', 'English'],
    rating: 4.7,
    reviewCount: 231,
    fee: 25,
    experience: 17,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Specialist in liver diseases, IBD, GERD, peptic ulcer, and endoscopic procedures.'
  },
  {
    id: 'doc-013',
    name: 'Dr. Pooja Desai',
    specialty: 'Psychiatrist',
    qualifications: 'MBBS, MD (Psychiatry)',
    city: 'Pune',
    state: 'Maharashtra',
    hospital: 'Jehangir Hospital',
    languages: ['Marathi', 'Hindi', 'English'],
    rating: 4.8,
    reviewCount: 289,
    fee: 25,
    experience: 12,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(5, 8),
    about: 'Expert in depression, anxiety, OCD, schizophrenia, and addiction medicine. Trauma-informed approach.'
  },
  {
    id: 'doc-014',
    name: 'Dr. Vikram Singh',
    specialty: 'Urologist',
    qualifications: 'MBBS, MCh (Urology)',
    city: 'Chandigarh',
    state: 'Punjab',
    hospital: 'PGIMER',
    languages: ['Punjabi', 'Hindi', 'English'],
    rating: 4.6,
    reviewCount: 193,
    fee: 30,
    experience: 21,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 7),
    about: 'Expert in kidney stones, prostate disorders, urinary tract issues, and laparoscopic urological surgery.'
  },
  {
    id: 'doc-015',
    name: 'Dr. Lakshmi Devi',
    specialty: 'Ayurvedic Physician',
    qualifications: 'BAMS, MD (Ayurveda)',
    city: 'Mysuru',
    state: 'Karnataka',
    hospital: 'SDM Ayurveda',
    languages: ['Kannada', 'Telugu', 'Hindi', 'English'],
    rating: 4.7,
    reviewCount: 468,
    fee: 10,
    experience: 16,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(3, 10),
    about: 'Classical Ayurvedic practitioner specialising in Panchakarma, joint disorders, skin conditions, and lifestyle diseases.'
  },
  {
    id: 'doc-016',
    name: 'Dr. Anil Tiwari',
    specialty: 'Pulmonologist',
    qualifications: 'MBBS, MD (Respiratory Medicine)',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    hospital: 'BHU Medical',
    languages: ['Hindi', 'Bhojpuri', 'English'],
    rating: 4.5,
    reviewCount: 156,
    fee: 15,
    experience: 13,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Specialises in tuberculosis (DOTS therapy), asthma, bronchitis, and occupational lung disease.'
  },
  {
    id: 'doc-017',
    name: 'Dr. Nalini Subramanian',
    specialty: 'Cardiologist',
    qualifications: 'MBBS, DM (Cardiology)',
    city: 'Bengaluru',
    state: 'Karnataka',
    hospital: 'Fortis Hospital',
    languages: ['Tamil', 'Kannada', 'English'],
    rating: 4.8,
    reviewCount: 407,
    fee: 35,
    experience: 23,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(5, 7),
    about: 'Expert in echocardiography, cardiac CT, device implantation, and women\'s heart health.'
  },
  {
    id: 'doc-018',
    name: 'Dr. Deepak Nanda',
    specialty: 'Orthopaedic Surgeon',
    qualifications: 'MBBS, MS, FRCS',
    city: 'Bhubaneswar',
    state: 'Odisha',
    hospital: 'AIIMS Bhubaneswar',
    languages: ['Odia', 'Hindi', 'English'],
    rating: 4.7,
    reviewCount: 224,
    fee: 20,
    experience: 15,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Specialises in trauma surgery, bone infections, limb reconstruction, and paediatric orthopaedics.'
  },
  {
    id: 'doc-019',
    name: 'Dr. Reena Mathur',
    specialty: 'Gynaecologist',
    qualifications: 'MBBS, DGO, DNB',
    city: 'Indore',
    state: 'Madhya Pradesh',
    hospital: 'MY Hospital',
    languages: ['Hindi', 'Malwi', 'English'],
    rating: 4.6,
    reviewCount: 311,
    fee: 15,
    experience: 14,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(3, 9),
    about: 'Focuses on maternal health, safe deliveries, reproductive health, and gynaecological surgeries at affordable costs.'
  },
  {
    id: 'doc-020',
    name: 'Dr. Krishnaswamy Pillai',
    specialty: 'Neurologist',
    qualifications: 'MBBS, MD, DM (Neurology)',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    hospital: 'SAT Hospital',
    languages: ['Malayalam', 'Tamil', 'English'],
    rating: 4.9,
    reviewCount: 398,
    fee: 30,
    experience: 25,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(5, 7),
    about: 'Senior neurologist with expertise in stroke care, epilepsy, neuromuscular diseases, and dementia.'
  },
  {
    id: 'doc-021',
    name: 'Dr. Hina Shaikh',
    specialty: 'Dermatologist',
    qualifications: 'MBBS, MD (DVL)',
    city: 'Surat',
    state: 'Gujarat',
    hospital: 'New Civil Hospital',
    languages: ['Gujarati', 'Hindi', 'Urdu', 'English'],
    rating: 4.6,
    reviewCount: 187,
    fee: 15,
    experience: 9,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(3, 10),
    about: 'Expert in fungal infections, allergic dermatitis, vitiligo, and skin cancer screening.'
  },
  {
    id: 'doc-022',
    name: 'Dr. Alok Pandey',
    specialty: 'Pediatrician',
    qualifications: 'MBBS, MD (Pediatrics)',
    city: 'Ranchi',
    state: 'Jharkhand',
    hospital: 'RIMS',
    languages: ['Hindi', 'Nagpuri', 'English'],
    rating: 4.7,
    reviewCount: 263,
    fee: 10,
    experience: 12,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 9),
    about: 'Dedicated paediatrician serving tribal and semi-urban communities. Expert in malnutrition, anaemia, and childhood infectious diseases.'
  },
  {
    id: 'doc-023',
    name: 'Dr. Saroja Reddy',
    specialty: 'Endocrinologist',
    qualifications: 'MBBS, MD, DM (Endocrinology)',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    hospital: 'Government General Hospital',
    languages: ['Telugu', 'Hindi', 'English'],
    rating: 4.8,
    reviewCount: 342,
    fee: 20,
    experience: 17,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Specialises in diabetes type 1 & 2, thyroid disorders, PCOS, and metabolic syndrome management.'
  },
  {
    id: 'doc-024',
    name: 'Dr. Manpreet Kaur',
    specialty: 'General Physician',
    qualifications: 'MBBS, MD (Family Medicine)',
    city: 'Amritsar',
    state: 'Punjab',
    hospital: 'Guru Nanak Dev Hospital',
    languages: ['Punjabi', 'Hindi', 'English'],
    rating: 4.6,
    reviewCount: 219,
    fee: 10,
    experience: 11,
    avatar: '👩‍⚕️',
    availableSlots: generateSlots(3, 10),
    about: 'Family physician providing holistic primary care with focus on preventive medicine and lifestyle management.'
  },
  {
    id: 'doc-025',
    name: 'Dr. Bhaskar Chatterjee',
    specialty: 'Gastroenterologist',
    qualifications: 'MBBS, MD, DM (Gastro)',
    city: 'Kolkata',
    state: 'West Bengal',
    hospital: 'Apollo Gleneagles',
    languages: ['Bengali', 'Hindi', 'English'],
    rating: 4.7,
    reviewCount: 301,
    fee: 25,
    experience: 20,
    avatar: '👨‍⚕️',
    availableSlots: generateSlots(4, 8),
    about: 'Expert in hepatology, Crohn\'s disease, colonoscopy, ERCP, and management of liver cirrhosis.'
  }
];

export const SPECIALTIES = [
  'All',
  'General Physician',
  'Cardiologist',
  'Dermatologist',
  'Pulmonologist',
  'Pediatrician',
  'Neurologist',
  'Gynaecologist',
  'Orthopaedic Surgeon',
  'Endocrinologist',
  'Ophthalmologist',
  'Gastroenterologist',
  'Psychiatrist',
  'Urologist',
  'Ayurvedic Physician'
];

export const CITIES = [
  'All',
  'Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Hyderabad',
  'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
  'Kochi', 'Coimbatore', 'Chandigarh', 'Mysuru', 'Varanasi',
  'Bhubaneswar', 'Indore', 'Thiruvananthapuram', 'Surat',
  'Ranchi', 'Vijayawada', 'Amritsar', 'Patna'
];

export function searchDoctors(specialty?: string, city?: string): Doctor[] {
  return DOCTORS.filter(doc => {
    const matchSpecialty = !specialty || specialty === 'All' || doc.specialty === specialty;
    const matchCity = !city || city === 'All' || doc.city === city;
    return matchSpecialty && matchCity;
  });
}

export function getDoctorById(id: string): Doctor | undefined {
  return DOCTORS.find(d => d.id === id);
}
