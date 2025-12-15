import type { MedicalTest, TestType, BodyPartCategories, BodySystems, BodyPartImageMap } from '../types'

// Body parts that have actual images in /images folder
export const BODY_PARTS_WITH_IMAGES: string[] = [
  'abdomen', 'adrenal-gland', 'ankle', 'aorta', 'appendix', 'armbone', 'arteryvein', 'bladder', 'bloodvessel', 'bonesjoints', 'brain', 
  'chest', 'circulatory', 'clavicle', 'coccyx', 'colon', 'coronaryarteries', 'ear', 'elbow', 'esophagus', 
  'eye', 'face', 'femur', 'foot', 'forearm', 'gallbladder', 'hand', 'heart', 'head', 'intestines', 'kidneys', 'legbone', 'liver', 
  'lowerextremitymuscle', 'lungs', 'lymphaticsystem', 'lymphnode', 'mammary', 'mouthteethgums', 'neck', 'nose', 'pancreas', 'parathyroid', 'pelvis',
  'pituitary', 'prostate', 'ribs', 'shoulder', 'skin', 'skull', 'spine', 'spleen', 'sternum', 'stomach', 'thumb', 'thyroid', 'urethra', 'urinarytract', 'upperextremitymuscle', 'uterus', 'wrist'
]

// Body Systems - 11 physiological systems grouping
export const BODY_SYSTEMS: BodySystems = {
  "Cardiovascular": [
    "Heart", "Heart (coronary arteries)", "Heart conduction system",
    "Blood vessels", "Arteries", "Veins", "Aorta", "Systemic circulation"
  ],
  "Nervous": [
    "Brain", "Spine", "Cervical spine", "Thoracic spine", "Lumbar spine",
    "Pituitary gland", "Eyes",
    "Ears", "Retina"
  ],
  "Respiratory": [
    "Lungs", "Chest", "Nose", "Sinuses", "Esophagus"
  ],
  "Endocrine": [
    "Thyroid", "Parathyroid glands", "Pituitary gland",
    "Adrenal glands", "Pancreas"
  ],
  "Digestive": [
    "Esophagus", "Stomach", "Intestines", "Colon", "Liver", "Gallbladder",
    "Pancreas", "Appendix", "Rectum", "Abdomen"
  ],
  "Excretory": [
    "Kidneys", "Bladder", "Urinary tract", "Urethra"
  ],
  "Immune": [
    "Lymph nodes", "Lymphatic system", "Spleen"
  ],
  "Integumentary": [
    "Skin", "Face", "Breast"
  ],
  "Muscular": [
    "Shoulder", "Upper arm", "Upper extremity (arm)", "Elbow", "Forearm",
    "Wrist", "Hand", "Thumb", "Hip", "Femur (thigh)", "Thigh", "Knee",
    "Lower extremity (leg)", "Ankle", "Foot", "Neck", "Abdomen", "Chest"
  ],
  "Skeletal": [
    "Bones", "Joint", "Skull", "Spine", "Cervical spine", "Thoracic spine",
    "Lumbar spine", "Sacrum", "Coccyx", "Ribs", "Sternum",
    "Clavicle", "Teeth", "Shoulder", "Elbow",
    "Wrist", "Hand", "Hip", "Knee", "Ankle", "Foot"
  ],
  "Reproductive Female": [
    "Uterus", "Ovaries", "Cervix", "Vagina", "Breast", "Pelvis"
  ],
  "Reproductive Male": [
    "Prostate", "Pelvis"
  ]
}

// Body part categories for accordion grouping
export const BODY_PART_CATEGORIES: BodyPartCategories = {
  "Head & Brain": [
    "Brain", "Head", "Skull", "Eyes", "Ears",
    "Nose", "Sinuses", "Face", "Teeth", "Retina",
    "Pituitary gland"
  ],
  "Neck & Throat": [
    "Neck", "Thyroid", "Parathyroid glands", "Esophagus"
  ],
  "Chest & Heart": [
    "Heart", "Heart (coronary arteries)", "Heart conduction system",
    "Lungs", "Chest", "Ribs", "Sternum", "Breast", "Clavicle"
  ],
  "Abdomen": [
    "Abdomen", "Liver", "Gallbladder", "Pancreas", "Spleen", 
    "Stomach", "Kidneys", "Adrenal glands", "Intestines",
    "Colon", "Appendix"
  ],
  "Pelvis & Reproductive": [
    "Pelvis", "Bladder", "Prostate", "Uterus", "Ovaries", 
    "Cervix", "Rectum", "Vagina", "Urethra", "Urinary tract"
  ],
  "Spine & Back": [
    "Spine", "Cervical spine", "Thoracic spine", "Lumbar spine", 
    "Sacrum", "Coccyx"
  ],
  "Upper Extremities": [
    "Shoulder", "Upper arm", "Upper extremity (arm)", "Elbow", 
    "Forearm", "Wrist", "Hand", "Thumb"
  ],
  "Lower Extremities": [
    "Hip", "Femur (thigh)", "Thigh", "Knee", "Lower extremity (leg)",
    "Ankle", "Foot"
  ],
  "Vascular": [
    "Blood vessels", "Arteries", "Veins", "Aorta", "Systemic circulation"
  ],
  "Lymphatic & Immune": [
    "Lymph nodes", "Lymphatic system"
  ],
  "Skin & Soft Tissue": [
    "Skin", "Joint", "Bones"
  ],
  "Whole Body & General": [
    "Whole body", "Whole body (systemic)", "Whole body (metabolic)",
    "Unspecified / multiple possible", "Target organ (varies)"
  ]
}

// Direct mapping from normalized body part names to image file names
export const BODY_PART_IMAGE_MAP: BodyPartImageMap = {
  'adrenalglands': 'adrenal-gland',
  'orbits': 'eye',
  'orbitseyes': 'eye',
  'eyes': 'eye',
  'ears': 'ear',
  'bones': 'bonesjoints',
  'joint': 'bonesjoints',
  'lymphnodes': 'lymphnode',
  'brains': 'brain',
  'heartconductionsystem': 'circulatory',
  'heartcoronaryarteries': 'coronaryarteries',
  'parathyroidglands': 'parathyroid',
  'pituitarygland': 'pituitary',
  'cervicalspine': 'spine',
  'thoracicspine': 'spine',
  'lumbarspine': 'spine',
  'retina': 'eye',
  'arteries': 'arteryvein',
  'veins': 'arteryvein',
  'bloodvessels': 'bloodvessel',
  'sinuses': 'nose',
  'rectum': 'colon',
  'sacrum': 'pelvis',
  'hip': 'pelvis',
  'knee': 'bonesjoints',
  'thigh': 'legbone',
  'femurthigh': 'femur',
  'upperarm': 'armbone',
  'upperextremityarm': 'upperextremitymuscle',
  'lowerextremityleg': 'lowerextremitymuscle',
  'systemiccirculation': 'bloodvessel',
  'breast': 'mammary',
  'ovaries': 'uterus',
  'cervix': 'uterus',
  'vagina': 'uterus',
  'teeth': 'mouthteethgums',
  'wholebodysystemic': 'abdomen',
  'wholebodymetabolic': 'abdomen',
  'wholebody': 'abdomen'
}

