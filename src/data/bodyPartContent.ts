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

// ============================================================
// MOUTH, TEETH & GUMS CONTENT
// ============================================================

const MOUTH_DISEASES: Disease[] = [
  {
    name: "Dental Caries (Cavities)",
    description: "Tooth decay caused by bacteria producing acids that destroy enamel and dentin. The most common chronic disease worldwide.",
    severity: 'moderate'
  },
  {
    name: "Periodontal Disease (Gum Disease)",
    description: "Infection of the tissues surrounding teeth, ranging from gingivitis to advanced periodontitis with bone loss and tooth loss.",
    severity: 'severe'
  },
  {
    name: "Gingivitis",
    description: "Early stage of gum disease causing red, swollen, and bleeding gums. Reversible with proper oral hygiene.",
    severity: 'mild'
  },
  {
    name: "Oral Cancer",
    description: "Malignant growths in the mouth, tongue, lips, or throat. Risk factors include tobacco, alcohol, and HPV infection.",
    severity: 'severe'
  },
  {
    name: "Oral Thrush (Candidiasis)",
    description: "Fungal infection causing white patches on tongue and inner cheeks. Common in infants, elderly, and immunocompromised individuals.",
    severity: 'mild'
  },
  {
    name: "Temporomandibular Joint Disorder (TMJ)",
    description: "Dysfunction of the jaw joint causing pain, clicking, and difficulty chewing. Often related to teeth grinding or stress.",
    severity: 'moderate'
  },
  {
    name: "Tooth Abscess",
    description: "Pocket of pus caused by bacterial infection at the tooth root or gum. Causes severe pain and can spread to other areas.",
    severity: 'severe'
  },
  {
    name: "Oral Herpes (Cold Sores)",
    description: "Viral infection causing painful blisters on lips and mouth. Caused by herpes simplex virus and recurs periodically.",
    severity: 'mild'
  },
  {
    name: "Leukoplakia",
    description: "White patches on gums, tongue, or cheek lining that cannot be scraped off. Potentially precancerous condition.",
    severity: 'moderate'
  },
  {
    name: "Bruxism (Teeth Grinding)",
    description: "Unconscious clenching or grinding of teeth, often during sleep. Can cause tooth damage, jaw pain, and headaches.",
    severity: 'moderate'
  }
]

const MOUTH_SYMPTOMS: Symptom[] = [
  {
    name: "Toothache",
    description: "Pain in or around a tooth, ranging from mild sensitivity to severe throbbing. Often indicates decay or infection.",
    commonality: 'common'
  },
  {
    name: "Bleeding Gums",
    description: "Blood when brushing, flossing, or eating. A common sign of gingivitis or periodontal disease.",
    commonality: 'common'
  },
  {
    name: "Bad Breath (Halitosis)",
    description: "Persistent unpleasant odor from the mouth despite oral hygiene. Can indicate gum disease, decay, or other conditions.",
    commonality: 'common'
  },
  {
    name: "Tooth Sensitivity",
    description: "Sharp pain or discomfort when consuming hot, cold, sweet, or acidic foods and drinks.",
    commonality: 'common'
  },
  {
    name: "Mouth Sores",
    description: "Painful ulcers or lesions in the mouth, on the gums, tongue, or inner cheeks. Various causes from canker sores to infections.",
    commonality: 'common'
  },
  {
    name: "Swollen Gums",
    description: "Puffy, red, or tender gum tissue. Often accompanies gum disease, infection, or irritation.",
    commonality: 'common'
  },
  {
    name: "Jaw Pain",
    description: "Discomfort in the jaw joint or muscles, often related to TMJ disorder, grinding, or dental problems.",
    commonality: 'common'
  },
  {
    name: "Dry Mouth (Xerostomia)",
    description: "Insufficient saliva production causing sticky, dry feeling. Can increase risk of decay and gum disease.",
    commonality: 'common'
  },
  {
    name: "Loose Teeth",
    description: "Teeth that move or feel unstable. In adults, often indicates advanced gum disease or bone loss.",
    commonality: 'uncommon'
  },
  {
    name: "Difficulty Chewing",
    description: "Pain or inability to chew properly due to dental problems, jaw issues, or missing teeth.",
    commonality: 'uncommon'
  }
]

