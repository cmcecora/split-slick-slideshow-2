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

// ============================================================
// EYES CONTENT
// ============================================================

const EYES_DISEASES: Disease[] = [
  {
    name: "Cataracts",
    description: "Clouding of the eye's natural lens, causing blurred vision and sensitivity to light. Most common cause of vision loss in people over 40.",
    severity: 'moderate'
  },
  {
    name: "Glaucoma",
    description: "A group of eye conditions that damage the optic nerve, often due to abnormally high pressure in the eye. Can lead to irreversible vision loss.",
    severity: 'severe'
  },
  {
    name: "Macular Degeneration",
    description: "Age-related deterioration of the macula, the central part of the retina, causing loss of central vision while peripheral vision remains intact.",
    severity: 'severe'
  },
  {
    name: "Diabetic Retinopathy",
    description: "Damage to blood vessels in the retina caused by diabetes, potentially leading to vision impairment or blindness if untreated.",
    severity: 'severe'
  },
  {
    name: "Conjunctivitis (Pink Eye)",
    description: "Inflammation or infection of the conjunctiva causing redness, itching, and discharge. Can be viral, bacterial, or allergic in nature.",
    severity: 'mild'
  },
  {
    name: "Dry Eye Syndrome",
    description: "Chronic lack of sufficient lubrication and moisture on the eye surface, causing irritation, redness, and blurred vision.",
    severity: 'mild'
  },
  {
    name: "Retinal Detachment",
    description: "Emergency condition where the retina pulls away from its normal position, causing flashes of light, floaters, and vision loss.",
    severity: 'severe'
  },
  {
    name: "Keratoconus",
    description: "Progressive thinning and bulging of the cornea into a cone shape, causing distorted vision and sensitivity to light.",
    severity: 'moderate'
  },
  {
    name: "Uveitis",
    description: "Inflammation of the uvea (middle layer of the eye), causing eye pain, redness, and blurred vision. Can lead to permanent vision loss.",
    severity: 'moderate'
  },
  {
    name: "Strabismus",
    description: "Misalignment of the eyes where they don't look at the same point simultaneously, commonly known as crossed eyes or squint.",
    severity: 'moderate'
  }
]

const EYES_SYMPTOMS: Symptom[] = [
  {
    name: "Blurred Vision",
    description: "Lack of sharpness in vision, making objects appear out of focus. Can occur in one or both eyes.",
    commonality: 'common'
  },
  {
    name: "Eye Redness",
    description: "Red or bloodshot appearance of the white part of the eye due to swollen or dilated blood vessels.",
    commonality: 'common'
  },
  {
    name: "Eye Pain",
    description: "Discomfort or pain in or around the eye, ranging from sharp to dull, aching to throbbing sensations.",
    commonality: 'common'
  },
  {
    name: "Floaters",
    description: "Small spots, specks, or shapes that drift through your field of vision, especially noticeable against light backgrounds.",
    commonality: 'common'
  },
  {
    name: "Light Sensitivity",
    description: "Discomfort or pain when exposed to light, also known as photophobia. Can indicate various eye conditions.",
    commonality: 'common'
  },
  {
    name: "Double Vision",
    description: "Seeing two images of a single object, either side by side or overlapping. Can occur in one or both eyes.",
    commonality: 'uncommon'
  },
  {
    name: "Excessive Tearing",
    description: "Overproduction of tears, causing watery eyes. May indicate dry eye, allergies, or blocked tear ducts.",
    commonality: 'common'
  },
  {
    name: "Night Vision Problems",
    description: "Difficulty seeing clearly in low-light conditions or at night, often an early sign of eye conditions.",
    commonality: 'uncommon'
  },
  {
    name: "Halos Around Lights",
    description: "Seeing bright circles around light sources, particularly at night. Often associated with cataracts or glaucoma.",
    commonality: 'uncommon'
  },
  {
    name: "Itchy Eyes",
    description: "Persistent urge to rub the eyes, commonly caused by allergies, dry eye, or eye infections.",
    commonality: 'common'
  }
]

