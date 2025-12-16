import { BODY_PART_CATEGORIES } from './testData'

// Type definitions for region mapping
export interface RegionMapping {
  svgRegionId: string
  displayName: string
  categories: string[]
}

/**
 * Configurable mapping from SVG body regions to anatomical categories.
 *
 * To customize which body parts appear for each region:
 * 1. Edit the 'categories' array to add/remove category names
 * 2. Category names must match keys in BODY_PART_CATEGORIES from testData.ts
 *
 * Available categories:
 * - "Head & Brain"
 * - "Neck & Throat"
 * - "Chest & Heart"
 * - "Abdomen"
 * - "Pelvis & Reproductive"
 * - "Spine & Back"
 * - "Upper Extremities"
 * - "Lower Extremities"
 * - "Vascular"
 * - "Lymphatic & Immune"
 * - "Skin & Soft Tissue"
 * - "Whole Body & General"
 */
export const REGION_MAPPING_CONFIG: RegionMapping[] = [
  {
    svgRegionId: 'head',
    displayName: 'Head & Neck',
    categories: ['Head & Brain', 'Neck & Throat']
  },
  {
    svgRegionId: 'chest',
    displayName: 'Chest & Thorax',
    categories: ['Chest & Heart']
  },
  {
    svgRegionId: 'arms',
    displayName: 'Upper Extremities',
    categories: ['Upper Extremities']
  },
  {
    svgRegionId: 'abdomen',
    displayName: 'Abdomen',
    categories: ['Abdomen']
  },
  {
    svgRegionId: 'pelvis',
    displayName: 'Pelvis & Reproductive',
    categories: ['Pelvis & Reproductive']
  },
  {
    svgRegionId: 'legs',
    displayName: 'Lower Extremities',
    categories: ['Lower Extremities']
  }
]

/**
 * Get all body parts for a given SVG region ID
 * @param regionId - The SVG region identifier (e.g., 'head', 'chest', 'arms')
 * @returns Array of body part names for that region
 */
export function getBodyPartsForRegion(regionId: string): string[] {
  const mapping = REGION_MAPPING_CONFIG.find(r => r.svgRegionId === regionId)
  if (!mapping) return []

  // Collect body parts from all mapped categories
  const bodyParts: string[] = []
  for (const category of mapping.categories) {
    const parts = BODY_PART_CATEGORIES[category]
    if (parts) {
      bodyParts.push(...parts)
    }
  }

  // Remove duplicates and filter out placeholder entries
  const filtered = [...new Set(bodyParts)].filter(
    part => !part.includes('Unspecified') && !part.includes('Target organ') && !part.includes('Varies')
  )

  return filtered
}

/**
 * Get the display name for a given SVG region ID
 * @param regionId - The SVG region identifier
 * @returns Human-readable display name for the region
 */
export function getRegionDisplayName(regionId: string): string {
  const mapping = REGION_MAPPING_CONFIG.find(r => r.svgRegionId === regionId)
  return mapping?.displayName || regionId
}