const MOUTH_PROCEDURES: Procedure[] = [
  {
    name: "Dental Examination",
    description: "Comprehensive evaluation of teeth, gums, and oral tissues including visual inspection and probing for decay and gum pockets.",
    type: 'diagnostic'
  },
  {
    name: "Dental X-rays",
    description: "Radiographic imaging to detect cavities, bone loss, impacted teeth, and other problems not visible during examination.",
    type: 'diagnostic'
  },
  {
    name: "Professional Cleaning (Prophylaxis)",
    description: "Removal of plaque, tartar, and stains from teeth by a dental hygienist, including polishing.",
    type: 'therapeutic'
  },
  {
    name: "Root Canal Treatment",
    description: "Removal of infected pulp tissue from inside a tooth, followed by cleaning, shaping, and filling the root canals.",
    type: 'surgical'
  },
  {
    name: "Tooth Extraction",
    description: "Surgical removal of a tooth that is severely decayed, damaged, or causing crowding.",
    type: 'surgical'
  },
  {
    name: "Dental Filling",
    description: "Restoration of a decayed tooth using materials like composite resin, amalgam, or ceramic to restore function.",
    type: 'therapeutic'
  },
  {
    name: "Dental Crown",
    description: "Cap placed over a damaged tooth to restore its shape, size, strength, and appearance.",
    type: 'therapeutic'
  },
  {
    name: "Periodontal Scaling and Root Planing",
    description: "Deep cleaning below the gumline to remove tartar and bacteria from tooth roots in gum disease treatment.",
    type: 'therapeutic'
  },
  {
    name: "Dental Implant Surgery",
    description: "Surgical placement of titanium posts into the jawbone to serve as artificial tooth roots for replacement teeth.",
    type: 'surgical'
  },
  {
    name: "Oral Biopsy",
    description: "Removal of tissue sample from the mouth for laboratory analysis to diagnose oral lesions or suspected cancer.",
    type: 'diagnostic'
  }
]

const MOUTH_TREATMENTS: Treatment[] = [
  {
    name: "Fluoride Treatment",
    description: "Application of fluoride to teeth to strengthen enamel and prevent decay. Available as gels, varnishes, or rinses.",
    type: 'therapy'
  },
  {
    name: "Dental Sealants",
    description: "Thin protective coating applied to chewing surfaces of back teeth to prevent decay in grooves and pits.",
    type: 'therapy'
  },
  {
    name: "Orthodontic Braces",
    description: "Devices that gradually move teeth into proper alignment using brackets, wires, or clear aligners.",
    type: 'device'
  },
  {
    name: "Night Guard",
    description: "Custom-fitted oral appliance worn during sleep to protect teeth from grinding and clenching damage.",
    type: 'device'
  },
  {
    name: "Prescription Mouthwash",
    description: "Medicated rinses containing chlorhexidine or fluoride to treat gum disease or prevent decay.",
    type: 'medication'
  },
  {
    name: "Antibiotics for Dental Infections",
    description: "Oral or topical antibiotics prescribed to treat bacterial infections of teeth, gums, or surrounding tissues.",
    type: 'medication'
  },
  {
    name: "Dental Bridge",
    description: "Fixed prosthetic device that replaces missing teeth by anchoring to adjacent natural teeth.",
    type: 'device'
  },
  {
    name: "Dentures",
    description: "Removable replacements for missing teeth and surrounding tissues. Can be complete or partial.",
    type: 'device'
  },
  {
    name: "Gum Graft Surgery",
    description: "Surgical procedure to cover exposed tooth roots by transplanting gum tissue from another area.",
    type: 'therapy'
  },
  {
    name: "Pain Management",
    description: "Use of analgesics, anti-inflammatories, or local anesthetics to control dental pain during and after procedures.",
    type: 'medication'
  }
]