const EYES_PROCEDURES: Procedure[] = [
  {
    name: "LASIK Surgery",
    description: "Laser eye surgery that reshapes the cornea to correct nearsightedness, farsightedness, and astigmatism.",
    type: 'surgical'
  },
  {
    name: "Cataract Surgery",
    description: "Removal of the clouded natural lens and replacement with an artificial intraocular lens to restore clear vision.",
    type: 'surgical'
  },
  {
    name: "Comprehensive Eye Exam",
    description: "Complete evaluation of vision and eye health including visual acuity, refraction, and examination of eye structures.",
    type: 'diagnostic'
  },
  {
    name: "Fundoscopy",
    description: "Examination of the back of the eye (retina, optic disc, blood vessels) using an ophthalmoscope.",
    type: 'diagnostic'
  },
  {
    name: "Tonometry",
    description: "Test measuring intraocular pressure to screen for glaucoma and monitor treatment effectiveness.",
    type: 'diagnostic'
  },
  {
    name: "Fluorescein Angiography",
    description: "Imaging procedure using dye injection to photograph blood vessels in the retina and choroid.",
    type: 'diagnostic'
  },
  {
    name: "Vitrectomy",
    description: "Surgical removal of vitreous gel from the eye to treat retinal detachment, macular holes, or diabetic retinopathy.",
    type: 'surgical'
  },
  {
    name: "Corneal Transplant",
    description: "Surgical replacement of damaged or diseased corneal tissue with healthy donor tissue.",
    type: 'surgical'
  },
  {
    name: "Laser Photocoagulation",
    description: "Use of laser to seal leaking blood vessels or destroy abnormal tissue in the retina.",
    type: 'therapeutic'
  },
  {
    name: "Intravitreal Injection",
    description: "Injection of medication directly into the vitreous cavity to treat macular degeneration and diabetic eye disease.",
    type: 'therapeutic'
  }
]

const EYES_TREATMENTS: Treatment[] = [
  {
    name: "Prescription Eyeglasses",
    description: "Corrective lenses custom-made to compensate for refractive errors like myopia, hyperopia, and astigmatism.",
    type: 'device'
  },
  {
    name: "Contact Lenses",
    description: "Thin lenses placed directly on the eye surface to correct vision and provide wider field of view than glasses.",
    type: 'device'
  },
  {
    name: "Artificial Tears",
    description: "Lubricating eye drops that supplement natural tear production to relieve dry eye symptoms.",
    type: 'medication'
  },
  {
    name: "Antibiotic Eye Drops",
    description: "Medicated drops to treat bacterial eye infections such as conjunctivitis and corneal ulcers.",
    type: 'medication'
  },
  {
    name: "Anti-VEGF Therapy",
    description: "Injections that block vascular endothelial growth factor to slow vision loss in macular degeneration.",
    type: 'medication'
  },
  {
    name: "Glaucoma Eye Drops",
    description: "Medications that lower intraocular pressure by reducing fluid production or improving drainage.",
    type: 'medication'
  },
  {
    name: "Steroid Eye Drops",
    description: "Anti-inflammatory drops used to treat uveitis, allergic reactions, and post-surgical inflammation.",
    type: 'medication'
  },
  {
    name: "Vision Therapy",
    description: "Customized program of visual activities to improve eye coordination, focusing, and visual processing.",
    type: 'therapy'
  },
  {
    name: "Orthokeratology",
    description: "Special rigid contact lenses worn overnight to temporarily reshape the cornea and reduce myopia.",
    type: 'device'
  },
  {
    name: "Low Vision Aids",
    description: "Devices like magnifiers, telescopes, and electronic aids to maximize remaining vision for daily activities.",
    type: 'device'
  }
]