// All medical tests from CSV
export const TESTS: MedicalTest[] = [
  { name: "AAA repair", bodyParts: ["Abdomen", "Aorta"], type: "other" },
  { name: "Accent laser", bodyParts: ["Skin", "Face"], type: "other" },
  { name: "Acid reflux surgery", bodyParts: ["Esophagus", "Stomach"], type: "other" },
  { name: "Acne laser therapy", bodyParts: ["Skin", "Face"], type: "other" },
  { name: "Acne surgery", bodyParts: ["Skin", "Face"], type: "other" },
  { name: "Adjuvant chemotherapy", bodyParts: ["Whole body (systemic)"], type: "other" },
  { name: "Adolescent colposcopy", bodyParts: ["Cervix"], type: "other" },
  { name: "Adrenal scan", bodyParts: ["Adrenal glands", "Kidneys"], type: "nuclear" },
  { name: "Air contrast enema", bodyParts: ["Colon", "Rectum"], type: "xray" },
  { name: "Angiogram", bodyParts: ["Blood vessels"], type: "angio" },
  { name: "Angiogram of abdominal aorta", bodyParts: ["Blood vessels", "Abdomen", "Aorta"], type: "angio" },
  { name: "Angiogram of aorta", bodyParts: ["Blood vessels", "Aorta"], type: "angio" },
  { name: "Angiogram of aortoiliac artery", bodyParts: ["Blood vessels", "Arteries"], type: "angio" },
  { name: "Angiogram of arm", bodyParts: ["Blood vessels"], type: "angio" },
  { name: "Angiogram of carotid", bodyParts: ["Blood vessels"], type: "angio" },
  { name: "Angiogram of carotid, vertebral and cerebral arteries", bodyParts: ["Blood vessels", "Brain"], type: "angio" },
  { name: "Angiogram of coronary arteries", bodyParts: ["Blood vessels", "Heart (coronary arteries)"], type: "angio" },
  { name: "Angiogram of leg", bodyParts: ["Blood vessels"], type: "angio" },
  { name: "Angiogram of pulmonary artery", bodyParts: ["Lungs", "Blood vessels", "Arteries"], type: "angio" },
  { name: "Angiogram of renal arteries", bodyParts: ["Blood vessels", "Kidneys"], type: "angio" },
  { name: "Angiography", bodyParts: ["Unspecified / multiple possible"], type: "angio" },
  { name: "Angioplasty", bodyParts: ["Unspecified / multiple possible"], type: "angio" },
  { name: "Ankle fracture surgery", bodyParts: ["Ankle"], type: "other" },
  { name: "Ankle MRI arthrogram", bodyParts: ["Ankle"], type: "mri" },
  { name: "Ankle MRI with contrast", bodyParts: ["Ankle"], type: "mri" },
  { name: "Aorta and bilateral iliofemoral runoff CTA", bodyParts: ["Aorta"], type: "ct" },
  { name: "Argon laser iridoplasty", bodyParts: ["Unspecified / multiple possible"], type: "other" },
  { name: "Arteriography", bodyParts: ["Arteries"], type: "angio" },
  { name: "Arthrodesis", bodyParts: ["Unspecified / multiple possible"], type: "other" },
  { name: "Auditory brainstem response test", bodyParts: ["Brain"], type: "other" },
  { name: "Balloon angioplasty", bodyParts: ["Unspecified / multiple possible"], type: "angio" },
  { name: "Barium enema", bodyParts: ["Colon", "Rectum"], type: "xray" },
  { name: "Barium swallow Xray", bodyParts: ["Esophagus", "Stomach"], type: "xray" },
  { name: "Bitewing radiograph", bodyParts: ["Teeth"], type: "xray" },
  { name: "Blood pressure", bodyParts: ["Systemic circulation"], type: "other" },
  { name: "Bone density scan", bodyParts: ["Bones"], type: "nuclear" },
  { name: "Bone scan", bodyParts: ["Bones"], type: "nuclear" },
  { name: "Bone scintigraphy", bodyParts: ["Bones"], type: "nuclear" },
  { name: "Cardiac CT Scan", bodyParts: ["Heart"], type: "ct" },
  { name: "Cardiac echo", bodyParts: ["Heart"], type: "ultrasound" },
  { name: "Cardiac electrophysiology", bodyParts: ["Heart conduction system", "Heart"], type: "other" },
  { name: "Cardiac function MRI", bodyParts: ["Heart"], type: "mri" },
  { name: "Cardiac morphology MRI with contrast", bodyParts: ["Heart"], type: "mri" },
  { name: "Cardiac morphology MRI without contrast", bodyParts: ["Heart"], type: "mri" },
  { name: "Cardiac MRI with contrast", bodyParts: ["Heart"], type: "mri" },
  { name: "Cardiac MRI without contrast", bodyParts: ["Heart"], type: "mri" },
  { name: "Cardiac velocity MRI flow map", bodyParts: ["Heart"], type: "mri" },
  { name: "Cardioversion", bodyParts: ["Heart"], type: "other" },
  { name: "Carotid artery ultrasound", bodyParts: ["Arteries", "Neck"], type: "ultrasound" },
  { name: "Carotid ultrasound exam", bodyParts: ["Arteries", "Neck"], type: "ultrasound" },
  { name: "Cerebral angiography", bodyParts: ["Brain"], type: "angio" },
  { name: "Chemical exfoliation for acne", bodyParts: ["Skin", "Face"], type: "other" },
  { name: "Cholangiogram", bodyParts: ["Blood vessels"], type: "xray" },
  { name: "Colonoscopy", bodyParts: ["Colon"], type: "other" },
  { name: "Colonoscopy by video capsule", bodyParts: ["Colon"], type: "other" },
  { name: "Computed tomography angiogram", bodyParts: ["Blood vessels"], type: "ct" },
  { name: "Coronal CT scan of sinus", bodyParts: ["Sinuses"], type: "ct" },
  { name: "Coronary angiogram", bodyParts: ["Blood vessels", "Heart (coronary arteries)"], type: "angio" },
  { name: "Coronary angioplasty", bodyParts: ["Heart (coronary arteries)"], type: "angio" },
  { name: "CT cisternogram", bodyParts: ["Brain", "Spine"], type: "ct" },
  { name: "CT guided abscess drainage", bodyParts: ["Abdomen"], type: "ct" },
  { name: "CT guided biopsy", bodyParts: ["Unspecified / multiple possible"], type: "ct" },
  { name: "CT guided biopsy of abdomen", bodyParts: ["Abdomen"], type: "ct" },
  { name: "CT guided biopsy of bone", bodyParts: ["Bones"], type: "ct" },
  { name: "CT guided biopsy of kidney", bodyParts: ["Kidneys"], type: "ct" },
  { name: "CT guided biopsy of lung or mediastinum", bodyParts: ["Lungs"], type: "ct" },
  { name: "CT guided biopsy of pancreas", bodyParts: ["Pancreas"], type: "ct" },
  { name: "CT guided biopsy of superficial lymph nodes", bodyParts: ["Lymph nodes"], type: "ct" },
  { name: "CT guided drainage of neck abscess", bodyParts: ["Neck"], type: "ct" },
  { name: "CT guided external biliary drainage", bodyParts: [], type: "ct" },
  { name: "CT heart scan", bodyParts: ["Heart"], type: "ct" },
  { name: "CT myelogram", bodyParts: ["Spine"], type: "ct" },
  { name: "CT of abdomen", bodyParts: ["Abdomen"], type: "ct" },
  { name: "CT of abdomen and pelvis with contrast", bodyParts: ["Abdomen", "Pelvis"], type: "ct" },
  { name: "CT of abdomen and pelvis without contrast", bodyParts: ["Abdomen", "Pelvis"], type: "ct" },
  { name: "CT of adrenals", bodyParts: ["Adrenal glands", "Kidneys"], type: "ct" },
  { name: "CT of ankle", bodyParts: ["Ankle"], type: "ct" },
  { name: "CT of brain", bodyParts: ["Brain"], type: "ct" },
  { name: "CT of brain with contrast", bodyParts: ["Brain"], type: "ct" },
  { name: "CT of cervical spine with contrast", bodyParts: ["Cervical spine", "Spine"], type: "ct" },
  { name: "CT of cervical spine without contrast", bodyParts: ["Cervical spine", "Spine"], type: "ct" },
  { name: "CT of chest", bodyParts: ["Chest"], type: "ct" },
  { name: "CT of chest and abdomen", bodyParts: ["Abdomen", "Chest"], type: "ct" },
  { name: "CT of chest with contrast", bodyParts: ["Chest"], type: "ct" },
  { name: "CT of chest without contrast", bodyParts: ["Chest"], type: "ct" },
  { name: "CT of chest, abdomen and pelvis", bodyParts: ["Abdomen", "Pelvis", "Chest"], type: "ct" },
  { name: "CT of femur", bodyParts: ["Femur (thigh)"], type: "ct" },
  { name: "CT of foot", bodyParts: ["Foot"], type: "ct" },
  { name: "CT of forearm", bodyParts: ["Forearm"], type: "ct" },
  { name: "CT of hand", bodyParts: ["Hand"], type: "ct" },
  { name: "CT of head", bodyParts: ["Head"], type: "ct" },
  { name: "CT of head and neck", bodyParts: ["Head", "Neck"], type: "ct" },
  { name: "CT of head with contrast", bodyParts: ["Head"], type: "ct" },
  { name: "CT of head without contrast", bodyParts: ["Head"], type: "ct" },
  { name: "CT of hip", bodyParts: ["Hip"], type: "ct" },
  { name: "CT of joint", bodyParts: ["Joint"], type: "ct" },
  { name: "CT of lower extremity with contrast", bodyParts: ["Lower extremity (leg)"], type: "ct" },
  { name: "CT of lower extremity without contrast", bodyParts: ["Lower extremity (leg)"], type: "ct" },
  { name: "CT of lumbar spine with contrast", bodyParts: ["Lumbar spine", "Spine"], type: "ct" },
  { name: "CT of lumbar spine without contrast", bodyParts: ["Lumbar spine", "Spine"], type: "ct" },
  { name: "CT of lumbosacral spine", bodyParts: ["Lumbar spine", "Sacrum", "Spine"], type: "ct" },
  { name: "CT of neck", bodyParts: ["Neck"], type: "ct" },
  { name: "CT of neck with contrast", bodyParts: ["Neck"], type: "ct" },
  { name: "CT of neck without contrast", bodyParts: ["Neck"], type: "ct" },
  { name: "CT of orbits", bodyParts: ["Orbits (eyes)"], type: "ct" },
  { name: "CT of pelvis", bodyParts: ["Pelvis"], type: "ct" },
  { name: "CT of pelvis with contrast", bodyParts: ["Pelvis"], type: "ct" },
  { name: "CT of pelvis without contrast", bodyParts: ["Pelvis"], type: "ct" },
  { name: "CT of pituitary", bodyParts: ["Pituitary gland"], type: "ct" },
  { name: "CT of shoulder", bodyParts: ["Shoulder"], type: "ct" },
  { name: "CT of sinus", bodyParts: ["Sinuses"], type: "ct" },
  { name: "CT of sinus with contrast", bodyParts: ["Sinuses"], type: "ct" },
  { name: "CT of sinus without contrast", bodyParts: ["Sinuses"], type: "ct" },
  { name: "CT of spine", bodyParts: ["Spine"], type: "ct" },
  { name: "CT of thoracic spine with contrast", bodyParts: ["Thoracic spine", "Spine"], type: "ct" },
  { name: "CT of thoracic spine without contrast", bodyParts: ["Thoracic spine", "Spine"], type: "ct" },
  { name: "CT of thumb", bodyParts: ["Thumb"], type: "ct" },
  { name: "CT of upper arm", bodyParts: ["Upper arm"], type: "ct" },
  { name: "CT of upper extremity with contrast", bodyParts: ["Upper extremity (arm)"], type: "ct" },
  { name: "CT of upper extremity without contrast", bodyParts: ["Upper extremity (arm)"], type: "ct" },
  { name: "CT of whole body with contrast", bodyParts: ["Whole body"], type: "ct" },
  { name: "CT of wrist", bodyParts: ["Wrist"], type: "ct" },
  { name: "CT urogram", bodyParts: ["Urinary tract"], type: "ct" },
  { name: "CT urogram with contrast", bodyParts: ["Urinary tract"], type: "ct" },
  { name: "CTA of abdomen", bodyParts: ["Abdomen"], type: "ct" },
  { name: "CTA of abdomen and pelvis", bodyParts: ["Abdomen", "Pelvis"], type: "ct" },
  { name: "CTA of brain", bodyParts: ["Brain"], type: "ct" },
  { name: "CTA of chest", bodyParts: ["Chest"], type: "ct" },
  { name: "CTA of chest and abdomen", bodyParts: ["Abdomen", "Chest"], type: "ct" },
  { name: "CTA of coronary artery", bodyParts: ["Heart (coronary arteries)", "Arteries"], type: "ct" },
  { name: "CTA of head", bodyParts: ["Head"], type: "ct" },
  { name: "CTA of kidney", bodyParts: ["Kidneys"], type: "ct" },
  { name: "CTA of lower extremity", bodyParts: ["Lower extremity (leg)"], type: "ct" },
  { name: "CTA of neck", bodyParts: ["Neck"], type: "ct" },
  { name: "CTA of pelvis", bodyParts: ["Pelvis"], type: "ct" },
  { name: "CTA of upper extremity", bodyParts: ["Upper extremity (arm)"], type: "ct" },
  { name: "Deep brain stimulation", bodyParts: ["Brain"], type: "other" },
  { name: "Dental Xrays", bodyParts: ["Teeth"], type: "xray" },
  { name: "Diagnostic procedure eye", bodyParts: ["Eyes"], type: "other" },
  { name: "Diagnostic procedure GI liver", bodyParts: ["Liver"], type: "other" },
  { name: "Diagnostic procedure heart", bodyParts: ["Heart"], type: "other" },
  { name: "Diagnostic procedure kidney", bodyParts: ["Kidneys"], type: "other" },
  { name: "Diagnostic procedure lung", bodyParts: ["Lungs"], type: "other" },
  { name: "Diagnostic procedure spine", bodyParts: ["Spine"], type: "other" },
  { name: "Diagnostic procedure thyroid", bodyParts: ["Thyroid"], type: "other" },
  { name: "Digital mammogram", bodyParts: ["Breast"], type: "xray" },
  { name: "Doppler ultrasound", bodyParts: ["Blood vessels"], type: "ultrasound" },
  { name: "Doppler ultrasound of cerebral artery", bodyParts: ["Brain", "Arteries"], type: "ultrasound" },
  { name: "Doppler ultrasound of newborn head", bodyParts: ["Head"], type: "ultrasound" },
  { name: "Doppler ultrasound of umbilical artery", bodyParts: ["Arteries"], type: "ultrasound" },
  { name: "Echocardiogram", bodyParts: ["Heart"], type: "ultrasound" },
  { name: "Echocardiogram of fetus", bodyParts: ["Heart"], type: "ultrasound" },
  { name: "Elbow MRI arthrogram", bodyParts: ["Elbow"], type: "mri" },
  { name: "Electrophysiology study", bodyParts: ["Heart conduction system"], type: "other" },
  { name: "Eye ultrasound", bodyParts: ["Eyes"], type: "ultrasound" },
  { name: "Fluorescein angiogram", bodyParts: ["Blood vessels"], type: "angio" },
  { name: "Fluorescein angiogram of retina", bodyParts: ["Blood vessels", "Retina"], type: "angio" },
  { name: "Fluorodeoxyglucose PET scan", bodyParts: ["Whole body (metabolic)"], type: "pet" },
  { name: "Functional MRI", bodyParts: ["Brain"], type: "mri" },
  { name: "Gallbladder radionuclide scan", bodyParts: ["Gallbladder", "Bladder"], type: "nuclear" },
  { name: "Gallbladder Xray", bodyParts: ["Gallbladder", "Bladder"], type: "xray" },
  { name: "Heart angiogram", bodyParts: ["Blood vessels", "Heart"], type: "angio" },
  { name: "High resolution CT of brain", bodyParts: ["Brain"], type: "ct" },
  { name: "High resolution CT of chest", bodyParts: ["Chest"], type: "ct" },
  { name: "Hip MRI arthrogram", bodyParts: ["Hip"], type: "mri" },
  { name: "Intrauterine insemination", bodyParts: ["Uterus"], type: "other" },
  { name: "Kidney gallium scan", bodyParts: ["Kidneys"], type: "nuclear" },
  { name: "Kidney scan", bodyParts: ["Kidneys"], type: "nuclear" },
  { name: "Knee MRI arthrogram", bodyParts: ["Knee"], type: "mri" },
  { name: "Laser treatment of leg veins", bodyParts: ["Veins"], type: "other" },
  { name: "Lung gallium scan", bodyParts: ["Lungs"], type: "nuclear" },
  { name: "Lung screening CT", bodyParts: ["Lungs"], type: "ct" },
  { name: "Lung ventilation perfusion scan", bodyParts: ["Lungs"], type: "nuclear" },
  { name: "Lymphangiogram", bodyParts: ["Blood vessels", "Lymphatic system"], type: "angio" },
  { name: "Lymphoscintigraphy", bodyParts: ["Lymphatic system"], type: "nuclear" },
  { name: "Mammogram", bodyParts: ["Breast"], type: "xray" },
  { name: "Maxillofacial CT", bodyParts: ["Face"], type: "ct" },
  { name: "Mesenteric arteriography", bodyParts: ["Arteries"], type: "angio" },
  { name: "MRA of abdomen", bodyParts: ["Abdomen"], type: "mri" },
  { name: "MRA of brain", bodyParts: ["Brain"], type: "mri" },
  { name: "MRA of brain with contrast", bodyParts: ["Brain"], type: "mri" },
  { name: "MRA of brain without contrast", bodyParts: ["Brain"], type: "mri" },
  { name: "MRA of carotid and vertebral artery", bodyParts: ["Arteries", "Neck"], type: "mri" },
  { name: "MRA of cervical spine", bodyParts: ["Cervical spine", "Spine"], type: "mri" },
  { name: "MRA of chest", bodyParts: ["Chest"], type: "mri" },
  { name: "MRA of kidney", bodyParts: ["Kidneys"], type: "mri" },
  { name: "MRA of liver", bodyParts: ["Liver"], type: "mri" },
  { name: "MRA of lower extremity", bodyParts: ["Lower extremity (leg)"], type: "mri" },
  { name: "MRA of lumbar spine", bodyParts: ["Lumbar spine", "Spine"], type: "mri" },
  { name: "MRA of pelvis", bodyParts: ["Pelvis"], type: "mri" },
  { name: "MRA of thoracic spine", bodyParts: ["Thoracic spine", "Spine"], type: "mri" },
  { name: "MRA of upper extremity", bodyParts: ["Upper extremity (arm)"], type: "mri" },
  { name: "MRI and MRA of abdomen", bodyParts: ["Abdomen"], type: "mri" },
  { name: "MRI and MRA of brain", bodyParts: ["Brain"], type: "mri" },
  { name: "MRI and MRA of chest", bodyParts: ["Chest"], type: "mri" },
  { name: "MRI and MRA of pelvis", bodyParts: ["Pelvis"], type: "mri" },
  { name: "MRI arthrogram of wrist", bodyParts: ["Wrist"], type: "mri" },
  { name: "MRI guided breast biopsy", bodyParts: ["Breast"], type: "mri" },
  { name: "MRI of abdomen", bodyParts: ["Abdomen"], type: "mri" },
  { name: "MRI of abdomen and pelvis", bodyParts: ["Abdomen", "Pelvis"], type: "mri" },
  { name: "MRI of adrenals", bodyParts: ["Adrenal glands", "Kidneys"], type: "mri" },
  { name: "MRI of ankle", bodyParts: ["Ankle"], type: "mri" },
  { name: "MRI of bone marrow supply", bodyParts: ["Bones"], type: "mri" },
  { name: "MRI of brain", bodyParts: ["Brain"], type: "mri" },
  { name: "MRI of brain with contrast", bodyParts: ["Brain"], type: "mri" },
  { name: "MRI of brain without contrast", bodyParts: ["Brain"], type: "mri" },
  { name: "MRI of brain and orbits", bodyParts: ["Orbits (eyes)", "Brain"], type: "mri" },
  { name: "MRI of brain and pituitary", bodyParts: ["Pituitary gland", "Brain"], type: "mri" },
  { name: "MRI of brain and spinal cord", bodyParts: ["Brain", "Spine"], type: "mri" },
  { name: "MRI of breast", bodyParts: ["Breast"], type: "mri" },
  { name: "MRI of breast with contrast", bodyParts: ["Breast"], type: "mri" },
  { name: "MRI of breast without contrast", bodyParts: ["Breast"], type: "mri" },
  { name: "MRI of cervical spine", bodyParts: ["Cervical spine", "Spine"], type: "mri" },
  { name: "MRI of chest", bodyParts: ["Chest"], type: "mri" },
  { name: "MRI of elbow", bodyParts: ["Elbow"], type: "mri" },
  { name: "MRI of entire spine", bodyParts: ["Spine"], type: "mri" },
  { name: "MRI of femur", bodyParts: ["Femur (thigh)"], type: "mri" },
  { name: "MRI of foot", bodyParts: ["Foot"], type: "mri" },
  { name: "MRI of forearm", bodyParts: ["Forearm"], type: "mri" },
  { name: "MRI of hand", bodyParts: ["Hand"], type: "mri" },
  { name: "MRI of head", bodyParts: ["Head"], type: "mri" },
  { name: "MRI of head and neck", bodyParts: ["Head", "Neck"], type: "mri" },
  { name: "MRI of heart", bodyParts: ["Heart"], type: "mri" },
  { name: "MRI of hip", bodyParts: ["Hip"], type: "mri" },
  { name: "MRI of joint", bodyParts: ["Joint"], type: "mri" },
  { name: "MRI of knee", bodyParts: ["Knee"], type: "mri" },
  { name: "MRI of lower extremity", bodyParts: ["Lower extremity (leg)"], type: "mri" },
  { name: "MRI of lumbar spine", bodyParts: ["Lumbar spine", "Spine"], type: "mri" },
  { name: "MRI of lumbosacral spine", bodyParts: ["Lumbar spine", "Sacrum", "Spine"], type: "mri" },
  { name: "MRI of neck", bodyParts: ["Neck"], type: "mri" },
  { name: "MRI of orbits", bodyParts: ["Orbits (eyes)"], type: "mri" },
  { name: "MRI of pelvis", bodyParts: ["Pelvis"], type: "mri" },
  { name: "MRI of pituitary", bodyParts: ["Pituitary gland"], type: "mri" },
  { name: "MRI of prostate", bodyParts: ["Prostate"], type: "mri" },
  { name: "MRI of sacroiliac spine", bodyParts: ["Joint", "Spine"], type: "mri" },
  { name: "MRI of shoulder", bodyParts: ["Shoulder"], type: "mri" },
  { name: "MRI of sinus", bodyParts: ["Sinuses"], type: "mri" },
  { name: "MRI of spine", bodyParts: ["Spine"], type: "mri" },
  { name: "MRI of thoracic spine", bodyParts: ["Thoracic spine", "Spine"], type: "mri" },
  { name: "MRI of thumb", bodyParts: ["Thumb"], type: "mri" },
  { name: "MRI of TMJ", bodyParts: ["Face"], type: "mri" },
  { name: "MRI of upper arm", bodyParts: ["Upper arm"], type: "mri" },
  { name: "MRI of upper extremity", bodyParts: ["Upper extremity (arm)"], type: "mri" },
  { name: "MRI of whole body", bodyParts: ["Whole body"], type: "mri" },
  { name: "MRI of wrist", bodyParts: ["Wrist"], type: "mri" },
  { name: "MRI urogram", bodyParts: ["Urinary tract"], type: "mri" },
  { name: "Myelogram of cervical spine", bodyParts: ["Cervical spine", "Spine"], type: "xray" },
  { name: "Myelogram of entire spine", bodyParts: ["Spine"], type: "xray" },
  { name: "Myelogram of thoracic spine", bodyParts: ["Thoracic spine", "Spine"], type: "xray" },
  { name: "Nuclear bladder scan", bodyParts: ["Bladder"], type: "nuclear" },
  { name: "Orbit CT scan", bodyParts: ["Orbits (eyes)"], type: "ct" },
  { name: "Ovary removal", bodyParts: ["Ovaries"], type: "other" },
  { name: "Pancreas CTA", bodyParts: ["Pancreas"], type: "ct" },
  { name: "Parathyroid scan", bodyParts: ["Parathyroid glands", "Thyroid"], type: "nuclear" },
  { name: "Pelvic ultrasound", bodyParts: ["Pelvis"], type: "ultrasound" },
  { name: "Pelvic Xray", bodyParts: ["Pelvis"], type: "xray" },
  { name: "Percutaneous transhepatic cholangiogram", bodyParts: ["Blood vessels", "Liver"], type: "xray" },
  { name: "Percutaneous transluminal coronary angioplasty", bodyParts: ["Heart (coronary arteries)"], type: "angio" },
  { name: "PET brain for metabolic evaluation", bodyParts: ["Brain", "Whole body (metabolic)"], type: "pet" },
  { name: "PET brain for perfusion evaluation", bodyParts: ["Brain", "Whole body (metabolic)"], type: "pet" },
  { name: "PET breast cancer diagnosis", bodyParts: ["Breast", "Whole body (metabolic)"], type: "pet" },
  { name: "PET cervical cancer diagnosis", bodyParts: ["Cervix", "Whole body (metabolic)"], type: "pet" },
  { name: "PET colorectal cancer staging", bodyParts: ["Colon", "Rectum", "Whole body (metabolic)"], type: "pet" },
  { name: "PET CT brain metabolic evaluation", bodyParts: ["Whole body (metabolic)", "Brain"], type: "pet" },
  { name: "PET CT breast cancer staging", bodyParts: ["Breast", "Whole body (metabolic)"], type: "pet" },
  { name: "PET CT colorectal cancer diagnosis", bodyParts: ["Colon", "Rectum", "Whole body (metabolic)"], type: "pet" },
  { name: "PET CT esophageal cancer diagnosis", bodyParts: ["Esophagus", "Whole body (metabolic)"], type: "pet" },
  { name: "PET CT head and neck cancer diagnosis", bodyParts: ["Head", "Neck", "Whole body (metabolic)"], type: "pet" },
  { name: "PET CT lung cancer diagnosis", bodyParts: ["Whole body (metabolic)", "Lungs"], type: "pet" },
  { name: "PET CT lymphoma diagnosis", bodyParts: ["Lymphatic system", "Whole body (metabolic)"], type: "pet" },
  { name: "PET CT thyroid cancer restaging", bodyParts: ["Thyroid", "Whole body (metabolic)"], type: "pet" },
  { name: "PET esophageal cancer diagnosis", bodyParts: ["Esophagus", "Whole body (metabolic)"], type: "pet" },
  { name: "PET head and neck cancer diagnosis", bodyParts: ["Head", "Neck", "Whole body (metabolic)"], type: "pet" },
  { name: "PET lung cancer diagnosis", bodyParts: ["Lungs", "Whole body (metabolic)"], type: "pet" },
  { name: "PET lymphoma diagnosis", bodyParts: ["Lymphatic system", "Whole body (metabolic)"], type: "pet" },
  { name: "PET ovarian cancer restaging", bodyParts: ["Ovaries", "Whole body (metabolic)"], type: "pet" },
  { name: "PET scan", bodyParts: ["Whole body (metabolic)"], type: "pet" },
  { name: "PET thyroid cancer diagnosis", bodyParts: ["Thyroid", "Whole body (metabolic)"], type: "pet" },
  { name: "Pulmonary function test", bodyParts: ["Lungs"], type: "other" },
  { name: "Pulmonary perfusion scan", bodyParts: ["Lungs"], type: "nuclear" },
  { name: "Pulmonary ventilation scan", bodyParts: ["Lungs"], type: "nuclear" },
  { name: "Renal angiogram", bodyParts: ["Blood vessels", "Kidneys"], type: "angio" },
  { name: "Renal artery angioplasty", bodyParts: ["Arteries", "Kidneys"], type: "angio" },
  { name: "Renal perfusion scan", bodyParts: ["Kidneys"], type: "nuclear" },
  { name: "Renal scan", bodyParts: ["Kidneys"], type: "nuclear" },
  { name: "Renal venogram", bodyParts: ["Veins", "Kidneys"], type: "angio" },
  { name: "Retina exam", bodyParts: ["Retina"], type: "other" },
  { name: "Sacroiliac MRI arthrogram", bodyParts: ["Joint"], type: "mri" },
  { name: "Sestamibi parathyroid scan", bodyParts: ["Parathyroid glands", "Thyroid"], type: "nuclear" },
  { name: "Shockwave lithotripsy for kidney stones", bodyParts: ["Kidneys"], type: "other" },
  { name: "Shoulder CT arthrogram", bodyParts: ["Shoulder"], type: "ct" },
  { name: "Shoulder MRI arthrogram", bodyParts: ["Shoulder"], type: "mri" },
  { name: "Shoulder replacement", bodyParts: ["Shoulder"], type: "other" },
  { name: "Skull base MRI", bodyParts: ["Skull"], type: "mri" },
  { name: "Thigh MRI", bodyParts: ["Thigh"], type: "mri" },
  { name: "Thyroid nuclear scan", bodyParts: ["Thyroid"], type: "nuclear" },
  { name: "Thyroid scan", bodyParts: ["Thyroid"], type: "nuclear" },
  { name: "TMJ MRI arthrogram", bodyParts: ["Face"], type: "mri" },
  { name: "Transabdominal ultrasound", bodyParts: ["Abdomen"], type: "ultrasound" },
  { name: "Transesophageal echocardiogram", bodyParts: ["Heart", "Esophagus"], type: "ultrasound" },
  { name: "Transrectal ultrasound", bodyParts: ["Rectum"], type: "ultrasound" },
  { name: "Transrectal ultrasound with prostate biopsy", bodyParts: ["Prostate", "Rectum"], type: "ultrasound" },
  { name: "Transthoracic echocardiogram", bodyParts: ["Heart"], type: "ultrasound" },
  { name: "Transvaginal ultrasound", bodyParts: ["Vagina"], type: "ultrasound" },
  { name: "Transvaginal ultrasound of pelvis", bodyParts: ["Vagina", "Pelvis"], type: "ultrasound" },
  { name: "Ultrasound guided arthrocentesis of joint", bodyParts: ["Joint"], type: "ultrasound" },
  { name: "Ultrasound guided aspiration of breast cyst", bodyParts: ["Breast"], type: "ultrasound" },
  { name: "Ultrasound guided aspiration of renal cyst", bodyParts: ["Kidneys"], type: "ultrasound" },
  { name: "Ultrasound guided biopsy of kidney", bodyParts: ["Kidneys"], type: "ultrasound" },
  { name: "Ultrasound guided biopsy of lung", bodyParts: ["Lungs"], type: "ultrasound" },
  { name: "Ultrasound guided biopsy of rectal wall", bodyParts: ["Rectum"], type: "ultrasound" },
  { name: "Ultrasound guided biopsy of thyroid", bodyParts: ["Thyroid"], type: "ultrasound" },
  { name: "Ultrasound guided needle biopsy of breast", bodyParts: ["Breast"], type: "ultrasound" },
  { name: "Ultrasound guided percutaneous biopsy of pancreas", bodyParts: ["Pancreas"], type: "ultrasound" },
  { name: "Ultrasound guided thoracentesis", bodyParts: ["Chest"], type: "ultrasound" },
  { name: "Ultrasound of abdomen", bodyParts: ["Abdomen"], type: "ultrasound" },
  { name: "Ultrasound of abdomen and pelvis", bodyParts: ["Abdomen", "Pelvis"], type: "ultrasound" },
  { name: "Ultrasound of adrenal", bodyParts: ["Adrenal glands", "Kidneys"], type: "ultrasound" },
  { name: "Ultrasound of aorta", bodyParts: ["Aorta"], type: "ultrasound" },
  { name: "Ultrasound of bladder", bodyParts: ["Bladder"], type: "ultrasound" },
  { name: "Ultrasound of bladder and kidneys", bodyParts: ["Bladder", "Kidneys"], type: "ultrasound" },
  { name: "Ultrasound of bone mineral density", bodyParts: ["Bones"], type: "ultrasound" },
  { name: "Ultrasound of breast", bodyParts: ["Breast"], type: "ultrasound" },
  { name: "Ultrasound of chest", bodyParts: ["Chest"], type: "ultrasound" },
  { name: "Ultrasound of coronary arteries", bodyParts: ["Heart (coronary arteries)"], type: "ultrasound" },
  { name: "Ultrasound of extremity veins", bodyParts: ["Veins"], type: "ultrasound" },
  { name: "Ultrasound of hip", bodyParts: ["Hip"], type: "ultrasound" },
  { name: "Ultrasound of joint", bodyParts: ["Joint"], type: "ultrasound" },
  { name: "Ultrasound of kidneys", bodyParts: ["Kidneys"], type: "ultrasound" },
  { name: "Ultrasound of liver or gallbladder", bodyParts: ["Gallbladder", "Bladder", "Liver"], type: "ultrasound" },
  { name: "Ultrasound of lower extremity veins", bodyParts: ["Lower extremity (leg)", "Veins"], type: "ultrasound" },
  { name: "Ultrasound of neck soft tissue", bodyParts: ["Neck"], type: "ultrasound" },
  { name: "Ultrasound of pancreas", bodyParts: ["Pancreas"], type: "ultrasound" },
  { name: "Ultrasound of parathyroid", bodyParts: ["Parathyroid glands", "Thyroid"], type: "ultrasound" },
  { name: "Ultrasound of pelvis", bodyParts: ["Pelvis"], type: "ultrasound" },
  { name: "Ultrasound of prostate", bodyParts: ["Prostate"], type: "ultrasound" },
  { name: "Ultrasound of rectum", bodyParts: ["Rectum"], type: "ultrasound" },
  { name: "Ultrasound of shoulder", bodyParts: ["Shoulder"], type: "ultrasound" },
  { name: "Ultrasound of spine", bodyParts: ["Spine"], type: "ultrasound" },
  { name: "Ultrasound of spleen", bodyParts: ["Spleen"], type: "ultrasound" },
  { name: "Ultrasound of thyroid", bodyParts: ["Thyroid"], type: "ultrasound" },
  { name: "Ultrasound of upper extremity veins", bodyParts: ["Upper extremity (arm)", "Veins"], type: "ultrasound" },
  { name: "Vascular ultrasound", bodyParts: ["Blood vessels"], type: "ultrasound" },
  { name: "Venogram of leg", bodyParts: ["Veins"], type: "angio" },
  { name: "Virtual colonoscopy", bodyParts: ["Colon"], type: "ct" },
  { name: "Xray of abdomen", bodyParts: ["Abdomen"], type: "xray" },
  { name: "Xray of ankle", bodyParts: ["Ankle"], type: "xray" },
  { name: "Xray of bladder", bodyParts: ["Bladder", "Urethra"], type: "xray" },
  { name: "Xray of chest", bodyParts: ["Chest"], type: "xray" },
  { name: "Xray of clavicle", bodyParts: ["Clavicle"], type: "xray" },
  { name: "Xray of coccyx", bodyParts: ["Coccyx"], type: "xray" },
  { name: "Xray of elbow", bodyParts: ["Elbow"], type: "xray" },
  { name: "Xray of femur", bodyParts: ["Femur (thigh)"], type: "xray" },
  { name: "Xray of foot", bodyParts: ["Foot"], type: "xray" },
  { name: "Xray of forearm", bodyParts: ["Forearm"], type: "xray" },
  { name: "Xray of hand", bodyParts: ["Hand"], type: "xray" },
  { name: "Xray of head", bodyParts: ["Head"], type: "xray" },
  { name: "Xray of hip", bodyParts: ["Hip"], type: "xray" },
  { name: "Xray of joint", bodyParts: ["Joint"], type: "xray" },
  { name: "Xray of knee", bodyParts: ["Knee"], type: "xray" },
  { name: "Xray of lower spine", bodyParts: ["Spine"], type: "xray" },
  { name: "Xray of lumbosacral spine", bodyParts: ["Lumbar spine", "Sacrum", "Spine"], type: "xray" },
  { name: "Xray of neck", bodyParts: ["Neck"], type: "xray" },
  { name: "Xray of nose", bodyParts: ["Nose"], type: "xray" },
  { name: "Xray of orbits", bodyParts: ["Orbits (eyes)"], type: "xray" },
  { name: "Xray of pelvis", bodyParts: ["Pelvis"], type: "xray" },
  { name: "Xray of ribs", bodyParts: ["Ribs"], type: "xray" },
  { name: "Xray of shoulder", bodyParts: ["Shoulder"], type: "xray" },
  { name: "Xray of sinuses", bodyParts: ["Sinuses"], type: "xray" },
  { name: "Xray of skull", bodyParts: ["Skull"], type: "xray" },
  { name: "Xray of spine", bodyParts: ["Spine"], type: "xray" },
  { name: "Xray of sternum", bodyParts: ["Sternum"], type: "xray" },
  { name: "Xray of thoracic spine", bodyParts: ["Thoracic spine", "Spine"], type: "xray" },
  { name: "Xray of thumb", bodyParts: ["Thumb"], type: "xray" },
  { name: "Xray of upper arm", bodyParts: ["Upper arm"], type: "xray" },
  { name: "Xray of whole body", bodyParts: ["Whole body"], type: "xray" },
  { name: "Xray of wrist", bodyParts: ["Wrist"], type: "xray" },
  { name: "Exercise stress test", bodyParts: ["Heart"], type: "other" },
  { name: "Stress test", bodyParts: ["Heart"], type: "other" },
  { name: "Stress echocardiography", bodyParts: ["Heart"], type: "ultrasound" },
  { name: "Holter monitor", bodyParts: ["Heart"], type: "other" },
  { name: "Sleep study", bodyParts: ["Brain"], type: "other" },
  { name: "EEG", bodyParts: ["Brain"], type: "other" },
  { name: "EKG/ECG", bodyParts: ["Heart"], type: "other" },
  { name: "Audiogram", bodyParts: ["Ears"], type: "other" },
  { name: "Slit-lamp exam", bodyParts: ["Eyes"], type: "other" }
]