const MOUTH_NUTRITION: NutritionItem[] = [
  {
    name: "Cheese",
    benefit: "Contains calcium and casein that strengthen tooth enamel and neutralize acids in the mouth.",
    category: 'protein'
  },
  {
    name: "Leafy Greens",
    benefit: "High in calcium, folic acid, and vitamins that promote oral health and gum tissue repair.",
    category: 'vegetable'
  },
  {
    name: "Apples",
    benefit: "Fibrous texture stimulates saliva production and helps clean teeth naturally while chewing.",
    category: 'fruit'
  },
  {
    name: "Carrots",
    benefit: "Crunchy texture acts as a natural toothbrush; rich in vitamin A for healthy tooth enamel.",
    category: 'vegetable'
  },
  {
    name: "Celery",
    benefit: "Fibrous strands clean between teeth; high water content stimulates saliva to wash away bacteria.",
    category: 'vegetable'
  },
  {
    name: "Almonds",
    benefit: "Good source of calcium and protein with low sugar content, supporting tooth strength.",
    category: 'fat'
  },
  {
    name: "Yogurt",
    benefit: "Probiotics support healthy oral bacteria balance; calcium strengthens teeth and bones.",
    category: 'protein'
  },
  {
    name: "Salmon",
    benefit: "Vitamin D helps the body absorb calcium; omega-3s reduce inflammation in gum tissue.",
    category: 'protein'
  },
  {
    name: "Green Tea",
    benefit: "Polyphenols suppress bacteria that cause cavities and gum disease; reduces bad breath.",
    category: 'other'
  },
  {
    name: "Cranberries",
    benefit: "Contain compounds that prevent bacteria from sticking to teeth and forming plaque.",
    category: 'fruit'
  },
  {
    name: "Strawberries",
    benefit: "Contain malic acid which naturally whitens teeth; vitamin C supports gum health.",
    category: 'fruit'
  },
  {
    name: "Water",
    benefit: "Rinses away food particles and bacteria; fluoridated water helps prevent tooth decay.",
    category: 'other'
  },
  {
    name: "Milk",
    benefit: "Rich in calcium and phosphorus that remineralize tooth enamel; protein casein protects teeth.",
    category: 'protein'
  },
  {
    name: "Shiitake Mushrooms",
    benefit: "Contain lentinan which inhibits growth of bacteria that cause tooth decay and gum disease.",
    category: 'vegetable'
  },
  {
    name: "Onions",
    benefit: "Raw onions have antibacterial properties that kill harmful bacteria in the mouth.",
    category: 'vegetable'
  },
  {
    name: "Raisins",
    benefit: "Contain phytochemicals that fight bacteria causing cavities and gum disease, despite sweetness.",
    category: 'fruit'
  },
  {
    name: "Whole Grains",
    benefit: "Complex carbohydrates don't break down into sugars quickly; B vitamins support gum health.",
    category: 'grain'
  },
  {
    name: "Kiwi",
    benefit: "Highest vitamin C content of common fruits; essential for collagen production in gum tissue.",
    category: 'fruit'
  },
  {
    name: "Sesame Seeds",
    benefit: "Help scrub plaque from teeth; rich in calcium for tooth and bone strength.",
    category: 'other'
  },
  {
    name: "Ginger",
    benefit: "Natural anti-inflammatory that promotes healthy gum tissue and freshens breath.",
    category: 'other'
  }
]

const MOUTH_CONTENT: BodyPartContent = {
  name: "Teeth",
  description: "The mouth is the gateway to the digestive system, serving essential functions in eating, speaking, and breathing. Adults have 32 permanent teeth, each with a crown covered in enamel (the hardest substance in the body) and roots anchored in the jawbone. The gums (gingiva) are soft tissues that cover and protect the tooth roots and jawbone. The mouth contains over 700 species of bacteria, most beneficial for digestion. Saliva, produced by three pairs of major salivary glands, aids digestion, protects teeth, and fights infection. The tongue, covered with taste buds, helps with chewing, swallowing, and speech articulation.",
  image: "/images/mouth.png",
  relatedSystems: ["Digestive", "Immune"],
  diseases: MOUTH_DISEASES,
  symptoms: MOUTH_SYMPTOMS,
  procedures: MOUTH_PROCEDURES,
  treatments: MOUTH_TREATMENTS,
  nutrition: MOUTH_NUTRITION
}

// ============================================================
// PITUITARY GLAND CONTENT
// ============================================================

const PITUITARY_DISEASES: Disease[] = [
  {
    name: "Pituitary Adenoma",
    description: "Benign tumor of the pituitary gland that can cause hormone overproduction or underproduction, and may compress nearby structures.",
    severity: 'moderate'
  },
  {
    name: "Hypopituitarism",
    description: "Underactive pituitary gland that doesn't produce enough of one or more hormones, affecting growth, metabolism, and reproduction.",
    severity: 'severe'
  },
  {
    name: "Acromegaly",
    description: "Excess growth hormone production in adults causing enlarged hands, feet, and facial features, along with organ enlargement.",
    severity: 'severe'
  },
  {
    name: "Gigantism",
    description: "Excess growth hormone in children before bone growth plates close, causing abnormally tall stature and health complications.",
    severity: 'severe'
  },
  {
    name: "Cushing's Disease",
    description: "Pituitary tumor causing excess ACTH production, leading to high cortisol levels with weight gain, high blood pressure, and mood changes.",
    severity: 'severe'
  },
  {
    name: "Prolactinoma",
    description: "Most common pituitary tumor that overproduces prolactin, causing breast milk production, infertility, and sexual dysfunction.",
    severity: 'moderate'
  },
  {
    name: "Diabetes Insipidus",
    description: "Deficiency of antidiuretic hormone (ADH) causing excessive thirst and urination of large amounts of dilute urine.",
    severity: 'moderate'
  },
  {
    name: "Empty Sella Syndrome",
    description: "Condition where the pituitary gland shrinks or becomes flattened, sometimes causing hormonal deficiencies.",
    severity: 'mild'
  },
  {
    name: "Sheehan's Syndrome",
    description: "Pituitary gland damage due to severe blood loss during childbirth, causing hormone deficiencies.",
    severity: 'severe'
  },
  {
    name: "Pituitary Apoplexy",
    description: "Medical emergency caused by sudden bleeding into or loss of blood supply to the pituitary gland, causing severe headache and vision loss.",
    severity: 'severe'
  }
]

