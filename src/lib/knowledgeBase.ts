/**
 * MediReach Offline Medical Knowledge Base
 * A symptom-disease-remedy knowledge graph used when the device is offline.
 * NOTE: This is for informational/educational use only. Always consult a doctor.
 */
import { db } from './db';

export interface DiseaseEntry {
  name: string;
  keywords: string[];
  bodyParts: string[];
  severity: 'Low' | 'Moderate' | 'Severe' | 'Emergency';
  description: string;
  homeRemedies: string[];
  otcMedicines: { name: string; dosage: string; warning?: string }[];
  specialist: string;
  specialistReason: string;
  warningFlags: string[]; // If any of these appear in description, escalate severity
  seekEmergencyIf: string[];
  catalogVersion?: number; // Optional tracking version for OTA updates
}

export const KNOWLEDGE_BASE: DiseaseEntry[] = [
  {
    name: 'Common Cold',
    keywords: ['cold', 'cough', 'nose', 'sneezing', 'throat', 'congestion', 'fever', 'runny', 'stuffy', 'sneeze', 'coughing'],
    bodyParts: ['Head', 'Chest', 'Nose', 'Mouth/Throat'],
    severity: 'Low',
    description: 'A viral infection of the upper respiratory tract. Usually resolves in 7–10 days.',
    homeRemedies: [
      'Drink plenty of warm fluids (water, herbal tea, warm lemon water)',
      'Rest and sleep as much as possible',
      'Steam inhalation to relieve congestion',
      'Gargle with warm salt water for sore throat',
      'Use honey + ginger for cough relief',
      'Keep your nose moist with a saline nasal spray',
    ],
    otcMedicines: [
      { name: 'Paracetamol (Crocin 500mg)', dosage: '500mg every 6 hours as needed for fever/pain', warning: 'Do not exceed 4g/day' },
      { name: 'Cetirizine (Alerid)', dosage: '10mg once daily at bedtime for runny nose' },
      { name: 'Benadryl Cough Syrup', dosage: '10ml 3 times daily for cough' },
    ],
    specialist: 'General Physician (GP)',
    specialistReason: 'If symptoms persist beyond 10 days or worsen significantly.',
    warningFlags: ['difficulty breathing', 'chest pain', 'high fever', 'severe headache'],
    seekEmergencyIf: ['Difficulty breathing', 'Chest tightness', 'Fever above 104°F (40°C)', 'Stiff neck with fever'],
  },
  {
    name: 'Seasonal Flu (Influenza)',
    keywords: ['flu', 'influenza', 'fever', 'chills', 'shivering', 'ache', 'aches', 'body ache', 'fatigue', 'headache', 'cough', 'weakness', 'pain'],
    bodyParts: ['Head', 'Chest', 'Back', 'Arms/Hands', 'Legs/Feet', 'Joints'],
    severity: 'Moderate',
    description: 'A contagious respiratory illness caused by influenza viruses. More severe than a common cold.',
    homeRemedies: [
      'Complete bed rest is essential',
      'Stay hydrated with water, clear broths, and electrolyte drinks',
      'Warm soups (chicken soup) help with hydration and comfort',
      'Use a humidifier in your room',
      'Apply a cool cloth to forehead for fever',
    ],
    otcMedicines: [
      { name: 'Paracetamol (Calpol)', dosage: '500–1000mg every 4–6 hours for fever and body pain', warning: 'Do not exceed 4g/day. Avoid in liver disease.' },
      { name: 'Ibuprofen (Brufen 400mg)', dosage: '400mg every 8 hours after food for pain and inflammation', warning: 'Avoid on empty stomach. Not for kidney/stomach problems.' },
      { name: 'ORS (Electral)', dosage: 'Dissolve 1 sachet in 1L water, drink throughout the day' },
    ],
    specialist: 'General Physician (GP)',
    specialistReason: 'Antiviral medications (like Oseltamivir/Tamiflu) are most effective within 48 hours of symptoms.',
    warningFlags: ['difficulty breathing', 'persistent chest pain', 'confusion', 'severe vomiting'],
    seekEmergencyIf: ['Difficulty breathing or shortness of breath', 'Persistent chest pain', 'Confusion or altered mental status', 'Severe or persistent vomiting', 'Bluish lips or face'],
  },
  {
    name: 'Migraine / Tension Headache',
    keywords: ['headache', 'migraine', 'head pain', 'throbbing', 'pounding', 'light', 'sensitive', 'nausea', 'head'],
    bodyParts: ['Head'],
    severity: 'Moderate',
    description: 'Migraines are severe, often one-sided headaches. Tension headaches feel like a tight band around the head.',
    homeRemedies: [
      'Lie down in a quiet, dark room',
      'Apply a cold or warm compress on your forehead or neck',
      'Stay hydrated — dehydration is a major trigger',
      'Gentle massage of the temples and neck',
      'Try relaxation techniques (deep breathing, meditation)',
      'Avoid known triggers (bright lights, loud sounds, strong smells)',
    ],
    otcMedicines: [
      { name: 'Aspirin + Paracetamol (Saridon)', dosage: '1-2 tablets at onset. Do not take more than 2 in 24 hours.', warning: 'Not for children under 12.' },
      { name: 'Ibuprofen (400mg)', dosage: '400mg at the first sign of migraine, repeat after 8 hours if needed', warning: 'Take with food. Max 3 doses/day.' },
      { name: 'Sumatriptan (Suminat 50mg)', dosage: '50mg at onset. May repeat after 2 hours if needed.', warning: 'Prescription required. Not for cardiovascular disease patients.' },
    ],
    specialist: 'Neurologist',
    specialistReason: 'If you experience more than 4 headaches per month, or headaches severely impact your daily life.',
    warningFlags: ['worst headache of life', 'sudden onset', 'vision changes', 'weakness', 'fever with stiff neck'],
    seekEmergencyIf: ['"Thunderclap" sudden severe headache', 'Headache with fever and stiff neck', 'Headache after a head injury', 'Headache with vision changes, weakness, or confusion'],
  },
  {
    name: 'Gastroenteritis (Stomach Flu)',
    keywords: ['diarrhea', 'vomiting', 'stomach', 'nausea', 'vomit', 'stool', 'stomach pain', 'cramps', 'indigestion', 'food poisoning', 'loose stools', 'abdom'],
    bodyParts: ['Stomach/Abdomen'],
    severity: 'Moderate',
    description: 'Inflammation of the stomach and intestines, usually caused by a viral or bacterial infection. Often called a "stomach bug."',
    homeRemedies: [
      'Stay hydrated with ORS (Oral Rehydration Salts) or coconut water',
      'Follow the BRAT diet: Bananas, Rice, Applesauce, Toast',
      'Avoid dairy, fatty, and spicy foods until recovery',
      'Ginger tea helps soothe nausea',
      'Rest as much as possible',
      'Avoid solid foods for the first few hours if vomiting is severe',
    ],
    otcMedicines: [
      { name: 'ORS (Electral / Pedialyte)', dosage: '1 sachet in 1 liter water, sip frequently throughout the day' },
      { name: 'Domperidone (Domstal 10mg)', dosage: '10mg 3 times daily before meals for nausea and vomiting' },
      { name: 'Loperamide (Imodium 2mg)', dosage: '2mg after each loose stool (max 16mg/day)', warning: 'Do not use if you have bloody diarrhea or high fever.' },
    ],
    specialist: 'Gastroenterologist',
    specialistReason: 'If symptoms last more than 3 days, or if you see blood in stools.',
    warningFlags: ['blood in stool', 'severe dehydration', 'high fever', 'cannot keep any fluids down'],
    seekEmergencyIf: ['Blood in vomit or stool', 'Signs of severe dehydration (no urination, extreme dizziness)', 'High fever (above 102°F)', 'Severe abdominal pain'],
  },
  {
    name: 'Urinary Tract Infection (UTI)',
    keywords: ['uti', 'urine', 'urination', 'burning', 'frequent', 'bladder', 'pelvic', 'pee', 'cloudy'],
    bodyParts: ['Stomach/Abdomen', 'Pelvis/Groin'],
    severity: 'Moderate',
    description: 'An infection in any part of the urinary system. Most common in women. Usually affects the bladder and urethra.',
    homeRemedies: [
      'Drink plenty of water (8–10 glasses per day) to flush bacteria',
      'Drink unsweetened cranberry juice — it may help prevent bacteria from sticking to the bladder wall',
      'Avoid coffee, alcohol, and citrus juices which can irritate the bladder',
      'Apply a heating pad on the lower abdomen for pain relief',
      'Urinate frequently and completely — do not hold it in',
    ],
    otcMedicines: [
      { name: 'Phenazopyridine (Pyridium)', dosage: '200mg 3 times daily after meals for pain relief', warning: 'This only relieves pain, not the infection. Turns urine orange — this is normal.' },
    ],
    specialist: 'Urologist / General Physician',
    specialistReason: 'Antibiotics are required to treat a UTI. See a doctor promptly to get the correct prescription.',
    warningFlags: ['back pain', 'fever with chills', 'blood in urine', 'kidney pain'],
    seekEmergencyIf: ['High fever with chills', 'Severe back or side pain (kidney infection)', 'Visible blood in urine', 'Nausea and vomiting with UTI symptoms'],
  },
  {
    name: 'Lower Back Pain',
    keywords: ['back', 'backache', 'spine', 'lumbar', 'sciatica', 'stiffness', 'leg pain'],
    bodyParts: ['Back'],
    severity: 'Low',
    description: 'Pain in the lower back is extremely common and is usually caused by muscle strain, poor posture, or a sedentary lifestyle.',
    homeRemedies: [
      'Apply ice packs for the first 48–72 hours, then switch to heat',
      'Gentle stretching exercises (cat-cow, child\'s pose, knee-to-chest)',
      'Maintain good posture when sitting and standing',
      'Avoid prolonged sitting — take breaks every 30 minutes',
      'Sleep on your side with a pillow between your knees',
    ],
    otcMedicines: [
      { name: 'Ibuprofen (400mg)', dosage: '400mg every 8 hours with food for pain and inflammation', warning: 'Not for use with stomach ulcers or kidney problems. Max 5 days OTC.' },
      { name: 'Diclofenac Gel (Voltaren)', dosage: 'Apply a thin layer to the painful area 3-4 times daily' },
      { name: 'Muscle Relaxant: Cyclobenzaprine', dosage: 'Prescription required. See a doctor if pain is severe.' },
    ],
    specialist: 'Orthopedist / Physiotherapist',
    specialistReason: 'If pain is severe, does not improve in 2 weeks, or radiates down the leg (sciatica).',
    warningFlags: ['numbness', 'tingling in legs', 'loss of bowel control', 'fever'],
    seekEmergencyIf: ['Loss of bladder or bowel control', 'Numbness or tingling in groin/legs', 'Severe pain after an injury or fall', 'Fever with back pain'],
  },
  {
    name: 'Allergic Reaction / Skin Rash',
    keywords: ['rash', 'itch', 'itching', 'allergy', 'allergic', 'hives', 'skin', 'swelling', 'red', 'bumps', 'eczema'],
    bodyParts: ['Skin'],
    severity: 'Moderate',
    description: 'An allergic reaction occurs when the immune system reacts to a foreign substance. Common triggers include food, pollen, pets, and medications.',
    homeRemedies: [
      'Identify and avoid the trigger (food, pet, plant, soap)',
      'Apply a cool, damp cloth to relieve itching',
      'Calamine lotion can soothe itching and redness',
      'Add colloidal oatmeal to a lukewarm bath for widespread rash',
      'Keep nails short to prevent scratching and infection',
      'Aloe vera gel can be applied to mild rashes for soothing',
    ],
    otcMedicines: [
      { name: 'Cetirizine (Zyrtec 10mg)', dosage: '10mg once daily at bedtime. Controls itching and hives.' },
      { name: 'Hydrocortisone Cream 1%', dosage: 'Apply a thin layer to the affected area 2-3 times daily', warning: 'Do not use on face or for more than 7 days without doctor\'s advice.' },
      { name: 'Fexofenadine (Allegra 120mg)', dosage: '120mg once daily. Non-drowsy antihistamine.' },
    ],
    specialist: 'Dermatologist / Allergist',
    specialistReason: 'If the rash spreads rapidly, blisters form, or you have recurring allergic reactions.',
    warningFlags: ['throat swelling', 'difficulty breathing', 'facial swelling', 'dizziness'],
    seekEmergencyIf: ['Throat or tongue swelling (anaphylaxis)', 'Difficulty breathing or swallowing', 'Rapid heartbeat with rash', 'Dizziness or loss of consciousness'],
  },
  {
    name: 'Hypertension (High Blood Pressure)',
    keywords: ['hypertension', 'bp', 'blood pressure', 'headache', 'dizziness', 'nosebleed', 'blurred', 'vision', 'high bp'],
    bodyParts: ['Head', 'Chest'],
    severity: 'Moderate',
    description: 'High blood pressure (above 130/80 mmHg) is a chronic condition where the force of blood against artery walls is consistently too high.',
    homeRemedies: [
      'Adopt the DASH diet: fruits, vegetables, whole grains, low-fat dairy, lean protein',
      'Reduce sodium intake (less than 2.3g/day)',
      'Exercise regularly — 30 minutes of moderate activity most days',
      'Limit alcohol to 1 drink/day for women, 2 for men',
      'Quit smoking — nicotine raises blood pressure',
      'Manage stress with meditation, yoga, or deep breathing',
    ],
    otcMedicines: [
      { name: 'Lifestyle changes are the primary treatment', dosage: 'N/A', warning: 'Prescription antihypertensives are required. Do NOT skip prescribed medication.' },
    ],
    specialist: 'Cardiologist / General Physician',
    specialistReason: 'Hypertension requires prescription medication to be managed safely. Never self-medicate.',
    warningFlags: ['severe headache', 'vision changes', 'chest pain', 'shortness of breath', 'nose bleeding'],
    seekEmergencyIf: ['Severe headache with vision changes (hypertensive crisis)', 'Chest pain or pressure', 'Shortness of breath', 'Sudden numbness in face, arm, or leg (possible stroke)'],
  },
  {
    name: 'Asthma / Breathing Difficulty',
    keywords: ['asthma', 'wheezing', 'breathless', 'breathing', 'breath', 'chest tightness', 'shortness', 'cough'],
    bodyParts: ['Chest'],
    severity: 'Severe',
    description: 'A condition in which airways narrow, swell, and may produce extra mucus. This can make breathing difficult and trigger coughing.',
    homeRemedies: [
      'Identify and avoid personal asthma triggers (dust, pets, smoke, pollen)',
      'Keep indoor air clean with an air purifier',
      'Stay indoors on high-pollution or high-pollen days',
      'Practice breathing exercises like pursed-lip breathing',
      'Maintain a healthy weight to reduce strain on the lungs',
    ],
    otcMedicines: [
      { name: 'Salbutamol Inhaler (Ventolin)', dosage: '1-2 puffs (100mcg each) when needed for acute breathlessness', warning: 'Overuse can indicate poorly controlled asthma. See a doctor.' },
    ],
    specialist: 'Pulmonologist / Respiratory Specialist',
    specialistReason: 'Asthma requires a proper management plan including controller inhalers (corticosteroids). Must be prescribed by a doctor.',
    warningFlags: ['cannot speak full sentences', 'lips turning blue', 'inhaler not helping', 'extreme anxiety'],
    seekEmergencyIf: ['Severe breathlessness that is getting worse', 'Cannot speak more than a few words', 'Lips or fingernails turning blue', 'Inhaler not providing relief'],
  },
  {
    name: 'Joint Pain / Arthritis',
    keywords: ['joint', 'arthritis', 'knee', 'pain', 'swollen', 'stiff', 'gout', 'joints'],
    bodyParts: ['Joints', 'Arms/Hands', 'Legs/Feet'],
    severity: 'Moderate',
    description: 'Inflammation of one or more joints, causing pain and stiffness. Common types are osteoarthritis and rheumatoid arthritis.',
    homeRemedies: [
      'Apply ice to reduce swelling, heat to relieve stiffness',
      'Low-impact exercise (swimming, cycling) to strengthen surrounding muscles',
      'Turmeric (curcumin) has natural anti-inflammatory properties — add to food or take as supplement',
      'Maintain a healthy weight to reduce pressure on joints',
      'Use assistive devices like walking aids if needed',
      'Omega-3 fatty acid supplements may help reduce joint inflammation',
    ],
    otcMedicines: [
      { name: 'Ibuprofen (400mg)', dosage: '400mg 2-3 times daily with food', warning: 'Long-term use can damage kidneys and stomach lining. See a doctor.' },
      { name: 'Diclofenac Gel (Voltaren)', dosage: 'Apply directly to the painful joint 3-4 times daily' },
    ],
    specialist: 'Rheumatologist / Orthopedist',
    specialistReason: 'For a proper diagnosis (osteoarthritis vs. rheumatoid) and a long-term management plan.',
    warningFlags: ['severe swelling', 'joint feels warm', 'fever with joint pain', 'cannot move joint'],
    seekEmergencyIf: ['Sudden severe joint pain after an injury', 'Joint is red, hot, and severely swollen (possible septic arthritis)', 'Fever with acute joint pain'],
  },
  {
    name: 'Anxiety / Stress',
    keywords: ['anxiety', 'stress', 'panic', 'heart', 'worry', 'nervous', 'restless', 'tension', 'insomnia', 'sleepless'],
    bodyParts: ['Head', 'Chest'],
    severity: 'Moderate',
    description: 'Feelings of worry, fear, or unease. A small amount is normal, but excessive anxiety that interferes with life is a treatable condition.',
    homeRemedies: [
      'Practice deep breathing: 4 seconds in, hold 4, out 6',
      'Regular aerobic exercise (30 min, 5 days/week) significantly reduces anxiety',
      'Limit caffeine and alcohol, which can trigger or worsen anxiety',
      'Maintain a consistent sleep schedule',
      'Practice mindfulness meditation — even 10 minutes a day helps',
      'Connect with supportive friends or family',
    ],
    otcMedicines: [
      { name: 'Ashwagandha Supplement', dosage: '300-600mg daily. A natural adaptogen that helps reduce cortisol (stress hormone).' },
    ],
    specialist: 'Psychiatrist / Psychologist',
    specialistReason: 'If anxiety is severely impacting your daily life, work, or relationships. Therapy (CBT) and medication are highly effective.',
    warningFlags: ['suicidal thoughts', 'self-harm', 'inability to function', 'severe panic attacks'],
    seekEmergencyIf: ['Thoughts of harming yourself or others', 'Severe panic attack with chest pain (to rule out heart attack)', 'Complete inability to care for yourself'],
  },
  {
    name: 'Eye Infection / Conjunctivitis',
    keywords: ['eye', 'eyes', 'red eye', 'pink eye', 'discharge', 'itchy', 'swollen', 'conjunctivitis', 'watery'],
    bodyParts: ['Head', 'Eyes'],
    severity: 'Low',
    description: 'Conjunctivitis is inflammation of the conjunctiva (the clear membrane over the eye). It can be viral, bacterial, or allergic.',
    homeRemedies: [
      'Rinse eyes gently with clean, lukewarm water',
      'Apply a warm, damp cloth compress on closed eye for comfort',
      'Wash hands frequently to prevent spreading',
      'Do not share towels, pillowcases, or eye makeup',
      'Avoid wearing contact lenses until fully recovered',
    ],
    otcMedicines: [
      { name: 'Sodium Cromoglicate Eye Drops', dosage: '1-2 drops in each affected eye 4 times daily for allergic conjunctivitis' },
      { name: 'Antibiotic Eye Drops (e.g., Chloramphenicol)', dosage: 'Prescription required for bacterial conjunctivitis. See a doctor.' },
    ],
    specialist: 'Ophthalmologist',
    specialistReason: 'Bacterial conjunctivitis requires prescription antibiotic eye drops. See a doctor if discharge is thick and yellow/green.',
    warningFlags: ['vision changes', 'severe pain', 'photophobia', 'corneal cloudiness'],
    seekEmergencyIf: ['Sudden vision loss', 'Severe eye pain', 'Injury to the eye', 'Chemical splash in the eye'],
  },
  {
    name: 'Malaria',
    keywords: ['malaria', 'chills', 'shivering', 'fever', 'sweating', 'vomiting', 'fatigue', 'weakness', 'periodic', 'cold'],
    bodyParts: ['Head', 'Chest', 'Joints'],
    severity: 'Moderate',
    description: 'A serious mosquito-borne disease caused by plasmodium parasites. Typically presents with cyclical high fever, shaking chills, and sweating.',
    homeRemedies: [
      'Drink plenty of clean, warm water and electrolyte fluids (ORS)',
      'Get complete bed rest',
      'Apply a cool, damp cloth to the forehead to manage high fever',
      'Eat light, digestible meals (broths, rice water)',
    ],
    otcMedicines: [
      { name: 'Paracetamol (Crocin 650mg)', dosage: '1 tablet every 6 hours as needed for fever', warning: 'Do not exceed 4g per day. Consult doctor immediately for antimalarial therapy.' },
      { name: 'Artesunate / Chloroquine', dosage: 'Prescription required', warning: 'Requires active medical diagnosis via blood smear/rapid test. Never self-medicate.' }
    ],
    specialist: 'General Physician / Infectious Disease Specialist',
    specialistReason: 'Requires blood testing (smear/rapid test) to identify species (Vivax/Falciparum) and prescribe targeted antimalarial courses.',
    warningFlags: ['delirium', 'yellow skin', 'black urine', 'severe vomiting', 'extreme weakness'],
    seekEmergencyIf: ['Difficulty breathing', 'Confusion or loss of consciousness', 'Yellowing of eyes/skin (jaundice)', 'Severe reduction in urination'],
  },
  {
    name: 'Dengue Fever',
    keywords: ['dengue', 'fever', 'headache', 'eyes', 'joint', 'muscle', 'aches', 'pain', 'rash', 'bone', 'breakbone', 'shivering', 'nausea', 'vomiting'],
    bodyParts: ['Head', 'Eyes', 'Joints', 'Skin', 'Back'],
    severity: 'Severe',
    description: 'A viral infection transmitted by Aedes mosquitoes. Characterized by sudden high fever, intense pain behind the eyes, joint/muscle pain (breakbone pain), and sometimes a skin rash.',
    homeRemedies: [
      'Strict bed rest is vital',
      'Drink plenty of fluids: coconut water, ORS, fresh fruit juices to prevent dehydration',
      'Papaya leaf extract is widely used to support platelet count improvement',
      'Sponge bath with room-temperature water for high fever',
    ],
    otcMedicines: [
      { name: 'Paracetamol (Dolo 650mg)', dosage: '650mg every 6 hours for pain and fever', warning: 'Only take Paracetamol. Do NOT take Ibuprofen or Aspirin as they increase bleeding risks.' }
    ],
    specialist: 'General Physician',
    specialistReason: 'To monitor blood platelet counts regularly and prevent Dengue Hemorrhagic Fever.',
    warningFlags: ['bleeding gums', 'nosebleeds', 'persistent vomiting', 'severe abdominal pain', 'red spots on skin'],
    seekEmergencyIf: ['Bleeding from nose, gums, or skin', 'Severe abdominal pain', 'Persistent vomiting or vomiting blood', 'Extreme lethargy or confusion'],
  },
  {
    name: 'Typhoid Fever',
    keywords: ['typhoid', 'fever', 'stomach', 'pain', 'weakness', 'constipation', 'diarrhea', 'rose', 'spots'],
    bodyParts: ['Head', 'Stomach/Abdomen', 'Skin'],
    severity: 'Moderate',
    description: 'A bacterial infection caused by Salmonella Typhi, spread through contaminated food and water. Causes high, sustained fever and gastrointestinal issues.',
    homeRemedies: [
      'Drink boiled and cooled water exclusively',
      'Eat small, high-calorie meals like soft rice, porridge, and bananas',
      'Ensure complete bed rest',
      'Keep skin cool by sponge-bathing with lukewarm water',
    ],
    otcMedicines: [
      { name: 'Paracetamol (Calpol 500mg)', dosage: '500mg every 6 hours for fever control', warning: 'Antibiotics are necessary for cure. See a doctor for antibiotic prescription.' }
    ],
    specialist: 'General Physician',
    specialistReason: 'Requires antibiotic treatment (e.g., Ceftriaxone or Azithromycin) based on clinical blood cultures.',
    warningFlags: ['severe stomach pain', 'blood in stool', 'extremely high fever', 'confusion'],
    seekEmergencyIf: ['Severe, sudden abdominal pain (possible bowel perforation)', 'Blood in stool or vomit', 'High fever unresponsive to medication', 'Extreme confusion or sleepiness'],
  },
  {
    name: 'Tuberculosis (TB)',
    keywords: ['tb', 'tuberculosis', 'cough', 'blood', 'sweats', 'weight', 'chest', 'fever'],
    bodyParts: ['Chest', 'Neck'],
    severity: 'Severe',
    description: 'A serious infectious bacterial disease that mainly affects the lungs, but can spread to other organs. Marked by chronic cough, weight loss, and night sweats.',
    homeRemedies: [
      'Maintain a highly nutritious diet rich in proteins and vitamins',
      'Rest in a well-ventilated room with ample sunlight',
      'Cover mouth and nose when coughing or sneezing to prevent spread',
    ],
    otcMedicines: [
      { name: 'Anti-TB Treatment (ATT)', dosage: 'Prescription required', warning: 'Must be taken under strict DOTS supervision for 6+ months. Never stop early.' }
    ],
    specialist: 'Pulmonologist / Chest Specialist',
    specialistReason: 'Requires sputum testing, chest X-rays, and long-term multi-drug regimen therapy.',
    warningFlags: ['coughing blood', 'breathlessness', 'severe chest pain', 'drastic weight loss'],
    seekEmergencyIf: ['Coughing up significant amounts of blood', 'Severe shortness of breath', 'Chest pain radiating to shoulders or neck'],
  },
  {
    name: 'Gastroesophageal Reflux Disease (GERD)',
    keywords: ['gerd', 'acid', 'reflux', 'heartburn', 'chest', 'burn', 'indigestion', 'bloating'],
    bodyParts: ['Chest', 'Stomach/Abdomen', 'Mouth/Throat'],
    severity: 'Low',
    description: 'A chronic digestive disease where stomach acid or bile flows back into the food pipe, irritating the lining. Commonly called heartburn or acid reflux.',
    homeRemedies: [
      'Eat smaller, more frequent meals instead of large ones',
      'Avoid lying down for 2-3 hours after eating',
      'Elevate the head of your bed by 6 inches',
      'Avoid triggers like spicy, fatty, or fried foods, citrus, and caffeine',
      'Quit smoking and limit alcohol intake',
    ],
    otcMedicines: [
      { name: 'Pantoprazole (Pantocid 40mg)', dosage: '1 tablet daily 30 minutes before breakfast', warning: 'Do not use continuously for more than 14 days without medical advice.' },
      { name: 'Antacid Gel (Digene)', dosage: '10ml after meals or when experiencing heartburn' }
    ],
    specialist: 'Gastroenterologist',
    specialistReason: 'If symptoms persist despite lifestyle changes and OTC medicines, or if you have difficulty swallowing.',
    warningFlags: ['difficulty swallowing', 'painful swallowing', 'vomiting blood', 'black tarry stools', 'unexplained weight loss'],
    seekEmergencyIf: ['Difficulty swallowing (dysphagia)', 'Chest pain that mimics a heart attack (radiating to left arm/jaw)', 'Vomiting blood or dark coffee-ground material'],
  },
  {
    name: 'Diabetes Mellitus (Type 2)',
    keywords: ['diabetes', 'sugar', 'urination', 'thirst', 'hunger', 'fatigue', 'vision', 'wound'],
    bodyParts: ['Eyes', 'Arms/Hands', 'Legs/Feet', 'Skin'],
    severity: 'Moderate',
    description: 'A chronic condition that affects the way the body processes blood sugar (glucose). Characterized by insulin resistance or insufficient insulin production.',
    homeRemedies: [
      'Follow a balanced diet low in simple carbohydrates and refined sugars',
      'Engage in 30 minutes of physical activity (like brisk walking) daily',
      'Check feet daily for cuts, blisters, or redness (prevent diabetic ulcers)',
      'Stay hydrated with plenty of water',
      'Maintain a consistent eating and sleeping schedule',
    ],
    otcMedicines: [
      { name: 'Metformin / Glimepiride', dosage: 'Prescription required', warning: 'Must be prescribed by a physician. Requires regular blood sugar monitoring.' }
    ],
    specialist: 'Endocrinologist / Diabetologist',
    specialistReason: 'Requires regular testing (HbA1c, fasting glucose) and specialized prescription adjustments to prevent long-term organ damage.',
    warningFlags: ['diabetic foot ulcer', 'numbness in feet', 'extreme thirst with confusion', 'slow healing wound', 'vision loss'],
    seekEmergencyIf: ['Confusion, rapid breathing, or fruity-smelling breath (diabetic ketoacidosis)', 'Loss of consciousness', 'Non-healing deep wound or black tissue on feet'],
  },
  {
    name: 'Iron Deficiency Anemia',
    keywords: ['anemia', 'fatigue', 'weakness', 'pale', 'skin', 'cold', 'nails', 'breath'],
    bodyParts: ['Head', 'Skin', 'Arms/Hands', 'Legs/Feet'],
    severity: 'Low',
    description: 'A condition in which blood lacks adequate healthy red blood cells due to a lack of iron. Red blood cells carry oxygen to the body\'s tissues.',
    homeRemedies: [
      'Eat iron-rich foods: green leafy vegetables (spinach), lentils, pomegranate, and beetroots',
      'Consume Vitamin C (amla, lemons, oranges) alongside iron foods to enhance absorption',
      'Avoid drinking tea or coffee immediately after meals as they block iron absorption',
      'Cook food in iron utensils (traditional cast iron cookware)',
    ],
    otcMedicines: [
      { name: 'Iron Supplement (Dexorange / Autrin)', dosage: '1 capsule or 10ml liquid daily after meals', warning: 'May cause dark stools and mild constipation. Avoid taking with dairy/calcium.' }
    ],
    specialist: 'General Physician / Hematologist',
    specialistReason: 'To determine the underlying cause of anemia (e.g., dietary deficiency, chronic blood loss) via a Complete Blood Count (CBC) test.',
    warningFlags: ['fainting', 'severe breathlessness', 'chest pain', 'irregular heartbeat'],
    seekEmergencyIf: ['Chest pain or pressure', 'Extreme shortness of breath even at rest', 'Fainting spells (syncope)'],
  },
  {
    name: 'Dermatophytosis (Ringworm)',
    keywords: ['ringworm', 'tinea', 'fungal', 'rash', 'itchy', 'skin', 'red', 'ring', 'scaling'],
    bodyParts: ['Skin', 'Legs/Feet', 'Arms/Hands'],
    severity: 'Low',
    description: 'A highly contagious fungal infection of the skin or scalp. Typically presents as a circular, itchy, red rash with clearer skin in the middle.',
    homeRemedies: [
      'Keep the affected area clean and completely dry',
      'Wash bedsheets, towels, and clothing daily and do not share them',
      'Wear loose-fitting, breathable cotton clothing',
      'Avoid scratching the rash, which can lead to bacterial infection',
    ],
    otcMedicines: [
      { name: 'Clotrimazole Cream 1% (Surfaz)', dosage: 'Apply a thin layer to the rash 2-3 times daily for 2-4 weeks', warning: 'Continue applying for 1 week after the rash disappears to prevent return.' },
      { name: 'Miconazole Cream (Daktarin)', dosage: 'Apply twice daily to affected area' }
    ],
    specialist: 'Dermatologist',
    specialistReason: 'If the infection is on the scalp (tinea capitis), spreads rapidly, or does not improve after 2 weeks of OTC antifungal creams.',
    warningFlags: ['pus oozing', 'spreading red streaks', 'fever', 'scalp hair loss'],
    seekEmergencyIf: ['Signs of severe secondary bacterial infection (high fever, severe swelling, oozing pus, red streaks spreading from rash)'],
  },
  {
    name: 'Otitis Media (Middle Ear Infection)',
    keywords: ['ear', 'ears', 'pain', 'ache', 'discharge', 'fluid', 'hearing', 'fullness', 'blocked'],
    bodyParts: ['Head', 'Ears'],
    severity: 'Low',
    description: 'An infection or inflammation of the middle ear, behind the eardrum. Very common in children, often following a cold or sore throat.',
    homeRemedies: [
      'Apply a warm, damp compress over the affected ear for pain relief',
      'Rest in an upright position (helps drain fluid and reduce pressure)',
      'Keep the ear dry; avoid swimming or letting water enter during baths',
    ],
    otcMedicines: [
      { name: 'Paracetamol (Crocin 500mg)', dosage: '500mg every 6 hours for earache and fever', warning: 'Do not insert any drops into the ear if you suspect a ruptured eardrum (fluid drainage).' },
      { name: 'Ibuprofen (Combiflam)', dosage: '1 tablet 3 times daily after food for swelling and pain' }
    ],
    specialist: 'ENT Specialist (Otolaryngologist)',
    specialistReason: 'Requires examination of the eardrum (otoscopy) to determine if prescription antibiotic drops or oral antibiotics are required.',
    warningFlags: ['fluid drainage', 'sudden hearing loss', 'dizziness', 'facial weakness', 'swelling behind ear'],
    seekEmergencyIf: ['Severe swelling or redness behind the ear (possible mastoiditis)', 'Stiff neck with severe headache and fever', 'Sudden complete hearing loss or vertigo'],
  },
  {
    name: 'Tonsillitis',
    keywords: ['tonsillitis', 'tonsil', 'tonsils', 'throat', 'swollen', 'swallow', 'swallowing'],
    bodyParts: ['Neck', 'Mouth/Throat'],
    severity: 'Low',
    description: 'Inflammation of the tonsils, typically caused by a viral or bacterial infection. Leads to sore throat, swollen glands, and painful swallowing.',
    homeRemedies: [
      'Gargle with warm salt water 3-4 times a day',
      'Drink warm liquids (herbal tea, broth, warm water with honey)',
      'Get plenty of rest and avoid talking excessively',
      'Use a cool-mist humidifier to keep the air moist',
      'Suck on throat lozenges or hard candies to soothe raw tissues',
    ],
    otcMedicines: [
      { name: 'Strepsils Throat Lozenges', dosage: 'Dissolve 1 lozenge slowly in the mouth every 2-3 hours', warning: 'Not for children under 5 years.' },
      { name: 'Paracetamol (Calpol)', dosage: '500mg every 6 hours for throat pain and fever' }
    ],
    specialist: 'ENT Specialist / General Physician',
    specialistReason: 'If throat swab suggests bacterial infection (Strep throat), which requires a full course of oral antibiotics.',
    warningFlags: ['difficulty breathing', 'inability to swallow saliva', 'drooling', 'inability to open mouth'],
    seekEmergencyIf: ['Difficulty breathing or stridor (high-pitched breathing sound)', 'Inability to swallow even fluids, leading to drooling', 'Severe swelling on one side of the throat pushing tonsil'],
  },
  {
    name: 'Heat Exhaustion / Heat Stroke',
    keywords: ['heat', 'exhaustion', 'stroke', 'dizziness', 'sweating', 'pulse', 'headache', 'nausea', 'cramps', 'temperature', 'confusion'],
    bodyParts: ['Head', 'Skin', 'Chest'],
    severity: 'Moderate',
    description: 'Heat-related illnesses caused by prolonged exposure to high temperatures and dehydration. Heat stroke is a life-threatening medical emergency.',
    homeRemedies: [
      'Move to a cool, shaded, or air-conditioned room immediately',
      'Loosen or remove tight clothing',
      'Sip cool water, sports drinks, or ORS fluids (avoid rapid drinking)',
      'Apply cool, wet cloths to the skin, focusing on neck, armpits, and groin',
      'Use a fan to help cool down',
    ],
    otcMedicines: [
      { name: 'ORS (Electral)', dosage: 'Drink 1 liter of ORS water slowly over an hour', warning: 'Avoid taking fever reducers like Paracetamol or Ibuprofen as they do not help environmental heat illness and can strain liver/kidneys.' }
    ],
    specialist: 'General Physician / Emergency Care',
    specialistReason: 'If the body temperature is extremely high (above 103°F/39.4°C) or the patient shows signs of confusion (heat stroke).',
    warningFlags: ['no sweating', 'hot dry skin', 'confusion', 'delirium', 'loss of consciousness', 'seizure'],
    seekEmergencyIf: ['Body temperature above 103°F (39.4°C)', 'Hot, red, dry skin (no sweating)', 'Confusion, slurred speech, or hallucinations', 'Seizures or loss of consciousness'],
  },
  {
    name: 'Appendicitis',
    keywords: ['appendicitis', 'appendix', 'stomach', 'pain', 'navel', 'nausea', 'vomiting', 'appetite', 'tenderness'],
    bodyParts: ['Stomach/Abdomen'],
    severity: 'Emergency',
    description: 'Acute inflammation of the appendix, a small finger-shaped pouch projecting from the colon. It is a medical emergency that requires prompt surgical removal.',
    homeRemedies: [
      'Do NOT eat or drink anything (keep stomach empty for potential surgery)',
      'Do NOT use heating pads, enemas, or laxatives, as they can cause the appendix to rupture',
      'Rest quietly in a comfortable position and seek immediate transport',
    ],
    otcMedicines: [
      { name: 'Painkillers are NOT recommended', dosage: 'Do not take pain medicines', warning: 'Painkillers can mask worsening symptoms. Go to the nearest surgical hospital immediately.' }
    ],
    specialist: 'General Surgeon',
    specialistReason: 'Requires urgent clinical evaluation, abdominal ultrasound or CT scan, and emergency appendectomy surgery.',
    warningFlags: ['severe pain lower right', 'fever', 'persistent vomiting', 'inability to pass gas'],
    seekEmergencyIf: ['Severe pain starting around navel and moving to lower right abdomen', 'Pain that worsens with coughing, walking, or sudden movements', 'Abdominal swelling and severe tenderness', 'Fever and chills with abdominal pain'],
  },
  {
    name: 'Urolithiasis (Kidney Stones)',
    keywords: ['kidney', 'stone', 'stones', 'pain', 'back', 'side', 'flank', 'urination', 'urine', 'blood'],
    bodyParts: ['Back', 'Stomach/Abdomen', 'Pelvis/Groin'],
    severity: 'Severe',
    description: 'Hard deposits of minerals and acid salts that form inside the kidneys. Passing them can be extremely painful, causing severe side and back pain.',
    homeRemedies: [
      'Drink extreme amounts of water (3–4 liters daily) to help flush the stone',
      'Warm bath or heating pads on the lower back/side can ease pain',
      'Drink lemon juice or apple cider vinegar (citrates can help break stones)',
    ],
    otcMedicines: [
      { name: 'Ibuprofen (Brufen 400mg)', dosage: '400mg every 8 hours with food for pain relief', warning: 'Consult doctor. Stronger prescription pain relievers or muscle relaxers are often needed.' },
      { name: 'Cystone Tablet (Himalaya)', dosage: '2 tablets twice daily (herbal supplement to support stone passing)' }
    ],
    specialist: 'Urologist',
    specialistReason: 'For scan-based stone sizing. Large stones may require shockwave therapy, laser lithotripsy, or surgery.',
    warningFlags: ['blood in urine', 'fever with chills', 'cannot urinate', 'severe vomiting'],
    seekEmergencyIf: ['Pain so severe that you cannot sit still or find a comfortable position', 'Pain accompanied by nausea, vomiting, fever, and chills (signs of infection)', 'Blood in your urine or difficulty passing urine'],
  },
  {
    name: 'Chickenpox',
    keywords: ['chickenpox', 'varicella', 'blisters', 'rash', 'spots', 'skin', 'fever', 'headache', 'fatigue'],
    bodyParts: ['Skin', 'Head'],
    severity: 'Moderate',
    description: 'A highly contagious viral infection causing an itchy, blister-like skin rash all over the body. Caused by the Varicella-Zoster virus.',
    homeRemedies: [
      'Apply calamine lotion to the blisters to reduce itching',
      'Take lukewarm baths with colloidal oatmeal or baking soda',
      'Keep fingernails short and clean to prevent scratching and bacterial infection',
      'Wear loose, cool, cotton clothing',
      'Stay isolated at home until all blisters have crusted over to prevent spread',
    ],
    otcMedicines: [
      { name: 'Calamine Lotion', dosage: 'Apply gently to itchy spots 3-4 times daily' },
      { name: 'Paracetamol (Crocin)', dosage: '500mg every 6 hours for fever', warning: 'Do NOT give Aspirin to children/teens with chickenpox due to the risk of Reye\'s Syndrome.' }
    ],
    specialist: 'General Physician / Pediatrician',
    specialistReason: 'To confirm diagnosis and, for high-risk patients (adults, pregnant women), prescribe antiviral medication like Acyclovir within 24 hours of rash onset.',
    warningFlags: ['blisters spreading to eyes', 'shortness of breath', 'extreme drowsiness', 'infected blisters with pus'],
    seekEmergencyIf: ['Rash spreads to one or both eyes', 'Shortness of breath, severe cough, or chest tightness', 'Extreme drowsiness, confusion, or difficulty walking', 'Fever stays high for more than 4 days'],
  },
  {
    name: 'Scabies',
    keywords: ['scabies', 'itching', 'itch', 'mites', 'skin', 'rash', 'fingers', 'wrist', 'bumps'],
    bodyParts: ['Skin', 'Arms/Hands', 'Joints'],
    severity: 'Low',
    description: 'An itchy skin infestation caused by the microscopic itch mite Sarcoptes scabiei. Causes intense itching, particularly at night, and a pimple-like rash.',
    homeRemedies: [
      'Wash all bedding, towels, and clothing used in hot water and dry on high heat',
      'Vacuum carpets and furniture thoroughly',
      'Ensure all household members and close contacts are treated at the same time to prevent re-infestation',
      'Apply cool compresses to itchy skin to soothe irritation',
    ],
    otcMedicines: [
      { name: 'Permethrin Cream 5% (Scabigard)', dosage: 'Apply from neck down to toes. Leave on for 8-14 hours, then wash off. Repeat in 7 days.', warning: 'Requires doctor prescription. Avoid contact with eyes.' },
      { name: 'Cetirizine (10mg)', dosage: '1 tablet at bedtime to control intense itching' }
    ],
    specialist: 'Dermatologist',
    specialistReason: 'To confirm diagnosis (using skin scraping under microscope) and prescribe scabicides like Permethrin or Ivermectin.',
    warningFlags: ['yellow crusting', 'pus', 'widespread skin raw from scratching'],
    seekEmergencyIf: ['Signs of severe secondary skin infection (red streaks, severe pain, yellow crusts, or high fever) due to constant scratching'],
  },
];

