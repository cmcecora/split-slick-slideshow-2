import { useMemo } from 'react'
import { Grid2X2, User, List } from 'lucide-react'
import { SearchInput } from './SearchInput'
import { CategoryAccordion } from './CategoryAccordion'
import { BodyPartCard } from './BodyPartCard'
import { BODY_PART_CATEGORIES, BODY_SYSTEMS, ALL_BODY_PARTS } from '../../data/testData'
import type { ViewMode } from '../../types'

interface BodyPartsPanelProps {
  currentView: ViewMode
  onViewChange: (view: ViewMode) => void
  selectedBodyPart: string | null
  onSelectBodyPart: (bodyPart: string | null) => void
  searchTerm: string
  onSearchChange: (term: string) => void
}

export function BodyPartsPanel({
  currentView,
  onViewChange,
  selectedBodyPart,
  onSelectBodyPart,
  searchTerm,
  onSearchChange
}: BodyPartsPanelProps) {
  
  // Filter body parts based on search
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return BODY_PART_CATEGORIES
    
    const term = searchTerm.toLowerCase()
    const result: Record<string, string[]> = {}
    
    for (const [category, parts] of Object.entries(BODY_PART_CATEGORIES)) {
      const filtered = parts.filter(p => p.toLowerCase().includes(term))
      if (filtered.length > 0) {
        result[category] = filtered
      }
    }
    
    return result
  }, [searchTerm])

  const filteredSystems = useMemo(() => {
    if (!searchTerm.trim()) return BODY_SYSTEMS
    
    const term = searchTerm.toLowerCase()
    const result: Record<string, string[]> = {}
    
    for (const [system, parts] of Object.entries(BODY_SYSTEMS)) {
      const filtered = parts.filter(p => p.toLowerCase().includes(term))
      if (filtered.length > 0) {
        result[system] = filtered
      }
    }
    
    return result
  }, [searchTerm])

  const filteredFlat = useMemo(() => {
    if (!searchTerm.trim()) return ALL_BODY_PARTS
    
    const term = searchTerm.toLowerCase()
    return ALL_BODY_PARTS.filter(p => 
      p.toLowerCase().includes(term) &&
      !p.includes('Unspecified') &&
      !p.includes('Target organ') &&
      !p.includes('Varies')
    )
  }, [searchTerm])

  const handleBodyPartClick = (bodyPart: string) => {
    if (selectedBodyPart === bodyPart) {
      onSelectBodyPart(null)
    } else {
      onSelectBodyPart(bodyPart)
    }
  }

  return (
    <aside className="body-parts-panel">
      <div className="panel-header">
        <h1 className="panel-title">Body Parts</h1>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${currentView === 'grouped' ? 'active' : ''}`}
            onClick={() => onViewChange('grouped')}
            title="Grouped by Region"
          >
            <Grid2X2 size={16} />
          </button>
          <button 
            className={`toggle-btn ${currentView === 'systems' ? 'active' : ''}`}
            onClick={() => onViewChange('systems')}
            title="Body Systems"
          >
            <User size={16} />
          </button>
          <button 
            className={`toggle-btn ${currentView === 'flat' ? 'active' : ''}`}
            onClick={() => onViewChange('flat')}
            title="A-Z List"
          >
            <List size={16} />
          </button>
        </div>
      </div>
      
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search body parts..."
      />

      {/* Grouped View */}
      {currentView === 'grouped' && (
        <div className="body-parts-content grouped-view">
          {Object.entries(filteredCategories).map(([category, parts], index) => (
            <CategoryAccordion
              key={category}
              name={category}
              bodyParts={parts}
              selectedBodyPart={selectedBodyPart}
              onSelectBodyPart={handleBodyPartClick}
              defaultExpanded={index === 0 && !searchTerm}
            />
          ))}
        </div>
      )}

      {/* Systems View */}
      {currentView === 'systems' && (
        <div className="body-parts-content systems-view">
          {Object.entries(filteredSystems).map(([system, parts]) => (
            <CategoryAccordion
              key={system}
              name={system}
              bodyParts={parts}
              selectedBodyPart={selectedBodyPart}
              onSelectBodyPart={handleBodyPartClick}
              isSystem
              defaultExpanded={!!searchTerm}
            />
          ))}
        </div>
      )}

      {/* Flat View */}
      {currentView === 'flat' && (
        <div className="body-parts-content flat-view">
          <div className="body-parts-grid">
            {filteredFlat.map(bp => (
              <BodyPartCard
                key={bp}
                bodyPart={bp}
                isActive={selectedBodyPart === bp}
                onClick={() => handleBodyPartClick(bp)}
              />
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}