const PITUITARY_SYMPTOMS: Symptom[] = [
  {
    name: "Headaches",
    description: "Persistent or severe headaches, especially if caused by a pituitary tumor pressing on surrounding structures.",
    commonality: 'common'
  },
  {
    name: "Vision Problems",
    description: "Blurred vision, double vision, or loss of peripheral vision due to tumor pressure on the optic nerves.",
    commonality: 'common'
  },
  {
    name: "Fatigue",
    description: "Persistent tiredness and lack of energy, often related to cortisol or thyroid hormone deficiency.",
    commonality: 'common'
  },
  {
    name: "Unexplained Weight Changes",
    description: "Weight gain or loss without diet changes, indicating hormonal imbalances affecting metabolism.",
    commonality: 'common'
  },
  {
    name: "Irregular Menstruation",
    description: "Absent, irregular, or unusually heavy periods in women due to reproductive hormone imbalances.",
    commonality: 'common'
  },
  {
    name: "Sexual Dysfunction",
    description: "Decreased libido, erectile dysfunction, or infertility related to gonadotropin hormone deficiency.",
    commonality: 'common'
  },
  {
    name: "Excessive Thirst and Urination",
    description: "Drinking large amounts of water and frequent urination, characteristic of diabetes insipidus.",
    commonality: 'uncommon'
  },
  {
    name: "Mood Changes",
    description: "Depression, anxiety, or irritability that can result from hormonal imbalances.",
    commonality: 'common'
  },
  {
    name: "Growth Abnormalities",
    description: "Stunted growth in children or enlarged features in adults indicating growth hormone disorders.",
    commonality: 'uncommon'
  },
  {
    name: "Milk Production (Non-Pregnant)",
    description: "Unexpected breast milk production in women who aren't pregnant or nursing, or in men.",
    commonality: 'uncommon'
  }
]

const PITUITARY_PROCEDURES: Procedure[] = [
  {
    name: "MRI of Pituitary",
    description: "High-resolution magnetic resonance imaging to visualize pituitary gland structure and detect tumors.",
    type: 'diagnostic'
  },
  {
    name: "Hormone Blood Tests",
    description: "Blood tests measuring levels of pituitary hormones and target gland hormones to assess function.",
    type: 'diagnostic'
  },
  {
    name: "Visual Field Testing",
    description: "Examination to detect vision loss caused by pituitary tumors pressing on optic nerves.",
    type: 'diagnostic'
  },
  {
    name: "Stimulation Tests",
    description: "Tests using medications to stimulate hormone release, evaluating pituitary reserve function.",
    type: 'diagnostic'
  },
  {
    name: "Transsphenoidal Surgery",
    description: "Minimally invasive surgery through the nose and sinuses to remove pituitary tumors.",
    type: 'surgical'
  },
  {
    name: "Craniotomy",
    description: "Open brain surgery to access and remove large or complex pituitary tumors through the skull.",
    type: 'surgical'
  },
  {
    name: "Stereotactic Radiosurgery",
    description: "Precisely targeted radiation beams to treat pituitary tumors while minimizing damage to surrounding tissue.",
    type: 'therapeutic'
  },
  {
    name: "Petrosal Sinus Sampling",
    description: "Catheter procedure to sample blood from veins near the pituitary to localize hormone-producing tumors.",
    type: 'diagnostic'
  },
  {
    name: "CT Scan of Sella",
    description: "Computed tomography of the sella turcica (bony structure housing the pituitary) to assess bone involvement.",
    type: 'diagnostic'
  },
  {
    name: "Water Deprivation Test",
    description: "Controlled test restricting fluids to diagnose diabetes insipidus by measuring urine concentration.",
    type: 'diagnostic'
  }
]

