---
name: Body Part Landing Page
overview: Create a reusable body part landing page template with Overview, Diseases, Symptoms, Tests, Procedures, Treatments, and Nutrition sections. Implement with Brain as the first example, defaulting to Overview tab when selecting a body part.
todos:
  - id: types
    content: Add new TypeScript interfaces for Disease, Symptom, Procedure, Treatment, NutritionItem, and BodyPartContent
    status: completed
  - id: data
    content: Create bodyPartContent.ts with Brain content (description, 10 diseases, 10 symptoms, procedures, 10 treatments, 20 foods)
    status: completed
  - id: content-card
    content: Create reusable ContentCard component for displaying items across all panels
    status: completed
  - id: mini-map
    content: Create BodyPartMiniMap component - small SVG with highlighted region
    status: completed
  - id: overview-panel
    content: Create OverviewPanel component with hero section, image, description, mini map, related systems
    status: completed
  - id: diseases-panel
    content: Create DiseasesPanel component with disease cards grid
    status: completed
  - id: symptoms-panel
    content: Create SymptomsPanel component with symptoms list
    status: completed
  - id: procedures-panel
    content: Create ProceduresPanel component
    status: completed
  - id: treatments-panel
    content: Create TreatmentsPanel component
    status: completed
  - id: nutrition-panel
    content: Create NutritionPanel component with food cards grid
    status: completed
  - id: main-panel
    content: Create MainContentPanel that renders correct panel based on currentTab
    status: completed
  - id: integrate
    content: Update MedicalExplorer to use MainContentPanel and default to overview tab
    status: completed
  - id: styles
    content: Add CSS styles for all new panels and components
    status: completed
---

# Body Part Landing Page Template

## Architecture Overview

The template will extend the existing `MedicalExplorer` component by adding content to the currently placeholder tabs. When a user selects a body part, the Overview tab will load by default instead of Tests.

```mermaid
flowchart LR
    subgraph LeftPanel [Left Panel - Unchanged]
        BodyPartsPanel[BodyPartsPanel]
    end
    
    subgraph RightPanel [Right Panel - Content Area]
        TabNav[TabNavigation]
        Overview[OverviewPanel]
        Diseases[DiseasesPanel]
        Symptoms[SymptomsPanel]
        Tests[TestsPanel]
        Procedures[ProceduresPanel]
        Treatments[TreatmentsPanel]
        Nutrition[NutritionPanel]
    end
    
    BodyPartsPanel -->|Select Body Part| TabNav
    TabNav --> Overview
    TabNav --> Diseases
    TabNav --> Symptoms
    TabNav --> Tests
    TabNav --> Procedures
    TabNav --> Treatments
    TabNav --> Nutrition
```

## Key Files to Create/Modify

### 1. New Data File: `src/data/bodyPartContent.ts`

Create comprehensive data structure for body part content including:

```typescript
interface BodyPartContent {
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
```

### 2. New Components in `src/components/MedicalExplorer/`

| Component | Purpose |

|-----------|---------|

| `OverviewPanel.tsx` | Hero section with name, description, image, mini body map, related systems |

| `DiseasesPanel.tsx` | Grid of disease cards with descriptions |

| `SymptomsPanel.tsx` | List/grid of common symptoms |

| `ProceduresPanel.tsx` | Medical procedures grid |

| `TreatmentsPanel.tsx` | Treatment options list |

| `NutritionPanel.tsx` | Beneficial foods grid |

| `BodyPartMiniMap.tsx` | Small interactive SVG showing highlighted body part |

| `ContentCard.tsx` | Reusable card component for all content types |

### 3. Modify Existing Files

- [`src/components/MedicalExplorer/index.tsx`](src/components/MedicalExplorer/index.tsx) - Default to 'overview' tab when body part selected
- [`src/components/MedicalExplorer/TestsPanel.tsx`](src/components/MedicalExplorer/TestsPanel.tsx) - Refactor to render appropriate panel based on tab
- [`src/components/MedicalExplorer/MedicalExplorer.css`](src/components/MedicalExplorer/MedicalExplorer.css) - Add styles for new panels
- [`src/types/index.ts`](src/types/index.ts) - Add new interfaces

## Overview Panel Layout

```
+--------------------------------------------------+
|  [Brain Image]        BRAIN (H1)                 |
|                       Description text about     |
|  [Mini Body Map]      the brain's functions...   |
|  (highlighting        -------------------------   |
|   brain region)       Related Systems:           |
|                       [Nervous] [Endocrine]      |
+--------------------------------------------------+
```

## Brain Sample Content

The Brain page will include:

- **Description**: Functions, importance, basic anatomy
- **10 Diseases**: Alzheimer's, Parkinson's, Stroke, Brain Tumor, Epilepsy, MS, Meningitis, Encephalitis, Traumatic Brain Injury, Aneurysm
- **10 Symptoms**: Headache, Memory Loss, Seizures, Confusion, Vision Changes, Speech Difficulties, Numbness, Dizziness, Balance Problems, Fatigue
- **Tests**: EEG, MRI of Brain, CT of Brain, etc. (from existing data)
- **Procedures**: Deep Brain Stimulation, Craniotomy, etc.
- **10 Treatments**: Medications, Surgery, Physical Therapy, Cognitive Therapy, etc.
- **20 Foods**: Blueberries, Salmon, Walnuts, Turmeric, Broccoli, etc.

## Implementation Notes

1. **State Management**: Use existing state in `MedicalExplorer` - just change default tab from 'tests' to 'overview'

2. **Routing**: No router needed - already using React state for tab switching (SPA behavior maintained)

3. **Reusability**: Template components accept body part name as prop, look up content from data file

4. **Styling**: Follow existing CSS patterns in `MedicalExplorer.css`