const EYES_NUTRITION: NutritionItem[] = [
  {
    name: "Carrots",
    benefit: "Rich in beta-carotene which converts to vitamin A, essential for good vision and preventing night blindness.",
    category: 'vegetable'
  },
  {
    name: "Salmon",
    benefit: "High in omega-3 fatty acids DHA and EPA that support retinal health and may reduce dry eye symptoms.",
    category: 'protein'
  },
  {
    name: "Spinach",
    benefit: "Contains lutein and zeaxanthin, antioxidants that filter harmful blue light and protect the macula.",
    category: 'vegetable'
  },
  {
    name: "Eggs",
    benefit: "Yolks are excellent sources of lutein, zeaxanthin, and zinc, all crucial for eye health.",
    category: 'protein'
  },
  {
    name: "Sweet Potatoes",
    benefit: "Packed with beta-carotene and vitamin E, both important for maintaining healthy eyes.",
    category: 'vegetable'
  },
  {
    name: "Oranges",
    benefit: "High in vitamin C, a powerful antioxidant that helps maintain healthy blood vessels in the eyes.",
    category: 'fruit'
  },
  {
    name: "Almonds",
    benefit: "Rich in vitamin E which protects eye cells from damage caused by free radicals.",
    category: 'fat'
  },
  {
    name: "Kale",
    benefit: "One of the best sources of lutein and zeaxanthin, key nutrients for preventing macular degeneration.",
    category: 'vegetable'
  },
  {
    name: "Oysters",
    benefit: "Highest food source of zinc, which helps vitamin A produce melanin, a protective pigment in the eyes.",
    category: 'protein'
  },
  {
    name: "Bell Peppers",
    benefit: "Excellent source of vitamins A and C, supporting overall eye health and reducing cataract risk.",
    category: 'vegetable'
  },
  {
    name: "Blueberries",
    benefit: "Contain anthocyanins that improve night vision and protect retinal cells from damage.",
    category: 'fruit'
  },
  {
    name: "Broccoli",
    benefit: "Provides lutein, zeaxanthin, and vitamin C for comprehensive eye protection.",
    category: 'vegetable'
  },
  {
    name: "Turkey",
    benefit: "Good source of zinc and niacin, supporting eye tissue health and cataract prevention.",
    category: 'protein'
  },
  {
    name: "Sunflower Seeds",
    benefit: "Packed with vitamin E and zinc, both important for maintaining eye health as you age.",
    category: 'other'
  },
  {
    name: "Sardines",
    benefit: "Omega-3 rich fish that supports proper visual development and retinal function.",
    category: 'protein'
  },
  {
    name: "Corn",
    benefit: "Contains zeaxanthin and lutein that accumulate in the macula and protect against light damage.",
    category: 'vegetable'
  },
  {
    name: "Grapefruit",
    benefit: "High in vitamin C and beta-carotene, supporting eye health and immune function.",
    category: 'fruit'
  },
  {
    name: "Legumes",
    benefit: "Black-eyed peas, kidney beans, and lentils provide zinc and bioflavonoids for eye protection.",
    category: 'protein'
  },
  {
    name: "Apricots",
    benefit: "Rich in beta-carotene and vitamins A, C, and E for comprehensive eye nutrition.",
    category: 'fruit'
  },
  {
    name: "Avocados",
    benefit: "Contain lutein and healthy fats that help absorb fat-soluble eye nutrients.",
    category: 'fat'
  }
]

const EYES_CONTENT: BodyPartContent = {
  name: "Eyes",
  description: "The eyes are complex sensory organs that enable vision, one of our most important senses. Each eye is approximately 1 inch in diameter and contains over 2 million working parts. Light enters through the cornea and pupil, is focused by the lens onto the retina, where photoreceptor cells (rods and cones) convert it into electrical signals sent to the brain via the optic nerve. The eyes work together to provide depth perception and a wide field of view. Protected by the bony orbit, eyelids, and tears, the eyes can distinguish approximately 10 million different colors and process visual information faster than any camera.",
  image: "/images/eyes.png",
  relatedSystems: ["Nervous", "Muscular"],
  diseases: EYES_DISEASES,
  symptoms: EYES_SYMPTOMS,
  procedures: EYES_PROCEDURES,
  treatments: EYES_TREATMENTS,
  nutrition: EYES_NUTRITION
}

// ============================================================
// EARS CONTENT
// ============================================================

const EARS_DISEASES: Disease[] = [
  {
    name: "Otitis Media (Middle Ear Infection)",
    description: "Infection of the middle ear causing pain, fever, and temporary hearing loss. Very common in children due to shorter Eustachian tubes.",
    severity: 'moderate'
  },
  {
    name: "Otitis Externa (Swimmer's Ear)",
    description: "Infection of the outer ear canal, often caused by water exposure, causing pain, itching, and discharge.",
    severity: 'mild'
  },
  {
    name: "Meniere's Disease",
    description: "Inner ear disorder causing episodes of vertigo, tinnitus, hearing loss, and a feeling of fullness in the ear.",
    severity: 'moderate'
  },
  {
    name: "Tinnitus",
    description: "Perception of ringing, buzzing, or other sounds in the ears without external source. Can be temporary or chronic.",
    severity: 'mild'
  },
  {
    name: "Sensorineural Hearing Loss",
    description: "Permanent hearing loss caused by damage to the inner ear or auditory nerve, often age-related or noise-induced.",
    severity: 'severe'
  },
  {
    name: "Cholesteatoma",
    description: "Abnormal skin growth in the middle ear behind the eardrum that can damage hearing bones and spread infection.",
    severity: 'moderate'
  },
  {
    name: "Acoustic Neuroma",
    description: "Benign tumor on the vestibular nerve that can cause hearing loss, tinnitus, and balance problems.",
    severity: 'severe'
  },
  {
    name: "Otosclerosis",
    description: "Abnormal bone growth in the middle ear that prevents the stapes bone from vibrating, causing progressive hearing loss.",
    severity: 'moderate'
  },
  {
    name: "Labyrinthitis",
    description: "Inflammation of the inner ear labyrinth causing severe vertigo, nausea, and temporary hearing changes.",
    severity: 'moderate'
  },
  {
    name: "Perforated Eardrum",
    description: "A hole or tear in the tympanic membrane causing hearing loss, pain, and increased infection risk.",
    severity: 'moderate'
  }
]