const PITUITARY_TREATMENTS: Treatment[] = [
  {
    name: "Hormone Replacement Therapy",
    description: "Medications to replace deficient hormones such as cortisol, thyroid hormone, growth hormone, or sex hormones.",
    type: 'medication'
  },
  {
    name: "Dopamine Agonists",
    description: "Medications like cabergoline or bromocriptine that shrink prolactin-producing tumors and normalize levels.",
    type: 'medication'
  },
  {
    name: "Somatostatin Analogs",
    description: "Drugs that reduce growth hormone production in acromegaly, such as octreotide or lanreotide.",
    type: 'medication'
  },
  {
    name: "Growth Hormone Therapy",
    description: "Synthetic growth hormone injections for children and adults with growth hormone deficiency.",
    type: 'medication'
  },
  {
    name: "Desmopressin (DDAVP)",
    description: "Synthetic antidiuretic hormone to treat diabetes insipidus by reducing urine production.",
    type: 'medication'
  },
  {
    name: "Radiation Therapy",
    description: "Conventional or stereotactic radiation to control pituitary tumor growth when surgery isn't fully effective.",
    type: 'therapy'
  },
  {
    name: "Testosterone Replacement",
    description: "Hormone therapy for men with pituitary-related testosterone deficiency affecting energy and sexual function.",
    type: 'medication'
  },
  {
    name: "Estrogen/Progesterone Therapy",
    description: "Hormone replacement for women with pituitary-related deficiency affecting menstruation and bone health.",
    type: 'medication'
  },
  {
    name: "Cortisol-Lowering Medications",
    description: "Drugs like ketoconazole or metyrapone to reduce cortisol levels in Cushing's disease.",
    type: 'medication'
  },
  {
    name: "Watchful Waiting",
    description: "Regular monitoring with MRI and hormone tests for small, non-functioning pituitary tumors.",
    type: 'lifestyle'
  }
]

const PITUITARY_NUTRITION: NutritionItem[] = [
  {
    name: "Salmon",
    benefit: "Omega-3 fatty acids support hormone production and reduce inflammation affecting gland function.",
    category: 'protein'
  },
  {
    name: "Eggs",
    benefit: "Rich in protein and choline, essential building blocks for hormone synthesis.",
    category: 'protein'
  },
  {
    name: "Leafy Greens",
    benefit: "Provide folate and magnesium that support overall endocrine system function.",
    category: 'vegetable'
  },
  {
    name: "Brazil Nuts",
    benefit: "High in selenium, crucial for thyroid hormone conversion influenced by pituitary TSH.",
    category: 'fat'
  },
  {
    name: "Avocados",
    benefit: "Healthy fats support hormone production and help maintain stable blood sugar levels.",
    category: 'fat'
  },
  {
    name: "Sweet Potatoes",
    benefit: "Complex carbohydrates provide steady energy; vitamin A supports hormone synthesis.",
    category: 'vegetable'
  },
  {
    name: "Chicken",
    benefit: "Lean protein provides amino acids necessary for hormone production without excess fat.",
    category: 'protein'
  },
  {
    name: "Quinoa",
    benefit: "Complete protein with all essential amino acids needed for hormone synthesis.",
    category: 'grain'
  },
  {
    name: "Berries",
    benefit: "Antioxidants protect endocrine tissues from oxidative stress and inflammation.",
    category: 'fruit'
  },
  {
    name: "Walnuts",
    benefit: "Contain omega-3s and antioxidants that support brain and endocrine health.",
    category: 'fat'
  },
  {
    name: "Olive Oil",
    benefit: "Healthy monounsaturated fats support hormone production and reduce inflammation.",
    category: 'fat'
  },
  {
    name: "Broccoli",
    benefit: "Contains compounds that help balance estrogen metabolism regulated by pituitary hormones.",
    category: 'vegetable'
  },
  {
    name: "Legumes",
    benefit: "Plant protein and fiber help maintain stable insulin levels, supporting overall hormonal balance.",
    category: 'protein'
  },
  {
    name: "Pumpkin Seeds",
    benefit: "Rich in zinc, essential for growth hormone production and immune function.",
    category: 'other'
  },
  {
    name: "Greek Yogurt",
    benefit: "Protein and probiotics support nutrient absorption for optimal hormone production.",
    category: 'protein'
  },
  {
    name: "Turmeric",
    benefit: "Anti-inflammatory properties support healthy endocrine function and hormone balance.",
    category: 'other'
  },
  {
    name: "Spinach",
    benefit: "Iron and B vitamins support energy metabolism and hormone-producing cells.",
    category: 'vegetable'
  },
  {
    name: "Mushrooms",
    benefit: "Vitamin D supports calcium metabolism and overall endocrine function.",
    category: 'vegetable'
  },
  {
    name: "Coconut Oil",
    benefit: "Medium-chain triglycerides provide quick energy for hormone-producing glands.",
    category: 'fat'
  },
  {
    name: "Ginger",
    benefit: "Supports circulation and reduces inflammation in endocrine tissues.",
    category: 'other'
  }
]

