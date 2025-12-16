import { useState } from 'react'
import { ArrowLeft, User } from 'lucide-react'
import BodySvg from '../BodyMap/components/BodySvg'
import FemaleBodySvg from '../BodyMap/components/FemaleBodySvg'
import { BodyPartCard } from '../MedicalExplorer/BodyPartCard'
import { getBodyPartsForRegion, getRegionDisplayName } from '../../data/regionMapping'
import type { FrontBodyPartId } from '../BodyMap/types'
import './BodyExplorer.css'

interface BodyExplorerProps {
  onSwitchView: () => void
}

export function BodyExplorer({ onSwitchView }: BodyExplorerProps) {
  const [selectedRegion, setSelectedRegion] = useState<FrontBodyPartId | null>(null)
  const [isMale, setIsMale] = useState(true)

  const handleRegionClick = (region: FrontBodyPartId) => {
    // Toggle selection: clicking same region deselects it
    setSelectedRegion(prev => prev === region ? null : region)
  }

  const handleGenderToggle = () => {
    setIsMale(!isMale)
    setSelectedRegion(null) // Clear selection when switching gender
  }

  const bodyParts = selectedRegion ? getBodyPartsForRegion(selectedRegion) : []
  const regionName = selectedRegion ? getRegionDisplayName(selectedRegion) : null

  return (
    <div className="body-explorer-page">
      {/* Header */}
      <header className="body-explorer-header">
        <button className="body-explorer-back-btn" onClick={onSwitchView}>
          <ArrowLeft size={18} />
          <span>Back to Explorer</span>
        </button>
        <h2 className="body-explorer-title">Body Explorer</h2>
        <div className="body-explorer-header-spacer" />
      </header>

      {/* Main Layout - Split View */}
      <div className="body-explorer-layout">
        {/* Left Column - Body SVG (30%) */}
        <div className="body-explorer-left">
          <div className="body-explorer-svg-container">
            {isMale ? (
              <BodySvg
                selectedPart={selectedRegion}
                onPartClick={handleRegionClick}
                isFront={true}
              />
            ) : (
              <FemaleBodySvg
                selectedPart={selectedRegion}
                onPartClick={handleRegionClick}
              />
            )}
          </div>

          {/* Gender Toggle */}
          <div className="body-explorer-controls">
            <button
              onClick={handleGenderToggle}
              className="body-explorer-gender-btn"
              aria-label={`Switch to ${isMale ? 'female' : 'male'} body model`}
            >
              <User size={18} />
              <span>{isMale ? 'Male' : 'Female'}</span>
            </button>
          </div>
        </div>

        {/* Right Column - Body Parts Cards (70%) */}
        <div className="body-explorer-right">
          {selectedRegion ? (
            <>
              <div className="body-explorer-region-header">
                <h3 className="body-explorer-region-title">{regionName}</h3>
                <span className="body-explorer-part-count">
                  {bodyParts.length} body part{bodyParts.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="body-explorer-cards-grid">
                {bodyParts.map((bodyPart) => (
                  <BodyPartCard
                    key={bodyPart}
                    bodyPart={bodyPart}
                    isActive={false}
                    onClick={() => {
                      // Could add click handling for more detail in future
                      console.log('Clicked body part:', bodyPart)
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="body-explorer-empty-state">
              <User size={64} />
              <h3>Select a Body Region</h3>
              <p>Click on any region of the body model to explore related body parts.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