const EARS_SYMPTOMS: Symptom[] = [
  {
    name: "Hearing Loss",
    description: "Reduced ability to hear sounds, ranging from mild difficulty to profound deafness. Can be gradual or sudden.",
    commonality: 'common'
  },
  {
    name: "Ear Pain",
    description: "Discomfort or pain in the ear that may be sharp, dull, or burning. Often indicates infection or pressure changes.",
    commonality: 'common'
  },
  {
    name: "Tinnitus (Ringing)",
    description: "Perception of sound in the ears such as ringing, buzzing, hissing, or clicking without external source.",
    commonality: 'common'
  },
  {
    name: "Vertigo",
    description: "Sensation of spinning or movement when stationary, often accompanied by nausea and balance problems.",
    commonality: 'uncommon'
  },
  {
    name: "Ear Discharge",
    description: "Fluid draining from the ear, which may be clear, bloody, or pus-like depending on the cause.",
    commonality: 'uncommon'
  },
  {
    name: "Feeling of Fullness",
    description: "Sensation of pressure or blockage in the ear, as if it needs to pop or is stuffed with cotton.",
    commonality: 'common'
  },
  {
    name: "Itchy Ears",
    description: "Persistent itching in the ear canal, often caused by dry skin, allergies, or fungal infections.",
    commonality: 'common'
  },
  {
    name: "Balance Problems",
    description: "Difficulty maintaining equilibrium while standing or walking, often related to inner ear dysfunction.",
    commonality: 'uncommon'
  },
  {
    name: "Muffled Hearing",
    description: "Sounds seem distant or unclear, as if hearing through a wall. Often caused by fluid or wax buildup.",
    commonality: 'common'
  },
  {
    name: "Ear Popping",
    description: "Clicking or popping sensations in the ears, especially with altitude changes or swallowing.",
    commonality: 'common'
  }
]

const EARS_PROCEDURES: Procedure[] = [
  {
    name: "Audiometry",
    description: "Hearing test that measures ability to hear sounds at different pitches and volumes to assess hearing loss.",
    type: 'diagnostic'
  },
  {
    name: "Tympanometry",
    description: "Test measuring eardrum movement to detect fluid, perforations, or Eustachian tube dysfunction.",
    type: 'diagnostic'
  },
  {
    name: "Otoscopy",
    description: "Visual examination of the ear canal and eardrum using an otoscope to detect infections or abnormalities.",
    type: 'diagnostic'
  },
  {
    name: "Ear Wax Removal",
    description: "Professional cleaning of impacted earwax using irrigation, suction, or specialized instruments.",
    type: 'therapeutic'
  },
  {
    name: "Myringotomy with Tubes",
    description: "Surgical insertion of small tubes through the eardrum to drain fluid and prevent recurrent infections.",
    type: 'surgical'
  },
  {
    name: "Cochlear Implant Surgery",
    description: "Implantation of electronic device that bypasses damaged hair cells to directly stimulate the auditory nerve.",
    type: 'surgical'
  },
  {
    name: "Stapedectomy",
    description: "Surgery to replace the fixed stapes bone with a prosthesis to restore hearing in otosclerosis patients.",
    type: 'surgical'
  },
  {
    name: "Tympanoplasty",
    description: "Surgical repair of perforated eardrum using tissue grafts to restore hearing and prevent infection.",
    type: 'surgical'
  },
  {
    name: "Vestibular Function Tests",
    description: "Series of tests evaluating inner ear balance function, including electronystagmography and rotary chair testing.",
    type: 'diagnostic'
  },
  {
    name: "Mastoidectomy",
    description: "Surgical removal of infected mastoid bone cells to treat chronic ear infections or cholesteatoma.",
    type: 'surgical'
  }
]