const PITUITARY_CONTENT: BodyPartContent = {
  name: "Pituitary gland",
  description: "The pituitary gland, often called the 'master gland,' is a pea-sized organ located at the base of the brain, nestled in a bony structure called the sella turcica. Despite its small size, it produces and regulates essential hormones that control growth, metabolism, reproduction, stress response, and water balance. The gland has two main parts: the anterior pituitary (producing growth hormone, prolactin, TSH, ACTH, FSH, and LH) and the posterior pituitary (storing and releasing oxytocin and antidiuretic hormone from the hypothalamus). Connected to the hypothalamus by a stalk, the pituitary acts as the critical link between the nervous and endocrine systems.",
  image: "/images/pituitary.png",
  relatedSystems: ["Endocrine", "Nervous"],
  diseases: PITUITARY_DISEASES,
  symptoms: PITUITARY_SYMPTOMS,
  procedures: PITUITARY_PROCEDURES,
  treatments: PITUITARY_TREATMENTS,
  nutrition: PITUITARY_NUTRITION
}

// ============================================================
// THYROID CONTENT
// ============================================================

const THYROID_DISEASES: Disease[] = [
  {
    name: "Hypothyroidism",
    description: "Underactive thyroid producing insufficient hormones, causing fatigue, weight gain, cold intolerance, and depression.",
    severity: 'moderate'
  },
  {
    name: "Hyperthyroidism",
    description: "Overactive thyroid producing excess hormones, causing weight loss, rapid heartbeat, anxiety, and heat intolerance.",
    severity: 'moderate'
  },
  {
    name: "Hashimoto's Thyroiditis",
    description: "Autoimmune disease where the immune system attacks the thyroid, gradually causing hypothyroidism. Most common thyroid disorder.",
    severity: 'moderate'
  },
  {
    name: "Graves' Disease",
    description: "Autoimmune disorder causing hyperthyroidism, often with bulging eyes (Graves' ophthalmopathy) and skin changes.",
    severity: 'severe'
  },
  {
    name: "Thyroid Nodules",
    description: "Lumps in the thyroid gland that may be solid or fluid-filled. Most are benign but some require evaluation for cancer.",
    severity: 'mild'
  },
  {
    name: "Thyroid Cancer",
    description: "Malignant growths in the thyroid, including papillary, follicular, medullary, and anaplastic types. Most are highly treatable.",
    severity: 'severe'
  },
  {
    name: "Goiter",
    description: "Enlarged thyroid gland causing visible neck swelling. Can be caused by iodine deficiency, autoimmune disease, or nodules.",
    severity: 'moderate'
  },
  {
    name: "Thyroiditis",
    description: "Inflammation of the thyroid gland, which can be caused by autoimmune disease, infection, or medication.",
    severity: 'moderate'
  },
  {
    name: "Thyroid Storm",
    description: "Life-threatening condition of severely elevated thyroid hormones causing high fever, rapid heart rate, and altered consciousness.",
    severity: 'severe'
  },
  {
    name: "Myxedema Coma",
    description: "Rare, life-threatening complication of severe hypothyroidism causing low body temperature, confusion, and organ failure.",
    severity: 'severe'
  }
]

const THYROID_SYMPTOMS: Symptom[] = [
  {
    name: "Fatigue",
    description: "Persistent tiredness and lack of energy, common in both hypothyroidism (constant) and hyperthyroidism (with weakness).",
    commonality: 'common'
  },
  {
    name: "Weight Changes",
    description: "Unexplained weight gain (hypothyroidism) or weight loss despite increased appetite (hyperthyroidism).",
    commonality: 'common'
  },
  {
    name: "Temperature Sensitivity",
    description: "Feeling unusually cold (hypothyroidism) or hot and sweaty (hyperthyroidism) regardless of environment.",
    commonality: 'common'
  },
  {
    name: "Heart Rate Changes",
    description: "Slow heart rate in hypothyroidism; rapid, irregular, or pounding heartbeat in hyperthyroidism.",
    commonality: 'common'
  },
  {
    name: "Mood Changes",
    description: "Depression and mental sluggishness (hypothyroidism) or anxiety, irritability, and nervousness (hyperthyroidism).",
    commonality: 'common'
  },
  {
    name: "Hair and Skin Changes",
    description: "Dry skin and hair loss in hypothyroidism; warm, moist skin and fine hair in hyperthyroidism.",
    commonality: 'common'
  },
  {
    name: "Neck Swelling",
    description: "Visible enlargement of the thyroid gland (goiter) causing fullness or lump in the front of the neck.",
    commonality: 'common'
  },
  {
    name: "Menstrual Irregularities",
    description: "Heavy or irregular periods in hypothyroidism; light or absent periods in hyperthyroidism.",
    commonality: 'common'
  },
  {
    name: "Muscle Weakness",
    description: "General weakness and muscle aches, particularly affecting the upper arms and thighs.",
    commonality: 'common'
  },
  {
    name: "Difficulty Swallowing",
    description: "Trouble swallowing or feeling of tightness in the throat due to enlarged thyroid or nodules.",
    commonality: 'uncommon'
  }
]

