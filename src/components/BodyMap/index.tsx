import React, { useState } from 'react';
import BodySvg from './components/BodySvg';
import BackBodySvg from './components/BackBodySvg';
import FemaleBodySvg from './components/FemaleBodySvg';
import FemaleBackBodySvg from './components/FemaleBackBodySvg';
import SymptomDialog from './components/SymptomDialog';
import { BodyPartId, FrontBodyPartId, BackBodyPartId } from './types';
import { Search, RotateCw, ArrowLeft, User } from 'lucide-react';
import './BodyMap.css';

interface BodyMapProps {
  onSwitchView: () => void;
}

const BodyMap: React.FC<BodyMapProps> = ({ onSwitchView }) => {
  const [selectedPart, setSelectedPart] = useState<BodyPartId | null>(null);
  const [isFront, setIsFront] = useState(true);
  const [isMale, setIsMale] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFrontPartClick = (part: FrontBodyPartId) => {
    setSelectedPart(prev => prev === part ? null : part);
  };

  const handleBackPartClick = (part: BackBodyPartId) => {
    setSelectedPart(prev => prev === part ? null : part);
  };

  const handleCloseDialog = () => {
    setSelectedPart(null);
  };

  const toggleRotation = () => {
    setSelectedPart(null); // Clear selection when rotating
    setIsFront(!isFront);
  };

  const toggleGender = () => {
    setSelectedPart(null); // Clear selection when switching gender
    setIsMale(!isMale);
  };

  return (
    <div className="body-map-page">
      {/* Header */}
      <header className="body-map-header">
        <button className="body-map-back-btn" onClick={onSwitchView}>
          <ArrowLeft size={18} />
          <span>Back to Explorer</span>
        </button>
        <h2 className="body-map-title">Interactive Body Map</h2>
        <div style={{ width: '150px' }} /> {/* Spacer for centering */}
      </header>

      {/* Main Layout */}
      <div className="body-map-layout">
        {/* Left Panel - Interaction Area */}
        <div className="body-map-left-panel">
          <h1>Add your symptoms</h1>
          <p>Search or select a body part to begin.</p>

          {/* Search Bar */}
          <div className="body-map-search">
            <Search className="body-map-search-icon" size={18} />
            <input
              type="text"
              className="body-map-search-input"
              placeholder="Search, e.g., headache"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* View Indicator */}
          <div className="body-map-view-indicator">
            Viewing: <span className="view-label">{isFront ? 'Front' : 'Back'}</span> ({isMale ? 'Male' : 'Female'})
          </div>

          {/* Action Button */}
          <button className="body-map-next-btn">
            Next
          </button>

          {/* Footer Link */}
          <div className="body-map-footer">
            <a href="#">Report an issue with this question</a>
          </div>
        </div>

        {/* Right Panel - Body Model */}
        <div className="body-map-right-panel">
          <div className="body-model-container">
            {/* 3D Flip Container */}
            <div className={`body-flip-container ${!isFront ? 'flipped' : ''}`}>
              {/* Front Face */}
              <div className="body-flip-face body-flip-front">
                {isMale ? (
                  <BodySvg
                    selectedPart={selectedPart as FrontBodyPartId | null}
                    onPartClick={handleFrontPartClick}
                    isFront={true}
                  />
                ) : (
                  <FemaleBodySvg
                    selectedPart={selectedPart as FrontBodyPartId | null}
                    onPartClick={handleFrontPartClick}
                  />
                )}
              </div>
              {/* Back Face */}
              <div className="body-flip-face body-flip-back">
                {isMale ? (
                  <BackBodySvg
                    selectedPart={selectedPart as BackBodyPartId | null}
                    onPartClick={handleBackPartClick}
                  />
                ) : (
                  <FemaleBackBodySvg
                    selectedPart={selectedPart as BackBodyPartId | null}
                    onPartClick={handleBackPartClick}
                  />
                )}
              </div>
            </div>

            {/* Symptom Popup Overlay */}
            <SymptomDialog
              selectedPart={selectedPart}
              onClose={handleCloseDialog}
              isMale={isMale}
            />
          </div>

          {/* Control Buttons */}
          <div className="body-map-controls">
            <button
              onClick={toggleGender}
              className="body-map-gender-btn"
            >
              <User size={18} />
              <span>{isMale ? 'Male' : 'Female'}</span>
            </button>
            <button
              onClick={toggleRotation}
              className="body-map-rotate-btn"
            >
              <RotateCw size={18} />
              <span>Rotate model</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMap;
