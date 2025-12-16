import type { BodyPartContent, Disease, Symptom, Procedure, Treatment, NutritionItem } from '../types'

// Brain content - comprehensive data for the brain body part
const BRAIN_DISEASES: Disease[] = [
  {
    name: "Alzheimer's Disease",
    description: "A progressive neurological disorder causing memory loss, cognitive decline, and behavioral changes. Most common cause of dementia in older adults.",
    severity: 'severe'
  },
  {
    name: "Parkinson's Disease",
    description: "A movement disorder affecting the nervous system, causing tremors, stiffness, and difficulty with balance and coordination.",
    severity: 'severe'
  },
  {
    name: "Stroke",
    description: "Occurs when blood supply to the brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients. Requires immediate medical attention.",
    severity: 'severe'
  },
  {
    name: "Brain Tumor",
    description: "An abnormal growth of cells in the brain that can be benign or malignant. Symptoms depend on tumor size and location.",
    severity: 'severe'
  },
  {
    name: "Epilepsy",
    description: "A neurological disorder characterized by recurrent seizures caused by abnormal electrical activity in the brain.",
    severity: 'moderate'
  },
  {
    name: "Multiple Sclerosis",
    description: "An autoimmune disease where the immune system attacks the protective covering of nerve fibers, causing communication problems between brain and body.",
    severity: 'severe'
  },
  {
    name: "Meningitis",
    description: "Inflammation of the membranes surrounding the brain and spinal cord, usually caused by infection. Can be life-threatening.",
    severity: 'severe'
  },
  {
    name: "Encephalitis",
    description: "Inflammation of the brain, often caused by viral infections. Can cause flu-like symptoms, confusion, seizures, and altered consciousness.",
    severity: 'severe'
  },
  {
    name: "Traumatic Brain Injury",
    description: "Brain dysfunction caused by an external force, such as a blow to the head. Severity ranges from mild concussions to severe injuries.",
    severity: 'moderate'
  },
  {
    name: "Brain Aneurysm",
    description: "A bulge in a blood vessel in the brain that can rupture and cause life-threatening bleeding. Often has no symptoms until rupture.",
    severity: 'severe'
  }
]

const BRAIN_SYMPTOMS: Symptom[] = [
  {
    name: "Headache",
    description: "Pain or discomfort in the head, scalp, or neck. Can range from mild to severe and may indicate various conditions.",
    commonality: 'common'
  },
  {
    name: "Memory Loss",
    description: "Difficulty remembering recent events, learning new information, or recalling previously known facts.",
    commonality: 'common'
  },
  {
    name: "Seizures",
    description: "Sudden, uncontrolled electrical disturbance in the brain causing changes in behavior, movements, or consciousness.",
    commonality: 'uncommon'
  },
  {
    name: "Confusion",
    description: "Difficulty thinking clearly, concentrating, or making decisions. May include disorientation to time or place.",
    commonality: 'common'
  },
  {
    name: "Vision Changes",
    description: "Blurred vision, double vision, or partial loss of sight that can indicate neurological problems.",
    commonality: 'common'
  },
  {
    name: "Speech Difficulties",
    description: "Problems with speaking, understanding speech, reading, or writing. May indicate stroke or other brain conditions.",
    commonality: 'uncommon'
  },
  {
    name: "Numbness or Tingling",
    description: "Loss of sensation or abnormal sensations in parts of the body, often on one side.",
    commonality: 'common'
  },
  {
    name: "Dizziness",
    description: "Feeling lightheaded, unsteady, or experiencing a spinning sensation (vertigo).",
    commonality: 'common'
  },
  {
    name: "Balance Problems",
    description: "Difficulty maintaining balance or coordinating movements. May indicate cerebellar or vestibular issues.",
    commonality: 'uncommon'
  },
  {
    name: "Fatigue",
    description: "Persistent tiredness or exhaustion that doesn't improve with rest. Common in many neurological conditions.",
    commonality: 'common'
  }
]