const THYROID_PROCEDURES: Procedure[] = [
  {
    name: "Thyroid Function Tests",
    description: "Blood tests measuring TSH, T3, and T4 hormone levels to assess thyroid function.",
    type: 'diagnostic'
  },
  {
    name: "Thyroid Ultrasound",
    description: "Imaging using sound waves to visualize thyroid structure, detect nodules, and guide biopsies.",
    type: 'diagnostic'
  },
  {
    name: "Fine Needle Aspiration Biopsy",
    description: "Using a thin needle to extract cells from thyroid nodules for microscopic examination to rule out cancer.",
    type: 'diagnostic'
  },
  {
    name: "Radioactive Iodine Uptake Scan",
    description: "Nuclear medicine test measuring how much radioactive iodine the thyroid absorbs to evaluate function.",
    type: 'diagnostic'
  },
  {
    name: "Thyroidectomy",
    description: "Surgical removal of all or part of the thyroid gland for cancer, large goiter, or hyperthyroidism.",
    type: 'surgical'
  },
  {
    name: "Radioactive Iodine Therapy",
    description: "Oral radioactive iodine that destroys overactive thyroid tissue or remaining cancer cells after surgery.",
    type: 'therapeutic'
  },
  {
    name: "Thyroid Antibody Tests",
    description: "Blood tests detecting antibodies associated with autoimmune thyroid diseases like Hashimoto's or Graves'.",
    type: 'diagnostic'
  },
  {
    name: "Lobectomy",
    description: "Surgical removal of one lobe of the thyroid gland, often for isolated nodules or small cancers.",
    type: 'surgical'
  },
  {
    name: "CT/MRI of Thyroid",
    description: "Advanced imaging to evaluate thyroid size, position, and relationship to surrounding structures.",
    type: 'diagnostic'
  },
  {
    name: "Thyroid Hormone Suppression Test",
    description: "Evaluating whether thyroid nodules respond to TSH suppression to help determine malignancy risk.",
    type: 'diagnostic'
  }
]

const THYROID_TREATMENTS: Treatment[] = [
  {
    name: "Levothyroxine (Synthroid)",
    description: "Synthetic thyroid hormone replacement for hypothyroidism, taken daily to normalize hormone levels.",
    type: 'medication'
  },
  {
    name: "Antithyroid Medications",
    description: "Drugs like methimazole or propylthiouracil that reduce thyroid hormone production in hyperthyroidism.",
    type: 'medication'
  },
  {
    name: "Beta Blockers",
    description: "Medications to control rapid heart rate, tremor, and anxiety symptoms of hyperthyroidism.",
    type: 'medication'
  },
  {
    name: "Radioactive Iodine Treatment",
    description: "Oral radioactive iodine that permanently reduces thyroid hormone production in hyperthyroidism.",
    type: 'therapy'
  },
  {
    name: "Selenium Supplementation",
    description: "Supplements that may help reduce thyroid antibodies in autoimmune thyroid disease.",
    type: 'lifestyle'
  },
  {
    name: "Thyroid Surgery",
    description: "Removal of thyroid tissue to treat cancer, large goiter, or hyperthyroidism unresponsive to other treatments.",
    type: 'therapy'
  },
  {
    name: "TSH Suppression Therapy",
    description: "Higher doses of thyroid hormone to suppress TSH and slow growth of thyroid cancer cells.",
    type: 'medication'
  },
  {
    name: "Calcium and Vitamin D",
    description: "Supplements often needed after thyroid surgery to maintain bone health and prevent hypocalcemia.",
    type: 'lifestyle'
  },
  {
    name: "External Beam Radiation",
    description: "Targeted radiation therapy for aggressive thyroid cancers that don't respond to radioactive iodine.",
    type: 'therapy'
  },
  {
    name: "Targeted Drug Therapy",
    description: "Newer medications targeting specific cancer cell mutations in advanced or resistant thyroid cancer.",
    type: 'medication'
  }
]

