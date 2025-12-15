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