const BRAIN_PROCEDURES: Procedure[] = [
  {
    name: "Deep Brain Stimulation",
    description: "Surgical procedure implanting electrodes in specific brain areas to deliver electrical impulses, used for movement disorders.",
    type: 'surgical'
  },
  {
    name: "Craniotomy",
    description: "Surgical opening of the skull to access the brain for tumor removal, aneurysm repair, or other procedures.",
    type: 'surgical'
  },
  {
    name: "Lumbar Puncture",
    description: "Procedure to collect cerebrospinal fluid from the lower back for diagnostic testing of neurological conditions.",
    type: 'diagnostic'
  },
  {
    name: "Brain Biopsy",
    description: "Removal of a small tissue sample from the brain to diagnose tumors, infections, or other conditions.",
    type: 'diagnostic'
  },
  {
    name: "Electroencephalography (EEG)",
    description: "Recording of brain electrical activity using electrodes on the scalp to diagnose epilepsy and other disorders.",
    type: 'diagnostic'
  },
  {
    name: "Cerebral Angiography",
    description: "Imaging procedure using contrast dye to visualize blood vessels in and around the brain.",
    type: 'diagnostic'
  },
  {
    name: "Stereotactic Radiosurgery",
    description: "Non-invasive treatment delivering focused radiation beams to target brain tumors or abnormalities.",
    type: 'therapeutic'
  },
  {
    name: "Ventriculostomy",
    description: "Surgical procedure creating a hole in the ventricles to drain excess cerebrospinal fluid.",
    type: 'surgical'
  },
  {
    name: "Carotid Endarterectomy",
    description: "Surgery to remove plaque from carotid arteries to prevent stroke.",
    type: 'surgical'
  },
  {
    name: "Neurostimulation Therapy",
    description: "Use of electrical or magnetic stimulation to modulate brain activity for various neurological conditions.",
    type: 'therapeutic'
  }
]

const BRAIN_TREATMENTS: Treatment[] = [
  {
    name: "Anticonvulsant Medications",
    description: "Drugs that help control seizures by stabilizing electrical activity in the brain.",
    type: 'medication'
  },
  {
    name: "Dopamine Therapy",
    description: "Medications that increase dopamine levels to treat Parkinson's disease symptoms.",
    type: 'medication'
  },
  {
    name: "Cognitive Behavioral Therapy",
    description: "Psychological treatment helping patients identify and change negative thought patterns and behaviors.",
    type: 'therapy'
  },
  {
    name: "Physical Therapy",
    description: "Exercises and techniques to improve movement, strength, and coordination after brain injury or stroke.",
    type: 'therapy'
  },
  {
    name: "Occupational Therapy",
    description: "Rehabilitation helping patients relearn daily activities and adapt to cognitive or physical changes.",
    type: 'therapy'
  },
  {
    name: "Speech-Language Therapy",
    description: "Treatment to improve communication skills, swallowing, and cognitive-communication after brain injury.",
    type: 'therapy'
  },
  {
    name: "Chemotherapy",
    description: "Drug treatment using chemicals to kill rapidly growing cells, used for brain cancer treatment.",
    type: 'medication'
  },
  {
    name: "Immunotherapy",
    description: "Treatment that uses the body's immune system to fight diseases, including certain brain cancers.",
    type: 'medication'
  },
  {
    name: "Blood Thinners",
    description: "Medications that prevent blood clots to reduce stroke risk in at-risk patients.",
    type: 'medication'
  },
  {
    name: "Lifestyle Modifications",
    description: "Changes in diet, exercise, sleep, and stress management to support brain health and recovery.",
    type: 'lifestyle'
  }
]

