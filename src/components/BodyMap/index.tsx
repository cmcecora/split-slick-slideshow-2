import React, { useState } from 'react';
import BodySvg from './components/BodySvg';
import SymptomDialog from './components/SymptomDialog';
import { BodyPartId } from './types';
import { Search, RotateCw, ArrowLeft } from 'lucide-react';
import './BodyMap.css';

interface BodyMapProps {
  onSwitchView: () => void;
}

const BodyMap: React.FC<BodyMapProps> = ({ onSwitchView }) => {
  const [selectedPart, setSelectedPart] = useState<BodyPartId | null>(null);
  const [isFront, setIsFront] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePartClick = (part: BodyPartId) => {
    setSelectedPart(part);
  };

  const handleCloseDialog = () => {
    setSelectedPart(null);
  };

  const toggleRotation = () => {
    setIsFront(!isFront);
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
            {/* Render the interactive body */}
            <BodySvg
              selectedPart={selectedPart}
              onPartClick={handlePartClick}
              isFront={isFront}
            />

            {/* Symptom Popup Overlay */}
            <SymptomDialog
              selectedPart={selectedPart}
              onClose={handleCloseDialog}
            />
          </div>

          {/* Rotate Button */}
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
  );
};

export default BodyMap;