// Get all unique body parts
export const ALL_BODY_PARTS: string[] = [...new Set(
  Object.values(BODY_PART_CATEGORIES).flat()
)].sort()

// Helper function to determine test type from name
export function getTestType(testName: string): TestType {
  const name = testName.toLowerCase()
  if (name.includes('ct ') || name.includes('ct scan') || name.startsWith('ct') || name.includes('cta')) return 'ct'
  if (name.includes('mri') || name.includes('mra') || name.includes('magnetic resonance')) return 'mri'
  if (name.includes('ultrasound') || name.includes('sonogram') || name.includes('echo')) return 'ultrasound'
  if (name.includes('xray') || name.includes('x-ray') || name.includes('radiograph')) return 'xray'
  if (name.includes('pet')) return 'pet'
  if (name.includes('nuclear') || name.includes('scan') || name.includes('scintigraphy') || name.includes('gallium')) return 'nuclear'
  if (name.includes('angiogram') || name.includes('angiography') || name.includes('angioplasty')) return 'angio'
  return 'other'
}

// Map body part to its image file (if exists)
export function getBodyPartImage(bodyPart: string): string | null {
  const normalized = bodyPart.toLowerCase().replace(/[^a-z0-9]/g, '')
  
  const mappedName = BODY_PART_IMAGE_MAP[normalized]
  if (mappedName && BODY_PARTS_WITH_IMAGES.includes(mappedName)) {
    return `/images/${mappedName}.png`
  }
  
  if (BODY_PARTS_WITH_IMAGES.includes(normalized)) {
    return `/images/${normalized}.png`
  }
  
  return null
}