const EARS_TREATMENTS: Treatment[] = [
  {
    name: "Hearing Aids",
    description: "Electronic devices worn in or behind the ear that amplify sound for people with hearing loss.",
    type: 'device'
  },
  {
    name: "Antibiotic Ear Drops",
    description: "Topical antibiotics applied directly to the ear canal to treat bacterial ear infections.",
    type: 'medication'
  },
  {
    name: "Oral Antibiotics",
    description: "Systemic antibiotics taken by mouth for middle ear infections that don't respond to topical treatment.",
    type: 'medication'
  },
  {
    name: "Decongestants",
    description: "Medications that reduce swelling in nasal passages and Eustachian tubes to relieve ear pressure.",
    type: 'medication'
  },
  {
    name: "Vestibular Rehabilitation",
    description: "Specialized physical therapy exercises to help the brain compensate for inner ear balance problems.",
    type: 'therapy'
  },
  {
    name: "Tinnitus Maskers",
    description: "Devices that produce white noise or pleasant sounds to help mask the perception of tinnitus.",
    type: 'device'
  },
  {
    name: "Corticosteroid Ear Drops",
    description: "Anti-inflammatory drops to reduce swelling and inflammation in the ear canal.",
    type: 'medication'
  },
  {
    name: "Antihistamines",
    description: "Medications to treat allergic reactions that can cause ear congestion and Eustachian tube dysfunction.",
    type: 'medication'
  },
  {
    name: "Sound Therapy",
    description: "Use of specific sounds or music to retrain the brain's response to tinnitus and promote habituation.",
    type: 'therapy'
  },
  {
    name: "Cochlear Implants",
    description: "Surgically implanted electronic devices that provide direct electrical stimulation to the auditory nerve.",
    type: 'device'
  }
]

const EARS_NUTRITION: NutritionItem[] = [
  {
    name: "Salmon",
    benefit: "Omega-3 fatty acids improve blood flow to the inner ear and protect against age-related hearing loss.",
    category: 'protein'
  },
  {
    name: "Bananas",
    benefit: "Rich in potassium, which helps regulate fluid in the inner ear and maintain proper hearing function.",
    category: 'fruit'
  },
  {
    name: "Spinach",
    benefit: "High in folate and magnesium, nutrients linked to reduced risk of hearing loss and tinnitus.",
    category: 'vegetable'
  },
  {
    name: "Dark Chocolate",
    benefit: "Contains zinc and antioxidants that support the inner ear and help prevent noise-induced damage.",
    category: 'other'
  },
  {
    name: "Oranges",
    benefit: "Vitamin C strengthens blood vessels and supports immune function to prevent ear infections.",
    category: 'fruit'
  },
  {
    name: "Broccoli",
    benefit: "Rich in vitamins C, K, and folate, all important for maintaining healthy hearing as you age.",
    category: 'vegetable'
  },
  {
    name: "Almonds",
    benefit: "Excellent source of magnesium and vitamin E, which protect delicate inner ear structures.",
    category: 'fat'
  },
  {
    name: "Chicken",
    benefit: "Good source of zinc, essential for immune function and healing of ear tissue.",
    category: 'protein'
  },
  {
    name: "Potatoes",
    benefit: "Provide potassium to help regulate fluid levels in the inner ear for optimal function.",
    category: 'vegetable'
  },
  {
    name: "Oysters",
    benefit: "Highest dietary source of zinc, crucial for maintaining the health of cochlear hair cells.",
    category: 'protein'
  },
  {
    name: "Beans",
    benefit: "Contain folate and zinc, nutrients that support circulation to the inner ear.",
    category: 'protein'
  },
  {
    name: "Tomatoes",
    benefit: "Rich in vitamins A, C, and potassium, supporting overall ear health and immune function.",
    category: 'vegetable'
  },
  {
    name: "Walnuts",
    benefit: "Omega-3s and magnesium help protect against age-related hearing decline.",
    category: 'fat'
  },
  {
    name: "Garlic",
    benefit: "Natural antimicrobial properties help prevent and fight ear infections.",
    category: 'vegetable'
  },
  {
    name: "Milk",
    benefit: "Provides vitamin D and calcium, important for maintaining the tiny bones in the middle ear.",
    category: 'protein'
  },
  {
    name: "Avocados",
    benefit: "Healthy fats and potassium support nerve function and inner ear fluid balance.",
    category: 'fat'
  },
  {
    name: "Flaxseeds",
    benefit: "Plant-based omega-3s reduce inflammation and support healthy blood flow to the ears.",
    category: 'other'
  },
  {
    name: "Mushrooms",
    benefit: "One of few food sources of vitamin D, essential for the small bones in the ear.",
    category: 'vegetable'
  },
  {
    name: "Citrus Fruits",
    benefit: "Vitamin C boosts immune system to help prevent ear infections and support healing.",
    category: 'fruit'
  },
  {
    name: "Whole Grains",
    benefit: "Provide magnesium and B vitamins that support nerve function and inner ear health.",
    category: 'grain'
  }
]

