import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { BodyPartCard } from './BodyPartCard'
import { getCategoryIcon, getSystemIcon } from './icons'

interface CategoryAccordionProps {
  name: string
  bodyParts: string[]
  selectedBodyPart: string | null
  onSelectBodyPart: (bodyPart: string) => void
  isSystem?: boolean
  defaultExpanded?: boolean
}

export function CategoryAccordion({
  name,
  bodyParts,
  selectedBodyPart,
  onSelectBodyPart,
  isSystem = false,
  defaultExpanded = false
}: CategoryAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  // Filter out non-display items
  const filteredParts = bodyParts.filter(bp => 
    !bp.includes('Unspecified') && 
    !bp.includes('Target organ') &&
    !bp.includes('Varies')
  )

  if (filteredParts.length === 0) return null

  // Remove duplicates
  const uniqueParts = [...new Set(filteredParts)]

  const IconComponent = isSystem ? getSystemIcon(name) : getCategoryIcon(name)

  return (
    <div 
      className={`category ${isSystem ? 'system-category' : ''}`}
      data-category={name}
      data-system={isSystem ? name : undefined}
    >
      <div 
        className={`category-header ${isSystem ? 'system-header' : ''} ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="category-title">
          {IconComponent}
          {name}
          <span className="category-count">{uniqueParts.length}</span>
        </span>
        <ChevronDown className="category-chevron" size={16} />
      </div>
      
      {isExpanded && (
        <div className={`category-items ${isSystem ? 'system-items' : ''}`}>
          {uniqueParts.map(bp => (
            <BodyPartCard
              key={bp}
              bodyPart={bp}
              isActive={selectedBodyPart === bp}
              onClick={() => onSelectBodyPart(bp)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

