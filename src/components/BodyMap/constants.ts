import { BodyPartData } from './types';

// Male body part data (default)
export const BODY_DATA: Record<string, BodyPartData> = {
  head: {
    id: 'head',
    label: 'Head & Neck',
    symptoms: [
      { id: 'h1', name: 'Headache' },
      { id: 'h2', name: 'Dizziness' },
      { id: 'h3', name: 'Sore throat' },
      { id: 'h4', name: 'Fever' },
      { id: 'h5', name: 'Vision problems' },
      { id: 'h6', name: 'Runny nose' },
    ],
    diseases: [
      'Migraine',
      'Sinusitis',
      'Thyroid disorders',
      'Tonsillitis',
      'Vertigo',
      'Concussion',
    ]
  },
  chest: {
    id: 'chest',
    label: 'Chest',
    symptoms: [
      { id: 'c1', name: 'Chest pain' },
      { id: 'c2', name: 'Palpitations' },
      { id: 'c3', name: 'Shortness of breath' },
      { id: 'c4', name: 'Cough' },
      { id: 'c5', name: 'Heartburn' },
    ],
    diseases: [
      'Coronary artery disease',
      'Pneumonia',
      'Asthma',
      'GERD',
      'Angina',
      'Bronchitis',
    ]
  },
  arms: {
    id: 'arms',
    label: 'Arms & Hands',
    symptoms: [
      { id: 'a1', name: 'Shoulder pain' },
      { id: 'a2', name: 'Elbow pain' },
      { id: 'a3', name: 'Wrist pain' },
      { id: 'a4', name: 'Numbness in fingers' },
      { id: 'a5', name: 'Tremors' },
    ],
    diseases: [
      'Carpal tunnel syndrome',
      'Tennis elbow',
      'Rotator cuff injury',
      'Arthritis',
      'Tendinitis',
      'Peripheral neuropathy',
    ]
  },
  abdomen: {
    id: 'abdomen',
    label: 'Abdomen',
    symptoms: [
      { id: 'ab1', name: 'Stomach ache' },
      { id: 'ab2', name: 'Nausea' },
      { id: 'ab3', name: 'Bloating' },
      { id: 'ab4', name: 'Abdominal cramps' },
      { id: 'ab5', name: 'Vomiting' },
    ],
    diseases: [
      'Gastritis',
      'Irritable bowel syndrome',
      'Appendicitis',
      'Gallstones',
      'Peptic ulcer',
      'Pancreatitis',
    ]
  },
  pelvis: {
    id: 'pelvis',
    label: 'Lower Abdomen & Pelvis',
    symptoms: [
      { id: 'p1', name: 'Pelvic pain' },
      { id: 'p2', name: 'Urinary problems' },
      { id: 'p3', name: 'Groin pain' },
      { id: 'p4', name: 'Hip pain' },
    ],
    diseases: [
      'Urinary tract infection',
      'Kidney stones',
      'Hernia',
      'Endometriosis',
      'Prostatitis',
      'Ovarian cysts',
    ]
  },
  legs: {
    id: 'legs',
    label: 'Legs & Feet',
    symptoms: [
      { id: 'l1', name: 'Knee pain' },
      { id: 'l2', name: 'Swollen ankles' },
      { id: 'l3', name: 'Foot pain' },
      { id: 'l4', name: 'Leg cramps' },
      { id: 'l5', name: 'Varicose veins' },
    ],
    diseases: [
      'Osteoarthritis',
      'Plantar fasciitis',
      'Deep vein thrombosis',
      'Restless leg syndrome',
      'Gout',
      'Peripheral artery disease',
    ]
  },
  // Back body part data
  back_head_neck: {
    id: 'back_head_neck',
    label: 'Head & Neck (Back)',
    symptoms: [
      { id: 'bhn1', name: 'Neck stiffness' },
      { id: 'bhn2', name: 'Tension headache' },
      { id: 'bhn3', name: 'Cervical pain' },
      { id: 'bhn4', name: 'Occipital neuralgia' },
      { id: 'bhn5', name: 'Whiplash symptoms' },
    ],
    diseases: [
      'Cervical spondylosis',
      'Meningitis',
      'Cervical disc herniation',
      'Torticollis',
      'Tension-type headache',
    ]
  },
  back_upper: {
    id: 'back_upper',
    label: 'Upper & Mid Back',
    symptoms: [
      { id: 'bu1', name: 'Upper back pain' },
      { id: 'bu2', name: 'Muscle spasms' },
      { id: 'bu3', name: 'Thoracic spine pain' },
      { id: 'bu4', name: 'Shoulder blade pain' },
      { id: 'bu5', name: 'Posture-related pain' },
    ],
    diseases: [
      'Thoracic disc disease',
      'Kyphosis',
      'Scoliosis',
      'Muscle strain',
      'Osteoporosis',
      'Ankylosing spondylitis',
    ]
  },
  back_arms: {
    id: 'back_arms',
    label: 'Arms (Back)',
    symptoms: [
      { id: 'ba1', name: 'Triceps pain' },
      { id: 'ba2', name: 'Posterior arm weakness' },
      { id: 'ba3', name: 'Elbow pain (posterior)' },
      { id: 'ba4', name: 'Arm numbness' },
      { id: 'ba5', name: 'Muscle tightness' },
    ],
    diseases: [
      'Triceps tendinitis',
      'Olecranon bursitis',
      'Radial nerve entrapment',
      'Posterior interosseous syndrome',
      'Muscle strain',
    ]
  },
  back_backside: {
    id: 'back_backside',
    label: 'Lower Back & Buttocks',
    symptoms: [
      { id: 'bb1', name: 'Lower back pain' },
      { id: 'bb2', name: 'Sciatica' },
      { id: 'bb3', name: 'Buttock pain' },
      { id: 'bb4', name: 'Sacroiliac joint pain' },
      { id: 'bb5', name: 'Tailbone pain' },
      { id: 'bb6', name: 'Piriformis pain' },
    ],
    diseases: [
      'Lumbar disc herniation',
      'Sciatica',
      'Piriformis syndrome',
      'Sacroiliac joint dysfunction',
      'Degenerative disc disease',
      'Spinal stenosis',
      'Coccydynia',
    ]
  },
  back_legs: {
    id: 'back_legs',
    label: 'Legs (Back)',
    symptoms: [
      { id: 'bl1', name: 'Hamstring pain' },
      { id: 'bl2', name: 'Calf pain' },
      { id: 'bl3', name: 'Posterior knee pain' },
      { id: 'bl4', name: 'Achilles tendon pain' },
      { id: 'bl5', name: 'Leg numbness' },
      { id: 'bl6', name: 'Posterior thigh tightness' },
    ],
    diseases: [
      'Hamstring strain',
      'Deep vein thrombosis',
      'Achilles tendinitis',
      'Baker\'s cyst',
      'Peripheral artery disease',
      'Sciatica (leg symptoms)',
      'Calf muscle tear',
    ]
  }
};

