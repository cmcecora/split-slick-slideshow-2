// Test types
export type TestType = 'ct' | 'mri' | 'ultrasound' | 'xray' | 'pet' | 'nuclear' | 'angio' | 'other'

export interface MedicalTest {
  name: string
  bodyParts: string[]
  type: TestType
}

// View modes for body parts panel
export type ViewMode = 'grouped' | 'systems' | 'flat'

// Tab types for the main content area
export type TabType = 'overview' | 'diseases' | 'symptoms' | 'tests' | 'procedures' | 'treatments' | 'food'

// Test filter types
export type TestFilterType = 'all' | 'imaging' | 'lab'

// Body part category mapping
export type BodyPartCategories = Record<string, string[]>

// Body systems mapping
export type BodySystems = Record<string, string[]>

// Body part image mapping
export type BodyPartImageMap = Record<string, string>

// State for the medical explorer
export interface MedicalExplorerState {
  selectedBodyPart: string | null
  currentView: ViewMode
  currentTab: TabType
  testFilter: TestFilterType
  searchTerm: string
}

// Slideshow slide
export interface Slide {
  image: string
  text: string
}

// Body Part Content Types
export interface Disease {
  name: string
  description: string
  severity?: 'mild' | 'moderate' | 'severe'
}

export interface Symptom {
  name: string
  description: string
  commonality?: 'common' | 'uncommon' | 'rare'
}

export interface Procedure {
  name: string
  description: string
  type: 'diagnostic' | 'surgical' | 'therapeutic'
}

export interface Treatment {
  name: string
  description: string
  type: 'medication' | 'therapy' | 'surgery' | 'lifestyle'
}

export interface NutritionItem {
  name: string
  benefit: string
  category: 'fruit' | 'vegetable' | 'protein' | 'grain' | 'fat' | 'other'
}

export interface BodyPartContent {
  name: string
  description: string
  image: string
  relatedSystems: string[]
  diseases: Disease[]
  symptoms: Symptom[]
  procedures: Procedure[]
  treatments: Treatment[]
  nutrition: NutritionItem[]
}

