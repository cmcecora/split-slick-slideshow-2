import { BodyPartData } from './types';

// Front body part data
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