const EARS_CONTENT: BodyPartContent = {
  name: "Ears",
  description: "The ears are remarkable sensory organs responsible for both hearing and balance. Each ear consists of three main sections: the outer ear (pinna and ear canal), the middle ear (eardrum and three tiny bones called ossicles), and the inner ear (cochlea and vestibular system). Sound waves travel through the ear canal, causing the eardrum to vibrate. These vibrations are amplified by the ossicles and converted to electrical signals in the cochlea, which contains approximately 16,000 hair cells. The vestibular system in the inner ear detects head position and movement, working with the brain to maintain balance and spatial orientation.",
  image: "/images/ears.png",
  relatedSystems: ["Nervous", "Vestibular"],
  diseases: EARS_DISEASES,
  symptoms: EARS_SYMPTOMS,
  procedures: EARS_PROCEDURES,
  treatments: EARS_TREATMENTS,
  nutrition: EARS_NUTRITION
}

// ============================================================
// NOSE CONTENT
// ============================================================

const NOSE_DISEASES: Disease[] = [
  {
    name: "Sinusitis",
    description: "Inflammation or infection of the sinuses causing facial pain, pressure, congestion, and thick nasal discharge. Can be acute or chronic.",
    severity: 'moderate'
  },
  {
    name: "Allergic Rhinitis",
    description: "Inflammation of nasal passages triggered by allergens, causing sneezing, runny nose, congestion, and itchy eyes.",
    severity: 'mild'
  },
  {
    name: "Nasal Polyps",
    description: "Soft, painless growths on the lining of nasal passages or sinuses that can obstruct breathing and reduce smell.",
    severity: 'moderate'
  },
  {
    name: "Deviated Septum",
    description: "Displacement of the wall between the nostrils, which can cause breathing difficulties, snoring, and recurrent sinus infections.",
    severity: 'moderate'
  },
  {
    name: "Epistaxis (Nosebleeds)",
    description: "Bleeding from the nose, usually from blood vessels in the front of the septum. Can be caused by dry air, trauma, or medical conditions.",
    severity: 'mild'
  },
  {
    name: "Anosmia (Loss of Smell)",
    description: "Complete or partial loss of the sense of smell, which can affect taste and quality of life. May be temporary or permanent.",
    severity: 'moderate'
  },
  {
    name: "Nasal Fracture",
    description: "Break in the bone or cartilage of the nose, usually from trauma. Most common facial fracture causing pain, swelling, and deformity.",
    severity: 'moderate'
  },
  {
    name: "Rhinitis Medicamentosa",
    description: "Rebound nasal congestion caused by overuse of decongestant nasal sprays, creating a cycle of dependency.",
    severity: 'mild'
  },
  {
    name: "Nasal Vestibulitis",
    description: "Bacterial infection at the opening of the nostril causing pain, redness, and crusting. Can progress to serious infections.",
    severity: 'mild'
  },
  {
    name: "Nasal Tumors",
    description: "Abnormal growths in the nasal cavity or sinuses, which can be benign or malignant, causing obstruction and bleeding.",
    severity: 'severe'
  }
]

const NOSE_SYMPTOMS: Symptom[] = [
  {
    name: "Nasal Congestion",
    description: "Blocked or stuffy nose due to swollen nasal tissue and excess mucus production.",
    commonality: 'common'
  },
  {
    name: "Runny Nose",
    description: "Excess drainage of clear, thin mucus from the nose, often due to allergies, cold, or irritants.",
    commonality: 'common'
  },
  {
    name: "Sneezing",
    description: "Involuntary expulsion of air from the nose and mouth, often in response to irritants or allergens.",
    commonality: 'common'
  },
  {
    name: "Post-Nasal Drip",
    description: "Mucus dripping from the back of the nose into the throat, causing coughing and throat irritation.",
    commonality: 'common'
  },
  {
    name: "Loss of Smell",
    description: "Reduced or absent ability to detect odors, affecting taste and potentially indicating various conditions.",
    commonality: 'uncommon'
  },
  {
    name: "Facial Pain/Pressure",
    description: "Pain or pressure around the forehead, cheeks, and eyes, often associated with sinus inflammation.",
    commonality: 'common'
  },
  {
    name: "Nosebleeds",
    description: "Bleeding from one or both nostrils, ranging from minor spotting to significant blood loss.",
    commonality: 'common'
  },
  {
    name: "Nasal Itching",
    description: "Irritating itch inside the nose, commonly caused by allergies, dry air, or infections.",
    commonality: 'common'
  },
  {
    name: "Reduced Taste",
    description: "Diminished ability to taste food and drinks, often linked to loss of smell.",
    commonality: 'uncommon'
  },
  {
    name: "Snoring",
    description: "Noisy breathing during sleep caused by vibration of relaxed tissues in the throat and nasal passages.",
    commonality: 'common'
  }
]

