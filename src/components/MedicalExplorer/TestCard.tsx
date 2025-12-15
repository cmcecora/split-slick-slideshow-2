import { useState } from 'react'
import type { MedicalTest } from '../../types'
import { getTestImage, formatBodyPartName } from '../../data/testData'
import { getTestTypeIcon } from './icons'

interface TestCardProps {
  test: MedicalTest
  animationDelay?: number
}

export function TestCard({ test, animationDelay = 0 }: TestCardProps) {
  const [imageError, setImageError] = useState(false)
  const testImage = getTestImage(test.name, test.type)

  return (
    <div 
      className="test-card showing"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="test-card-image">
        {!imageError ? (
          <img 
            src={testImage} 
            alt={test.name} 
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="placeholder-icon">
            {getTestTypeIcon(test.type)}
          </div>
        )}
        <span className={`test-type-badge ${test.type}`}>
          {test.type.toUpperCase()}
        </span>
      </div>
      <div className="test-card-content">
        <h3 className="test-card-title">{test.name}</h3>
        <div className="test-card-body-parts">
          {test.bodyParts.slice(0, 3).map(bp => (
            <span key={bp} className="test-card-body-part">
              {formatBodyPartName(bp)}
            </span>
          ))}
          {test.bodyParts.length > 3 && (
            <span className="test-card-body-part">
              +{test.bodyParts.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