const BRAIN_NUTRITION: NutritionItem[] = [
  {
    name: "Blueberries",
    benefit: "Rich in antioxidants that may delay brain aging and improve memory function.",
    category: 'fruit'
  },
  {
    name: "Salmon",
    benefit: "High in omega-3 fatty acids essential for brain structure and cognitive function.",
    category: 'protein'
  },
  {
    name: "Walnuts",
    benefit: "Contains DHA, a type of omega-3 fatty acid linked to improved cognitive performance.",
    category: 'fat'
  },
  {
    name: "Turmeric",
    benefit: "Curcumin crosses the blood-brain barrier and has anti-inflammatory and antioxidant benefits.",
    category: 'other'
  },
  {
    name: "Broccoli",
    benefit: "High in vitamin K and antioxidants that support brain health and memory.",
    category: 'vegetable'
  },
  {
    name: "Pumpkin Seeds",
    benefit: "Rich in zinc, magnesium, copper, and iron - all important for brain function.",
    category: 'other'
  },
  {
    name: "Dark Chocolate",
    benefit: "Contains flavonoids, caffeine, and antioxidants that enhance memory and mood.",
    category: 'other'
  },
  {
    name: "Eggs",
    benefit: "Good source of choline, essential for producing acetylcholine, a neurotransmitter for mood and memory.",
    category: 'protein'
  },
  {
    name: "Green Tea",
    benefit: "Contains L-theanine and caffeine that improve alertness, focus, and memory.",
    category: 'other'
  },
  {
    name: "Oranges",
    benefit: "Excellent source of vitamin C, which is key for preventing mental decline.",
    category: 'fruit'
  },
  {
    name: "Avocados",
    benefit: "Healthy fats support blood flow to the brain and help lower blood pressure.",
    category: 'fat'
  },
  {
    name: "Spinach",
    benefit: "Rich in folate, vitamin E, and vitamin K that slow cognitive decline.",
    category: 'vegetable'
  },
  {
    name: "Almonds",
    benefit: "High in vitamin E, which protects cell membranes from oxidative stress.",
    category: 'fat'
  },
  {
    name: "Sardines",
    benefit: "Packed with omega-3s and vitamin B12 for brain health and nerve function.",
    category: 'protein'
  },
  {
    name: "Beets",
    benefit: "Natural nitrates improve blood flow to the brain, enhancing mental performance.",
    category: 'vegetable'
  },
  {
    name: "Whole Grains",
    benefit: "Provide steady glucose supply to the brain for sustained mental energy.",
    category: 'grain'
  },
  {
    name: "Tomatoes",
    benefit: "Contain lycopene, a powerful antioxidant that protects against free radical damage.",
    category: 'vegetable'
  },
  {
    name: "Kale",
    benefit: "Loaded with brain-healthy nutrients including vitamin K, lutein, and beta carotene.",
    category: 'vegetable'
  },
  {
    name: "Bone Broth",
    benefit: "Contains amino acids that reduce inflammation and improve memory.",
    category: 'protein'
  },
  {
    name: "Extra Virgin Olive Oil",
    benefit: "Rich in polyphenols that improve learning, memory, and reverse age-related changes.",
    category: 'fat'
  }
]

// Complete brain content
const BRAIN_CONTENT: BodyPartContent = {
  name: "Brain",
  description: "The brain is the command center of the human body, a complex organ weighing about 3 pounds that controls all bodily functions, thoughts, emotions, and memories. It consists of approximately 86 billion neurons that communicate through electrical and chemical signals. The brain is divided into several regions including the cerebrum (responsible for higher functions like thinking and voluntary movement), the cerebellum (coordinating movement and balance), and the brainstem (controlling vital functions like breathing and heart rate). Protected by the skull and surrounded by cerebrospinal fluid, the brain requires a constant supply of oxygen and glucose to function properly.",
  image: "/images/brain.png",
  relatedSystems: ["Nervous", "Endocrine"],
  diseases: BRAIN_DISEASES,
  symptoms: BRAIN_SYMPTOMS,
  procedures: BRAIN_PROCEDURES,
  treatments: BRAIN_TREATMENTS,
  nutrition: BRAIN_NUTRITION
}

// Map of body part names to their content
export const BODY_PART_CONTENT: Record<string, BodyPartContent> = {
  "Brain": BRAIN_CONTENT
}

// Helper function to get content for a body part
export function getBodyPartContent(bodyPartName: string): BodyPartContent | null {
  return BODY_PART_CONTENT[bodyPartName] || null
}

// Helper to check if a body part has content
export function hasBodyPartContent(bodyPartName: string): boolean {
  return bodyPartName in BODY_PART_CONTENT
}