// Female body part data with female-specific conditions
export const FEMALE_BODY_DATA: Record<string, BodyPartData> = {
  head: {
    id: 'head',
    label: 'Head & Neck',
    symptoms: [
      { id: 'fh1', name: 'Hormonal headache' },
      { id: 'fh2', name: 'Migraine with aura' },
      { id: 'fh3', name: 'Dizziness' },
      { id: 'fh4', name: 'Fatigue' },
      { id: 'fh5', name: 'Hair thinning' },
      { id: 'fh6', name: 'Neck stiffness' },
    ],
    diseases: [
      'Migraine (hormonal)',
      'Thyroid disorders',
      'Iron deficiency anemia',
      'Tension headaches',
      'Alopecia',
      'Hashimoto\'s thyroiditis',
    ]
  },
  chest: {
    id: 'chest',
    label: 'Chest & Breasts',
    symptoms: [
      { id: 'fc1', name: 'Breast pain/tenderness' },
      { id: 'fc2', name: 'Breast lumps' },
      { id: 'fc3', name: 'Nipple discharge' },
      { id: 'fc4', name: 'Chest tightness' },
      { id: 'fc5', name: 'Shortness of breath' },
      { id: 'fc6', name: 'Palpitations' },
    ],
    diseases: [
      'Fibrocystic breast changes',
      'Mastitis',
      'Breast cysts',
      'Costochondritis',
      'Mitral valve prolapse',
      'Anxiety-related chest pain',
    ]
  },
  arms: {
    id: 'arms',
    label: 'Arms & Hands',
    symptoms: [
      { id: 'fa1', name: 'Joint pain' },
      { id: 'fa2', name: 'Numbness in fingers' },
      { id: 'fa3', name: 'Swollen hands' },
      { id: 'fa4', name: 'Wrist pain' },
      { id: 'fa5', name: 'Weakness' },
    ],
    diseases: [
      'Carpal tunnel syndrome',
      'Rheumatoid arthritis',
      'Lupus',
      'Fibromyalgia',
      'Raynaud\'s phenomenon',
      'De Quervain\'s tenosynovitis',
    ]
  },
  abdomen: {
    id: 'abdomen',
    label: 'Abdomen',
    symptoms: [
      { id: 'fab1', name: 'Bloating' },
      { id: 'fab2', name: 'Nausea' },
      { id: 'fab3', name: 'Abdominal cramps' },
      { id: 'fab4', name: 'Constipation' },
      { id: 'fab5', name: 'Acid reflux' },
    ],
    diseases: [
      'Irritable bowel syndrome (IBS)',
      'Gastritis',
      'GERD',
      'Gallstones',
      'Celiac disease',
      'Gastroparesis',
    ]
  },
  pelvis: {
    id: 'pelvis',
    label: 'Pelvis & Reproductive',
    symptoms: [
      { id: 'fp1', name: 'Pelvic pain' },
      { id: 'fp2', name: 'Painful periods (dysmenorrhea)' },
      { id: 'fp3', name: 'Heavy menstrual bleeding' },
      { id: 'fp4', name: 'Irregular periods' },
      { id: 'fp5', name: 'Painful intercourse' },
      { id: 'fp6', name: 'Vaginal discharge' },
      { id: 'fp7', name: 'Urinary frequency' },
    ],
    diseases: [
      'Endometriosis',
      'Polycystic ovary syndrome (PCOS)',
      'Ovarian cysts',
      'Uterine fibroids',
      'Pelvic inflammatory disease (PID)',
      'Vulvodynia',
      'Interstitial cystitis',
      'Adenomyosis',
    ]
  },
  legs: {
    id: 'legs',
    label: 'Legs & Feet',
    symptoms: [
      { id: 'fl1', name: 'Leg swelling' },
      { id: 'fl2', name: 'Varicose veins' },
      { id: 'fl3', name: 'Leg cramps' },
      { id: 'fl4', name: 'Restless legs' },
      { id: 'fl5', name: 'Foot pain' },
    ],
    diseases: [
      'Chronic venous insufficiency',
      'Deep vein thrombosis',
      'Restless leg syndrome',
      'Plantar fasciitis',
      'Peripheral edema',
      'Varicose veins',
    ]
  },
  // Back body part data for females
  back_head_neck: {
    id: 'back_head_neck',
    label: 'Head & Neck (Back)',
    symptoms: [
      { id: 'fbhn1', name: 'Neck stiffness' },
      { id: 'fbhn2', name: 'Tension headache' },
      { id: 'fbhn3', name: 'Cervical pain' },
      { id: 'fbhn4', name: 'Shoulder tension' },
      { id: 'fbhn5', name: 'Stress-related pain' },
    ],
    diseases: [
      'Cervical spondylosis',
      'Tension-type headache',
      'Fibromyalgia',
      'Cervical disc herniation',
      'Myofascial pain syndrome',
    ]
  },
  back_upper: {
    id: 'back_upper',
    label: 'Upper & Mid Back',
    symptoms: [
      { id: 'fbu1', name: 'Upper back pain' },
      { id: 'fbu2', name: 'Muscle tension' },
      { id: 'fbu3', name: 'Shoulder blade pain' },
      { id: 'fbu4', name: 'Posture-related pain' },
      { id: 'fbu5', name: 'Thoracic spine pain' },
    ],
    diseases: [
      'Thoracic outlet syndrome',
      'Osteoporosis',
      'Scoliosis',
      'Kyphosis',
      'Fibromyalgia',
      'Muscle strain',
    ]
  },
  back_arms: {
    id: 'back_arms',
    label: 'Arms (Back)',
    symptoms: [
      { id: 'fba1', name: 'Triceps pain' },
      { id: 'fba2', name: 'Arm weakness' },
      { id: 'fba3', name: 'Elbow pain' },
      { id: 'fba4', name: 'Arm numbness' },
      { id: 'fba5', name: 'Muscle tightness' },
    ],
    diseases: [
      'Tennis elbow',
      'Bursitis',
      'Nerve compression',
      'Fibromyalgia',
      'Lupus-related joint pain',
    ]
  },
  back_backside: {
    id: 'back_backside',
    label: 'Lower Back & Buttocks',
    symptoms: [
      { id: 'fbb1', name: 'Lower back pain' },
      { id: 'fbb2', name: 'Menstrual back pain' },
      { id: 'fbb3', name: 'Sciatica' },
      { id: 'fbb4', name: 'Sacroiliac joint pain' },
      { id: 'fbb5', name: 'Pelvic girdle pain' },
      { id: 'fbb6', name: 'Tailbone pain' },
    ],
    diseases: [
      'Lumbar disc herniation',
      'Endometriosis (back pain)',
      'Piriformis syndrome',
      'Sacroiliac joint dysfunction',
      'Degenerative disc disease',
      'Coccydynia',
      'Pregnancy-related back pain',
    ]
  },
  back_legs: {
    id: 'back_legs',
    label: 'Legs (Back)',
    symptoms: [
      { id: 'fbl1', name: 'Hamstring pain' },
      { id: 'fbl2', name: 'Calf pain' },
      { id: 'fbl3', name: 'Posterior knee pain' },
      { id: 'fbl4', name: 'Achilles tendon pain' },
      { id: 'fbl5', name: 'Leg heaviness' },
      { id: 'fbl6', name: 'Night cramps' },
    ],
    diseases: [
      'Hamstring strain',
      'Deep vein thrombosis',
      'Achilles tendinitis',
      'Chronic venous insufficiency',
      'Restless leg syndrome',
      'Varicose veins',
    ]
  }
};
