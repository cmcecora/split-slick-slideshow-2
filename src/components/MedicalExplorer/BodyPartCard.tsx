import { Circle } from 'lucide-react'
import { getBodyPartImage, formatBodyPartName } from '../../data/testData'

interface BodyPartCardProps {
  bodyPart: string
  isActive: boolean
  onClick: () => void
}

export function BodyPartCard({ bodyPart, isActive, onClick }: BodyPartCardProps) {
  const imageUrl = getBodyPartImage(bodyPart)
  const hasImage = imageUrl !== null

  return (
    <div 
      className={`body-part-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {hasImage ? (
        <img 
          className="body-part-image" 
          src={imageUrl} 
          alt={bodyPart} 
          loading="lazy"
        />
      ) : (
        <div className="body-part-placeholder">
          <Circle size={32} />
        </div>
      )}
      <div className="body-part-name">{formatBodyPartName(bodyPart)}</div>
    </div>
  )
}