/**
 * Analyzes user symptoms against the IndexedDB disease catalog.
 * Falls back to the static KNOWLEDGE_BASE if the database is empty.
 * Returns a ranked list of matching conditions.
 */
export async function analyzeSymptoms(
  description: string,
  bodyParts: string[],
  userSeverity: string
): Promise<DiseaseEntry[]> {
  const lowerDesc = description.toLowerCase();

  // Try IndexedDB first (500+ diseases), fall back to static array
  let entries: DiseaseEntry[];
  try {
    const dbCount = await db.diseases.count();
    if (dbCount > 0) {
      entries = await db.diseases.toArray();
    } else {
      entries = KNOWLEDGE_BASE;
    }
  } catch (err) {
    console.warn('Offline DB read failed, falling back to static knowledge base:', err);
    entries = KNOWLEDGE_BASE;
  }

  const scored = entries.map(entry => {
    let score = 0;

    // Keyword match in description
    for (const kw of entry.keywords) {
      if (lowerDesc.includes(kw)) score += 3;
    }

    // Body part match
    for (const part of bodyParts) {
      if (entry.bodyParts.includes(part)) score += 2;
    }

    // Boost if warning flags appear in description
    for (const flag of entry.warningFlags) {
      if (lowerDesc.includes(flag)) score += 5;
    }

    return { entry, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(s => s.entry);
}

/**
 * Determines severity escalation based on warning flags in the description.
 */
export function checkForEscalation(
  description: string,
  matched: DiseaseEntry[]
): { escalated: boolean; reason: string } {
  const lowerDesc = description.toLowerCase();
  for (const entry of matched) {
    for (const flag of entry.warningFlags) {
      if (lowerDesc.includes(flag.toLowerCase())) {
        return { escalated: true, reason: `Warning flag detected: "${flag}"` };
      }
    }
  }
  return { escalated: false, reason: '' };
}