// Filter tests by body part
export function getTestsForBodyPart(bodyPart: string): MedicalTest[] {
  return TESTS.filter(test => 
    test.bodyParts.some(bp => 
      bp.toLowerCase().includes(bodyPart.toLowerCase()) ||
      bodyPart.toLowerCase().includes(bp.toLowerCase())
    )
  )
}

// Get category for a body part
export function getCategoryForBodyPart(bodyPart: string): string {
  for (const [category, parts] of Object.entries(BODY_PART_CATEGORIES)) {
    if (parts.some(p => p.toLowerCase() === bodyPart.toLowerCase())) {
      return category
    }
  }
  return "Whole Body & General"
}

// Get system for a body part
export function getSystemForBodyPart(bodyPart: string): string | null {
  for (const [system, parts] of Object.entries(BODY_SYSTEMS)) {
    if (parts.some(p => p.toLowerCase() === bodyPart.toLowerCase())) {
      return system
    }
  }
  return null
}

// Format body part name for display
export function formatBodyPartName(name: string): string {
  if (name === 'Heart (coronary arteries)') {
    return 'Coronary Arteries'
  }
  return name
    .replace(/\(.*?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Procedure images - all 714 image filenames from procedure_images folder
export const PROCEDURE_IMAGE_FILES: string[] = [
  "AAA repair", "Accent laser", "Acid reflux surgery", "Acne laser therapy", "Acne surgery",
  "Adjuvant chemotherapy", "Adrenal scan", "Air contrast enema", "Angiogram of abdominal aorta",
  "Angiogram of aorta", "Angiogram of aortoiliac artery", "Angiogram of arm",
  "Angiogram of carotid, vertebral and cerebral arteries", "Angiogram of carotid",
  "Angiogram of coronary arteries", "Angiogram of leg", "Angiogram of pulmonary artery",
  "Angiogram of renal arteries", "Angiogram", "Angiography", "Angioplasty",
  "Ankle MRI arthrogram", "Ankle MRI with contrast", "Ankle fracture surgery",
  "Aorta and bilateral iliofemoral runoff CTA", "Argon laser iridoplasty", "Arteriography",
  "Arthrodesis", "BVAD", "Balloon angioplasty", "Barium enema", "Birth defect correction",
  "Bitewing radiograph", "Blood pressure", "Bone scintigraphy", "CT cisternogram",
  "CT cystogram with and without contrast", "CT cystogram with contrast", "CT cystogram without contrast",
  "CT fistulogram or sinogram", "CT guided abscess drainage", "CT guided biopsy of abdomen",
  "CT guided biopsy of bone", "CT guided biopsy of kidney", "CT guided biopsy of lung or mediastinum",
  "CT guided biopsy of muscle or soft tissue", "CT guided biopsy of pancreas",
  "CT guided biopsy of pleura", "CT guided biopsy of superficial lymph nodes", "CT guided biopsy",
  "CT guided drainage of appendiceal abscess", "CT guided drainage of hematoma or fluid collection",
  "CT guided drainage of neck abscess or hematoma", "CT guided drainage of pancreatic pseudocyst",
  "CT guided drainage of retroperitoneal abscess", "CT guided drainage of subphrenic abscess",
  "CT guided drainage", "CT guided external biliary drainage", "CT guided fine needle aspiration",
  "CT guided hepatic drainage", "CT guided internal biliary drainage", "CT guided peritoneal drainage",
  "CT guided thoracentesis", "CT guided vertebroplasty", "CT heart scan", "CT myelogram",
  "CT of abdomen and pelvis with contast", "CT of abdomen and pelvis without contrast",
  "CT of abdomen", "CT of adrenals", "CT of ankle", "CT of brain with contrast", "CT of brain",
  "CT of cervical spine with contrast", "CT of cervical spine without contrast",
  "CT of chest and abdomen with contrast", "CT of chest and abdomen without contrast",
  "CT of chest and abdomen", "CT of chest with contrast", "CT of chest without contrast",
  "CT of chest, abdomen and pelvis", "CT of chest", "CT of femur", "CT of foot", "CT of forearm",
  "CT of groin", "CT of hand", "CT of head and neck", "CT of head with contrast",
  "CT of head without contrast", "CT of head", "CT of hip", "CT of joint", "CT of leg",
  "CT of lower extremity with and without contrast", "CT of lower extremity with contrast",
  "CT of lower extremity without contrast", "CT of lumbar spine with contrast",
  "CT of lumbar spine without contrast", "CT of lumbosacral spine", "CT of neck with and without contrast",
  "CT of neck without contrast", "CT of neck", "CT of orbits", "CT of pelvis with and without contrast",
  "CT of pelvis with contrast", "CT of pelvis without contrast", "CT of pelvis", "CT of pituitary",
  "CT of sella and IAC", "CT of shoulder", "CT of sinus with contrast", "CT of sinus without contrast",
  "CT of sinus", "CT of spine", "CT of thoracic spine with and without contrast",
  "CT of thoracic spine with contrast", "CT of thoracic spine without contrast", "CT of thumb",
  "CT of upper arm", "CT of upper extremity with and without contrast",
  "CT of upper extremity with contrast", "CT of upper extremity without contrast",
  "CT of whole body with contrast", "CT of wrist", "CT pyelogram", "CT scan", "CT urogram with contrast",
  "CT urogram", "CTA of abdomen and pelvis", "CTA of abdomen", "CTA of brain",
  "CTA of chest and abdomen", "CTA of chest", "CTA of coronary artery", "CTA of head",
  "CTA of kidney", "CTA of lower extremity", "CTA of neck", "CTA of pelvis", "CTA of torso",
  "CTA of upper extremity", "CTA", "Cancer radiation", "Cardiac CT Scan", "Cardiac MRI with contrast",
  "Cardiac MRI without contrast", "Cardiac echo", "Cardiac electrophysiology", "Cardiac function MRI",
  "Cardiac morphology MRI with contrast", "Cardiac morphology MRI without contrast",
  "Cardiac velocity MRI flow map", "Cardioversion", "Carotid artery ultrasound",
  "Carotid ultrasound exam", "Cerebral angiography", "Cervical laminectomy",
  "Chemical exfoliation for acne", "Cholangiogram", "Choledochal stent", "Colonoscopy by video capsule",
  "Colonoscopy", "Colonscopy", "Computed tomography angiogram", "Computed tomography",
  "Coronal CT scan of sinus", "Coronary angiogram", "Coronary angioplasty",
  "Ct guided CSF leak repair", "Cystogram", "Cystometrogram", "Cystoscopy with retrograde pyelography",
  "Deep brain stimulation", "Dental Xrays", "Diagnostic laparoscopy", "Diagnostic procedure ENT",
  "Diagnostic procedure GI liver", "Diagnostic procedure GI", "Diagnostic procedure IR kidney",
  "Diagnostic procedure eye", "Diagnostic procedure heart", "Diagnostic procedure joint elbow",
  "Diagnostic procedure joint knee", "Diagnostic procedure kidney", "Diagnostic procedure lung-airways",
  "Diagnostic procedure lung", "Diagnostic procedure muscle", "Diagnostic procedure nerve",
  "Diagnostic procedure pregnancy related", "Diagnostic procedure radiology GI",
  "Diagnostic procedure skin", "Diagnostic procedure spine", "Diagnostic procedure thyroid",
  "Diagnostic procedure urology", "Diagnostic ultrasound", "Digital mammogram", "Doppler test on baby",
  "Doppler ultrasound exam of arm or leg", "Doppler ultrasound of middle cerebral artery of fetus",
  "Doppler ultrasound of newborn head", "Doppler ultrasound of umbilical artery", "Doppler ultrasound",
  "Doppler velocimetry", "ECHO", "EGD", "EMDA", "EVLT", "Echocardiogram of fetus", "Egg freezing",
  "Elbow MRI arthrogram", "Electromyography", "Electrophysiology study", "Electroretinography",
  "Embryo transfer", "Endoscopic gastrointestinal ultrasound", "Endoscopic retrograde cholangiopancreatography",
  "Endoscopic ultrasound", "Esophagoscopy", "Exercise stress test", "External beam radiation therapy",
  "Eye ultrasound", "Facial Xray", "Fetal ultrasound", "Fine needle aspiration", "Flexible sigmoidoscopy",
  "Fluorescein angiogram of retina", "Fluorescein angiogram", "Fluorescein angiography",
  "Fluorodeoxyglucose PET scan", "Fluoroscopy", "Functional MRI", "Gallbladder Xray",
  "Gallbladder radionuclide scan", "Gallium scan for infection", "Gallium scan for tumor",
  "Glycolic acid peel", "Gonioscopy", "Head and neck radiation therapy", "Heart angiogram",
  "Helical computed tomography", "Hida scan", "High resolution CT of brain", "High resolution CT of chest",
  "High resolution CT", "Hip MRI arthrogram", "Hysterosalpingogram", "Imaging", "Immunotherapy",
  "In Vitro Fertilization", "Internal fetal monitoring", "Intravenous pyelogram", "KUB",
  "Kidney gallium scan", "Kidney scan", "Knee MRI arthrogram", "LVAD", "Laser peripheral iridotomy",
  "Laser therapy", "Laser treatment of leg veins", "Lithotripsy", "Lumbar myelogram",
  "Lung gallium scan", "Lung radiation", "Lung screening CT", "Lung ventilation perfusion scan",
  "Lymphangiogram", "Lymphoscintigraphy", "MIBG scintiscan", "MRA of abdomen with and without contrast",
  "MRA of abdomen with contrast", "MRA of abdomen without contrast", "MRA of brain with and without contrast",
  "MRA of brain with contrast", "MRA of brain without contrast",
  "MRA of carotid and vertebral artery with and without contrast",
  "MRA of carotid and vertebral artery with contrast", "MRA of carotid and vertebral artery without contrast",
  "MRA of cervical spine", "MRA of chest with and without contrast", "MRA of chest with contrast",
  "MRA of chest without contrast", "MRA of kidney with and without contrast", "MRA of kidney with contrast",
  "MRA of liver with and without contrast", "MRA of liver with contrast", "MRA of liver without contrast",
  "MRA of lower extremity with and without contrast", "MRA of lower extremity with contrast",
  "MRA of lower extremity without contrast", "MRA of lumbar spine", "MRA of pelvis with and without contrast",
  "MRA of pelvis without contrast", "MRA of thoracic spine", "MRA of upper extremity", "MRCP",
  "MRI and MRA of abdomen with and without contrast", "MRI and MRA of brain with contrast",
  "MRI and MRA of brain without contrast", "MRI and MRA of chest with reconstruction",
  "MRI and MRA of pelvis with and without contrast", "MRI arthrogram of wrist", "MRI arthrogram",
  "MRI guided breast biopsy", "MRI of IAC with and without contrast", "MRI of IAC without contrast",
  "MRI of TMJ", "MRI of abdomen and pelvis", "MRI of abdomen with and without contrast",
  "MRI of abdomen with contrast", "MRI of abdomen without contrast", "MRI of abdomen",
  "MRI of adrenals", "MRI of ankle with contrast", "MRI of ankle without contrast", "MRI of ankle",
  "MRI of back without contrast", "MRI of bone marrow supply", "MRI of brachial plexus",
  "MRI of brain and IAC with contrast", "MRI of brain and orbits with contrast",
  "MRI of brain and pituitary with contrast", "MRI of brain and spinal cord", "MRI of brain with contrast",
  "MRI of brain without contrast", "MRI of brain", "MRI of breast with contrast",
  "MRI of breast with wire localization", "MRI of breast without contrast", "MRI of breast",
  "MRI of calf with contrast", "MRI of calf without contrast", "MRI of cervical spine with contrast",
  "MRI of cervical spine without contrast", "MRI of chest with contrast", "MRI of chest without contrast",
  "MRI of chest", "MRI of elbow with and without contrast", "MRI of elbow with contrast",
  "MRI of elbow without contrast", "MRI of entire spine with and without contrast",
  "MRI of entire spine with contrast", "MRI of entire spine without contrast", "MRI of femur with contrast",
  "MRI of femur", "MRI of fetus", "MRI of foot with contrast", "MRI of foot without contrast",
  "MRI of foot", "MRI of forearm with contrast", "MRI of forearm", "MRI of groin",
  "MRI of hand with and without contrast", "MRI of hand without contrast", "MRI of hand",
  "MRI of head and neck", "MRI of head", "MRI of heart", "MRI of hip with and without contrast",
  "MRI of hip with contrast", "MRI of joint", "MRI of knee with and without contrast",
  "MRI of knee with contrast", "MRI of knee without contrast", "MRI of leg with contrast", "MRI of leg",
  "MRI of lower extremity joint without contrast", "MRI of lower extremity without contrast",
  "MRI of lumbar spine with and without contrast", "MRI of lumbar spine with contrast",
  "MRI of lumbar spine without contrast", "MRI of lumbosacral spine with contrast",
  "MRI of lumbosacral spine", "MRI of neck soft tissue with and without contrast",
  "MRI of neck soft tissue with contrast", "MRI of neck soft tissue without contrast",
  "MRI of neck without contrast", "MRI of neck", "MRI of orbits with contrast",
  "MRI of orbits without contrast", "MRI of orbits", "MRI of pelvis with and without contrast",
  "MRI of pelvis without contrast", "MRI of pelvis", "MRI of pituitary with and without contrast",
  "MRI of pituitary without contrast", "MRI of prostate with and without contrast",
  "MRI of prostate with contrast", "MRI of prostate without contrast",
  "MRI of sacroiliac spine with and without contrast", "MRI of sacroiliac spine with contrast",
  "MRI of sacroiliac spine without contrast", "MRI of shoulder with and without contrast",
  "MRI of shoulder with contrast", "MRI of shoulder without contrast", "MRI of shoulder",
  "MRI of sinus with contrast", "MRI of sinus", "MRI of spine", "MRI of thoracic spine with and without contrast",
  "MRI of thoracic spine with contrast", "MRI of thoracic spine without contrast", "MRI of thumb",
  "MRI of upper arm with contrast", "MRI of upper arm", "MRI of upper extremity with and without contrast",
  "MRI of upper extremity with contrast", "MRI of upper extremity without contrast",
  "MRI of whole body with contrast", "MRI of whole body", "MRI of wrist with contrast",
  "MRI of wrist without contrast", "MRI of wrist", "MRI scan", "MRI urogram with and without contrast",
  "MRI urography", "MRI", "Magnetic resonance angiography", "Magnetic resonance cholangiopancreatography",
  "Magnetic resonance imaging", "Magnetic resonance spectroscopy", "Mammogram", "Maxillofacial CT",
  "Mesenteric arteriography", "Multigated acquisition scan", "Multiple sleep latency test",
  "Myectomy surgery", "Myelogram of cervical spine", "Myelogram of entire spine",
  "Myelogram of posterior fossa", "Myelogram of thoracic spine", "Myelogram", "Myocardial infarction scan",
  "Myocardial perfusion scan at rest", "Myocardial perfusion scan with pain",
  "Myocardial perfusion scan with pharmacological stress", "Myocardial perfusion scan with sestamibi",
  "Myocardial perfusion scan with thallium", "Nuclear bladder scan", "Nuclear scans",
  "Nuclear stress testing", "Nuclear ventriculography", "Obstetric ultrasound", "Open reduction",
  "Oral cholecystogram", "Orbit CT scan", "Ovary removal", "PET CT Alzheimers disease",
  "PET CT brain metabolic evaluation", "PET CT breast cancer monitoring", "PET CT breast cancer restaging",
  "PET CT breast cancer staging", "PET CT cervical cancer staging", "PET CT colorectal cancer diagnosis",
  "PET CT colorectal cancer initial staging", "PET CT colorectal cancer restaging",
  "PET CT esophageal cancer diagnosis", "PET CT esophageal cancer initial staging",
  "PET CT esophageal cancer restaging", "PET CT head and neck cancer diagnosis",
  "PET CT head and neck cancer initial staging", "PET CT head and neck cancer restaging",
  "PET CT lung cancer diagnosis", "PET CT lung cancer initial staging", "PET CT lung cancer restaging",
  "PET CT lymphoma diagnosis", "PET CT lymphoma initial staging", "PET CT lymphoma restaging",
  "PET CT melanoma diagnosis", "PET CT melanoma initial staging", "PET CT melanoma restaging",
  "PET CT pulmonary nodule", "PET CT refractory seizures presurgical evaluation",
  "PET CT thyroid cancer restaging", "PET brain for metabolic evaluation",
  "PET brain for perfusion evaluation", "PET breast cancer diagnosis", "PET breast cancer recurrence",
  "PET breast cancer response to treatment", "PET cervical cancer diagnosis", "PET cervical cancer staging",
  "PET colorectal cancer initial staging", "PET esophageal cancer diagnosis",
  "PET esophageal cancer initial staging", "PET esophageal cancer restaging", "PET for Alzheimers disease",
  "PET head and neck cancer diagnosis", "PET head and neck cancer initial staging",
  "PET head and neck cancer restaging", "PET lung cancer diagnosis", "PET lung cancer initial staging",
  "PET lymphoma diagnosis", "PET lymphoma initial staging", "PET lymphoma restaging",
  "PET melanoma diagnosis", "PET melanoma initial staging", "PET melanoma restaging",
  "PET ovarian cancer restaging", "PET refractory seizures presurgical evaluation", "PET scan",
  "PET thyroid cancer diagnosis", "PET thyroid cancer restaging",
  "Pancrease CTA with CT cholangiopancreatography", "Paracentesis", "Parathyroid scan", "Pelvic Xray",
  "Pelvic ultrasound", "Percutaneous transhepatic cholangiogram", "Percutaneous transhepatic cholangiography",
  "Percutaneous transluminal coronary angioplasty", "Perfusion scan", "Phlebotomy", "Pregnancy ultrasound",
  "Proton magnetic resonance spectroscopic imaging", "Pulmonary function test", "Pulmonary perfusion scan",
  "Pulmonary ventilation scan", "RBC nuclear scan", "Radiation therapy", "Radioactive iodine uptake",
  "Radiolabeled somatostatin analog scintigraphy", "Radionuclide cystogram", "Renal angiogram",
  "Renal artery angioplasty", "Renal perfusion scan", "Renal scan", "Renal venogram", "Repeat ultrasound",
  "Retina exam", "Retrograde cystography", "Retrograde cystourethrogram", "Rhinoscopy", "Rhizotomy",
  "Sacroiliac MRI arthrogram", "Salivary gland scan", "Sclerotherapy", "Scrotal ultrasound",
  "Serial ultrasound", "Sestamibi parathyroid scan", "Sestamibi stress test",
  "Shockwave lithotripsy for kidney stones", "Shoulder CT arthrogram", "Shoulder MRI arthrogram",
  "Shoulder replacement", "Sialogram MRI", "Sialogram", "Sigmoidoscopy",
  "Single photon emission computed tomography", "Skeleton Xray", "Skin graft",
  "Skull base and-or nasopharynx MRI with contrast", "Skull base and-or nasopharynx MRI without contrast",
  "Sleep apnea ", "Sonogram", "Spiral CT", "Stem cell transplantation", "Stress echocardiography",
  "Stress test", "Stress thallium test", "Subclavian artery arteriogram", "TMJ MRI arthrogram",
  "Technetium 99m pertechnetate scan", "Testicular scan", "Testicular ultrasound", "Thermography",
  "Thigh MRI with and without contrast", "Thigh MRI with contrast", "Thigh MRI without contrast",
  "Thyroid nuclear scan", "Thyroid scan uptake only", "Thyroid scan with I 123",
  "Thyroid scan with technetium 99m", "Thyroid scan", "Tracheostomy", "Transabdominal ultrasound",
  "Transcranial magnetic stimulation", "Transesophageal echocardiogram", "Transesophageal echocardiography",
  "Transrectal ultrasound with prostate biopsy", "Transrectal ultrasound", "Transthoracic echocardiogram",
  "Transvaginal ultrasound of pelvis", "Transvaginal ultrasound", "Tubal ligation",
  "Ultrasound at 36 weeks", "Ultrasound for nuchal translucency", "Ultrasound guided IUD removal",
  "Ultrasound guided abscess drainage", "Ultrasound guided amniocentesis", "Ultrasound guided amnioinfusion",
  "Ultrasound guided arthrocentesis of major joint", "Ultrasound guided arthrocentesis of minor joint",
  "Ultrasound guided aspiration of breast cyst", "Ultrasound guided aspiration of renal cyst",
  "Ultrasound guided biopsy of endomyocardium", "Ultrasound guided biopsy of kidney",
  "Ultrasound guided biopsy of lung", "Ultrasound guided biopsy of rectal wall",
  "Ultrasound guided biopsy of salivary gland", "Ultrasound guided biopsy of superficial nodes",
  "Ultrasound guided biopsy of thoracic vertebra", "Ultrasound guided biopsy of thyroid",
  "Ultrasound guided chorionic villus sampling", "Ultrasound guided colpocentesis via vaginal approach",
  "Ultrasound guided fine needle aspiration of breast", "Ultrasound guided fine needle aspiration",
  "Ultrasound guided needle biopsy of breast", "Ultrasound guided needle biopsy of muscle",
  "Ultrasound guided needle biopsy of pleura", "Ultrasound guided needle core biopsy of breast",
  "Ultrasound guided ova aspiration", "Ultrasound guided paracentesis",
  "Ultrasound guided percutaneous biopsy of pancreas", "Ultrasound guided percutaneous biopsy of retroperitoneal mass",
  "Ultrasound guided percutaneous, transhepatic cholecystomy", "Ultrasound guided pericardiocentesis",
  "Ultrasound guided rotating knife biopsy of breast", "Ultrasound guided thoracentesis with chest tube placement",
  "Ultrasound of abdomen and pelvis", "Ultrasound of abdomen", "Ultrasound of adrenal",
  "Ultrasound of aorta and branches", "Ultrasound of bladder and kidneys", "Ultrasound of bone mineral density",
  "Ultrasound of breast with wire localization", "Ultrasound of breast", "Ultrasound of chest",
  "Ultrasound of coronary arteries", "Ultrasound of extremity veins", "Ultrasound of extremity",
  "Ultrasound of gall bladder function with CCK", "Ultrasound of groin", "Ultrasound of hip",
  "Ultrasound of joint", "Ultrasound of kidneys", "Ultrasound of liver or gallbladder",
  "Ultrasound of lower extremity veins", "Ultrasound of neck soft tissue", "Ultrasound of pancreas",
  "Ultrasound of parathyroid", "Ultrasound of parotid", "Ultrasound of pelvis", "Ultrasound of prostate",
  "Ultrasound of rectum", "Ultrasound of retroperitoneal space", "Ultrasound of shoulder",
  "Ultrasound of spine", "Ultrasound of spleen", "Ultrasound of thyroid", "Ultrasound of upper extremity veins",
  "Ultrasound test", "Ultrasound to  baby growth", "Ultrasound to Evaluate Twins",
  "Ultrasound to evaluate baby", "Ultrasound to evaluate fetal growth", "Upper arm lift",
  "Urinary porphobilinogen", "Urodynamic testing", "VCUG", "Vascular ultrasound", "Venogram of leg",
  "Vertebroplasty", "Video fluoroscopy", "Virtual colonoscopy", "Virtual reality exposure therapy",
  "White blood cell scan", "Xeroradiography", "Xray of abdomen", "Xray of ankle",
  "Xray of bladder & urethra while voiding", "Xray of chest", "Xray of clavicle", "Xray of coccyx",
  "Xray of elbow", "Xray of femur", "Xray of foot", "Xray of forearm", "Xray of hand", "Xray of head",
  "Xray of hip", "Xray of joint", "Xray of knee", "Xray of leg", "Xray of lower spine",
  "Xray of lumbosacral spine", "Xray of neck", "Xray of nose", "Xray of orbits", "Xray of pelvis",
  "Xray of ribs", "Xray of shoulder", "Xray of sinuses", "Xray of skull", "Xray of spine",
  "Xray of sternum", "Xray of the bladder", "Xray of thoracic spine", "Xray of thumb",
  "Xray of upper arm", "Xray of whole body", "Xray of wrist", "Xray", "Yag laser"
]

// Normalize test name for fuzzy matching
function normalizeTestName(name: string): string {
  return name
    .toLowerCase()
    .replace(/x-ray/g, 'xray')
    .replace(/\s+/g, ' ')
    .trim()
}

// Build a lookup map from normalized names to original filenames for faster matching
const PROCEDURE_IMAGE_MAP: Record<string, string> = {}
PROCEDURE_IMAGE_FILES.forEach(filename => {
  const normalized = normalizeTestName(filename)
  PROCEDURE_IMAGE_MAP[normalized] = filename
})

// Get procedure image path if it exists
export function getProcedureImage(testName: string): string | null {
  const normalized = normalizeTestName(testName)
  
  // Check for exact match first
  if (PROCEDURE_IMAGE_MAP[normalized]) {
    return `/images/procedure_images/${encodeURIComponent(PROCEDURE_IMAGE_MAP[normalized])}.png`
  }
  
  // Check for fuzzy match (test name contains image name or vice versa)
  for (const [key, filename] of Object.entries(PROCEDURE_IMAGE_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return `/images/procedure_images/${encodeURIComponent(filename)}.png`
    }
  }
  
  return null
}

// Test images mapping
export const TEST_IMAGES: Record<string, string> = {
  'x-ray': '/images/x-ray.png',
  'xray': '/images/x-ray.png',
  'digital x-ray': '/images/digitalx-ray.png',
  'ct': '/images/CT.png',
  'ct scan': '/images/CT.png',
  'mri': '/images/MRI.png',
  'pet': '/images/PET.png',
  'pet scan': '/images/PET.png',
  'ultrasound': '/images/ultrasound.png',
  'mammogram': '/images/mammogram.png',
  'breast ultrasound': '/images/breastultra.png',
  'audiogram': '/images/audiotest.png',
  'slit-lamp': '/images/slit-lamp.png',
  'sleep study': '/images/sleeptest.png',
  'exercise stress test': '/images/exercisestress.png',
  'ekg': '/images/ekg-ecg.png',
  'ecg': '/images/ekg-ecg.png',
  'ekg/ecg': '/images/ekg-ecg.png',
  'eeg': '/images/eeg.png',
  'dexa': '/images/dexabonedensity.png',
  'bone density': '/images/dexabonedensity.png',
  'angiogram': '/images/interventionalx-ray.png',
  'c-arm': '/images/interventionalx-ray.png'
}

// Get test image - checks procedure images first, then specific test images, then falls back to placeholder
export function getTestImage(testName: string, testType: TestType): string {
  // First check for matching procedure image
  const procedureImage = getProcedureImage(testName)
  if (procedureImage) {
    return procedureImage
  }
  
  const nameLower = testName.toLowerCase()
  
  // Check for exact or partial match in TEST_IMAGES
  for (const [key, url] of Object.entries(TEST_IMAGES)) {
    if (nameLower.includes(key) || key.includes(nameLower)) {
      return url
    }
  }
  
  // Fall back to placeholder based on type
  return `/images/placeholder-${testType}.svg`
}

// Imaging types for filtering
export const IMAGING_TYPES: TestType[] = ['ct', 'mri', 'ultrasound', 'xray', 'pet', 'nuclear', 'angio']

// Check if a test is an imaging test
export function isImagingTest(test: MedicalTest): boolean {
  return IMAGING_TYPES.includes(test.type)
}