const THYROID_NUTRITION: NutritionItem[] = [
  {
    name: "Seaweed",
    benefit: "Natural source of iodine essential for thyroid hormone production. Important for those with iodine deficiency.",
    category: 'vegetable'
  },
  {
    name: "Brazil Nuts",
    benefit: "Richest food source of selenium, crucial for converting T4 to active T3 thyroid hormone.",
    category: 'fat'
  },
  {
    name: "Salmon",
    benefit: "Provides omega-3s that reduce thyroid inflammation and selenium for hormone conversion.",
    category: 'protein'
  },
  {
    name: "Eggs",
    benefit: "Contain both iodine and selenium, two key nutrients for healthy thyroid function.",
    category: 'protein'
  },
  {
    name: "Greek Yogurt",
    benefit: "Good source of iodine and protein; probiotics support gut health affecting thyroid function.",
    category: 'protein'
  },
  {
    name: "Chicken",
    benefit: "Provides zinc necessary for thyroid hormone production and immune function.",
    category: 'protein'
  },
  {
    name: "Shellfish",
    benefit: "Excellent source of zinc and iodine, both critical for thyroid health.",
    category: 'protein'
  },
  {
    name: "Berries",
    benefit: "Antioxidants protect the thyroid gland from oxidative damage and inflammation.",
    category: 'fruit'
  },
  {
    name: "Spinach",
    benefit: "Provides iron, important because thyroid disorders can affect iron metabolism.",
    category: 'vegetable'
  },
  {
    name: "Nuts",
    benefit: "Healthy fats and minerals support overall endocrine function and hormone production.",
    category: 'fat'
  },
  {
    name: "Beans",
    benefit: "Complex carbohydrates provide sustained energy; zinc supports thyroid function.",
    category: 'protein'
  },
  {
    name: "Sardines",
    benefit: "Rich in omega-3s, selenium, and vitamin D, all supporting thyroid health.",
    category: 'protein'
  },
  {
    name: "Pumpkin Seeds",
    benefit: "High in zinc, which is essential for thyroid hormone synthesis.",
    category: 'other'
  },
  {
    name: "Quinoa",
    benefit: "Gluten-free grain providing protein and minerals; helpful for those with Hashimoto's avoiding gluten.",
    category: 'grain'
  },
  {
    name: "Olive Oil",
    benefit: "Healthy fats support hormone production and reduce inflammation in autoimmune thyroid disease.",
    category: 'fat'
  },
  {
    name: "Bone Broth",
    benefit: "Supports gut health, which is closely linked to thyroid function and autoimmune conditions.",
    category: 'protein'
  },
  {
    name: "Turmeric",
    benefit: "Anti-inflammatory properties help manage autoimmune thyroid inflammation.",
    category: 'other'
  },
  {
    name: "Coconut Oil",
    benefit: "Medium-chain fatty acids support metabolism and may help with hypothyroid symptoms.",
    category: 'fat'
  },
  {
    name: "Fermented Foods",
    benefit: "Probiotics support gut health, important for thyroid hormone conversion and immune regulation.",
    category: 'other'
  },
  {
    name: "Avocados",
    benefit: "Healthy fats and tyrosine support thyroid hormone production and overall gland health.",
    category: 'fat'
  }
]

const THYROID_CONTENT: BodyPartContent = {
  name: "Thyroid",
  description: "The thyroid is a butterfly-shaped gland located in the front of the neck, just below the Adam's apple. Weighing only about 20 grams, it produces thyroid hormones (T3 and T4) that regulate the body's metabolism, affecting virtually every cell and organ. The thyroid controls how fast the body burns calories, heart rate, body temperature, and protein synthesis. It requires iodine from the diet to produce hormones and is regulated by thyroid-stimulating hormone (TSH) from the pituitary gland. The thyroid also produces calcitonin, which helps regulate blood calcium levels. Thyroid disorders are among the most common endocrine conditions, affecting an estimated 20 million Americans.",
  image: "/images/thyroid.png",
  relatedSystems: ["Endocrine", "Cardiovascular"],
  diseases: THYROID_DISEASES,
  symptoms: THYROID_SYMPTOMS,
  procedures: THYROID_PROCEDURES,
  treatments: THYROID_TREATMENTS,
  nutrition: THYROID_NUTRITION
}

// Map of body part names to their content
export const BODY_PART_CONTENT: Record<string, BodyPartContent> = {
  "Brain": BRAIN_CONTENT,
  "Eyes": EYES_CONTENT,
  "Ears": EARS_CONTENT,
  "Nose": NOSE_CONTENT,
  "Teeth": MOUTH_CONTENT,
  "Pituitary gland": PITUITARY_CONTENT,
  "Thyroid": THYROID_CONTENT
}

// Helper function to get content for a body part
export function getBodyPartContent(bodyPartName: string): BodyPartContent | null {
  return BODY_PART_CONTENT[bodyPartName] || null
}

// Helper to check if a body part has content
export function hasBodyPartContent(bodyPartName: string): boolean {
  return bodyPartName in BODY_PART_CONTENT
}