const NOSE_PROCEDURES: Procedure[] = [
  {
    name: "Nasal Endoscopy",
    description: "Visual examination of nasal passages and sinuses using a thin, flexible tube with camera to diagnose conditions.",
    type: 'diagnostic'
  },
  {
    name: "CT Scan of Sinuses",
    description: "Detailed imaging of sinus cavities to identify inflammation, polyps, tumors, or structural abnormalities.",
    type: 'diagnostic'
  },
  {
    name: "Allergy Testing",
    description: "Skin prick or blood tests to identify specific allergens causing nasal symptoms.",
    type: 'diagnostic'
  },
  {
    name: "Septoplasty",
    description: "Surgical straightening of the nasal septum to improve breathing and reduce sinus problems.",
    type: 'surgical'
  },
  {
    name: "Functional Endoscopic Sinus Surgery (FESS)",
    description: "Minimally invasive surgery to open blocked sinuses and remove polyps using endoscopic guidance.",
    type: 'surgical'
  },
  {
    name: "Rhinoplasty",
    description: "Surgical reshaping of the nose for cosmetic or functional purposes, improving both appearance and breathing.",
    type: 'surgical'
  },
  {
    name: "Turbinate Reduction",
    description: "Procedure to reduce the size of swollen turbinates to improve nasal airflow and reduce congestion.",
    type: 'surgical'
  },
  {
    name: "Nasal Cauterization",
    description: "Procedure using heat, electricity, or chemicals to seal blood vessels and stop recurrent nosebleeds.",
    type: 'therapeutic'
  },
  {
    name: "Balloon Sinuplasty",
    description: "Minimally invasive procedure using a balloon catheter to open blocked sinus passages.",
    type: 'surgical'
  },
  {
    name: "Smell Testing (Olfactometry)",
    description: "Standardized tests to measure ability to detect and identify odors, assessing olfactory function.",
    type: 'diagnostic'
  }
]

const NOSE_TREATMENTS: Treatment[] = [
  {
    name: "Saline Nasal Irrigation",
    description: "Rinsing nasal passages with salt water solution to flush out mucus, allergens, and irritants.",
    type: 'lifestyle'
  },
  {
    name: "Nasal Corticosteroid Sprays",
    description: "Anti-inflammatory sprays that reduce swelling in nasal passages to relieve congestion and allergy symptoms.",
    type: 'medication'
  },
  {
    name: "Antihistamines",
    description: "Medications that block histamine to reduce allergy symptoms like sneezing, runny nose, and itching.",
    type: 'medication'
  },
  {
    name: "Decongestants",
    description: "Medications that shrink swollen nasal tissues to temporarily relieve congestion. Available as pills or sprays.",
    type: 'medication'
  },
  {
    name: "Allergy Immunotherapy",
    description: "Gradual exposure to allergens through shots or tablets to build tolerance and reduce allergic reactions.",
    type: 'therapy'
  },
  {
    name: "Antibiotics",
    description: "Prescription medications to treat bacterial sinus infections that don't resolve on their own.",
    type: 'medication'
  },
  {
    name: "Nasal Dilator Strips",
    description: "Adhesive strips worn on the nose to open nasal passages and improve breathing, especially during sleep.",
    type: 'device'
  },
  {
    name: "Humidifier Use",
    description: "Adding moisture to indoor air to prevent dry nasal passages, reduce irritation, and ease breathing.",
    type: 'lifestyle'
  },
  {
    name: "Leukotriene Modifiers",
    description: "Medications that block chemicals causing inflammation in allergic rhinitis and asthma.",
    type: 'medication'
  },
  {
    name: "Steam Inhalation",
    description: "Breathing in warm, moist air to loosen mucus, soothe irritated tissues, and relieve congestion.",
    type: 'lifestyle'
  }
]

