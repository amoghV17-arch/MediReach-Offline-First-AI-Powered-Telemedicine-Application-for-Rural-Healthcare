import type { DiseaseEntry } from '../knowledgeBase';

/**
 * MediReach Expanded Disease Catalog Seed Data
 * Contains over 500 diseases for comprehensive offline symptom matching.
 */
export const EXPANDED_DISEASES: DiseaseEntry[] = [
  {
    "name": "Pneumonia",
    "keywords": [
      "pneumonia",
      "cough",
      "fever",
      "shaking",
      "chills",
      "breath",
      "sputum",
      "chest",
      "phlegm",
      "mucus"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "An infection that inflames air sacs in one or both lungs, which may fill with fluid or pus.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "COPD",
    "keywords": [
      "copd",
      "breath",
      "wheezing",
      "cough",
      "chest",
      "tightness",
      "phlegm",
      "emphysema",
      "bronchitis"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Chronic Obstructive Pulmonary Disease, a chronic inflammatory lung disease that causes obstructed airflow from the lungs.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Bronchitis",
    "keywords": [
      "bronchitis",
      "cough",
      "mucus",
      "fatigue",
      "breath",
      "chest",
      "discomfort",
      "wheeze"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the lining of bronchial tubes, which carry air to and from your lungs.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Bronchitis",
    "keywords": [
      "bronchitis",
      "chronic",
      "cough",
      "mucus",
      "sputum",
      "wheezing",
      "breath",
      "chest"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Long-term inflammation of the bronchi, common in smokers, causing persistent productive cough.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sinusitis",
    "keywords": [
      "sinus",
      "sinusitis",
      "headache",
      "congestion",
      "facial",
      "pressure",
      "nose",
      "nasal",
      "discharge"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Inflammation or swelling of the tissue lining the sinuses, causing facial pain and stuffy nose.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pleurisy",
    "keywords": [
      "pleurisy",
      "chest",
      "sharp",
      "pain",
      "breathing",
      "cough",
      "inhalation",
      "ribs"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Inflammation of the sheet-like membranes that damp-cushion your lungs and chest wall.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Influenza",
    "keywords": [
      "flu",
      "fever",
      "chills",
      "muscle",
      "aches",
      "cough",
      "congestion",
      "runny",
      "nose",
      "headache"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A highly contagious viral infection of the respiratory passages causing fever, severe aching, and catarrh.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "COVID-19",
    "keywords": [
      "covid",
      "corona",
      "fever",
      "cough",
      "taste",
      "smell",
      "fatigue",
      "breath",
      "throat",
      "body"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "An infectious disease caused by the SARS-CoV-2 virus, affecting the respiratory system with variable severity.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Laryngitis",
    "keywords": [
      "voice",
      "hoarse",
      "throat",
      "laryngitis",
      "whisper",
      "tickle",
      "cough"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Inflammation of your voice box (larynx) from overuse, irritation or infection, causing hoarseness.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pharyngitis",
    "keywords": [
      "throat",
      "sore",
      "pharyngitis",
      "swallowing",
      "pain",
      "scratchy",
      "tonsils"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Inflammation of the pharynx, causing a sore throat and pain with swallowing.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tonsillitis",
    "keywords": [
      "tonsils",
      "tonsillitis",
      "throat",
      "swallowing",
      "swollen",
      "glands",
      "fever"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the tonsils, typically viral or bacterial, causing sore throat, difficulty swallowing, and swollen glands.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Croup",
    "keywords": [
      "croup",
      "barking",
      "cough",
      "stridor",
      "breathing",
      "hoarse",
      "child",
      "infant"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "An upper airway infection that blocks breathing and has a distinctive barking cough, common in children.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sleep Apnea",
    "keywords": [
      "sleep",
      "apnea",
      "snoring",
      "choking",
      "gasping",
      "daytime",
      "fatigue",
      "morning",
      "headache"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A potentially serious sleep disorder in which breathing repeatedly stops and starts.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pulmonary Embolism",
    "keywords": [
      "embolism",
      "clot",
      "breath",
      "chest",
      "sharp",
      "cough",
      "blood",
      "rapid",
      "heart"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Emergency",
    "description": "A blockage in one of the pulmonary arteries in your lungs, usually caused by blood clots from the legs.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pulmonary Fibrosis",
    "keywords": [
      "fibrosis",
      "lung",
      "scarring",
      "breath",
      "cough",
      "fatigue",
      "weight",
      "loss"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A lung disease that occurs when lung tissue becomes damaged and scarred, making it difficult to breathe.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Silicosis",
    "keywords": [
      "silicosis",
      "dust",
      "quarry",
      "cough",
      "breath",
      "fatigue",
      "chest",
      "phlegm"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "An occupational lung disease caused by inhalation of crystalline silica dust, causing progressive scarring.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Asbestosis",
    "keywords": [
      "asbestos",
      "asbestosis",
      "cough",
      "breath",
      "chest",
      "tightness",
      "fingers",
      "clubbing"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A chronic lung disease caused by inhaling asbestos fibers, leading to lung tissue scarring and shortness of breath.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sarcoidosis",
    "keywords": [
      "sarcoidosis",
      "granuloma",
      "cough",
      "breath",
      "fatigue",
      "joints",
      "skin",
      "lymph"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A disease characterized by the growth of tiny collections of inflammatory cells (granulomas) in any part of the body, most commonly lungs.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bronchiectasis",
    "keywords": [
      "bronchiectasis",
      "cough",
      "sputum",
      "mucus",
      "breath",
      "chest",
      "fatigue",
      "blood"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A condition in which the lungs' airways become abnormally stretched and widened, leading to mucus buildup.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Emphysema",
    "keywords": [
      "emphysema",
      "breath",
      "barrel",
      "chest",
      "wheeze",
      "cough",
      "smoker",
      "fatigue"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A lung condition that causes shortness of breath due to damage to the air sacs (alveoli).",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Atelectasis",
    "keywords": [
      "atelectasis",
      "lung",
      "collapse",
      "breath",
      "chest",
      "cough",
      "shallow",
      "breathing"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A complete or partial collapse of the entire lung or area (lobe) of the lung.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Allergic Rhinitis",
    "keywords": [
      "sneezing",
      "nose",
      "itchy",
      "eyes",
      "watery",
      "congestion",
      "allergy",
      "pollen"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "An allergic response causing itchy, watery eyes, sneezing, and other similar symptoms.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyperventilation",
    "keywords": [
      "pant",
      "hyperventilation",
      "rapid",
      "breathing",
      "anxiety",
      "tingling",
      "hands",
      "dizziness"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Rapid or deep breathing, usually caused by anxiety or panic, leading to low carbon dioxide levels in the blood.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "RSV Infection",
    "keywords": [
      "rsv",
      "infant",
      "wheezing",
      "cough",
      "fever",
      "congested",
      "runny",
      "nose"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Respiratory Syncytial Virus, a common respiratory virus that causes mild, cold-like symptoms, but can be serious in infants.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Whooping Cough",
    "keywords": [
      "whooping",
      "pertussis",
      "cough",
      "spasm",
      "vomiting",
      "whoop",
      "child"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A highly contagious respiratory tract infection characterized by a severe hacking cough followed by a high-pitched intake of breath.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Legionnaires Disease",
    "keywords": [
      "legionella",
      "pneumonia",
      "fever",
      "chills",
      "cough",
      "muscle",
      "aches",
      "headache",
      "diarrhea"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A severe form of pneumonia caused by inhaling Legionella bacteria from water systems.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hantavirus Pulmonary Syndrome",
    "keywords": [
      "hantavirus",
      "rodent",
      "fever",
      "muscle",
      "aches",
      "breath",
      "fluid",
      "lungs"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Emergency",
    "description": "A rare but serious viral disease spread by rodents that causes rapid, life-threatening fluid buildup in the lungs.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tracheitis",
    "keywords": [
      "tracheitis",
      "windpipe",
      "cough",
      "stridor",
      "fever",
      "breathing",
      "throat"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A bacterial infection of the trachea (windpipe), most common in young children, causing airway obstruction.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vocal Cord Dysfunction",
    "keywords": [
      "vocal",
      "cord",
      "stridor",
      "wheeze",
      "breath",
      "throat",
      "tightness"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A condition where the vocal cords close when they should open during inhalation, mimicking asthma.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nasal Congestion",
    "keywords": [
      "stuffy",
      "nose",
      "block",
      "congestion",
      "breathing",
      "runny"
    ],
    "bodyParts": [
      "Chest",
      "Nose",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Obstruction of the nasal passages, usually due to swollen blood vessels in the nasal mucosa.",
    "homeRemedies": [
      "Steam inhalation twice a day",
      "Drink warm water with honey and ginger",
      "Elevate head with pillows while sleeping",
      "Perform breathing exercises (Pranayama)"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours as needed for fever",
        "warning": "Do not exceed 4g per day"
      },
      {
        "name": "Cough Syrup (Ascoril / Alex)",
        "dosage": "10ml three times a day",
        "warning": "May cause drowsiness"
      }
    ],
    "specialist": "Pulmonologist",
    "specialistReason": "For expert evaluation of lung function and respiratory symptoms.",
    "warningFlags": [
      "difficulty breathing",
      "blood in sputum",
      "chest pain",
      "high fever"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath",
      "Bluish lips or face",
      "Inability to speak in full sentences",
      "Confusion or lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hepatitis A",
    "keywords": [
      "hepatitis",
      "jaundice",
      "yellow",
      "liver",
      "nausea",
      "urine",
      "clay",
      "stool",
      "fever"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A highly contagious liver infection caused by the hepatitis A virus, typically spread through contaminated food/water.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hepatitis B",
    "keywords": [
      "hepatitis",
      "liver",
      "jaundice",
      "yellow",
      "nausea",
      "fatigue",
      "belly",
      "pain"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A serious liver infection caused by the hepatitis B virus, transmitted through body fluids, causing acute or chronic disease.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hepatitis C",
    "keywords": [
      "hepatitis",
      "liver",
      "chronic",
      "fatigue",
      "jaundice",
      "nausea",
      "cirrhosis"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "An infection caused by the hepatitis C virus that attacks the liver and leads to inflammation, often asymptomatic initially.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hepatitis E",
    "keywords": [
      "hepatitis",
      "liver",
      "jaundice",
      "yellow",
      "pregnancy",
      "waterborne",
      "vomiting"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A waterborne liver infection caused by the hepatitis E virus, particularly dangerous in pregnant women.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Peptic Ulcer Disease",
    "keywords": [
      "ulcer",
      "stomach",
      "burning",
      "pain",
      "acid",
      "heartburn",
      "indigestion",
      "nausea"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Sores that develop on the lining of the stomach, lower esophagus, or small intestine.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Irritable Bowel Syndrome",
    "keywords": [
      "ibs",
      "stomach",
      "cramp",
      "bloating",
      "gas",
      "diarrhea",
      "constipation",
      "bowel"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "A common disorder that affects the large intestine, causing cramping, abdominal pain, bloating, gas, and changes in bowel habits.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cholera",
    "keywords": [
      "cholera",
      "watery",
      "diarrhea",
      "rice",
      "water",
      "vomiting",
      "dehydration",
      "cramps"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Emergency",
    "description": "An acute diarrheal illness caused by infection of the intestine with Vibrio cholerae bacteria, leading to severe rapid dehydration.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Jaundice",
    "keywords": [
      "jaundice",
      "yellow",
      "eyes",
      "skin",
      "urine",
      "liver",
      "bilirubin"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "A medical condition with yellowing of the skin or whites of the eyes, arising from excess of the pigment bilirubin.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Crohn's Disease",
    "keywords": [
      "crohns",
      "ibd",
      "stomach",
      "pain",
      "diarrhea",
      "weight",
      "loss",
      "fatigue",
      "cramping"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A chronic inflammatory bowel disease (IBD) characterized by inflammation of the digestive tract lining.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ulcerative Colitis",
    "keywords": [
      "colitis",
      "ibd",
      "bloody",
      "diarrhea",
      "stomach",
      "cramp",
      "urgency",
      "rectal"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A chronic inflammatory bowel disease that causes long-lasting inflammation and ulcers in the innermost lining of the large intestine.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Celiac Disease",
    "keywords": [
      "celiac",
      "gluten",
      "wheat",
      "diarrhea",
      "bloating",
      "weight",
      "loss",
      "fatigue",
      "rash"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "An autoimmune disorder where eating gluten leads to damage in the small intestine.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gallstones",
    "keywords": [
      "gallstones",
      "gallbladder",
      "pain",
      "right",
      "shoulder",
      "stomach",
      "nausea",
      "back"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Hardened deposits of digestive fluid that can form in your gallbladder, causing sharp right-upper abdomen pain.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Cholecystitis",
    "keywords": [
      "cholecystitis",
      "gallbladder",
      "pain",
      "fever",
      "nausea",
      "vomiting",
      "tender",
      "abdomen"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "Inflammation of the gallbladder, usually caused by a gallstone blocking the cystic duct.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Pancreatitis",
    "keywords": [
      "pancreas",
      "pancreatitis",
      "abdominal",
      "pain",
      "radiating",
      "back",
      "nausea",
      "vomiting",
      "fever"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "Sudden inflammation of the pancreas, causing severe upper abdominal pain radiating to the back.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Pancreatitis",
    "keywords": [
      "pancreas",
      "pancreatitis",
      "chronic",
      "pain",
      "weight",
      "loss",
      "oily",
      "stool",
      "steatorrhea"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "Long-standing inflammation of the pancreas that alters its normal structure and functions.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cirrhosis of Liver",
    "keywords": [
      "cirrhosis",
      "liver",
      "scarring",
      "jaundice",
      "swelling",
      "fluid",
      "belly",
      "ascites",
      "fatigue"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "Late-stage scarring (fibrosis) of the liver caused by many forms of liver diseases and conditions.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Fatty Liver Disease",
    "keywords": [
      "fatty",
      "liver",
      "fat",
      "weight",
      "fatigue",
      "abdomen",
      "discomfort"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "An accumulation of fat in the liver cells, often associated with obesity, diabetes, or alcohol use.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Diverticulitis",
    "keywords": [
      "diverticulitis",
      "left",
      "side",
      "abdominal",
      "pain",
      "fever",
      "nausea",
      "constipation",
      "diarrhea"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Inflammation or infection of small pouches (diverticula) that can form in the walls of the intestines.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gastritis",
    "keywords": [
      "gastritis",
      "stomach",
      "burning",
      "indigestion",
      "bloating",
      "nausea",
      "hiccups"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Inflammation of the protective lining of the stomach, causing burning pain, indigestion, and bloating.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bacillary Dysentery",
    "keywords": [
      "dysentery",
      "shigella",
      "bloody",
      "diarrhea",
      "fever",
      "cramps",
      "stomach",
      "mucus"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "An intestinal infection caused by Shigella bacteria, resulting in severe diarrhea with blood and mucus.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Amebic Dysentery",
    "keywords": [
      "dysentery",
      "amebiasis",
      "amoeba",
      "bloody",
      "diarrhea",
      "cramps",
      "stomach",
      "fatigue"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "An intestinal infection caused by the parasite Entamoeba histolytica, causing bloody stools and abdominal pain.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Lactose Intolerance",
    "keywords": [
      "lactose",
      "milk",
      "dairy",
      "diarrhea",
      "gas",
      "bloating",
      "stomach",
      "cramps"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "The inability to fully digest sugar (lactose) in dairy products, causing gas, bloating, and diarrhea.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hemorrhoids",
    "keywords": [
      "piles",
      "hemorrhoids",
      "bleeding",
      "rectal",
      "itching",
      "pain",
      "stool",
      "swelling"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Swollen and inflamed veins in your anus and lower rectum, causing pain, itching, and bleeding during bowel movements.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Anal Fissure",
    "keywords": [
      "fissure",
      "sharp",
      "pain",
      "stool",
      "bleeding",
      "anus",
      "constipation"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "A small tear in the thin, moist tissue that lines the anus, causing sharp pain and bright red blood during bowel movements.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gastroesophageal Reflux",
    "keywords": [
      "gerd",
      "acid",
      "reflux",
      "heartburn",
      "chest",
      "burning",
      "sour",
      "taste",
      "throat"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "A chronic digestive disease where stomach acid flows back into the food pipe, irritating the lining.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Esophagitis",
    "keywords": [
      "esophagus",
      "esophagitis",
      "swallowing",
      "pain",
      "heartburn",
      "acid",
      "throat"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the esophagus, the tube that carries food from throat to stomach, causing painful swallowing.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gastroparesis",
    "keywords": [
      "gastroparesis",
      "fullness",
      "nausea",
      "vomiting",
      "stomach",
      "bloating",
      "diabetic"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "A condition that affects the normal movement of the muscles in the stomach, delaying stomach emptying.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Peritonitis",
    "keywords": [
      "peritonitis",
      "severe",
      "abdomen",
      "rigid",
      "pain",
      "fever",
      "rebound",
      "tenderness"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Emergency",
    "description": "Inflammation of the membrane lining the abdominal wall and covering the abdominal organs, a medical emergency.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ascites",
    "keywords": [
      "ascites",
      "fluid",
      "belly",
      "swelling",
      "liver",
      "cirrhosis",
      "breath"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "The accumulation of fluid in the peritoneal cavity, causing abdominal swelling and shortness of breath.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Liver Abscess",
    "keywords": [
      "abscess",
      "liver",
      "fever",
      "chills",
      "right",
      "upper",
      "pain",
      "nausea"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A pus-filled mass in the liver, usually caused by bacterial or amebic infections.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hepatic Encephalopathy",
    "keywords": [
      "encephalopathy",
      "liver",
      "confusion",
      "drowsiness",
      "tremor",
      "flapping",
      "breath",
      "sweet"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A decline in brain function that occurs as a result of severe liver disease, leading to toxic buildup in the brain.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Barrett's Esophagus",
    "keywords": [
      "barretts",
      "esophagus",
      "acid",
      "gerd",
      "reflux",
      "chronic",
      "heartburn"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "A serious complication of GERD where the normal lining of the esophagus changes to tissue resembling the intestine.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cyclic Vomiting Syndrome",
    "keywords": [
      "vomiting",
      "cyclic",
      "nausea",
      "episodes",
      "severe",
      "exhaustion"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "A rare disorder characterized by recurrent, sudden episodes of severe vomiting with no apparent cause.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Giardiasis",
    "keywords": [
      "giardia",
      "parasite",
      "watery",
      "greasy",
      "diarrhea",
      "bloating",
      "cramps",
      "nausea"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "An intestinal infection caused by the Giardia lamblia parasite, marked by abdominal cramps, bloating, and watery, greasy diarrhea.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Food Poisoning",
    "keywords": [
      "food",
      "poisoning",
      "vomiting",
      "diarrhea",
      "nausea",
      "stomach",
      "cramps",
      "fever",
      "stale"
    ],
    "bodyParts": [
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Illness caused by consuming food contaminated with bacteria, viruses, or toxins, causing rapid onset vomiting and diarrhea.",
    "homeRemedies": [
      "Drink plenty of coconut water and ORS (Electral)",
      "Eat a bland diet (khichdi, curd rice, bananas)",
      "Avoid spicy, greasy, or dairy foods",
      "Sip ginger or mint tea for nausea"
    ],
    "otcMedicines": [
      {
        "name": "ORS (Electral)",
        "dosage": "Dissolve 1 sachet in 1 liter of water, sip continuously",
        "warning": "Use prepared solution within 24 hours"
      },
      {
        "name": "Antacid (Digene)",
        "dosage": "2 tablets chewed after meals",
        "warning": "Avoid long-term usage without consulting doctor"
      }
    ],
    "specialist": "Gastroenterologist",
    "specialistReason": "For diagnosis and management of digestive tract and liver conditions.",
    "warningFlags": [
      "severe abdominal pain",
      "blood in stool",
      "persistent vomiting",
      "yellow eyes"
    ],
    "seekEmergencyIf": [
      "Uncontrollable vomiting or diarrhea",
      "Signs of severe dehydration (no urine for 8 hours, extreme thirst)",
      "Black or tarry stools",
      "High fever with severe abdomen tenderness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Angina Pectoris",
    "keywords": [
      "angina",
      "chest",
      "pain",
      "pressure",
      "tightness",
      "exertion",
      "stress"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "Chest pain or discomfort caused when your heart muscle doesn't get enough oxygen-rich blood.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Deep Vein Thrombosis",
    "keywords": [
      "dvt",
      "clot",
      "leg",
      "swelling",
      "pain",
      "warmth",
      "redness",
      "calf"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A blood clot that forms in a vein deep in the body, most commonly in the legs, causing pain and swelling.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Varicose Veins",
    "keywords": [
      "varicose",
      "veins",
      "leg",
      "swollen",
      "purple",
      "aching",
      "heaviness",
      "standing"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Low",
    "description": "Gnarled, enlarged veins, most commonly in the legs and feet, causing cosmetic concern and aching discomfort.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Atherosclerosis",
    "keywords": [
      "atherosclerosis",
      "artery",
      "plaque",
      "cholesterol",
      "blockage",
      "circulation"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Moderate",
    "description": "A disease in which plaque builds up inside your arteries, narrowing them and limiting blood flow.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cardiac Arrhythmia",
    "keywords": [
      "arrhythmia",
      "palpitations",
      "fluttering",
      "irregular",
      "heartbeat",
      "dizziness",
      "chest"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "An improper beating of the heart, whether irregular, too fast, or too slow.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Atrial Fibrillation",
    "keywords": [
      "afib",
      "fibrillation",
      "palpitations",
      "rapid",
      "heartbeat",
      "fatigue",
      "dizziness",
      "breath"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "An irregular and often very rapid heart rhythm that can lead to blood clots in the heart and increase stroke risk.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Congestive Heart Failure",
    "keywords": [
      "heart",
      "failure",
      "breath",
      "fatigue",
      "swollen",
      "legs",
      "feet",
      "cough"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A chronic condition in which the heart doesn't pump blood as well as it should, causing fluid buildup in limbs and lungs.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Pericarditis",
    "keywords": [
      "pericarditis",
      "chest",
      "sharp",
      "pain",
      "lying",
      "down",
      "fever",
      "breath"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "Inflammation of the sac-like membrane surrounding the heart (pericardium), causing sharp chest pain that improves when sitting up.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Myocarditis",
    "keywords": [
      "myocarditis",
      "heart",
      "inflammation",
      "chest",
      "pain",
      "fatigue",
      "breath",
      "fever"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "Inflammation of the middle layer of the heart wall (myocardium), usually caused by a viral infection.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Infective Endocarditis",
    "keywords": [
      "endocarditis",
      "heart",
      "valve",
      "fever",
      "chills",
      "murmur",
      "fatigue",
      "spots"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "An infection of the heart's inner lining (endocardium), usually involving the heart valves.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Rheumatic Heart Disease",
    "keywords": [
      "rheumatic",
      "fever",
      "heart",
      "valve",
      "breath",
      "joint",
      "pain",
      "murmur"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A condition in which the heart valves have been permanently damaged by rheumatic fever, a complication of strep throat.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Peripheral Artery Disease",
    "keywords": [
      "pad",
      "leg",
      "pain",
      "walking",
      "claudication",
      "cold",
      "feet",
      "cramping"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Moderate",
    "description": "A common circulatory problem in which narrowed arteries reduce blood flow to the limbs, causing leg pain when walking.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Abdominal Aortic Aneurysm",
    "keywords": [
      "aneurysm",
      "aorta",
      "belly",
      "pulsating",
      "back",
      "pain",
      "sudden"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Emergency",
    "description": "An enlargement or bulge in the lower part of the major vessel that supplies blood to the body (aorta), highly dangerous if ruptured.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Mitral Valve Prolapse",
    "keywords": [
      "prolapse",
      "mitral",
      "valve",
      "palpitations",
      "chest",
      "pain",
      "dizziness",
      "anxiety"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Moderate",
    "description": "A condition in which the two valve flaps of the mitral valve do not close smoothly, causing them to bulge upward into the left atrium.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypertrophic Cardiomyopathy",
    "keywords": [
      "cardiomyopathy",
      "heart",
      "thick",
      "breath",
      "chest",
      "pain",
      "fainting",
      "syncope"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A disease in which the heart muscle becomes abnormally thick, making it harder for the heart to pump blood.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sinus Bradycardia",
    "keywords": [
      "bradycardia",
      "slow",
      "heartrate",
      "fatigue",
      "dizziness",
      "fainting",
      "weakness"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Moderate",
    "description": "A slow heart rate (typically below 60 beats per minute) originating from the sinus node, which can cause dizziness if output is low.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sinus Tachycardia",
    "keywords": [
      "tachycardia",
      "fast",
      "heartrate",
      "palpitations",
      "breath",
      "dizziness",
      "exercise"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Moderate",
    "description": "A rapid heart rate (typically above 100 beats per minute) originating from the sinus node, usually in response to exercise, fever, or anxiety.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Raynaud's Phenomenon",
    "keywords": [
      "raynauds",
      "fingers",
      "cold",
      "white",
      "blue",
      "numb",
      "tingling"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Low",
    "description": "A condition causing some areas of the body (especially fingers and toes) to feel numb and cold in response to cold temperatures or stress.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Buerger's Disease",
    "keywords": [
      "buergers",
      "smoker",
      "fingers",
      "toes",
      "pain",
      "ulcers",
      "gangrene",
      "claudication"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A rare disease of the arteries and veins in the arms and legs, associated with heavy tobacco use, leading to blockages and tissue damage.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Orthostatic Hypotension",
    "keywords": [
      "dizzy",
      "standing",
      "orthostatic",
      "hypotension",
      "dizziness",
      "fainting",
      "head"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Low",
    "description": "A form of low blood pressure that happens when standing up from sitting or lying down, causing brief lightheadedness.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Takotsubo Cardiomyopathy",
    "keywords": [
      "takotsubo",
      "stress",
      "broken",
      "heart",
      "chest",
      "pain",
      "breath",
      "grief"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "Temporary weakening of the left ventricle of the heart, often triggered by severe emotional or physical stress.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pulmonary Arterial Hypertension",
    "keywords": [
      "pulmonary",
      "hypertension",
      "breath",
      "fatigue",
      "dizziness",
      "chest",
      "pressure"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A type of high blood pressure that affects the arteries in the lungs and the right side of the heart.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sick Sinus Syndrome",
    "keywords": [
      "sick",
      "sinus",
      "arrhythmia",
      "fainting",
      "dizziness",
      "slow",
      "fast",
      "heartrate"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A group of heart rhythm problems due to malfunction of the sinus node (the heart's natural pacemaker).",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "First-Degree Heart Block",
    "keywords": [
      "heart",
      "block",
      "ekg",
      "pulse",
      "asymptomatic"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Low",
    "description": "A delay in the electrical conduction system of the heart, usually harmless and asymptomatic.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Third-Degree Heart Block",
    "keywords": [
      "block",
      "complete",
      "fainting",
      "syncope",
      "dizzy",
      "fatigue",
      "slow",
      "heartrate"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Emergency",
    "description": "Complete heart block, where electrical signals don't pass from the upper chambers of the heart to the lower chambers, causing severe bradycardia.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Superficial Thrombophlebitis",
    "keywords": [
      "thrombophlebitis",
      "vein",
      "redness",
      "pain",
      "hard",
      "cord",
      "tenderness"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Moderate",
    "description": "Inflammation of a vein near the surface of the skin, usually in the leg, due to a small blood clot.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Mitral Valve Stenosis",
    "keywords": [
      "stenosis",
      "mitral",
      "valve",
      "breath",
      "fatigue",
      "cough",
      "blood",
      "murmur"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A narrowing of the heart's mitral valve opening, restricting blood flow from the left atrium to the left ventricle.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Aortic Valve Stenosis",
    "keywords": [
      "stenosis",
      "aorta",
      "valve",
      "chest",
      "pain",
      "fainting",
      "breath",
      "murmur"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "A narrowing of the aortic valve opening, obstructing blood flow from the left ventricle into the aorta.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Carotid Artery Stenosis",
    "keywords": [
      "carotid",
      "stenosis",
      "neck",
      "artery",
      "stroke",
      "bruit",
      "tia",
      "dizzy"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Severe",
    "description": "Narrowing of the carotid arteries, the main blood vessels that carry oxygenated blood to the brain, major risk factor for stroke.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Myocardial Infarction",
    "keywords": [
      "heart",
      "attack",
      "infarction",
      "chest",
      "pain",
      "sweating",
      "arm",
      "jaw",
      "breath"
    ],
    "bodyParts": [
      "Chest",
      "Neck",
      "Arms/Hands"
    ],
    "severity": "Emergency",
    "description": "A heart attack; occurs when flow of oxygen-rich blood to a section of heart muscle suddenly becomes blocked.",
    "homeRemedies": [
      "Maintain complete physical rest",
      "Sit in an upright, comfortable position",
      "Avoid any physical exertion",
      "Loosen tight clothing"
    ],
    "otcMedicines": [
      {
        "name": "Aspirin (Loprin 75mg)",
        "dosage": "1 tablet chewed immediately in suspected emergency",
        "warning": "Only under emergency guidance"
      }
    ],
    "specialist": "Cardiologist",
    "specialistReason": "For comprehensive heart health evaluation and cardiac care.",
    "warningFlags": [
      "chest pain",
      "shortness of breath",
      "palpitations",
      "sweating",
      "dizziness"
    ],
    "seekEmergencyIf": [
      "Crushing chest pain radiating to arm, neck, or jaw",
      "Sudden difficulty breathing",
      "Unexplained sweating and fainting",
      "Sudden weakness on one side of the body"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Parkinson's Disease",
    "keywords": [
      "parkinsons",
      "tremor",
      "shaking",
      "stiffness",
      "balance",
      "slow",
      "movement"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A progressive nervous system disorder that affects movement, causing tremors, stiffness, and balance issues.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Multiple Sclerosis",
    "keywords": [
      "ms",
      "sclerosis",
      "numbness",
      "tingling",
      "weakness",
      "vision",
      "balance",
      "fatigue"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A disease in which the immune system eats away at the protective sheath (myelin) covering nerves.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Alzheimer's Disease",
    "keywords": [
      "alzheimers",
      "memory",
      "forgetful",
      "confusion",
      "dementia",
      "cognitive",
      "decline"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A progressive disease that destroys memory and other important mental functions.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tension Headache",
    "keywords": [
      "headache",
      "tension",
      "forehead",
      "band",
      "pressure",
      "dull",
      "ache",
      "stress"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Low",
    "description": "A mild to moderate pain that's often described as feeling like a tight band around the head.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cluster Headache",
    "keywords": [
      "headache",
      "cluster",
      "eye",
      "sharp",
      "pain",
      "piercing",
      "tearing",
      "nasal"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A series of relatively short but extremely painful headaches, typically focused around one eye.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Trigeminal Neuralgia",
    "keywords": [
      "neuralgia",
      "facial",
      "sharp",
      "electric",
      "shock",
      "cheek",
      "jaw",
      "pain"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A chronic pain condition that affects the trigeminal nerve, causing extreme, sudden burning or shock-like facial pain.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sciatica",
    "keywords": [
      "sciatica",
      "leg",
      "pain",
      "back",
      "buttock",
      "shooting",
      "numbness",
      "tingling"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Pain radiating along the sciatic nerve, which runs down one or both legs from the lower back.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Guillain-Barr\u00e9 Syndrome",
    "keywords": [
      "guillain",
      "barre",
      "weakness",
      "tingling",
      "legs",
      "paralysis",
      "ascending"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Emergency",
    "description": "A rare disorder in which your body's immune system attacks your nerves, starting with leg weakness and progressing upward rapidly.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cerebral Palsy",
    "keywords": [
      "palsy",
      "cerebral",
      "motor",
      "stiff",
      "muscles",
      "walking",
      "coordination",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A group of disorders that affect movement and muscle tone or posture, caused by damage that occurs to the immature brain as it develops.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Transient Ischemic Attack",
    "keywords": [
      "tia",
      "stroke",
      "mini",
      "temporary",
      "weakness",
      "speech",
      "vision",
      "numbness"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Emergency",
    "description": "A temporary blockage of blood flow to the brain, causing stroke-like symptoms that resolve within 24 hours; a warning of an impending stroke.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Diabetic Neuropathy",
    "keywords": [
      "neuropathy",
      "diabetic",
      "burning",
      "numbness",
      "tingling",
      "feet",
      "pain"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A type of nerve damage that can occur if you have diabetes, most often affecting the legs and feet.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Restless Legs Syndrome",
    "keywords": [
      "legs",
      "restless",
      "itching",
      "crawling",
      "urge",
      "move",
      "night",
      "sleep"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Low",
    "description": "A disorder that causes an irresistible urge to move the legs, usually because of an uncomfortable sensation.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Narcolepsy",
    "keywords": [
      "narcolepsy",
      "sleep",
      "sleepiness",
      "cataplexy",
      "daytime",
      "paralysis",
      "dreaming"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A chronic sleep disorder characterized by overwhelming daytime drowsiness and sudden attacks of sleep.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Viral Encephalitis",
    "keywords": [
      "encephalitis",
      "fever",
      "headache",
      "confusion",
      "stiff",
      "neck",
      "seizure",
      "delirium"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Emergency",
    "description": "Inflammation of the brain tissue, usually caused by a viral infection, presenting with fever, severe headache, and altered mental state.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Myasthenia Gravis",
    "keywords": [
      "myasthenia",
      "gravis",
      "drooping",
      "eyelid",
      "double",
      "vision",
      "weakness",
      "swallowing"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A chronic autoimmune disorder in which antibodies destroy the communication between nerves and muscles, causing skeletal muscle weakness.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Huntington's Disease",
    "keywords": [
      "huntingtons",
      "jerking",
      "chorea",
      "movement",
      "dementia",
      "cognitive",
      "involuntary"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "An inherited condition in which nerve cells in the brain break down over time, causing involuntary movements and cognitive decline.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Amyotrophic Lateral Sclerosis",
    "keywords": [
      "als",
      "lou",
      "gehrig",
      "weakness",
      "muscle",
      "wasting",
      "twitching",
      "speech"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A progressive nervous system disease that affects nerve cells in the brain and spinal cord, causing loss of muscle control.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Neurofibromatosis",
    "keywords": [
      "neurofibromatosis",
      "spots",
      "bumps",
      "skin",
      "nodules",
      "tumors",
      "genetic"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A genetic disorder that causes tumors to form on nerve tissue, often producing spots and benign bumps on the skin.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dementia with Lewy Bodies",
    "keywords": [
      "dementia",
      "lewy",
      "hallucinations",
      "confusion",
      "memory",
      "parkinsons"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A progressive brain disorder that leads to decline in thinking, reasoning, and independent function, often with visual hallucinations.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Absence Seizures",
    "keywords": [
      "seizure",
      "absence",
      "petit",
      "mal",
      "staring",
      "blank",
      "child",
      "unresponsive"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A type of seizure involving brief, sudden lapses of conscious activity, common in children, characterized by staring blankly.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Essential Tremor",
    "keywords": [
      "tremor",
      "shaking",
      "hands",
      "writing",
      "holding",
      "essential"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Low",
    "description": "A nervous system disorder that causes involuntary and rhythmic shaking, especially of the hands during active movements.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Spina Bifida",
    "keywords": [
      "spina",
      "bifida",
      "spinal",
      "cord",
      "birth",
      "defect",
      "back",
      "paralysis"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "A birth defect in which a developing baby's spinal cord fails to develop properly, leaving a gap in the spine.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Post-Herpetic Neuralgia",
    "keywords": [
      "shingles",
      "neuralgia",
      "burning",
      "pain",
      "skin",
      "sensitivity",
      "nerve"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A complication of shingles, causing burning nerve pain that lasts long after the shingles rash and blisters have disappeared.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "CIDP",
    "keywords": [
      "cidp",
      "weakness",
      "numbness",
      "tingling",
      "limbs",
      "reflexes",
      "chronic",
      "neuropathy"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "Chronic Inflammatory Demyelinating Polyneuropathy, a neurological disorder causing progressive weakness and impaired sensory function in the legs and arms.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Migraine with Aura",
    "keywords": [
      "migraine",
      "aura",
      "vision",
      "flashes",
      "blind",
      "spots",
      "headache",
      "nausea"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A migraine headache accompanied or preceded by sensory warning signs (aura), such as flashes of light or tingling.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vascular Dementia",
    "keywords": [
      "dementia",
      "vascular",
      "stroke",
      "memory",
      "confusion",
      "thinking"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "Brain damage caused by multiple strokes or impaired blood flow, leading to cognitive impairment.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Meningitis Bacterial",
    "keywords": [
      "meningitis",
      "stiff",
      "neck",
      "fever",
      "headache",
      "photophobia",
      "vomiting",
      "rash"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Emergency",
    "description": "A serious bacterial infection of the membranes covering the brain and spinal cord; a critical medical emergency.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Meningitis Viral",
    "keywords": [
      "meningitis",
      "viral",
      "fever",
      "headache",
      "stiff",
      "neck",
      "fatigue",
      "photophobia"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Severe",
    "description": "An inflammation of the meninges caused by a viral infection, generally less severe than bacterial meningitis.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bell's Palsy",
    "keywords": [
      "bells",
      "palsy",
      "face",
      "droop",
      "smile",
      "eye",
      "eyebrow",
      "weakness",
      "paralysis"
    ],
    "bodyParts": [
      "Head",
      "Neck",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Sudden weakness in the muscles on one half of the face, causing one side to droop, typically resolving over weeks.",
    "homeRemedies": [
      "Rest in a quiet, dark, and cool room",
      "Apply a cold compress to the forehead",
      "Keep hydrated and avoid screen time",
      "Ensure regular sleep schedule"
    ],
    "otcMedicines": [
      {
        "name": "Ibuprofen (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "May cause stomach irritation. Take with food."
      }
    ],
    "specialist": "Neurologist",
    "specialistReason": "For evaluation of brain, spinal cord, and nerve disorders.",
    "warningFlags": [
      "sudden weakness",
      "numbness",
      "severe headache",
      "vision changes",
      "slurred speech"
    ],
    "seekEmergencyIf": [
      "Sudden severe headache (thunderclap headache)",
      "Seizures or convulsions lasting more than 5 minutes",
      "Loss of consciousness",
      "Sudden paralysis or weakness of face or limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Rheumatoid Arthritis",
    "keywords": [
      "arthritis",
      "rheumatoid",
      "joints",
      "stiffness",
      "swelling",
      "morning",
      "hands"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Severe",
    "description": "A chronic inflammatory disorder affecting joints, especially in the hands and feet, causing painful swelling and deformity.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Osteoarthritis",
    "keywords": [
      "osteoarthritis",
      "joints",
      "pain",
      "stiffness",
      "wear",
      "tear",
      "knee",
      "hip"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "A type of arthritis that occurs when flexible tissue at the ends of bones wears down, causing pain and stiffness in weight-bearing joints.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bursitis",
    "keywords": [
      "bursitis",
      "joint",
      "shoulder",
      "elbow",
      "hip",
      "swelling",
      "pain",
      "ache"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Inflammation of a bursa (fluid-filled sac that cushions joints), causing localized pain and swelling.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scoliosis",
    "keywords": [
      "scoliosis",
      "spine",
      "curve",
      "back",
      "shoulder",
      "uneven"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "A sideways curvature of the spine, most often diagnosed in adolescents.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Kyphosis",
    "keywords": [
      "kyphosis",
      "hunchback",
      "spine",
      "curve",
      "back",
      "posture"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "A forward rounding of the back, creating a hunchback appearance, which can cause back pain and stiffness.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Lordosis",
    "keywords": [
      "lordosis",
      "swayback",
      "spine",
      "curve",
      "back",
      "posture"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "An increased inward curving of the lower back, creating a swayback posture.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Paget's Disease of Bone",
    "keywords": [
      "pagets",
      "bone",
      "pain",
      "deformity",
      "fracture",
      "skull",
      "pelvis"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "A chronic bone disorder that causes bones to grow larger and become weaker, leading to bone pain and deformities.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Osteomyelitis",
    "keywords": [
      "osteomyelitis",
      "bone",
      "infection",
      "pain",
      "fever",
      "redness",
      "swelling"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Severe",
    "description": "A sudden, painful bacterial infection of the bone, requiring aggressive antibiotic therapy.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Plantar Fasciitis",
    "keywords": [
      "heel",
      "pain",
      "plantar",
      "fasciitis",
      "foot",
      "morning",
      "walking"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Inflammation of a thick band of tissue (plantar fascia) that runs across the bottom of your foot, causing sharp heel pain with first steps in the morning.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Rotator Cuff Tear",
    "keywords": [
      "shoulder",
      "rotator",
      "cuff",
      "pain",
      "weakness",
      "arm",
      "lifting"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "A tear in the tissues connecting muscle to bone around the shoulder joint, causing shoulder pain and difficulty lifting the arm.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Lateral Epicondylitis",
    "keywords": [
      "tennis",
      "elbow",
      "pain",
      "forearm",
      "grip"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Tennis elbow, inflammation of the tendons on the outer side of the elbow caused by repetitive wrist extension.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Medial Epicondylitis",
    "keywords": [
      "golfer",
      "elbow",
      "pain",
      "forearm",
      "wrist"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Golfer's elbow, inflammation of the tendons on the inner side of the elbow due to repetitive wrist flexion.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Shin Splints",
    "keywords": [
      "shin",
      "splints",
      "leg",
      "pain",
      "running",
      "exercise",
      "tibia"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Pain along the shin bone (tibia) caused by physical activity, common in runners.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Duchenne Muscular Dystrophy",
    "keywords": [
      "dystrophy",
      "muscular",
      "duchenne",
      "weakness",
      "muscles",
      "child",
      "genetic"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Severe",
    "description": "A severe progressive genetic muscle-wasting disease, presenting in childhood with difficulty walking and running.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Polymyalgia Rheumatica",
    "keywords": [
      "polymyalgia",
      "rheumatica",
      "stiffness",
      "shoulder",
      "hip",
      "morning",
      "aches",
      "elderly"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "An inflammatory disorder causing muscle pain and stiffness, especially in the shoulders and hips, common in older adults.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Herniated Disc",
    "keywords": [
      "disc",
      "herniated",
      "back",
      "pain",
      "numbness",
      "tingling",
      "sciatica",
      "slip"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "A condition where a spinal disc's soft center pushes through the tough outer ring, causing nerve irritation and back/leg pain.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Spinal Stenosis",
    "keywords": [
      "stenosis",
      "spinal",
      "back",
      "pain",
      "leg",
      "cramping",
      "walking",
      "standing"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "A narrowing of the spaces within your spine, which can put pressure on the spinal cord and nerves, causing leg pain when standing/walking.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Whiplash Injury",
    "keywords": [
      "whiplash",
      "neck",
      "pain",
      "stiffness",
      "accident",
      "trauma"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "Neck injury caused by a rapid back-and-forth movement of the neck, common in car accidents.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Polymyositis",
    "keywords": [
      "polymyositis",
      "muscle",
      "weakness",
      "shoulders",
      "hips",
      "fatigue",
      "inflammation"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Severe",
    "description": "An uncommon inflammatory disease that causes progressive muscle weakness affecting both sides of the body.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Trigger Finger",
    "keywords": [
      "trigger",
      "finger",
      "thumb",
      "lock",
      "snap",
      "pain",
      "tendon"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "A condition in which a finger gets stuck in a bent position and then snaps straight, due to tendon inflammation.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dupuytren's Contracture",
    "keywords": [
      "dupuytrens",
      "contracture",
      "palm",
      "bent",
      "fingers",
      "nodule"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "A gradual thickening and tightening of tissue under the skin in the palm of the hand, causing fingers to bend inward.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chondromalacia Patellae",
    "keywords": [
      "chondromalacia",
      "knee",
      "kneecap",
      "pain",
      "stair",
      "sitting",
      "runner"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Runner's knee; softening and breakdown of the cartilage on the underside of the kneecap, causing knee pain when walking down stairs.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sarcopenia",
    "keywords": [
      "sarcopenia",
      "muscle",
      "loss",
      "weakness",
      "aging",
      "frailty"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "The age-related progressive loss of skeletal muscle mass and strength, increasing frailty in seniors.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ganglion Cyst",
    "keywords": [
      "cyst",
      "ganglion",
      "wrist",
      "hand",
      "bump",
      "lump",
      "joint"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "A noncancerous lump that develops along the tendons or joints of your wrists or hands.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Adhesive Capsulitis",
    "keywords": [
      "frozen",
      "shoulder",
      "capsulitis",
      "stiffness",
      "pain",
      "movement"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "Frozen shoulder; a condition characterized by stiffness and pain in the shoulder joint, making movement highly restricted.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gouty Arthritis",
    "keywords": [
      "gout",
      "uric",
      "acid",
      "toe",
      "joint",
      "pain",
      "swelling",
      "red",
      "intense"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Severe",
    "description": "A form of arthritis characterized by severe, sudden attacks of pain, redness, and tenderness in joints, especially the big toe.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ankylosing Spondylitis",
    "keywords": [
      "spondylitis",
      "ankylosing",
      "back",
      "stiffness",
      "spine",
      "morning",
      "fusion"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Severe",
    "description": "A chronic inflammatory arthritis affecting the spine and large joints, causing stiffness and gradual fusion of spinal vertebrae.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Myofascial Pain Syndrome",
    "keywords": [
      "myofascial",
      "pain",
      "trigger",
      "point",
      "muscle",
      "knot",
      "chronic"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Moderate",
    "description": "A chronic pain disorder where pressure on sensitive points in muscles (trigger points) causes pain in unrelated body parts.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Osteopenia",
    "keywords": [
      "osteopenia",
      "bone",
      "density",
      "thinning",
      "calcium",
      "silent"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "A condition where bone mineral density is lower than normal, a precursor to osteoporosis, usually asymptomatic.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Patellar Tendinitis",
    "keywords": [
      "tendinitis",
      "patellar",
      "knee",
      "jumpers",
      "pain",
      "jumping",
      "aching"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Arms/Hands",
      "Legs/Feet"
    ],
    "severity": "Low",
    "description": "Jumper's knee; inflammation of the tendon connecting the kneecap to the shinbone, causing pain just below the kneecap.",
    "homeRemedies": [
      "Apply hot/cold fermentation to the affected area",
      "Rest the affected joint or limb",
      "Keep the affected limb elevated if swollen",
      "Massage gently with warm sesame oil"
    ],
    "otcMedicines": [
      {
        "name": "Pain Relief Gel (Volini / Moov)",
        "dosage": "Apply gently to affected area 3-4 times a day",
        "warning": "For external use only. Do not apply on broken skin."
      },
      {
        "name": "Ibuprofen + Paracetamol (Combiflam)",
        "dosage": "1 tablet after food, up to twice daily",
        "warning": "Do not take on empty stomach"
      }
    ],
    "specialist": "Orthopedician / Rheumatologist",
    "specialistReason": "For diagnosis and treatment of bone, joint, and muscle conditions.",
    "warningFlags": [
      "inability to bear weight",
      "joint deformity",
      "numbness or tingling",
      "redness and warmth"
    ],
    "seekEmergencyIf": [
      "Inability to move the limb",
      "Severe pain following a trauma or fall",
      "Visible deformity or bone protrusion",
      "Sudden numbness or coldness in the limb"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Eczema",
    "keywords": [
      "eczema",
      "itchy",
      "dry",
      "skin",
      "red",
      "patches",
      "rash"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "An inflammatory skin condition that causes dry, itchy skin, rashes, scaly patches, and skin infections.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Rosacea",
    "keywords": [
      "rosacea",
      "face",
      "redness",
      "flush",
      "blood",
      "vessels",
      "pimple",
      "nose"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A chronic skin condition that causes redness and visible blood vessels in your face, sometimes with small, pus-filled bumps.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Seborrheic Dermatitis",
    "keywords": [
      "dandruff",
      "dermatitis",
      "seborrheic",
      "scalp",
      "flaky",
      "itchy",
      "cradle",
      "cap"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A common skin condition that mainly affects your scalp, causing scaly, greasy patches, red skin, and stubborn dandruff.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Contact Dermatitis",
    "keywords": [
      "contact",
      "dermatitis",
      "allergy",
      "rash",
      "itchy",
      "soap",
      "chemical",
      "metal"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "An itchy, red rash caused by direct contact with a substance or an allergic reaction to it.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Urticaria",
    "keywords": [
      "urticaria",
      "hives",
      "welts",
      "itchy",
      "allergy",
      "red",
      "swelling"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "Hives; red, itchy welts on the skin that result from a skin reaction, often to an allergen.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Herpes Zoster",
    "keywords": [
      "shingles",
      "zoster",
      "herpes",
      "pain",
      "blisters",
      "rash",
      "burning",
      "stripe"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Severe",
    "description": "Shingles; a viral infection caused by the varicella-zoster virus, causing a painful rash of fluid-filled blisters in a stripe or band on one side of the body.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tinea Pedis",
    "keywords": [
      "athletes",
      "foot",
      "tinea",
      "itchy",
      "peeling",
      "toes",
      "fungal"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "Athlete's foot; a fungal infection that usually begins between the toes, causing itching, burning, and peeling skin.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Common Warts",
    "keywords": [
      "wart",
      "warts",
      "bump",
      "skin",
      "growth",
      "hpv"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "Small, grainy skin growths caused by the human papillomavirus (HPV), typically appearing on fingers or hands.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Alopecia Areata",
    "keywords": [
      "hair",
      "loss",
      "bald",
      "patches",
      "alopecia",
      "spot"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "An autoimmune disorder that causes hair to fall out in small, round patches on the scalp or body.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Melasma",
    "keywords": [
      "melasma",
      "brown",
      "patches",
      "face",
      "sun",
      "pregnancy",
      "pigmentation"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A skin condition causing brown or gray-brown patches on the face, common during pregnancy or sun exposure.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Lichen Planus",
    "keywords": [
      "lichen",
      "planus",
      "purple",
      "itchy",
      "bumps",
      "mouth",
      "white",
      "lacy"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "An inflammatory condition that can affect skin, hair, nails, and mucous membranes, causing purple, itchy bumps on skin or lacy white patches in the mouth.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Keratosis Pilaris",
    "keywords": [
      "bumps",
      "arms",
      "rough",
      "dry",
      "keratosis",
      "pilaris",
      "chicken",
      "skin"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A common, harmless skin condition that causes rough, tiny bumps on the skin, usually on the upper arms or thighs.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pityriasis Rosea",
    "keywords": [
      "herald",
      "patch",
      "rosea",
      "pityriasis",
      "rash",
      "oval",
      "itchy",
      "christmas",
      "tree"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A temporary skin rash that often begins with a single large, oval pink patch (herald patch), followed by smaller patches in a Christmas tree pattern.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dyshidrotic Eczema",
    "keywords": [
      "eczema",
      "dyshidrotic",
      "blisters",
      "itchy",
      "hands",
      "fingers",
      "soles"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A type of eczema characterized by tiny, intensely itchy blisters on the edges of the fingers, palms, and soles of the feet.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hidradenitis Suppurativa",
    "keywords": [
      "hidradenitis",
      "suppurativa",
      "boils",
      "armpit",
      "groin",
      "pain",
      "pus",
      "nodules"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Severe",
    "description": "A chronic skin condition causing painful, pea-sized to marble-sized lumps under the skin, typically in armpits or groin.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ichthyosis Vulgaris",
    "keywords": [
      "dry",
      "scales",
      "ichthyosis",
      "fish",
      "skin",
      "thickened"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "An inherited skin disorder in which dead skin cells accumulate in thick, dry scales that resemble fish scales.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Keloids",
    "keywords": [
      "keloid",
      "scar",
      "thick",
      "raised",
      "wound",
      "growth"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "An overgrown, raised scar that rises quite abruptly above the rest of the skin, following a healed skin injury.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dermatofibroma",
    "keywords": [
      "dermatofibroma",
      "nodule",
      "skin",
      "bump",
      "firm",
      "leg",
      "itchy"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A common, benign skin growth that looks like a small, firm red-to-brown bump, typically on the lower legs.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Molluscum Contagiosum",
    "keywords": [
      "molluscum",
      "bumps",
      "dimple",
      "contagious",
      "child",
      "pearly"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A viral skin infection that causes small, pearly, dome-shaped bumps with a dimple in the center, common in children.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Actinic Keratosis",
    "keywords": [
      "keratosis",
      "actinic",
      "rough",
      "scaly",
      "patch",
      "sun",
      "pre-cancerous"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A rough, scaly patch on the skin caused by years of sun exposure, considered a pre-cancerous warning sign.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Erythema Nodosum",
    "keywords": [
      "erythema",
      "nodosum",
      "red",
      "lumps",
      "shins",
      "painful",
      "fever",
      "joints"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "An inflammatory disorder characterized by tender, painful red nodules under the skin, typically on the shins, accompanied by joint pain.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pemphigus Vulgaris",
    "keywords": [
      "pemphigus",
      "blisters",
      "mouth",
      "skin",
      "painful",
      "peeling"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Severe",
    "description": "A rare autoimmune disease that causes painful blisters on the skin and mucous membranes, which rupture easily leaving raw sores.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Folliculitis",
    "keywords": [
      "folliculitis",
      "pimple",
      "hair",
      "follicle",
      "red",
      "itchy",
      "pus"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "Inflammation of hair follicles, usually due to bacterial or fungal infection, causing small, itchy, pus-filled bumps.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Carbuncle",
    "keywords": [
      "carbuncle",
      "boil",
      "pus",
      "infection",
      "cluster",
      "skin",
      "fever"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A cluster of several boiling skin infections (furuncles) that are connected under the skin, causing deep pain and fever.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Impetigo",
    "keywords": [
      "impetigo",
      "sores",
      "honey",
      "crust",
      "blisters",
      "child",
      "contagious",
      "face"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A highly contagious bacterial skin infection, common in children, characterized by red sores that rupture and form honey-colored crusts.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cellulitis",
    "keywords": [
      "cellulitis",
      "infection",
      "swelling",
      "redness",
      "warmth",
      "pain",
      "leg",
      "fever"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Severe",
    "description": "A common, potentially serious bacterial skin infection causing painful redness, swelling, and warmth, typically in the lower leg.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vitiligo",
    "keywords": [
      "vitiligo",
      "white",
      "patches",
      "pigment",
      "loss",
      "skin"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A condition in which the skin loses its pigment-producing cells, resulting in smooth, white patches on various areas of the body.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acne Vulgaris",
    "keywords": [
      "acne",
      "pimple",
      "blackhead",
      "whitehead",
      "acne",
      "face",
      "chest",
      "forehead"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "A common skin condition occurring when hair follicles plug with oil and dead skin cells, causing pimples, blackheads, and whiteheads.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Psoriasis Vulgaris",
    "keywords": [
      "psoriasis",
      "plaques",
      "scaly",
      "silver",
      "itchy",
      "elbows",
      "knees",
      "scalp"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A chronic autoimmune disease that speeds up the growth cycle of skin cells, leading to thick, red patches with silvery scales.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pruritus",
    "keywords": [
      "itchy",
      "skin",
      "scratching",
      "pruritus",
      "irritation"
    ],
    "bodyParts": [
      "Skin"
    ],
    "severity": "Low",
    "description": "An uncomfortable, irritating sensation that creates an urge to scratch, which can be localized or generalized.",
    "homeRemedies": [
      "Keep the affected area clean and dry",
      "Apply fresh aloe vera gel for soothing effect",
      "Avoid scratching or picking at lesions",
      "Wear loose, breathable cotton clothing"
    ],
    "otcMedicines": [
      {
        "name": "Calamine Lotion",
        "dosage": "Apply to itchy skin 2-3 times daily",
        "warning": "For external use only. Avoid contact with eyes."
      },
      {
        "name": "Antifungal Cream (Clocip / Panderm)",
        "dosage": "Apply thin layer to affected area twice daily",
        "warning": "Complete the full course even if symptoms clear"
      }
    ],
    "specialist": "Dermatologist",
    "specialistReason": "For specialized skin, hair, and nail care.",
    "warningFlags": [
      "rapidly spreading rash",
      "pus or yellow crusting",
      "fever",
      "severe pain"
    ],
    "seekEmergencyIf": [
      "Rash accompanied by high fever and joint pain",
      "Difficulty breathing or swelling of face/throat with hives",
      "Skin peeling off or large blisters",
      "Spreading red streaks from an infected wound"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chikungunya",
    "keywords": [
      "chikungunya",
      "joint",
      "pain",
      "fever",
      "rash",
      "mosquito",
      "fatigue",
      "aches"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A mosquito-borne viral disease characterized by sudden onset of high fever and severe, debilitating joint pain.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Leptospirosis",
    "keywords": [
      "leptospirosis",
      "rat",
      "urine",
      "water",
      "fever",
      "headache",
      "muscle",
      "pain",
      "jaundice"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A bacterial disease spread through water or soil contaminated with urine of infected animals, causing fever, muscle aches, and jaundice.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Japanese Encephalitis",
    "keywords": [
      "encephalitis",
      "mosquito",
      "fever",
      "headache",
      "confusion",
      "stiff",
      "neck",
      "convulsions"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A mosquito-borne viral infection of the brain, common in rural Asia, causing fever, headache, and neurological complications.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Rabies",
    "keywords": [
      "rabies",
      "dog",
      "bite",
      "hydrophobia",
      "saliva",
      "confusion",
      "hallucination"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A fatal viral disease transmitted to humans through the bite or scratch of an infected animal, targeting the central nervous system.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tetanus",
    "keywords": [
      "tetanus",
      "lockjaw",
      "muscle",
      "spasms",
      "rust",
      "wound",
      "stiffness",
      "jaw"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A serious bacterial infection that causes painful muscle spasms, particularly in the jaw and neck muscles (lockjaw).",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Zika Virus Disease",
    "keywords": [
      "zika",
      "fever",
      "mosquito",
      "rash",
      "joint",
      "pain",
      "pregnancy",
      "microcephaly"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A mosquito-borne viral disease causing mild fever, rash, and joint pain; highly dangerous in pregnancy due to birth defects.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Yellow Fever",
    "keywords": [
      "yellow",
      "fever",
      "jaundice",
      "mosquito",
      "bleeding",
      "vomiting"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "An acute viral hemorrhagic disease transmitted by infected mosquitoes, causing high fever, chills, jaundice, and bleeding.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Leishmaniasis",
    "keywords": [
      "leishmaniasis",
      "sandfly",
      "ulcer",
      "skin",
      "fever",
      "spleen",
      "kala",
      "azar"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A parasitic disease spread by sandflies, causing skin ulcers (cutaneous) or severe organ damage and fever (visceral/kala-azar).",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Brucellosis",
    "keywords": [
      "brucellosis",
      "milk",
      "undulant",
      "fever",
      "sweating",
      "joint",
      "pain",
      "fatigue"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A bacterial infection spread from animals to people, usually through unpasteurized dairy products, causing repeating (undulant) fevers.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scrub Typhus",
    "keywords": [
      "typhus",
      "scrub",
      "chigger",
      "bite",
      "fever",
      "headache",
      "eschar",
      "black",
      "scab"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A bacterial disease transmitted by larval mites (chiggers), presenting with fever, headache, and a characteristic dark scab (eschar) at the bite site.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Kyasanur Forest Disease",
    "keywords": [
      "monkey",
      "fever",
      "kyasanur",
      "tick",
      "fever",
      "headache",
      "bleeding",
      "forest"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A tick-borne viral hemorrhagic fever endemic to Karnataka, India, causing high fever, headache, and bleeding tendencies.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nipah Virus Infection",
    "keywords": [
      "nipah",
      "bat",
      "fruit",
      "fever",
      "headache",
      "cough",
      "drowsiness",
      "encephalitis"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A severe, zoonotic viral infection transmitted by fruit bats, causing acute respiratory distress and fatal encephalitis.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Anthrax Cutaneous",
    "keywords": [
      "anthrax",
      "ulcer",
      "black",
      "center",
      "sore",
      "animal",
      "skin"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A bacterial infection spread from animal products, causing a painless skin ulcer with a characteristic black center.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Botulism",
    "keywords": [
      "botulism",
      "canned",
      "food",
      "paralysis",
      "drooping",
      "eyelids",
      "speech",
      "weakness"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A rare but serious illness caused by toxins from Clostridium botulinum bacteria, presenting with descending muscle paralysis and weakness.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Diphtheria",
    "keywords": [
      "diphtheria",
      "throat",
      "gray",
      "membrane",
      "neck",
      "swelling",
      "barking",
      "cough"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A serious bacterial infection causing a thick gray membrane in the back of the throat, swollen neck glands, and difficulty breathing.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Amebiasis",
    "keywords": [
      "amebiasis",
      "amoeba",
      "diarrhea",
      "stomach",
      "cramps",
      "loose",
      "stool"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "An infection of the intestines with the parasite Entamoeba histolytica, causing abdominal pain and loose stools.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ascariasis",
    "keywords": [
      "roundworm",
      "worm",
      "ascariasis",
      "stomach",
      "pain",
      "stool",
      "malnutrition"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Low",
    "description": "An intestinal infection caused by the large roundworm Ascaris lumbricoides, common in areas with poor sanitation.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hookworm Infection",
    "keywords": [
      "hookworm",
      "worm",
      "anemia",
      "itchy",
      "feet",
      "stomach",
      "fatigue"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Low",
    "description": "An intestinal infection caused by hookworms, leading to iron-deficiency anemia and abdominal discomfort, often contracted through walking barefoot.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pinworm Infection",
    "keywords": [
      "pinworm",
      "worm",
      "itching",
      "anus",
      "night",
      "child",
      "sleep"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Low",
    "description": "A common, highly contagious intestinal worm infection causing intense itching around the anus, especially at night, in children.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Trichinosis",
    "keywords": [
      "trichinosis",
      "pork",
      "muscle",
      "pain",
      "fever",
      "swelling",
      "eyes"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A disease caused by eating raw or undercooked meat infected with Trichinella roundworm larvae, causing muscle pain and facial swelling.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Lyme Disease",
    "keywords": [
      "lyme",
      "tick",
      "bullseye",
      "rash",
      "joint",
      "pain",
      "fever",
      "fatigue"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A tick-borne bacterial infection characterized by a bullseye-shaped skin rash, fever, fatigue, and joint pain.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Rocky Mountain Spotted Fever",
    "keywords": [
      "tick",
      "spotted",
      "fever",
      "rash",
      "wrist",
      "ankle",
      "headache"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A serious tick-borne bacterial disease causing high fever, headache, and a distinct spotted rash starting on wrists and ankles.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Q Fever",
    "keywords": [
      "q",
      "fever",
      "animal",
      "livestock",
      "chills",
      "sweating",
      "headache",
      "pneumonia"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A bacterial infection spread from livestock, presenting with flu-like symptoms, high fever, and sometimes atypical pneumonia.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Schistosomiasis",
    "keywords": [
      "schistosomiasis",
      "snail",
      "water",
      "fever",
      "itchy",
      "rash",
      "blood",
      "urine"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "A disease caused by parasitic flatworms found in fresh water snails, causing fever, rash, and blood in urine/stool.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hydatid Disease",
    "keywords": [
      "hydatid",
      "tapeworm",
      "dog",
      "cyst",
      "liver",
      "lung",
      "pain"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "Echinococcosis; a parasitic disease caused by tapeworms, leading to slow-growing cysts in the liver or lungs.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Typhus Endemic",
    "keywords": [
      "typhus",
      "flea",
      "fever",
      "headache",
      "rash",
      "body",
      "aches"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A bacterial disease spread by fleas, causing high fever, headache, muscle pain, and a dark rash on the torso.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Plague Bubonic",
    "keywords": [
      "plague",
      "flea",
      "rat",
      "bubo",
      "swollen",
      "lymph",
      "node",
      "fever",
      "chills"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A rare, severe bacterial infection spread by fleas, causing high fever, chills, and painful, swollen lymph nodes (buboes).",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Filariasis",
    "keywords": [
      "elephantiasis",
      "filariasis",
      "swollen",
      "leg",
      "lymph",
      "mosquito",
      "fluid"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "Lymphatic filariasis (elephantiasis), a parasitic disease spread by mosquitoes, causing severe swelling in the legs, scrotum, or arms due to blocked lymph flow.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Malaria Vivax",
    "keywords": [
      "malaria",
      "vivax",
      "fever",
      "chills",
      "shaking",
      "sweats",
      "headache",
      "anemia"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A form of malaria caused by the Plasmodium vivax parasite, presenting with recurring cycles of severe shaking chills followed by high fever.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dengue Hemorrhagic Fever",
    "keywords": [
      "dengue",
      "hemorrhagic",
      "bleeding",
      "platelets",
      "shock",
      "severe",
      "vomiting"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Emergency",
    "description": "A severe, life-threatening complication of dengue fever characterized by bleeding, plasma leakage, and low platelets.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Enteric Fever",
    "keywords": [
      "typhoid",
      "enteric",
      "fever",
      "abdominal",
      "pain",
      "constipation",
      "rose",
      "spots"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "Typhoid fever; a systemic bacterial infection spread through contaminated food/water, causing prolonged high fever and abdominal distress.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tuberculosis Pulmonary",
    "keywords": [
      "tuberculosis",
      "tb",
      "cough",
      "blood",
      "weight",
      "loss",
      "night",
      "sweats",
      "fever"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "A serious bacterial infection of the lungs, causing persistent productive cough with blood, night sweats, and weight loss.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tuberculosis Extrapulmonary",
    "keywords": [
      "tuberculosis",
      "tb",
      "extrapulmonary",
      "lymph",
      "bone",
      "spine",
      "fever",
      "swelling"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Severe",
    "description": "Tuberculosis infection occurring outside the lungs, such as in lymph nodes, bones, joints, or brain membranes.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Secondary Syphilis",
    "keywords": [
      "syphilis",
      "rash",
      "palms",
      "soles",
      "fever",
      "sore",
      "throat",
      "lymph"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "The second stage of syphilis, causing a non-itchy rash on palms and soles of feet, fever, and swollen lymph nodes.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Primary Syphilis",
    "keywords": [
      "syphilis",
      "chancre",
      "sore",
      "genital",
      "painless"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Joints",
      "Skin"
    ],
    "severity": "Moderate",
    "description": "The first stage of syphilis, characterized by a single, painless sore (chancre) at the site of infection.",
    "homeRemedies": [
      "Take complete bed rest",
      "Drink plenty of fluids (coconut water, juices, ORS)",
      "Use cool damp cloth sponges for high fever",
      "Eat light, easily digestible food"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Dolo 650)",
        "dosage": "1 tablet every 6 hours for fever",
        "warning": "Do not exceed 4 tablets in 24 hours"
      }
    ],
    "specialist": "Infectious Disease Specialist",
    "specialistReason": "For management of tropical infections, parasitic diseases, and acute fevers.",
    "warningFlags": [
      "high fever",
      "severe body ache",
      "vomiting",
      "rash",
      "bleeding from nose/gums"
    ],
    "seekEmergencyIf": [
      "Bleeding from gums, nose, or skin bruises",
      "Severe abdominal pain and persistent vomiting",
      "Difficulty breathing or rapid breathing",
      "Confusion, delirium, or extreme lethargy"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyperthyroidism",
    "keywords": [
      "hyperthyroidism",
      "thyroid",
      "weight",
      "loss",
      "rapid",
      "heart",
      "sweating",
      "nervous"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "A condition in which the thyroid gland produces too much thyroid hormone, accelerating the body's metabolism.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "PCOS",
    "keywords": [
      "pcos",
      "pcod",
      "periods",
      "irregular",
      "weight",
      "gain",
      "acne",
      "hair",
      "ovary"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "Polycystic Ovary Syndrome, a hormonal disorder common among women of reproductive age, causing irregular periods and ovarian cysts.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cushing's Syndrome",
    "keywords": [
      "cushings",
      "cortisol",
      "moon",
      "face",
      "buffalo",
      "hump",
      "purple",
      "stretch"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "A hormonal disorder caused by prolonged exposure to high levels of the hormone cortisol, causing weight gain in face and upper back.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Addison's Disease",
    "keywords": [
      "addisons",
      "adrenal",
      "fatigue",
      "dark",
      "skin",
      "pigment",
      "salt",
      "craving",
      "blood"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "A disorder in which the adrenal glands don't produce enough hormones, causing chronic fatigue, dark skin patches, and low blood pressure.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Diabetes Insipidus",
    "keywords": [
      "diabetes",
      "insipidus",
      "thirst",
      "urination",
      "clear",
      "urine",
      "dehydration"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "An uncommon disorder that causes an imbalance of fluids in the body, leading to extreme thirst and passing large amounts of diluted urine.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hashimoto's Thyroiditis",
    "keywords": [
      "hashimotos",
      "thyroiditis",
      "hypothyroidism",
      "fatigue",
      "weight",
      "gain",
      "cold"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "An autoimmune disorder that causes inflammation of the thyroid gland, leading to hypothyroidism.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Graves' Disease",
    "keywords": [
      "graves",
      "thyroid",
      "hyperthyroidism",
      "bulging",
      "eyes",
      "anxiety",
      "hand",
      "tremor"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "An immune system disorder that results in the overproduction of thyroid hormones (hyperthyroidism), often with bulging eyes (exophthalmos).",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acromegaly",
    "keywords": [
      "acromegaly",
      "growth",
      "hormone",
      "hands",
      "feet",
      "face",
      "enlarged"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "A hormonal disorder that develops when your pituitary gland produces too much growth hormone, causing enlarged hands, feet, and facial bones.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Primary Hyperparathyroidism",
    "keywords": [
      "hyperparathyroidism",
      "parathyroid",
      "calcium",
      "kidney",
      "stones",
      "bone",
      "pain"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "An excess of parathyroid hormone in the bloodstream, leading to high calcium levels, kidney stones, and bone pain.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypoparathyroidism",
    "keywords": [
      "hypoparathyroidism",
      "parathyroid",
      "calcium",
      "tingling",
      "muscle",
      "cramps",
      "spasms"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "An uncommon condition in which your body secretes abnormally low levels of parathyroid hormone, causing low blood calcium and muscle cramps.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Metabolic Syndrome",
    "keywords": [
      "metabolic",
      "syndrome",
      "waist",
      "fat",
      "blood",
      "pressure",
      "sugar",
      "cholesterol"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Low",
    "description": "A cluster of conditions (increased blood pressure, high blood sugar, excess body fat around waist, abnormal cholesterol) that occur together, increasing risk of heart disease.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyperlipidemia",
    "keywords": [
      "cholesterol",
      "triglycerides",
      "lipid",
      "fatty",
      "blood",
      "artery"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Low",
    "description": "High levels of lipids (fats) in the blood, including cholesterol and triglycerides, which can build up in arteries.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Type 1 Diabetes Mellitus",
    "keywords": [
      "diabetes",
      "type",
      "1",
      "insulin",
      "thirst",
      "urination",
      "weight",
      "loss",
      "child"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "A chronic condition in which the pancreas produces little or no insulin, typically diagnosed in childhood/youth.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Goiter",
    "keywords": [
      "goiter",
      "thyroid",
      "neck",
      "swelling",
      "enlarged",
      "throat"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Low",
    "description": "A noncancerous enlargement of the thyroid gland, visible as a swelling in the neck, often due to iodine deficiency.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gouty Diathesis",
    "keywords": [
      "gout",
      "uric",
      "acid",
      "joint",
      "pain",
      "crystals"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "A metabolic predisposition to accumulate uric acid in the blood, leading to recurrent episodes of gouty arthritis.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pheochromocytoma",
    "keywords": [
      "pheochromocytoma",
      "adrenal",
      "tumor",
      "high",
      "blood",
      "headache",
      "sweating",
      "palpitations"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "A rare, usually noncancerous tumor that develops in an adrenal gland, causing high blood pressure, sweating, and rapid heart rate.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sheehan's Syndrome",
    "keywords": [
      "sheehans",
      "pituitary",
      "postpartum",
      "hemorrhage",
      "fatigue",
      "lactation",
      "failure"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "Hypopituitarism caused by severe blood loss during childbirth, presenting with fatigue, low blood pressure, and failure to lactate.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Primary Aldosteronism",
    "keywords": [
      "aldosteronism",
      "conns",
      "high",
      "blood",
      "potassium",
      "muscle",
      "weakness"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "Conn's syndrome, a disorder where the adrenal glands produce too much aldosterone, causing high blood pressure and low potassium levels.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypoglycemia Reactive",
    "keywords": [
      "hypoglycemia",
      "sugar",
      "shake",
      "sweat",
      "hungry",
      "dizzy",
      "after",
      "meal"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Low",
    "description": "Low blood sugar that occurs within a few hours after eating, causing shakiness, sweating, and lightheadedness.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Congenital Hypothyroidism",
    "keywords": [
      "thyroid",
      "hypothyroidism",
      "baby",
      "infant",
      "constipation",
      "lethargy",
      "jaundice"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "Thyroid hormone deficiency present at birth, which can cause severe intellectual disability and growth delay if untreated.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyperprolactinemia",
    "keywords": [
      "prolactin",
      "milk",
      "discharge",
      "breast",
      "periods",
      "irregular",
      "infertility"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "High levels of prolactin in the blood, causing milk discharge from breasts in non-pregnant individuals and irregular periods.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypogonadism Male",
    "keywords": [
      "testosterone",
      "fatigue",
      "muscle",
      "loss",
      "libido"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Low",
    "description": "A condition in which the body doesn't produce enough testosterone, causing fatigue, reduced muscle mass, and low sex drive.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Osteomalacia",
    "keywords": [
      "osteomalacia",
      "bones",
      "soft",
      "vitamin",
      "d",
      "pain",
      "muscles"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "Softening of the bones, typically caused by severe vitamin D deficiency, presenting with bone pain and muscle weakness.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Familial Hypercholesterolemia",
    "keywords": [
      "cholesterol",
      "genetic",
      "heart",
      "xanthomas",
      "artery"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "An inherited genetic disorder causing extremely high levels of LDL (bad) cholesterol from birth, leading to early heart disease.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Secondary Adrenal Insufficiency",
    "keywords": [
      "adrenal",
      "pituitary",
      "steroid",
      "fatigue",
      "weakness",
      "dizzy"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "Adrenal insufficiency caused by lack of ACTH from the pituitary gland, often due to sudden stoppage of steroid medications.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Toxic Multinodular Goiter",
    "keywords": [
      "goiter",
      "thyroid",
      "nodules",
      "hyperthyroidism",
      "neck",
      "palpitations"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "An enlarged thyroid gland containing multiple nodules that produce excess thyroid hormones, causing hyperthyroidism.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Graves' Ophthalmopathy",
    "keywords": [
      "graves",
      "eyes",
      "bulging",
      "double",
      "vision",
      "dryness",
      "thyroid"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Moderate",
    "description": "An autoimmune inflammatory disorder affecting tissues around the eyes, associated with Graves' disease, causing bulging eyes.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Myxedema Coma",
    "keywords": [
      "myxedema",
      "coma",
      "hypothyroidism",
      "severe",
      "cold",
      "confusion",
      "slow"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Emergency",
    "description": "A life-threatening complication of severe, untreated hypothyroidism, characterized by mental deterioration, hypothermia, and slow heart rate.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "DKA",
    "keywords": [
      "dka",
      "diabetic",
      "ketoacidosis",
      "vomiting",
      "fruity",
      "breath",
      "sugar",
      "breath"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Emergency",
    "description": "Diabetic Ketoacidosis, a serious complication of diabetes where the body produces excess blood acids (ketones), causing deep breathing and vomiting.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypoglycemia Unawareness",
    "keywords": [
      "hypoglycemia",
      "sugar",
      "low",
      "fainting",
      "seizure",
      "no",
      "symptoms"
    ],
    "bodyParts": [
      "Stomach/Abdomen",
      "Neck",
      "Joints"
    ],
    "severity": "Severe",
    "description": "A complication of diabetes where patients don't feel the warning symptoms of low blood sugar, leading to sudden fainting.",
    "homeRemedies": [
      "Follow a low-glycemic, high-fiber diet",
      "Engage in 30 minutes of moderate exercise daily",
      "Ensure adequate hydration and regular sleep",
      "Reduce consumption of processed sugars"
    ],
    "otcMedicines": [
      {
        "name": "Multivitamin (A to Z / Becadexamin)",
        "dosage": "1 capsule daily after breakfast",
        "warning": "Consult doctor if pregnant or lactating"
      }
    ],
    "specialist": "Endocrinologist",
    "specialistReason": "For hormone imbalance, thyroid, and metabolic disorders.",
    "warningFlags": [
      "sudden weight change",
      "extreme fatigue",
      "excessive thirst or urination",
      "heat/cold intolerance"
    ],
    "seekEmergencyIf": [
      "Severe confusion, drowsiness, or unconsciousness (diabetic coma)",
      "Rapid, deep breathing with fruity breath odor",
      "Severe shaking, sweating, and confusion (severe hypoglycemia)",
      "High fever with rapid heart rate and agitation"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Blepharitis",
    "keywords": [
      "blepharitis",
      "eyelid",
      "crusty",
      "itchy",
      "red",
      "swollen",
      "scales"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Inflammation of the eyelids, usually involving the hair follicles of the eyelashes, causing red, itchy, and crusty eyelids.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Age-Related Macular Degeneration",
    "keywords": [
      "macular",
      "amd",
      "vision",
      "center",
      "blurry",
      "straight",
      "lines",
      "wavy"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "A gradual eye disease that causes loss in the center of the field of vision (macula).",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Diabetic Retinopathy",
    "keywords": [
      "retinopathy",
      "diabetic",
      "floaters",
      "blurry",
      "vision",
      "spots",
      "diabetic"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "Damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina) due to diabetes.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Retinal Detachment",
    "keywords": [
      "detachment",
      "retina",
      "flashes",
      "floaters",
      "shadow",
      "curtain",
      "vision"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Emergency",
    "description": "An emergency situation where the retina pulls away from the layer of blood vessels that provides it with oxygen.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Astigmatism",
    "keywords": [
      "astigmatism",
      "blurry",
      "vision",
      "squint",
      "strain",
      "headache"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "A common and generally treatable imperfection in the curvature of your eye, causing blurred near and far vision.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Presbyopia",
    "keywords": [
      "presbyopia",
      "reading",
      "glasses",
      "blur",
      "close",
      "aging"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "The gradual loss of your eyes' ability to focus on nearby objects, a natural part of aging.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyperopia",
    "keywords": [
      "farsighted",
      "hyperopia",
      "blurry",
      "close",
      "read",
      "strain"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Farsightedness; a common vision condition where you can see distant objects clearly, but objects nearby may be blurry.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Myopia",
    "keywords": [
      "nearsighted",
      "myopia",
      "blurry",
      "distance",
      "far",
      "squint"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Nearsightedness; a common vision condition in which you can see objects near to you clearly, but objects farther away are blurry.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Strabismus",
    "keywords": [
      "squint",
      "crossed",
      "eyes",
      "strabismus",
      "lazy",
      "child"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Crossed eyes; a disorder in which both eyes do not align in the same direction when focusing.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Keratoconus",
    "keywords": [
      "keratoconus",
      "cornea",
      "cone",
      "blurry",
      "double",
      "halo"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Moderate",
    "description": "A progressive eye disease in which the normally round cornea thins and begins to bulge into a cone-like shape, distorting vision.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Uveitis",
    "keywords": [
      "uveitis",
      "eye",
      "pain",
      "redness",
      "light",
      "sensitivity",
      "blurry"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "Inflammation of the middle layer of the eye (uvea), causing deep eye pain, redness, and light sensitivity.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chalazion",
    "keywords": [
      "chalazion",
      "eyelid",
      "bump",
      "lump",
      "painless"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "A slow-growing, painless lump on the eyelid, caused by a blocked oil gland.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Corneal Ulcer",
    "keywords": [
      "cornea",
      "ulcer",
      "eye",
      "pain",
      "redness",
      "pus",
      "vision",
      "discharge"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "An open sore on the outer layer of the eye (cornea), often caused by infection, causing severe pain and pus discharge.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Optic Neuritis",
    "keywords": [
      "optic",
      "neuritis",
      "eye",
      "pain",
      "vision",
      "loss",
      "color",
      "blindness"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "Inflammation that damages the optic nerve, causing pain with eye movement and temporary vision loss in one eye.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scleritis",
    "keywords": [
      "scleritis",
      "eye",
      "pain",
      "deep",
      "boring",
      "redness",
      "purple"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "A serious inflammatory disease that affects the white outer wall of the eye (sclera), causing deep, boring pain.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Episcleritis",
    "keywords": [
      "episcleritis",
      "eye",
      "red",
      "mild",
      "irritation",
      "painless"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Inflammation of the tissue between the conjunctiva and sclera, causing localized redness with minimal pain.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pterygium",
    "keywords": [
      "pterygium",
      "growth",
      "eye",
      "pink",
      "fleshy",
      "cornea",
      "wind"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Surfer's eye; a pink, fleshy tissue growth on the conjunctiva that can spread to the cornea, often caused by sun and wind exposure.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pinguecula",
    "keywords": [
      "pinguecula",
      "yellow",
      "bump",
      "conjunctiva",
      "eye"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "A common, noncancerous yellow bump on the conjunctiva near the cornea, caused by UV light and dust.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dry Eye Syndrome",
    "keywords": [
      "dry",
      "eye",
      "burning",
      "gritty",
      "redness",
      "tears",
      "irritation"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "A common condition that occurs when your tears aren't able to provide adequate lubrication for your eyes.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Glaucoma Open-Angle",
    "keywords": [
      "glaucoma",
      "pressure",
      "vision",
      "tunnel",
      "blind",
      "spots",
      "slow"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "A chronic eye condition caused by fluid pressure buildup in the eye, slowly destroying peripheral vision without early pain.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Glaucoma Closed-Angle",
    "keywords": [
      "glaucoma",
      "severe",
      "eye",
      "pain",
      "headache",
      "nausea",
      "halo",
      "rainbow"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Emergency",
    "description": "A sudden, painful blockage of fluid drainage in the eye, causing high pressure, severe pain, and rapid vision loss; a medical emergency.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hordeolum External",
    "keywords": [
      "stye",
      "hordeolum",
      "eyelid",
      "pimple",
      "pus",
      "painful",
      "swelling"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "A painful, red bump near the edge of the eyelid that looks like a boil or pimple (stye), usually containing pus.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Senile Cataract",
    "keywords": [
      "cataract",
      "blurry",
      "cloudy",
      "vision",
      "glare",
      "fading",
      "colors",
      "aging"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Moderate",
    "description": "Clouding of the eye's natural lens that occurs with aging, leading to progressive painless blurry vision.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Subconjunctival Hemorrhage",
    "keywords": [
      "blood",
      "eye",
      "red",
      "spot",
      "painless",
      "coughing"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "A bright red patch on the white of the eye caused by a broken blood vessel, usually painless and harmless.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Iritis Acute",
    "keywords": [
      "iritis",
      "eye",
      "pain",
      "redness",
      "pupil",
      "constricted",
      "light"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Severe",
    "description": "Inflammation of the iris (the colored part of the eye), causing pain, light sensitivity, and a constricted pupil.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Allergic Conjunctivitis",
    "keywords": [
      "eyes",
      "itchy",
      "red",
      "watery",
      "puffy",
      "allergy"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Eye inflammation caused by an allergic reaction to pollen, dust, or pet dander, causing intense itching.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bacterial Conjunctivitis",
    "keywords": [
      "eye",
      "pus",
      "sticky",
      "yellow",
      "discharge",
      "eyelids",
      "crusted"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Pink eye caused by a bacterial infection, presenting with thick yellow-green discharge that crusts the eyelids overnight.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Viral Conjunctivitis",
    "keywords": [
      "eye",
      "pink",
      "watery",
      "discharge",
      "gritty",
      "contagious"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Pink eye caused by a virus, presenting with watery discharge, grittiness, and high contagiousness.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dacryocystitis",
    "keywords": [
      "tear",
      "duct",
      "dacryocystitis",
      "swelling",
      "corner",
      "eye",
      "pain",
      "pus"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Moderate",
    "description": "Infection of the tear sac, causing painful swelling in the inner corner of the eye near the nose.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Phototoxicity",
    "keywords": [
      "snow",
      "blindness",
      "welder",
      "flash",
      "pain",
      "eye",
      "gritty",
      "light"
    ],
    "bodyParts": [
      "Eyes"
    ],
    "severity": "Low",
    "description": "Photokeratitis; painful eye damage caused by exposure to UV rays (e.g. welding arcs, snow reflection), causing a gritty sensation.",
    "homeRemedies": [
      "Use clean, warm water compresses for crusty eyes",
      "Rest your eyes and avoid bright screens",
      "Wear sunglasses to protect from dust and light",
      "Do not rub or touch your eyes"
    ],
    "otcMedicines": [
      {
        "name": "Lubricating Eye Drops (Refresh Tears)",
        "dosage": "1-2 drops in affected eye 4 times daily",
        "warning": "Discard bottle 1 month after opening"
      },
      {
        "name": "Carboxymethylcellulose Eye Drops",
        "dosage": "1 drop as needed for dryness",
        "warning": "Do not touch dropper tip to any surface"
      }
    ],
    "specialist": "Ophthalmologist",
    "specialistReason": "For comprehensive eye examination and visual health care.",
    "warningFlags": [
      "severe eye pain",
      "vision loss",
      "chemical exposure",
      "sudden double vision"
    ],
    "seekEmergencyIf": [
      "Sudden partial or complete loss of vision",
      "Severe, deep eye pain with headache and nausea",
      "Eye injury by chemical splash or puncture",
      "Sudden onset of flashes of light or many new floaters"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Sinusitis",
    "keywords": [
      "sinus",
      "stuffy",
      "nose",
      "face",
      "pain",
      "headache",
      "fever",
      "mucus"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Short-term inflammation of the nasal sinuses, causing facial pressure and yellow-green mucus.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Sinusitis",
    "keywords": [
      "sinus",
      "chronic",
      "congestion",
      "nose",
      "drip",
      "smell",
      "fatigue"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Sinus inflammation lasting longer than 12 weeks, leading to persistent nasal blockage and postnasal drip.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Otitis Media",
    "keywords": [
      "ear",
      "pain",
      "earache",
      "otitis",
      "fever",
      "child",
      "hearing",
      "fluid"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "A painful middle ear infection, common in children, causing fever and temporary hearing dampening.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Otitis Externa",
    "keywords": [
      "swimmers",
      "ear",
      "pain",
      "itching",
      "discharge",
      "pulling",
      "earlobe"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Swimmer's ear; infection of the outer ear canal, causing pain when pulling the earlobe, and discharge.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Tinnitus",
    "keywords": [
      "ringing",
      "ear",
      "tinnitus",
      "buzzing",
      "hissing",
      "noise"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "A sensation of hearing ringing, buzzing, or hissing sounds in the ears when no external sound is present.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Meniere's Disease",
    "keywords": [
      "menieres",
      "vertigo",
      "tinnitus",
      "hearing",
      "loss",
      "ear",
      "fullness"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "An inner ear disorder that causes episodes of spinning vertigo, ringing in the ear, and progressive hearing loss.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Deviated Nasal Septum",
    "keywords": [
      "deviated",
      "septum",
      "snoring",
      "block",
      "nose",
      "crooked"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "A sideways displacement of the wall between nasal passages, making one nostril smaller and blocking airflow.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nasal Polyps",
    "keywords": [
      "polyps",
      "nose",
      "block",
      "growth",
      "smell",
      "congestion"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Soft, painless, noncancerous growths on the lining of nasal passages or sinuses, reducing breathing space and sense of smell.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Epistaxis",
    "keywords": [
      "nosebleed",
      "bleeding",
      "nose",
      "dry",
      "epistaxis"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "A nosebleed; bleeding from the blood vessels in the nose, commonly due to dry air or nose picking.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Pharyngitis",
    "keywords": [
      "sore",
      "throat",
      "swallowing",
      "pain",
      "pharyngitis",
      "scratchy"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Inflammation of the throat (pharynx), causing pain and scratchiness on swallowing.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Labyrinthitis",
    "keywords": [
      "labyrinthitis",
      "dizzy",
      "spinning",
      "vertigo",
      "nausea",
      "hearing",
      "loss",
      "balance"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the inner ear labyrinth, causing sudden severe vertigo, nausea, and unilateral hearing loss.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Mastoiditis",
    "keywords": [
      "mastoiditis",
      "ear",
      "bone",
      "swelling",
      "behind",
      "ear",
      "fever",
      "pus"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Severe",
    "description": "A bacterial infection of the mastoid bone behind the ear, typically a complication of untreated middle ear infection.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Eustachian Tube Dysfunction",
    "keywords": [
      "ear",
      "pop",
      "plugged",
      "clogged",
      "fullness",
      "pressure"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "A condition where the tube connecting the middle ear to the throat becomes blocked, causing ears to feel clogged or pop.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vocal Cord Nodules",
    "keywords": [
      "voice",
      "hoarse",
      "nodules",
      "singers",
      "callus",
      "strain"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Benign growths on the vocal cords caused by vocal abuse, leading to chronic hoarseness.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Peritonsillar Abscess",
    "keywords": [
      "quinsy",
      "throat",
      "abscess",
      "swallowing",
      "severe",
      "fever",
      "drooling",
      "trismus"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Severe",
    "description": "Quinsy; a collection of pus behind the tonsils, causing severe sore throat, fever, drooling, and difficulty opening the mouth.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Otosclerosis",
    "keywords": [
      "otosclerosis",
      "hearing",
      "loss",
      "ear",
      "stapes",
      "bone"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Abnormal bone growth in the middle ear that prevents the stapes bone from vibrating, leading to gradual hearing loss.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cholesteatoma",
    "keywords": [
      "cyst",
      "ear",
      "discharge",
      "smelly",
      "hearing",
      "loss",
      "dizzy"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Severe",
    "description": "A noncancerous skin cyst that develops in the middle ear, causing smelly discharge and progressive hearing loss.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Laryngitis",
    "keywords": [
      "voice",
      "hoarse",
      "laryngitis",
      "cough",
      "throat",
      "whisper"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Sudden inflammation of the vocal cords, usually viral, causing loss of voice and hoarseness.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nasal Furuncle",
    "keywords": [
      "pimple",
      "nose",
      "furuncle",
      "painful",
      "redness",
      "inside"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "A painful boil inside the nostril, caused by a localized bacterial infection of a hair follicle.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sore Throat",
    "keywords": [
      "throat",
      "sore",
      "pain",
      "swallowing",
      "scratchy"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Pain, itchiness, or irritation of the throat that worsens when swallowing, commonly due to viral infections.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Salivary Sialolithiasis",
    "keywords": [
      "salivary",
      "stone",
      "swelling",
      "jaw",
      "pain",
      "eating"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Stones in the salivary gland ducts, causing painful swelling under the jaw or in cheeks, especially during meals.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sialadenitis",
    "keywords": [
      "salivary",
      "infection",
      "jaw",
      "swelling",
      "fever",
      "pain",
      "mouth"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Bacterial infection of a salivary gland, causing painful swelling, fever, and bad taste in the mouth.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vestibular Neuritis",
    "keywords": [
      "vertigo",
      "spinning",
      "dizzy",
      "nausea",
      "balance",
      "no",
      "hearing"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the vestibular nerve, causing sudden severe spinning vertigo and nausea without hearing loss.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Anosmia",
    "keywords": [
      "smell",
      "loss",
      "anosmia",
      "taste",
      "nose"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Complete loss of the sense of smell, which also reduces the sense of taste.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Presbycusis",
    "keywords": [
      "hearing",
      "loss",
      "aging",
      "deafness",
      "ears",
      "elderly"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Age-related progressive hearing loss in both ears, making it hard to understand speech in noisy environments.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Barotrauma Ear",
    "keywords": [
      "ear",
      "barotrauma",
      "pressure",
      "flight",
      "dive",
      "pain",
      "pop"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Ear discomfort or damage caused by pressure changes (e.g., in flights or diving), causing pain or temporary blockage.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Adenoid Hypertrophy",
    "keywords": [
      "adenoids",
      "mouth",
      "breathing",
      "snoring",
      "child",
      "sleep",
      "apnea"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Enlarged adenoid glands in children, leading to mouth breathing, snoring, and persistent nasal congestion.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Glossitis",
    "keywords": [
      "tongue",
      "swollen",
      "red",
      "sore",
      "smooth",
      "glossitis"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Low",
    "description": "Inflammation of the tongue, causing it to swell, turn red, and lose its small bumps (papillae), making it look smooth.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ludwig's Angina",
    "keywords": [
      "ludwigs",
      "neck",
      "swelling",
      "floor",
      "mouth",
      "breathing",
      "drooling",
      "fever"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Emergency",
    "description": "A rapidly spreading bacterial infection of the floor of the mouth, causing severe swelling, drooling, and airway obstruction.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Foreign Body in Ear",
    "keywords": [
      "object",
      "ear",
      "foreign",
      "body",
      "pain",
      "hearing",
      "dampened"
    ],
    "bodyParts": [
      "Ears",
      "Nose",
      "Mouth/Throat",
      "Neck"
    ],
    "severity": "Moderate",
    "description": "An object or insect stuck in the ear canal, causing discomfort, pain, and muffled hearing.",
    "homeRemedies": [
      "Gargle with warm salt water three times a day",
      "Use steam inhalation for nasal block",
      "Avoid cold drinks and spicy food",
      "Keep the ears dry; do not insert cotton swabs"
    ],
    "otcMedicines": [
      {
        "name": "Saline Nasal Spray (Nasoclear)",
        "dosage": "2 sprays in each nostril 3-4 times a day",
        "warning": "Safe for long-term use"
      },
      {
        "name": "Throat Lozenges (Strepsils / Copsils)",
        "dosage": "Dissolve 1 lozenge slowly in mouth every 3 hours",
        "warning": "Do not give to children under 4"
      }
    ],
    "specialist": "ENT Specialist (Otolaryngologist)",
    "specialistReason": "For disorders of the ear, nose, throat, sinuses, and head/neck structures.",
    "warningFlags": [
      "severe ear pain",
      "hoarseness lasting over 2 weeks",
      "difficulty swallowing",
      "hearing loss"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing or swallowing fluids",
      "Swelling of the neck or airway that worsens rapidly",
      "Sudden complete loss of hearing",
      "Bleeding from the ear or severe nosebleed that won't stop"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Pyelonephritis",
    "keywords": [
      "kidney",
      "infection",
      "pyelonephritis",
      "fever",
      "chills",
      "back",
      "pain",
      "flank",
      "vomiting"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "A sudden and severe kidney infection causing high fever, shaking chills, and flank/back pain.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Kidney Disease",
    "keywords": [
      "ckd",
      "kidney",
      "chronic",
      "fatigue",
      "swelling",
      "ankles",
      "nausea",
      "puffiness"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Gradual loss of kidney function over time, leading to fluid retention, swelling, and accumulation of toxins.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nephrolithiasis",
    "keywords": [
      "kidney",
      "stone",
      "pain",
      "flank",
      "back",
      "blood",
      "urine",
      "groin"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Kidney stones; hard deposits of minerals forming in kidneys, causing agonizing flank pain radiating to the groin.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cystitis",
    "keywords": [
      "bladder",
      "infection",
      "cystitis",
      "burning",
      "urination",
      "frequency",
      "lower",
      "belly"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the bladder, usually caused by a UTI, resulting in painful and frequent urination.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Benign Prostatic Hyperplasia",
    "keywords": [
      "prostate",
      "bph",
      "flow",
      "urine",
      "weak",
      "night",
      "nocturia",
      "dribbling"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Noncancerous enlargement of the prostate gland in men, causing a weak urinary stream and frequent urination at night.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Prostatitis",
    "keywords": [
      "prostate",
      "infection",
      "prostatitis",
      "fever",
      "chills",
      "pelvic",
      "pain",
      "burning"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Bacterial infection of the prostate gland, presenting with high fever, chills, and severe pain in the pelvic area.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Glomerulonephritis",
    "keywords": [
      "glomerulonephritis",
      "kidney",
      "blood",
      "urine",
      "coca",
      "cola",
      "swelling",
      "face"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Acute inflammation of the kidney's filtering units (glomeruli), causing cola-colored urine and facial puffiness.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nephrotic Syndrome",
    "keywords": [
      "nephrotic",
      "protein",
      "urine",
      "swelling",
      "legs",
      "feet",
      "frothy"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "A kidney disorder that causes the body to excrete too much protein in urine, causing severe leg swelling and frothy urine.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Polycystic Kidney Disease",
    "keywords": [
      "pkd",
      "kidney",
      "cysts",
      "high",
      "blood",
      "back",
      "pain",
      "genetic"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "An inherited genetic disorder causing fluid-filled cysts to grow in the kidneys, leading to back pain and high blood pressure.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hydronephrosis",
    "keywords": [
      "hydronephrosis",
      "kidney",
      "swollen",
      "urine",
      "blockage",
      "pain"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Swelling of one or both kidneys due to urine buildup from a blockage in the urinary tract.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Urethritis",
    "keywords": [
      "urethritis",
      "burning",
      "urination",
      "discharge",
      "urethra"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the urethra, often sexually transmitted, causing burning pain and discharge.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Neurogenic Bladder",
    "keywords": [
      "neurogenic",
      "bladder",
      "spinal",
      "dribbling",
      "incontinence"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Lack of bladder control due to brain, spinal cord, or nerve damage, causing dribbling or urinary retention.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Epididymitis",
    "keywords": [
      "scrotum",
      "pain",
      "epididymitis",
      "swelling",
      "testicle",
      "fever"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Inflammation of the coiled tube (epididymis) at the back of the testicle, causing sudden scrotal pain and swelling.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Orchitis",
    "keywords": [
      "orchitis",
      "testicle",
      "pain",
      "swelling",
      "mumps",
      "fever"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Inflammation of one or both testicles, often due to viral infections (like mumps) or bacterial UTIs, causing severe pain.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Varicocele",
    "keywords": [
      "varicocele",
      "testicle",
      "veins",
      "bag",
      "worms",
      "ache",
      "scrotum"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "An enlargement of the veins within the scrotum, often described as feeling like a bag of worms, causing a dull ache.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hydrocele",
    "keywords": [
      "hydrocele",
      "scrotum",
      "swelling",
      "fluid",
      "painless"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "A fluid-filled sac surrounding a testicle, causing painless swelling of the scrotum.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Phimosis",
    "keywords": [
      "phimosis",
      "foreskin",
      "tight",
      "retract",
      "penis"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "A condition in males where the foreskin cannot be fully retracted over the head of the penis.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Paraphimosis",
    "keywords": [
      "paraphimosis",
      "foreskin",
      "trapped",
      "swollen",
      "penis"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Emergency",
    "description": "An emergency condition in males where the retracted foreskin becomes trapped behind the glans, causing painful swelling and cutting off blood flow.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Interstitial Cystitis",
    "keywords": [
      "cystitis",
      "interstitial",
      "pelvic",
      "pain",
      "bladder",
      "frequency",
      "painful"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A chronic bladder condition causing painful pressure and pain in the bladder/pelvis, with frequent urination.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vesicoureteral Reflux",
    "keywords": [
      "reflux",
      "urine",
      "kidney",
      "uti",
      "child"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "An abnormal backward flow of urine from the bladder into the ureters or kidneys, common in infants/children with UTIs.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Renal Tubular Acidosis",
    "keywords": [
      "rta",
      "acidosis",
      "kidney",
      "weakness",
      "muscle",
      "growth"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "A disease that occurs when the kidneys fail to excrete acids into urine, causing blood to become too acidic.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Uremia",
    "keywords": [
      "uremia",
      "kidney",
      "failure",
      "confusion",
      "nausea",
      "metallic",
      "taste",
      "itchy"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Emergency",
    "description": "A severe complication of kidney failure where urea and other waste products build up in blood, causing nausea and confusion.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vesical Calculus",
    "keywords": [
      "bladder",
      "stone",
      "pain",
      "urination",
      "blood",
      "urine"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "Bladder stones; crystallized minerals forming in bladder, causing lower abdominal pain and blood in urine.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Renal Artery Stenosis",
    "keywords": [
      "stenosis",
      "renal",
      "artery",
      "high",
      "blood",
      "pressure",
      "kidney"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Severe",
    "description": "Narrowing of one or more arteries that carry blood to the kidneys, causing severe, resistant high blood pressure.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dysuria",
    "keywords": [
      "dysuria",
      "burning",
      "urination",
      "pain",
      "urine"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "Painful or difficult urination, commonly a symptom of a UTI or local irritation.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hematuria",
    "keywords": [
      "blood",
      "urine",
      "hematuria",
      "red",
      "pink"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Moderate",
    "description": "The presence of blood in urine, making it look pink, red, or cola-colored.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nocturia",
    "keywords": [
      "nocturia",
      "night",
      "urination",
      "sleep",
      "wake"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "A condition where you wake up multiple times during the night to urinate, disrupting sleep.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Urinary Urgency",
    "keywords": [
      "urgency",
      "bladder",
      "leak",
      "sudden",
      "force"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "A sudden, compelling need to urinate that is difficult to defer, often leading to incontinence.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Stress Incontinence",
    "keywords": [
      "incontinence",
      "leak",
      "urine",
      "cough",
      "sneeze",
      "laugh"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "Urine leakage occurring when physical movement or activity (coughing, sneezing, laughing) puts pressure on the bladder.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Urge Incontinence",
    "keywords": [
      "incontinence",
      "leak",
      "urine",
      "sudden",
      "urge"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen",
      "Back"
    ],
    "severity": "Low",
    "description": "Urine leakage following a sudden, intense urge to urinate before reaching a restroom.",
    "homeRemedies": [
      "Drink 3-4 liters of water daily",
      "Drink barley water or cranberry juice",
      "Urinate immediately when you feel the urge",
      "Apply warm heating pad to lower abdomen for pain"
    ],
    "otcMedicines": [
      {
        "name": "Alkalising Citrate Liquid (Calkem / Citralka)",
        "dosage": "2 teaspoons in a glass of water twice daily",
        "warning": "Consult doctor if you have high blood pressure"
      }
    ],
    "specialist": "Urologist / Nephrologist",
    "specialistReason": "For urinary tract, prostate, and kidney related issues.",
    "warningFlags": [
      "blood in urine",
      "severe back/flank pain",
      "fever with chills",
      "inability to urinate"
    ],
    "seekEmergencyIf": [
      "Complete inability to pass urine with painful bladder swelling",
      "Severe, agonizing pain in flank radiating to groin",
      "High fever, shaking chills, and vomiting with urinary symptoms",
      "Confusion, severe puffiness, and shortness of breath (kidney failure signs)"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Endometriosis",
    "keywords": [
      "endometriosis",
      "pelvic",
      "pain",
      "periods",
      "cramps",
      "painful",
      "infertility"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A painful disorder in which tissue similar to the lining of the uterus grows outside the uterus.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Adenomyosis",
    "keywords": [
      "adenomyosis",
      "periods",
      "heavy",
      "cramping",
      "enlarged",
      "uterus",
      "pain"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "A condition where endometrial tissue grows into the muscular wall of the uterus, causing painful, heavy periods.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Uterine Fibroids",
    "keywords": [
      "fibroids",
      "uterus",
      "periods",
      "heavy",
      "bleeding",
      "pelvic",
      "pressure"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Noncancerous growths of the uterus that often appear during childbearing years, causing heavy bleeding and pelvic pressure.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ovarian Cysts",
    "keywords": [
      "ovarian",
      "cyst",
      "pelvic",
      "pain",
      "bloating",
      "sharp",
      "abdominal"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Fluid-filled sacs on an ovary, which can cause dull pelvic ache or sharp pain if they rupture.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pelvic Inflammatory Disease",
    "keywords": [
      "pid",
      "pelvic",
      "infection",
      "fever",
      "discharge",
      "pain",
      "swallowing"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "An infection of the female reproductive organs, causing lower abdominal pain, foul vaginal discharge, and fever.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vaginal Candidiasis",
    "keywords": [
      "yeast",
      "infection",
      "vaginal",
      "itching",
      "discharge",
      "white",
      "curd",
      "burning"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "A yeast infection causing intense vaginal itching, burning on urination, and thick, white, cottage-cheese-like discharge.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bacterial Vaginosis",
    "keywords": [
      "vaginosis",
      "discharge",
      "fishy",
      "odor",
      "grey",
      "thin"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "An overgrowth of atypical bacteria in the vagina, causing thin greyish discharge with a strong fishy odor.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Primary Dysmenorrhea",
    "keywords": [
      "menstrual",
      "cramps",
      "periods",
      "pain",
      "belly",
      "meftal"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Common menstrual cramps that are recurrent and not due to other diseases, typically starting in youth.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Menorrhagia",
    "keywords": [
      "menorrhagia",
      "heavy",
      "periods",
      "bleeding",
      "clots",
      "pads",
      "anemia"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Abnormally heavy or prolonged menstrual bleeding, leading to anemia and fatigue.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Amenorrhea",
    "keywords": [
      "amenorrhea",
      "no",
      "periods",
      "missed",
      "pregnancy",
      "hormone"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "The absence of menstruation, which can be primary (never started by age 15) or secondary (missed periods for 3+ months).",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Menopause Syndrome",
    "keywords": [
      "menopause",
      "hot",
      "flashes",
      "sweating",
      "mood",
      "swings",
      "sleep"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "The transitional phase marking the end of a woman's reproductive years, causing hot flashes, night sweats, and mood changes.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Premenstrual Syndrome",
    "keywords": [
      "pms",
      "mood",
      "cramps",
      "irritability",
      "bloating",
      "breast",
      "tenderness",
      "period"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "A group of physical and emotional symptoms that occur in the weeks before menstruation.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "PMDD",
    "keywords": [
      "pmdd",
      "depression",
      "anxiety",
      "mood",
      "period",
      "severe"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Premenstrual Dysphoric Disorder; a severe form of PMS causing debilitating depression, anxiety, and irritability before periods.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Cervicitis",
    "keywords": [
      "cervicitis",
      "discharge",
      "painful",
      "bleeding",
      "intercourse"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the cervix, usually due to an infection, causing discharge and bleeding after intercourse.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Mastitis",
    "keywords": [
      "mastitis",
      "breast",
      "infection",
      "pain",
      "redness",
      "fever",
      "breastfeeding"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "An infection of breast tissue, common in breastfeeding women, causing pain, redness, swelling, and fever.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Postpartum Depression",
    "keywords": [
      "postpartum",
      "depression",
      "baby",
      "blues",
      "anxiety",
      "crying",
      "mother"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "Severe depression occurring after childbirth, interfering with the mother's ability to care for herself and her baby.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyperemesis Gravidarum",
    "keywords": [
      "hyperemesis",
      "vomiting",
      "pregnancy",
      "severe",
      "dehydration",
      "nausea"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "Severe, persistent vomiting during pregnancy, leading to dehydration, weight loss, and electrolyte imbalance.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gestational Diabetes",
    "keywords": [
      "gestational",
      "diabetes",
      "pregnancy",
      "sugar",
      "thirst",
      "fatigue"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "High blood sugar that develops during pregnancy in women who did not previously have diabetes.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pre-Eclampsia",
    "keywords": [
      "preeclampsia",
      "pregnancy",
      "high",
      "blood",
      "pressure",
      "swelling",
      "headache",
      "vision"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A serious pregnancy complication characterized by high blood pressure and signs of damage to organs (like protein in urine) after 20 weeks.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ectopic Pregnancy",
    "keywords": [
      "ectopic",
      "pregnancy",
      "pain",
      "one",
      "side",
      "bleeding",
      "missed",
      "period"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Emergency",
    "description": "A pregnancy in which the fertilized egg implants outside the uterus, typically in a fallopian tube, causing severe one-sided pain and bleeding; a life-threatening emergency.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Premature Ovarian Insufficiency",
    "keywords": [
      "ovarian",
      "insufficiency",
      "early",
      "menopause",
      "infertility",
      "flashes"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Loss of normal function of the ovaries before age 40, causing irregular periods and infertility.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pelvic Organ Prolapse",
    "keywords": [
      "prolapse",
      "bulge",
      "vaginal",
      "pressure",
      "uterus",
      "bladder"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "A condition where pelvic organs (uterus, bladder, or bowel) slip down and bulge into the vagina due to weakened pelvic muscles.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cervical Dysplasia",
    "keywords": [
      "cervical",
      "dysplasia",
      "pap",
      "smear",
      "cells"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Moderate",
    "description": "Abnormal cell growth on the surface of the cervix, detected on a Pap smear, which can progress to cancer if untreated.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dyspareunia",
    "keywords": [
      "painful",
      "intercourse",
      "dyspareunia",
      "pelvic",
      "pain"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Persistent or recurrent genital pain that occurs just before, during, or after sexual intercourse.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vaginismus",
    "keywords": [
      "vaginismus",
      "muscle",
      "spasm",
      "tightness",
      "painful"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Involuntary spasm of the pelvic floor muscles surrounding the vagina, making penetration painful or impossible.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Puerperal Sepsis",
    "keywords": [
      "sepsis",
      "infection",
      "childbirth",
      "fever",
      "foul",
      "discharge",
      "pain"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Emergency",
    "description": "A serious bacterial infection of the reproductive tract following childbirth or miscarriage, presenting with high fever and foul discharge.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Galactorrhea",
    "keywords": [
      "galactorrhea",
      "milk",
      "discharge",
      "breast",
      "hormone"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Milky nipple discharge unrelated to normal lactation or breastfeeding, often due to high prolactin levels.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Trichomoniasis",
    "keywords": [
      "trichomoniasis",
      "discharge",
      "green",
      "yellow",
      "frothy",
      "itching",
      "odor"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "A sexually transmitted infection caused by a parasite, causing frothy, foul-smelling greenish-yellow discharge and itching.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vulvovaginitis",
    "keywords": [
      "vulva",
      "vaginitis",
      "itching",
      "redness",
      "burning",
      "discharge"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Low",
    "description": "Inflammation of the vulva and vagina, causing irritation, itching, and redness, common in young girls and adult women.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Placenta Previa",
    "keywords": [
      "placenta",
      "previa",
      "pregnancy",
      "bleeding",
      "painless",
      "bright",
      "red"
    ],
    "bodyParts": [
      "Pelvis/Groin",
      "Stomach/Abdomen"
    ],
    "severity": "Severe",
    "description": "A condition where the placenta partially or completely covers the cervix, causing painless, bright red vaginal bleeding in late pregnancy.",
    "homeRemedies": [
      "Apply a warm heating pad to the lower abdomen",
      "Maintain proper menstrual hygiene",
      "Get gentle exercise like walking",
      "Ensure intake of iron and folic acid rich foods"
    ],
    "otcMedicines": [
      {
        "name": "Meftal-Spas (Mefenamic Acid + Dicyclomine)",
        "dosage": "1 tablet during menstrual pain, up to twice daily",
        "warning": "Take after food. Avoid if allergic to NSAIDs."
      }
    ],
    "specialist": "Gynecologist / Obstetrician",
    "specialistReason": "For female reproductive health, pregnancy, and childbirth care.",
    "warningFlags": [
      "abnormal bleeding",
      "severe pelvic pain",
      "foul-smelling discharge",
      "pregnancy complications"
    ],
    "seekEmergencyIf": [
      "Severe vaginal bleeding (soaking more than 1 pad per hour)",
      "Severe lower abdominal pain in early pregnancy (possible ectopic)",
      "Sudden severe headache, blurred vision, and swelling of hands/face in pregnancy",
      "High fever with severe pelvic pain and foul vaginal discharge"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Measles",
    "keywords": [
      "measles",
      "rubeola",
      "fever",
      "rash",
      "koplik",
      "spots",
      "cough",
      "runny",
      "nose",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A highly contagious viral disease causing fever, cough, runny nose, and a red skin rash starting on the face.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Mumps",
    "keywords": [
      "mumps",
      "swelling",
      "cheeks",
      "jaw",
      "salivary",
      "gland",
      "fever",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A viral infection that primarily affects the salivary glands near the ears, causing painful swelling of the cheeks and jaw.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hand-Foot-Mouth Disease",
    "keywords": [
      "hand",
      "foot",
      "mouth",
      "hfmd",
      "sores",
      "blisters",
      "rash",
      "child",
      "fever"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A mild, contagious viral infection common in young children, causing sores in the mouth and a rash on hands and feet.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Roseola Infantum",
    "keywords": [
      "roseola",
      "fever",
      "rash",
      "high",
      "child",
      "pink",
      "spots"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A common viral illness in infants, causing a sudden high fever followed by a pinkish rash as the fever drops.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Fifth Disease",
    "keywords": [
      "slapped",
      "cheek",
      "fifth",
      "rash",
      "child",
      "fever"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Erythema infectiosum; a viral illness causing a distinctive bright red rash on the child's cheeks ('slapped cheek' appearance).",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Infant Colic",
    "keywords": [
      "colic",
      "crying",
      "infant",
      "inconsolable",
      "evening",
      "screaming"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Predictable periods of significant distress and crying in an otherwise healthy infant, often in evenings.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Teething Discomfort",
    "keywords": [
      "teething",
      "drooling",
      "gum",
      "irritability",
      "biting",
      "infant"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "The process of an infant's first teeth cutting through the gums, causing drooling, irritability, and a mild temperature.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Diaper Dermatitis",
    "keywords": [
      "diaper",
      "rash",
      "red",
      "baby",
      "bottom",
      "skin"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Diaper rash; red, inflamed skin on a baby's bottom, usually caused by wetness, chafing, or infrequent diaper changes.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cradle Cap",
    "keywords": [
      "cradle",
      "cap",
      "scalp",
      "greasy",
      "crust",
      "baby",
      "scales"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Seborrheic dermatitis in infants, causing yellow, greasy, scaly crusts on the baby's scalp.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scarlet Fever",
    "keywords": [
      "scarlet",
      "fever",
      "rash",
      "sandpaper",
      "strawberry",
      "tongue",
      "sore",
      "throat"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A bacterial illness developing in some people who have strep throat, causing a bright red 'sandpaper' rash and strawberry-like tongue.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Febrile Seizures",
    "keywords": [
      "seizure",
      "fever",
      "convulsion",
      "child",
      "shaking",
      "high",
      "temperature"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Fits or convulsions triggered by a rapid rise in body temperature in young children, usually harmless but frightening.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pediatric Asthma",
    "keywords": [
      "asthma",
      "wheezing",
      "cough",
      "breath",
      "chest",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Chronic inflammation of a child's airways, causing wheezing, breathlessness, and coughing, often worse at night.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Neonatal Jaundice",
    "keywords": [
      "jaundice",
      "newborn",
      "yellow",
      "eyes",
      "skin",
      "baby"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Yellowing of a newborn's skin and eyes due to high bilirubin levels, common and usually self-limiting in the first week.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nutritional Rickets",
    "keywords": [
      "rickets",
      "bones",
      "bowed",
      "legs",
      "vitamin",
      "d",
      "calcium",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Softening and weakening of bones in children, usually due to extreme vitamin D or calcium deficiency, causing bowed legs.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pinworms in Children",
    "keywords": [
      "pinworms",
      "itchy",
      "anus",
      "night",
      "child",
      "worms",
      "sleep"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Intestinal pinworm infection in children, causing intense scratching around the anus at night, disrupting sleep.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Allergic Rhinitis in Children",
    "keywords": [
      "sneezing",
      "child",
      "nose",
      "itchy",
      "eyes",
      "allergy",
      "congestion"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Allergic nasal symptoms in children, causing chronic sneezing, nose rubbing, and congestion.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pediatric Otitis Media",
    "keywords": [
      "ear",
      "pain",
      "fever",
      "child",
      "crying",
      "pulling",
      "ear"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Middle ear infection in children, causing earache, fever, and crying, often with the child pulling at their ear.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Kawasaki Disease",
    "keywords": [
      "kawasaki",
      "fever",
      "red",
      "eyes",
      "strawberry",
      "tongue",
      "hands",
      "peeling",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "An illness causing inflammation in blood vessels throughout the body in children, presenting with high fever, red eyes, and peeling skin.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nocturnal Enuresis",
    "keywords": [
      "bedwetting",
      "enuresis",
      "sleep",
      "child",
      "wet"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Involuntary urination during sleep in children aged 5 or older (bedwetting).",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pediatric Croup",
    "keywords": [
      "croup",
      "barking",
      "cough",
      "child",
      "stridor",
      "breathing",
      "hoarse"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the larynx and trachea in children, causing a barking cough and stridor on breathing.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Transient Synovitis of Hip",
    "keywords": [
      "limp",
      "hip",
      "pain",
      "child",
      "walking",
      "fever"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Toxic synovitis; a temporary inflammation of the hip joint in children, causing a sudden limp and hip pain after a viral infection.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Spasmodic Croup",
    "keywords": [
      "croup",
      "cough",
      "barking",
      "night",
      "breathing",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Recurrent episodes of barking cough and breathing difficulty at night in children, without fever.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pediatric Gastroesophageal Reflux",
    "keywords": [
      "spitting",
      "up",
      "vomit",
      "baby",
      "reflux",
      "feeding"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Spitting up or vomiting in infants due to immature digestive systems, usually resolving by age one.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Atopic Dermatitis in Children",
    "keywords": [
      "eczema",
      "itchy",
      "dry",
      "skin",
      "child",
      "creases",
      "rash"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Eczema in children, causing dry, intensely itchy red patches in the creases of elbows and knees.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "ADHD",
    "keywords": [
      "adhd",
      "hyperactive",
      "attention",
      "focus",
      "impulsive",
      "child",
      "school"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Attention-Deficit/Hyperactivity Disorder; a behavioral disorder in children causing inattention, hyperactivity, and impulsivity.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Autism Spectrum Disorder",
    "keywords": [
      "autism",
      "asd",
      "speech",
      "social",
      "eye",
      "contact",
      "repetitive",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A developmental disorder affecting communication and social interaction, presenting with repetitive behaviors and lack of eye contact.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Growth Hormone Deficiency",
    "keywords": [
      "growth",
      "short",
      "stature",
      "child",
      "height",
      "slow"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A condition where the pituitary gland does not produce enough growth hormone, leading to slow growth and short stature.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pediatric Tonsillitis",
    "keywords": [
      "tonsils",
      "tonsillitis",
      "throat",
      "swallowing",
      "fever",
      "child"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the tonsils in children, causing sore throat, difficulty eating, and fever.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pediatric Bronchiolitis",
    "keywords": [
      "bronchiolitis",
      "wheezing",
      "cough",
      "breath",
      "baby",
      "rsv"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "An acute viral infection of the small airways (bronchioles) in infants, causing wheezing and rapid breathing.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Phimosis in Boys",
    "keywords": [
      "phimosis",
      "foreskin",
      "tight",
      "boy",
      "retract"
    ],
    "bodyParts": [
      "Head",
      "Stomach/Abdomen",
      "Skin",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Tightness of the foreskin in young boys, normal in infants but can cause issues if persisting or causing pain.",
    "homeRemedies": [
      "Sponging with lukewarm water for fever",
      "Ensure plenty of rest and hydration",
      "Feed light breastmilk, formula, or soft food",
      "Keep fingernails short to prevent scratching rashes"
    ],
    "otcMedicines": [
      {
        "name": "Crocin Drops / Syrup (Paracetamol)",
        "dosage": "Based on child weight: 15mg/kg per dose",
        "warning": "Consult pediatrician for correct dosage"
      }
    ],
    "specialist": "Pediatrician",
    "specialistReason": "For children's medical care, developmental milestones, and childhood illnesses.",
    "warningFlags": [
      "high fever in infants",
      "extreme lethargy",
      "refusal to feed",
      "difficulty breathing"
    ],
    "seekEmergencyIf": [
      "Difficulty breathing (grunting, chest retractions)",
      "Inability to wake up or respond, or seizures",
      "Persistent vomiting and signs of dehydration (no wet diapers, no tears)",
      "Fever above 100.4\u00b0F (38\u00b0C) in an infant under 3 months"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Generalized Anxiety Disorder",
    "keywords": [
      "anxiety",
      "worry",
      "gad",
      "nervous",
      "tension",
      "restless",
      "fatigue"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Chronic, excessive worry about everyday things, accompanied by physical symptoms like muscle tension and restlessness.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Panic Disorder",
    "keywords": [
      "panic",
      "attack",
      "fear",
      "heart",
      "racing",
      "breath",
      "choking",
      "dizziness"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "Recurrent, unexpected panic attacks causing intense fear, rapid heart rate, shortness of breath, and fear of dying.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Obsessive-Compulsive Disorder",
    "keywords": [
      "ocd",
      "obsessions",
      "compulsions",
      "checking",
      "washing",
      "thoughts"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "A disorder where people have recurring, unwanted thoughts (obsessions) and feel driven to perform repetitive behaviors (compulsions).",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Post-Traumatic Stress Disorder",
    "keywords": [
      "ptsd",
      "trauma",
      "nightmares",
      "flashbacks",
      "anxiety",
      "trigger"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "A disorder triggered by experiencing or witnessing a terrifying event, causing flashbacks, nightmares, and severe anxiety.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Social Anxiety Disorder",
    "keywords": [
      "social",
      "phobia",
      "shyness",
      "fear",
      "public",
      "speaking",
      "avoidance"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Intense, persistent fear of being watched and judged by others in social or performance situations.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Major Depressive Disorder",
    "keywords": [
      "depression",
      "sadness",
      "hopeless",
      "fatigue",
      "sleep",
      "interest",
      "weight"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "A persistent feeling of sadness, loss of interest in activities, fatigue, and sleep changes that affect daily functioning.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bipolar I Disorder",
    "keywords": [
      "bipolar",
      "mania",
      "manic",
      "depression",
      "mood",
      "swings",
      "energy"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Severe",
    "description": "A mental illness marked by extreme mood swings, including severe manic episodes (high energy, euphoria) and depressive episodes.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bipolar II Disorder",
    "keywords": [
      "bipolar",
      "hypomania",
      "depression",
      "mood",
      "swings",
      "fatigue"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "A mental illness characterized by at least one hypomanic episode (less severe than mania) and major depressive episodes.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Schizophrenia",
    "keywords": [
      "schizophrenia",
      "hallucinations",
      "delusions",
      "voices",
      "paranoia",
      "thinking"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Severe",
    "description": "A severe brain disorder in which people interpret reality abnormally, causing hallucinations, delusions, and disordered thinking.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Borderline Personality Disorder",
    "keywords": [
      "borderline",
      "bpd",
      "mood",
      "instability",
      "relationships",
      "anger",
      "abandonment"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "A personality disorder marked by instability in moods, interpersonal relationships, self-image, and behavior.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Anorexia Nervosa",
    "keywords": [
      "anorexia",
      "eating",
      "weight",
      "loss",
      "starvation",
      "body",
      "thin"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Severe",
    "description": "An eating disorder characterized by an abnormally low body weight, an intense fear of gaining weight, and distorted perception of weight.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bulimia Nervosa",
    "keywords": [
      "bulimia",
      "binge",
      "purge",
      "vomiting",
      "eating",
      "laxatives"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "An eating disorder characterized by episodes of secretive binge eating followed by purging (self-induced vomiting or laxative use).",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Binge Eating Disorder",
    "keywords": [
      "binge",
      "eating",
      "overeating",
      "guilt",
      "food"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "An eating disorder where individuals regularly consume large quantities of food and feel unable to stop, followed by distress or guilt.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Attention Deficit Disorder",
    "keywords": [
      "add",
      "attention",
      "focus",
      "distracted",
      "forgetful"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Inattention and lack of focus without hyperactivity, affecting school or work performance.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Primary Insomnia",
    "keywords": [
      "insomnia",
      "sleep",
      "awake",
      "night",
      "fatigue",
      "morning"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Persistent difficulty falling or staying asleep, not directly caused by other medical conditions, resulting in daytime fatigue.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Narcolepsy Type 1",
    "keywords": [
      "narcolepsy",
      "sleep",
      "cataplexy",
      "weakness",
      "laughter",
      "daytime"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "Narcolepsy with cataplexy (sudden muscle weakness triggered by strong emotions like laughter).",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Agoraphobia",
    "keywords": [
      "agoraphobia",
      "crowds",
      "open",
      "spaces",
      "fear",
      "leaving",
      "house"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "An anxiety disorder involving fear of places and situations that might cause panic, helplessness, or embarrassment, often leading to avoidance of leaving home.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Trichotillomania",
    "keywords": [
      "hair",
      "pulling",
      "trichotillomania",
      "bald",
      "patches",
      "stress"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "A compulsive urge to pull out one's own hair, leading to noticeable hair loss and distress.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Seasonal Affective Disorder",
    "keywords": [
      "sad",
      "seasonal",
      "depression",
      "winter",
      "darkness",
      "energy"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "A type of depression that's related to changes in seasons, typically beginning and ending in winter.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Adjustment Disorder",
    "keywords": [
      "stress",
      "adaptation",
      "coping",
      "grief",
      "sadness",
      "event"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "An emotional or behavioral reaction to a stressful event or change in life, causing sadness or anxiety beyond what is expected.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Somatic Symptom Disorder",
    "keywords": [
      "somatic",
      "symptoms",
      "pain",
      "worry",
      "doctor",
      "health",
      "anxiety"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Extreme focus on physical symptoms (like pain or fatigue) that causes major distress and problems in daily functioning, with high health anxiety.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dissociative Identity Disorder",
    "keywords": [
      "dissociative",
      "did",
      "personalities",
      "identity",
      "memory",
      "amnesia"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Severe",
    "description": "Multiple personality disorder; a condition where a person's identity fragmented into two or more distinct personality states, causing memory lapses.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cyclothymia",
    "keywords": [
      "cyclothymia",
      "mood",
      "swings",
      "mild",
      "bipolar"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "A mild mood disorder characterized by chronic fluctuating mood elevations and depressions that are not severe enough to be bipolar.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Persistent Depressive Disorder",
    "keywords": [
      "dysthymia",
      "depression",
      "chronic",
      "sadness",
      "low",
      "energy"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Dysthymia; a continuous long-term (chronic) form of mild depression that lasts for years, causing low energy and self-esteem.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Body Dysmorphic Disorder",
    "keywords": [
      "dysmorphia",
      "appearance",
      "defect",
      "mirror",
      "worry",
      "skin"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "A mental health disorder where you can't stop thinking about one or more perceived defects or flaws in your appearance.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Oppositional Defiant Disorder",
    "keywords": [
      "defiant",
      "odd",
      "anger",
      "argumentative",
      "child",
      "temper"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "A childhood behavior disorder characterized by constant anger, irritability, and defiant or argumentative behavior toward authority figures.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hoarding Disorder",
    "keywords": [
      "hoarding",
      "clutter",
      "possessions",
      "discarding",
      "collecting"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "A persistent difficulty discarding or parting with possessions, regardless of their actual value, leading to severe clutter.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Illness Anxiety Disorder",
    "keywords": [
      "hypochondria",
      "health",
      "anxiety",
      "worry",
      "disease",
      "illness"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "Hypochondriasis; obsessing that you have a serious but undiagnosed medical condition despite reassuring medical exams.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Alcohol Use Disorder",
    "keywords": [
      "alcoholism",
      "drinking",
      "dependence",
      "withdrawal",
      "craving",
      "addiction"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Moderate",
    "description": "A chronic relapsing brain disease characterized by an impaired ability to stop or control alcohol use despite adverse consequences.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nicotine Dependence",
    "keywords": [
      "smoking",
      "tobacco",
      "nicotine",
      "addiction",
      "cravings",
      "withdrawal"
    ],
    "bodyParts": [
      "Head"
    ],
    "severity": "Low",
    "description": "An addiction to tobacco products caused by nicotine, resulting in severe cravings and withdrawal symptoms when trying to quit.",
    "homeRemedies": [
      "Practice daily mindfulness, meditation, or breathing exercises",
      "Establish a consistent, restful sleep routine",
      "Talk to a trusted friend or family member about your feelings",
      "Limit consumption of alcohol, caffeine, and social media"
    ],
    "otcMedicines": [
      {
        "name": "Chamomile Tea / Melatonin",
        "dosage": "1 cup tea or 3mg melatonin before bedtime for sleep",
        "warning": "Do not combine with alcohol or sedatives"
      }
    ],
    "specialist": "Psychiatrist / Clinical Psychologist",
    "specialistReason": "For professional mental health assessment, therapy, and psychiatric treatment.",
    "warningFlags": [
      "suicidal thoughts",
      "severe panic attacks",
      "withdrawal from society",
      "hallucinations"
    ],
    "seekEmergencyIf": [
      "Thoughts of self-harm or suicide with a plan",
      "Severe agitation, aggression, or high risk of harming others",
      "Complete inability to care for oneself or speak coherently",
      "Severe panic attack that does not subside and causes chest tightness"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vitamin A Deficiency",
    "keywords": [
      "vitamin",
      "a",
      "blindness",
      "night",
      "dry",
      "eyes",
      "bitot",
      "spots"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Deficiency of Vitamin A, leading to night blindness, dry eyes (xerophthalmia), and impaired immunity.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pellagra",
    "keywords": [
      "pellagra",
      "niacin",
      "dermatitis",
      "diarrhea",
      "dementia",
      "deficiency",
      "sun"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A disease caused by a lack of niacin (Vitamin B3), presenting with the classic 3Ds: dermatitis (especially in sun-exposed areas), diarrhea, and dementia.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Beriberi Wet",
    "keywords": [
      "beriberi",
      "thiamine",
      "heart",
      "failure",
      "swelling",
      "legs",
      "breath"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Thiamine (Vitamin B1) deficiency causing cardiovascular symptoms like rapid heart rate, shortness of breath, and leg swelling.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Beriberi Dry",
    "keywords": [
      "beriberi",
      "thiamine",
      "numbness",
      "tingling",
      "weakness",
      "muscles",
      "walking"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Thiamine (Vitamin B1) deficiency causing neurological symptoms like numbness, muscle wasting, and difficulty walking.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vitamin B12 Deficiency Anemia",
    "keywords": [
      "vitamin",
      "b12",
      "anemia",
      "numbness",
      "tongue",
      "fatigue",
      "dizzy",
      "memory"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Anemia due to lack of Vitamin B12, causing fatigue, a smooth red tongue, and neurological numbness/tingling.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Folate Deficiency Anemia",
    "keywords": [
      "folate",
      "folic",
      "acid",
      "anemia",
      "fatigue",
      "mouth",
      "sores",
      "gray",
      "hair"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Anemia due to lack of folic acid, causing fatigue, mouth ulcers, and congenital neural tube defects if occurring during pregnancy.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Kwashiorkor",
    "keywords": [
      "kwashiorkor",
      "protein",
      "malnutrition",
      "swollen",
      "belly",
      "edema",
      "child"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A severe form of protein malnutrition in children, characterized by a swollen abdomen (edema), skin lesions, and reddish-tinted hair.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Marasmus",
    "keywords": [
      "marasmus",
      "calories",
      "starvation",
      "wasting",
      "skin",
      "bones",
      "child"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Severe energy and calorie malnutrition in children, causing a wasted, skin-and-bones appearance and extreme wasting.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Zinc Deficiency",
    "keywords": [
      "zinc",
      "hair",
      "loss",
      "diarrhea",
      "immune",
      "taste",
      "wound",
      "healing"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Lack of zinc in diet, leading to hair loss, diarrhea, delayed wound healing, and loss of taste/smell.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Iodine Deficiency Goiter",
    "keywords": [
      "iodine",
      "goiter",
      "thyroid",
      "swelling",
      "neck",
      "sluggish"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Enlargement of the thyroid gland (goiter) due to lack of dietary iodine, causing neck swelling and mild hypothyroidism.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypocalcemia",
    "keywords": [
      "calcium",
      "cramps",
      "muscle",
      "spasms",
      "tingling",
      "fingers",
      "tetany"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Low blood calcium levels, causing tingling in fingers, muscle cramps, spasms (tetany), and brittle nails.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Magnesium Deficiency",
    "keywords": [
      "magnesium",
      "muscle",
      "twitches",
      "cramps",
      "fatigue",
      "weakness",
      "tremor"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Lack of magnesium, causing muscle twitches, cramps, fatigue, and muscle weakness.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vitamin K Deficiency",
    "keywords": [
      "vitamin",
      "k",
      "bleeding",
      "bruising",
      "nosebleeds",
      "blood"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Deficiency of Vitamin K, leading to impaired blood clotting, easy bruising, and prolonged bleeding from minor cuts.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vitamin E Deficiency",
    "keywords": [
      "vitamin",
      "e",
      "reflexes",
      "walking",
      "balance",
      "weakness",
      "numbness"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A rare deficiency causing neurological issues like poor reflexes, difficulty walking, muscle weakness, and vision problems.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Protein-Energy Malnutrition",
    "keywords": [
      "pem",
      "malnutrition",
      "weight",
      "loss",
      "muscle",
      "wasting",
      "weakness"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A general state of malnutrition caused by combined lack of protein and dietary calories, leading to weight loss and muscle wasting.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Selenium Deficiency",
    "keywords": [
      "selenium",
      "muscle",
      "pain",
      "fatigue",
      "hair",
      "loss",
      "immune"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Lack of selenium, which can cause muscle pain, weakness, fatigue, and thyroid dysfunction.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Copper Deficiency",
    "keywords": [
      "copper",
      "anemia",
      "weakness",
      "walking",
      "neuropathy"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A rare nutritional deficiency causing anemia, low white blood cells, and neurological symptoms similar to B12 deficiency.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Vitamin D Deficiency",
    "keywords": [
      "vitamin",
      "d",
      "bone",
      "pain",
      "fatigue",
      "muscle",
      "weakness"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Low Vitamin D levels, causing generalized bone pain, muscle weakness, and fatigue, very common in indoor workers.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Riboflavinosis",
    "keywords": [
      "riboflavin",
      "vitamin",
      "b2",
      "mouth",
      "cracks",
      "lips",
      "sore",
      "tongue"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Vitamin B2 deficiency, causing cracked red lips (cheilosis), sores at corners of mouth, and a painful purple tongue.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scurvy",
    "keywords": [
      "scurvy",
      "vitamin",
      "c",
      "gums",
      "bleeding",
      "teeth",
      "spots",
      "bruise"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A disease caused by lack of Vitamin C, causing bleeding gums, loosening of teeth, joint pain, and small dark spots on the skin.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pyridoxine Deficiency",
    "keywords": [
      "pyridoxine",
      "vitamin",
      "b6",
      "neuropathy",
      "tongue",
      "cracks",
      "confusion"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Vitamin B6 deficiency, causing peripheral neuropathy (numbness), glossitis, and cracked lips.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Biotin Deficiency",
    "keywords": [
      "biotin",
      "hair",
      "thinning",
      "rash",
      "face",
      "nails",
      "brittle"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Lack of biotin (Vitamin B7), causing hair thinning, brittle nails, and a red scaly rash around eyes and mouth.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Essential Fatty Acid Deficiency",
    "keywords": [
      "fatty",
      "acids",
      "dry",
      "skin",
      "scaly",
      "hair",
      "loss"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Lack of omega-3 and omega-6 fatty acids, leading to dry, scaly skin, hair loss, and poor wound healing.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hypokalemia",
    "keywords": [
      "potassium",
      "low",
      "weakness",
      "cramps",
      "constipation",
      "palpitations"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Low blood potassium, usually due to vomiting or diuretics, causing muscle weakness, cramps, and heart palpitations.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hyponatremia",
    "keywords": [
      "sodium",
      "low",
      "headache",
      "confusion",
      "nausea",
      "muscle",
      "cramps",
      "fatigue"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Low blood sodium, causing headache, confusion, nausea, and in severe cases, seizures due to brain swelling.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Nutritional Anemia",
    "keywords": [
      "anemia",
      "iron",
      "fatigue",
      "pale",
      "skin",
      "weakness",
      "breath"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Anemia due to lack of iron, folate, or vitamin B12, causing persistent tiredness, pale skin, and shortness of breath on exertion.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dehydration Mild",
    "keywords": [
      "dehydration",
      "thirst",
      "dry",
      "mouth",
      "dark",
      "urine",
      "headache"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Mild fluid loss causing dry mouth, mild headache, thirst, and dark yellow urine.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scurvy Infant",
    "keywords": [
      "scurvy",
      "baby",
      "gums",
      "bleeding",
      "limb",
      "pain",
      "crying"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Vitamin C deficiency in infants fed only boiled cow's milk, causing bleeding under the bones and pain when moving limbs.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Subclinical Malnutrition",
    "keywords": [
      "malnutrition",
      "fatigue",
      "weight",
      "stunted",
      "growth"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A mild, chronic state of malnutrition with no obvious symptoms but causing slow growth in children and easy fatigability in adults.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dehydration Severe",
    "keywords": [
      "dehydration",
      "severe",
      "dizzy",
      "fainting",
      "no",
      "urine",
      "sunken",
      "eyes",
      "confusion"
    ],
    "bodyParts": [
      "Skin",
      "Joints",
      "Head",
      "Mouth/Throat"
    ],
    "severity": "Emergency",
    "description": "Life-threatening fluid loss presenting with extreme dizziness, confusion, no urination for 8+ hours, and sunken eyes.",
    "homeRemedies": [
      "Eat a balanced diet rich in leafy greens, dairy, and pulses",
      "Spend 15-20 minutes in early morning sunlight daily",
      "Include citrus fruits (lemons, oranges) for Vitamin C",
      "Use iodized salt in cooking"
    ],
    "otcMedicines": [
      {
        "name": "Vitamin B-Complex (Becosules)",
        "dosage": "1 capsule daily after lunch",
        "warning": "May color urine bright yellow (harmless)"
      },
      {
        "name": "Calcium + Vitamin D3 (Shelcal 500)",
        "dosage": "1 tablet daily after dinner",
        "warning": "Avoid if you have kidney stones"
      }
    ],
    "specialist": "General Physician / Nutritionist",
    "specialistReason": "For dietary assessment, blood profile tests, and vitamin/mineral supplementation.",
    "warningFlags": [
      "severe fatigue",
      "bleeding gums",
      "joint pain",
      "numbness in hands/feet"
    ],
    "seekEmergencyIf": [
      "Severe shortness of breath with minimal exertion (severe anemia)",
      "Inability to stand or walk due to extreme muscle weakness",
      "Severe confusion, memory loss, and difficulty walking",
      "Numbness and tingling that progresses rapidly up the limbs"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Scorpion Sting",
    "keywords": [
      "scorpion",
      "sting",
      "pain",
      "swelling",
      "sweating",
      "saliva",
      "vomiting"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A sting from a scorpion causing intense local burning pain, followed by systemic sweating, excess saliva, and vomiting.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Organophosphate Pesticide Poisoning",
    "keywords": [
      "pesticide",
      "poison",
      "organophosphate",
      "froth",
      "mouth",
      "constricted",
      "pupils",
      "tears",
      "difficulty",
      "breathing"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Severe poisoning from inhaling or touching organophosphate pesticides, causing frothing at the mouth, pinpoint pupils, and respiratory failure.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Kerosene Ingestion",
    "keywords": [
      "kerosene",
      "oil",
      "ingested",
      "choking",
      "cough",
      "vomit",
      "breath"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Ingestion of kerosene (common in rural households), causing chemical pneumonia if choked or vomited into the lungs.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Carbon Monoxide Poisoning",
    "keywords": [
      "carbon",
      "monoxide",
      "co",
      "headache",
      "dizzy",
      "nausea",
      "confusion",
      "sleepy",
      "heater"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Poisoning from inhaling carbon monoxide gas (from indoor fires/generators), causing headache, dizziness, confusion, and sleepiness.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Lead Poisoning",
    "keywords": [
      "lead",
      "poisoning",
      "stomach",
      "pain",
      "constipation",
      "irritability",
      "headache"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "Poisoning from lead ingestion, causing abdominal pain, constipation, joint pain, and developmental issues in children.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Mercury Poisoning",
    "keywords": [
      "mercury",
      "poison",
      "tremor",
      "coordination",
      "numbness",
      "metallic",
      "taste"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "Poisoning from mercury exposure, causing muscle weakness, tremors, coordination loss, and metallic taste in the mouth.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Mushroom Poisoning",
    "keywords": [
      "mushroom",
      "wild",
      "poisoning",
      "vomiting",
      "diarrhea",
      "cramps",
      "hallucinations"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Ingestion of toxic wild mushrooms, causing severe vomiting, watery diarrhea, and in some species, liver failure or hallucinations.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Jellyfish Sting",
    "keywords": [
      "jellyfish",
      "sting",
      "burning",
      "pain",
      "red",
      "tracks",
      "itching"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "A sting from a jellyfish causing immediate, intense burning skin pain and red, whip-like lash marks on the skin.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bee Wasp Sting",
    "keywords": [
      "bee",
      "wasp",
      "sting",
      "pain",
      "swelling",
      "redness",
      "sharp"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "A local sting causing sudden sharp pain, redness, and swelling, which can be dangerous if allergic (anaphylaxis).",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dog Bite",
    "keywords": [
      "dog",
      "bite",
      "wound",
      "tear",
      "rabies",
      "bleeding"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A bite from a dog, requiring immediate wound washing, tetanus toxoid, and rabies post-exposure prophylaxis.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Cat Scratch Disease",
    "keywords": [
      "cat",
      "scratch",
      "bite",
      "lymph",
      "node",
      "swelling",
      "fever",
      "pimple"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "A bacterial infection spread by cat scratches/bites, causing a small bump at the site followed by painful swollen lymph nodes near the scratch.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Monkey Bite",
    "keywords": [
      "monkey",
      "bite",
      "rabies",
      "herpes",
      "b",
      "wound"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A bite from a monkey, common in parts of India, carrying a high risk of rabies and Herpes B virus infection.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Second-Degree Chemical Burn",
    "keywords": [
      "chemical",
      "burn",
      "acid",
      "alkali",
      "skin",
      "pain",
      "blisters"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A skin burn caused by contact with strong acids or alkalis (e.g. toilet cleaners, battery acid), causing pain and blisters.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Smoke Inhalation Injury",
    "keywords": [
      "smoke",
      "inhalation",
      "fire",
      "cough",
      "soot",
      "breath",
      "hoarse"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Injury to the respiratory tract from inhaling hot smoke and toxic gases in a fire, causing soot in phlegm, coughing, and hoarseness.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Acute Mountain Sickness",
    "keywords": [
      "altitude",
      "mountain",
      "sickness",
      "headache",
      "nausea",
      "dizzy",
      "fatigue",
      "climbing"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "Altitude sickness; headache, dizziness, and nausea occurring when climbing rapidly to high altitudes (above 2500m).",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Motion Sickness",
    "keywords": [
      "motion",
      "sickness",
      "nausea",
      "vomiting",
      "dizzy",
      "travel",
      "car",
      "bus",
      "boat"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "Dizziness and nausea caused by motion during travel in a car, bus, or boat.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Decompression Sickness",
    "keywords": [
      "bends",
      "diving",
      "joint",
      "pain",
      "dizzy",
      "breath",
      "diver"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "The bends; bubbles of nitrogen forming in blood and tissues due to rapid ascent from deep-sea diving, causing joint pain.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Accidental Electric Shock",
    "keywords": [
      "electric",
      "shock",
      "burn",
      "numbness",
      "unconscious",
      "heart"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Shock from contact with electrical currents, which can cause skin burns, muscle spasms, and life-threatening cardiac arrest.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Lightning Strike Injury",
    "keywords": [
      "lightning",
      "strike",
      "burn",
      "unconscious",
      "confusion",
      "heart"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Direct or indirect injury from lightning, causing skin burns, confusion, hearing damage, or immediate cardiac arrest.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Severe Sunburn",
    "keywords": [
      "sunburn",
      "red",
      "skin",
      "pain",
      "peeling",
      "sun",
      "blisters"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "Radiation burn to the skin from excessive sun exposure, causing painful red skin, peeling, and sometimes blisters.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Poison Ivy Dermatitis",
    "keywords": [
      "poison",
      "ivy",
      "rash",
      "itchy",
      "blisters",
      "plant"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "Allergic skin rash caused by contact with urushiol oil from poison ivy/oak plants, causing severe itching and blisters.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Arsenicosis",
    "keywords": [
      "arsenic",
      "water",
      "skin",
      "spots",
      "rain",
      "drop",
      "keratosis",
      "numbness"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "Arsenic poisoning from drinking contaminated groundwater over years, causing 'rain-drop' dark skin spots, rough skin on palms/soles, and neuropathy.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Methanol Poisoning",
    "keywords": [
      "alcohol",
      "methanol",
      "toxic",
      "hooch",
      "blindness",
      "vomiting",
      "confusion"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Poisoning from drinking adulterated or illicit liquor containing methanol, causing severe acidosis, vomiting, and blindness.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Organophosphate Toxicity",
    "keywords": [
      "organophosphate",
      "froth",
      "pupils",
      "pinpoint",
      "sweat",
      "pesticide"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Systemic toxicity from pesticide exposure, causing excessive sweating, tearing, drooling, constricted pupils, and muscle twitching.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Puffer Fish Poisoning",
    "keywords": [
      "fish",
      "puffer",
      "tetrodotoxin",
      "numbness",
      "mouth",
      "paralysis",
      "breathing"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "Tetrodotoxin poisoning from eating improperly prepared puffer fish, causing rapid numbness of the mouth followed by paralysis.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Snake Bite Neurotoxic",
    "keywords": [
      "snake",
      "bite",
      "cobra",
      "krait",
      "drooping",
      "eyelids",
      "speech",
      "breathing",
      "paralysis"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "A bite from a neurotoxic snake (like Cobra or Krait) causing minimal local pain but rapid paralysis, drooping eyelids, and respiratory arrest.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Snake Bite Hematotoxic",
    "keywords": [
      "snake",
      "bite",
      "viper",
      "bleeding",
      "swelling",
      "pain",
      "urine",
      "bruising"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "A bite from a hematotoxic snake (like Russell's Viper) causing severe swelling, pain, bleeding from the bite wound, and blood in urine.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Heat Exhaustion",
    "keywords": [
      "heat",
      "exhaustion",
      "sweating",
      "weak",
      "dizzy",
      "nausea",
      "headache",
      "sun"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "A heat-related illness causing heavy sweating, rapid pulse, dizziness, fatigue, and headache due to overheating.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Heat Stroke",
    "keywords": [
      "heat",
      "stroke",
      "fever",
      "dry",
      "skin",
      "confusion",
      "unconscious",
      "sun"
    ],
    "bodyParts": [
      "Skin",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Emergency",
    "description": "A life-threatening medical emergency where the body's temperature rises above 104\u00b0F (40\u00b0C), presenting with hot, dry skin and confusion.",
    "homeRemedies": [
      "Keep the patient calm and completely still",
      "Wash the bite area gently with soap and water",
      "Immobilize the affected limb at or below heart level",
      "Do NOT cut, suck, or apply tight tourniquets to the bite"
    ],
    "otcMedicines": [
      {
        "name": "Oral Rehydration Salts (Electral)",
        "dosage": "Sip continuously for food poisoning hydration",
        "warning": "Do not delay hospital visit for serious poisonings"
      }
    ],
    "specialist": "Emergency Medicine Specialist",
    "specialistReason": "For immediate toxicology, wound care, and life support measures.",
    "warningFlags": [
      "difficulty breathing",
      "convulsions",
      "extreme pain",
      "swelling spreading rapidly"
    ],
    "seekEmergencyIf": [
      "Snake bite or wild animal bite (requires immediate anti-venom/rabies vaccine)",
      "Ingestion of pesticides, household chemicals, or unknown pills",
      "Severe difficulty breathing, vomiting, or swelling after a bite",
      "Loss of consciousness or seizures after exposure to toxins"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Periodontitis",
    "keywords": [
      "gum",
      "periodontitis",
      "loose",
      "teeth",
      "bleeding",
      "bad",
      "breath"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A serious gum infection that damages the soft tissue and destroys the bone supporting your teeth, leading to loose teeth.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dental Caries",
    "keywords": [
      "cavity",
      "caries",
      "tooth",
      "decay",
      "hole",
      "black",
      "pain"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Tooth decay or cavities; holes in the teeth caused by bacterial acid production, leading to pain when eating sweet or hot foods.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Aphthous Stomatitis",
    "keywords": [
      "canker",
      "sores",
      "ulcer",
      "mouth",
      "white",
      "painful",
      "canker"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Canker sores; small, painful, non-contagious ulcers inside the mouth, making eating and speaking uncomfortable.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Herpes Labialis",
    "keywords": [
      "cold",
      "sores",
      "fever",
      "blister",
      "lip",
      "tingling",
      "herpes"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Cold sores; small, painful blisters on the lips caused by the Herpes Simplex Virus, often preceded by a tingling sensation.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dry Socket",
    "keywords": [
      "socket",
      "dry",
      "tooth",
      "extraction",
      "pain",
      "severe",
      "jaw"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Alveolar osteitis; a painful condition occurring after a tooth extraction when the blood clot fails to form or dislodges, exposing bone.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Halitosis Chronic",
    "keywords": [
      "bad",
      "breath",
      "odor",
      "mouth",
      "halitosis",
      "gums"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Persistent, unpleasant odor exhaled from the mouth, often due to poor oral hygiene, gum disease, or dry mouth.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Bruxism",
    "keywords": [
      "teeth",
      "grinding",
      "jaw",
      "pain",
      "headache",
      "morning",
      "sleep"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Teeth grinding or clenching, especially during sleep, causing jaw soreness, dull headache, and worn teeth.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "TMJ Disorder",
    "keywords": [
      "tmj",
      "jaw",
      "click",
      "pop",
      "pain",
      "earache",
      "lock"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Temporomandibular Joint disorder, causing pain in the jaw joint, clicking or popping sounds, and difficulty chewing.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Oral Lichen Planus",
    "keywords": [
      "lichen",
      "planus",
      "mouth",
      "white",
      "lacy",
      "patches",
      "burning",
      "sores"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A chronic inflammatory condition affecting mucous membranes inside the mouth, causing lacy white patches or painful burning sores.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Leukoplakia",
    "keywords": [
      "white",
      "patch",
      "mouth",
      "tongue",
      "tobacco",
      "smoker"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Thickened, white patches inside the mouth, commonly on the tongue or gums, often linked to tobacco use and can be pre-cancerous.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Salivary Duct Stone",
    "keywords": [
      "salivary",
      "stone",
      "gland",
      "swelling",
      "jaw",
      "pain",
      "eating"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "A calcium stone blocking the salivary gland duct, causing swelling and pain under the jaw, especially during meals.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Glossitis Chronic",
    "keywords": [
      "tongue",
      "swollen",
      "red",
      "smooth",
      "glossitis",
      "sore"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Long-standing inflammation of the tongue, causing it to become red, smooth, and sore, often due to B-vitamin deficiency.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Burning Mouth Syndrome",
    "keywords": [
      "burning",
      "mouth",
      "tongue",
      "scalded",
      "pain"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A hot, burning sensation in the mouth or on the tongue without any obvious medical or dental cause.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Wisdom Tooth Impaction",
    "keywords": [
      "wisdom",
      "tooth",
      "jaw",
      "pain",
      "swelling",
      "back",
      "mouth"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A wisdom tooth that doesn't have enough room to emerge or grow normally, causing pain and swelling at the back of the jaw.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Periapical Dental Abscess",
    "keywords": [
      "tooth",
      "abscess",
      "pus",
      "throbbing",
      "pain",
      "jaw",
      "swelling",
      "fever"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A collection of pus at the root of a tooth, causing severe, throbbing pain radiating to the jaw, swelling, and fever.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Pericoronitis",
    "keywords": [
      "gum",
      "swelling",
      "wisdom",
      "tooth",
      "flap",
      "pain",
      "jaw"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Moderate",
    "description": "Inflammation of the gum tissue surrounding the crown of a partially erupted wisdom tooth, trapping food and bacteria.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dentin Hypersensitivity",
    "keywords": [
      "tooth",
      "sensitive",
      "cold",
      "hot",
      "sharp",
      "pain"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Sensitive teeth; sharp, temporary tooth pain triggered by hot, cold, sweet, or sour foods and drinks.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Dental Fluorosis",
    "keywords": [
      "fluorosis",
      "teeth",
      "white",
      "spots",
      "brown",
      "streaks",
      "water"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A cosmetic condition affecting teeth with white spots or brown streaks, caused by overexposure to fluoride during early tooth development in childhood water supply.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Angular Cheilitis",
    "keywords": [
      "cheilitis",
      "mouth",
      "corners",
      "cracked",
      "sore",
      "bleeding"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Painful, red, cracked sores at the corners of the mouth, often due to fungal infection or riboflavin deficiency.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Geographic Tongue",
    "keywords": [
      "tongue",
      "patches",
      "map",
      "geographic",
      "red",
      "white"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A harmless inflammatory condition giving the tongue a map-like appearance with red patches bordered by white lines, which shift over time.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ranula",
    "keywords": [
      "ranula",
      "blue",
      "swell",
      "under",
      "tongue",
      "salivary"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "A clear or bluish fluid-filled cyst on the floor of the mouth under the tongue, caused by a blocked sublingual salivary gland.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gingival Hyperplasia",
    "keywords": [
      "gums",
      "overgrowth",
      "swollen",
      "teeth",
      "medication"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "An overgrowth of gum tissue around the teeth, which can be caused by certain medications or poor oral hygiene.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Alveolar Abscess",
    "keywords": [
      "jaw",
      "abscess",
      "pus",
      "swelling",
      "tooth",
      "pain"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "A deep bacterial infection of the jawbone socket supporting a tooth, causing severe throbbing pain and facial swelling.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Necrotizing Ulcerative Gingivitis",
    "keywords": [
      "trench",
      "mouth",
      "gums",
      "ulcer",
      "bleeding",
      "severe",
      "breath",
      "fever"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Severe",
    "description": "Trench mouth; a severe, painful bacterial gum infection causing ulcers, bleeding gums, foul breath, and fever.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Gingivitis Acute",
    "keywords": [
      "gums",
      "bleeding",
      "swollen",
      "red",
      "brushing",
      "gingivitis"
    ],
    "bodyParts": [
      "Mouth/Throat"
    ],
    "severity": "Low",
    "description": "Early stage gum disease causing red, swollen gums that bleed easily during brushing or flossing.",
    "homeRemedies": [
      "Rinse mouth with warm salt water",
      "Apply a cold compress to the cheek for swelling",
      "Avoid very hot, cold, or sugary foods",
      "Floss gently to remove any trapped food debris"
    ],
    "otcMedicines": [
      {
        "name": "Ketorolac (Ketorol-DT)",
        "dosage": "Disperse 1 tablet in 1 spoon of water for severe toothache",
        "warning": "Use for maximum 3-5 days. Take after food."
      },
      {
        "name": "Clove Oil",
        "dosage": "Apply a tiny drop on a cotton bud directly to the aching tooth",
        "warning": "Avoid contact with gums to prevent irritation"
      }
    ],
    "specialist": "Dentist",
    "specialistReason": "For dental, gum, and oral health checkups and procedures.",
    "warningFlags": [
      "severe jaw swelling",
      "fever",
      "trouble swallowing",
      "bleeding gums"
    ],
    "seekEmergencyIf": [
      "Severe swelling of the face, jaw, or neck that compromises breathing",
      "High fever and chills with severe toothache",
      "Uncontrolled bleeding from the mouth after an extraction or trauma",
      "Inability to open the mouth (trismus) due to severe infection"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Fatigue Syndrome",
    "keywords": [
      "fatigue",
      "tiredness",
      "exhaustion",
      "cfs",
      "sleep",
      "memory"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "Myalgic encephalomyelitis; a complex disorder characterized by extreme fatigue lasting for 6+ months that worsens with physical activity and doesn't improve with rest.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Pain Syndrome",
    "keywords": [
      "pain",
      "chronic",
      "aching",
      "joints",
      "muscles",
      "sleep"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "Persistent pain lasting over 3 months, affecting sleep, mood, and daily activities, often with no clear physical cause.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Primary Lymphedema",
    "keywords": [
      "lymphedema",
      "swelling",
      "leg",
      "arm",
      "lymph",
      "fluid"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "An inherited condition where fluid buildup causes painless swelling in one or both legs or arms due to malformed lymph nodes.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sj\u00f6gren's Syndrome",
    "keywords": [
      "sjogrens",
      "dry",
      "eyes",
      "dry",
      "mouth",
      "joints",
      "fatigue"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "An autoimmune disorder characterized by dry eyes and dry mouth, often accompanying rheumatoid arthritis.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Systemic Lupus Erythematosus",
    "keywords": [
      "lupus",
      "sle",
      "butterfly",
      "rash",
      "joint",
      "pain",
      "fever",
      "fatigue"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A chronic autoimmune disease where the body's immune system attacks its own tissues, causing a characteristic butterfly-shaped rash on cheeks, joint pain, and fever.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Systemic Amyloidosis",
    "keywords": [
      "amyloidosis",
      "protein",
      "heart",
      "kidney",
      "fatigue",
      "swelling",
      "numbness"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A rare disease where abnormal amyloid proteins build up in organs, affecting heart, kidney, and liver function.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Systemic Mastocytosis",
    "keywords": [
      "mastocytosis",
      "skin",
      "spots",
      "itching",
      "flushing",
      "stomach",
      "anaphylaxis"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A rare disorder where too many mast cells build up in skin or internal organs, causing itching, flushing, and severe allergic reactions.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Polymyalgia Rheumatica Chronic",
    "keywords": [
      "stiffness",
      "shoulders",
      "hips",
      "morning",
      "elderly",
      "pain"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "Chronic muscle stiffness and pain in shoulders and hips in older adults, responsive to steroids.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Takayasu's Arteritis",
    "keywords": [
      "arteritis",
      "takayasu",
      "pulse",
      "weak",
      "arm",
      "dizzy",
      "high",
      "blood"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A rare type of vasculitis causing inflammation of the aorta and its main branches, leading to weak pulses in the arms and dizziness.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Systemic Scleroderma",
    "keywords": [
      "scleroderma",
      "skin",
      "tight",
      "thick",
      "fingers",
      "heartburn",
      "raynauds"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A group of rare diseases that involve the hardening and tightening of the skin and connective tissues, and internal organs.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Inguinal Hernia",
    "keywords": [
      "hernia",
      "inguinal",
      "groin",
      "bulge",
      "pain",
      "coughing",
      "lifting"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "A condition where soft tissue (usually intestine) protrudes through a weak spot in the groin muscles, causing a painful bulge when coughing or lifting.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hiatal Hernia",
    "keywords": [
      "hernia",
      "hiatal",
      "heartburn",
      "gerd",
      "chest",
      "fullness",
      "swallowing"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "A condition where part of the stomach pushes up through the diaphragm into the chest, causing acid reflux and difficulty swallowing.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hemophilia A",
    "keywords": [
      "hemophilia",
      "bleeding",
      "bruising",
      "joints",
      "swelling",
      "genetic"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A genetic disorder where the blood doesn't clot properly due to lack of coagulation Factor VIII, causing bleeding into joints.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Beta Thalassemia Major",
    "keywords": [
      "thalassemia",
      "anemia",
      "pale",
      "fatigue",
      "spleen",
      "bone",
      "child"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "An inherited blood disorder where the body makes abnormal hemoglobin, causing severe anemia, bone deformities, and requiring lifelong blood transfusions.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sickle Cell Anemia",
    "keywords": [
      "sickle",
      "anemia",
      "pain",
      "crisis",
      "joints",
      "fatigue",
      "pale"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "An inherited red blood cell disorder where blood cells are shaped like sickles, blocking blood flow and causing severe pain crises in joints and abdomen.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Hemochromatosis Hereditary",
    "keywords": [
      "iron",
      "overload",
      "hemochromatosis",
      "bronze",
      "skin",
      "joints",
      "liver"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "An inherited disorder causing the body to absorb too much iron from diet, which deposits in organs, causing bronze skin, joint pain, and liver damage.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Splenomegaly",
    "keywords": [
      "spleen",
      "enlarged",
      "left",
      "side",
      "belly",
      "pain",
      "fullness"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "Enlarged spleen, often secondary to infections or blood disorders, causing pain or fullness in the left upper abdomen.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Chronic Pelvic Pain",
    "keywords": [
      "pelvic",
      "pain",
      "chronic",
      "lower",
      "abdomen"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "Persistent, non-cyclic pelvic pain lasting for 6 months or longer, requiring thorough medical evaluation.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Insomnia Chronic",
    "keywords": [
      "insomnia",
      "sleep",
      "chronic",
      "awake",
      "night",
      "fatigue"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "Difficulty sleeping that occurs at least three nights a week for three months or longer, causing daytime fatigue.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Fibromyalgia Chronic",
    "keywords": [
      "fibromyalgia",
      "chronic",
      "fatigue",
      "pain",
      "tender",
      "sleep"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "A chronic disorder characterized by widespread musculoskeletal pain, fatigue, sleep, memory, and mood issues.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Ankylosing Spondylitis Chronic",
    "keywords": [
      "spondylitis",
      "back",
      "stiffness",
      "morning",
      "spine",
      "arthritis"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "Chronic inflammatory spinal arthritis causing morning stiffness and pain that improves with exercise.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Raynaud's Disease Primary",
    "keywords": [
      "raynauds",
      "fingers",
      "cold",
      "numb",
      "color",
      "change"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Low",
    "description": "Primary Raynaud's; cold-induced finger numbness and color changes (white to blue to red) without underlying disease.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sj\u00f6gren's Syndrome Primary",
    "keywords": [
      "sjogrens",
      "dry",
      "eyes",
      "mouth",
      "dryness"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Moderate",
    "description": "Primary Sj\u00f6gren's; autoimmune destruction of moisture-producing glands, causing dry eyes and dry mouth.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Sarcoidosis Pulmonary",
    "keywords": [
      "sarcoidosis",
      "cough",
      "breath",
      "granuloma",
      "chest"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "Sarcoidosis affecting the lungs, causing persistent dry cough, shortness of breath, and chest discomfort.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  },
  {
    "name": "Behcet's Disease",
    "keywords": [
      "behcets",
      "ulcers",
      "mouth",
      "genital",
      "eye",
      "inflammation",
      "skin"
    ],
    "bodyParts": [
      "Joints",
      "Back",
      "Stomach/Abdomen",
      "Head"
    ],
    "severity": "Severe",
    "description": "A rare disorder causing blood vessel inflammation throughout the body, presenting with recurrent painful mouth and genital ulcers, and eye inflammation.",
    "homeRemedies": [
      "Pace your activities and balance rest with light movement",
      "Maintain a detailed journal of symptoms and triggers",
      "Engage in stress reduction techniques like deep breathing",
      "Eat a nutrient-rich, anti-inflammatory diet"
    ],
    "otcMedicines": [
      {
        "name": "Paracetamol (Calpol 500mg)",
        "dosage": "1 tablet up to three times daily for chronic aches",
        "warning": "Consult doctor for chronic usage"
      }
    ],
    "specialist": "General Physician / Specialist based on system",
    "specialistReason": "For chronic care coordination, pain management, and systemic reviews.",
    "warningFlags": [
      "unexplained weight loss",
      "unrelenting pain",
      "night sweats",
      "extreme weakness"
    ],
    "seekEmergencyIf": [
      "Sudden severe worsening of chronic symptoms",
      "Fever with severe body stiffness and headache",
      "Inability to perform basic daily activities due to sudden weakness",
      "Severe pain that does not respond to maximum allowed dose of medications"
    ],
    "catalogVersion": 1
  }
];