const NOSE_NUTRITION: NutritionItem[] = [
  {
    name: "Garlic",
    benefit: "Natural antibacterial and anti-inflammatory properties help fight sinus infections and boost immunity.",
    category: 'vegetable'
  },
  {
    name: "Ginger",
    benefit: "Contains gingerol which has anti-inflammatory effects that can help reduce sinus pressure and congestion.",
    category: 'other'
  },
  {
    name: "Citrus Fruits",
    benefit: "High in vitamin C to boost immune function and reduce the duration of colds affecting the nose.",
    category: 'fruit'
  },
  {
    name: "Pineapple",
    benefit: "Contains bromelain, an enzyme that may reduce sinus inflammation and thin mucus for easier drainage.",
    category: 'fruit'
  },
  {
    name: "Honey",
    benefit: "Natural antibacterial properties and soothing effects help with post-nasal drip and throat irritation.",
    category: 'other'
  },
  {
    name: "Salmon",
    benefit: "Omega-3 fatty acids reduce inflammation throughout the body, including the nasal passages.",
    category: 'protein'
  },
  {
    name: "Turmeric",
    benefit: "Curcumin has powerful anti-inflammatory properties that can help reduce sinus inflammation and congestion.",
    category: 'other'
  },
  {
    name: "Horseradish",
    benefit: "Natural decongestant that can help clear sinuses and promote drainage when eaten.",
    category: 'vegetable'
  },
  {
    name: "Onions",
    benefit: "Contain quercetin and sulfur compounds that act as natural antihistamines and decongestants.",
    category: 'vegetable'
  },
  {
    name: "Peppers (Hot)",
    benefit: "Capsaicin in hot peppers is a natural decongestant that can thin mucus and relieve sinus pressure.",
    category: 'vegetable'
  },
  {
    name: "Leafy Greens",
    benefit: "Rich in antioxidants and vitamins A and C that support immune function and mucous membrane health.",
    category: 'vegetable'
  },
  {
    name: "Tomatoes",
    benefit: "Contain lycopene and vitamin C, supporting immune health and reducing inflammation.",
    category: 'vegetable'
  },
  {
    name: "Greek Yogurt",
    benefit: "Probiotics support immune function and may help reduce frequency of upper respiratory infections.",
    category: 'protein'
  },
  {
    name: "Berries",
    benefit: "Packed with antioxidants and vitamin C to boost immunity and fight inflammation.",
    category: 'fruit'
  },
  {
    name: "Green Tea",
    benefit: "Contains catechins with antiviral and anti-inflammatory properties that support respiratory health.",
    category: 'other'
  },
  {
    name: "Mushrooms",
    benefit: "Beta-glucans in mushrooms enhance immune function and may help prevent respiratory infections.",
    category: 'vegetable'
  },
  {
    name: "Almonds",
    benefit: "Vitamin E content supports immune function and healthy mucous membranes in the nasal passages.",
    category: 'fat'
  },
  {
    name: "Chicken Soup",
    benefit: "Traditional remedy that helps thin mucus, provides hydration, and has anti-inflammatory effects.",
    category: 'protein'
  },
  {
    name: "Pumpkin",
    benefit: "Rich in beta-carotene and vitamin A, essential for maintaining healthy nasal and sinus linings.",
    category: 'vegetable'
  },
  {
    name: "Water",
    benefit: "Proper hydration keeps mucus thin and flowing, preventing congestion and supporting sinus drainage.",
    category: 'other'
  }
]

const NOSE_CONTENT: BodyPartContent = {
  name: "Nose",
  description: "The nose is a vital sensory organ serving as the primary pathway for breathing and the seat of the sense of smell. It consists of an external structure made of bone and cartilage, and internal nasal cavities divided by the septum. The nasal passages are lined with mucous membranes and tiny hairs (cilia) that filter, warm, and humidify incoming air. The nose contains approximately 400 types of smell receptors capable of detecting over 1 trillion different scents. Connected to the paranasal sinuses—hollow spaces in the skull—the nose also plays a role in speech resonance, facial structure, and protecting the respiratory system from pathogens and debris.",
  image: "/images/nose.png",
  relatedSystems: ["Respiratory", "Immune"],
  diseases: NOSE_DISEASES,
  symptoms: NOSE_SYMPTOMS,
  procedures: NOSE_PROCEDURES,
  treatments: NOSE_TREATMENTS,
  nutrition: NOSE_NUTRITION
}

// Map of body part names to their content
export const BODY_PART_CONTENT: Record<string, BodyPartContent> = {
  "Brain": BRAIN_CONTENT,
  "Eyes": EYES_CONTENT,
  "Ears": EARS_CONTENT,
  "Nose": NOSE_CONTENT
}

// Helper function to get content for a body part
export function getBodyPartContent(bodyPartName: string): BodyPartContent | null {
  return BODY_PART_CONTENT[bodyPartName] || null
}

// Helper to check if a body part has content
export function hasBodyPartContent(bodyPartName: string): boolean {
  return bodyPartName in BODY_PART_CONTENT
}
