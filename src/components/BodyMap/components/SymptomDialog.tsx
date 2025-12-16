import React, { useState } from 'react';
import { BodyPartId } from '../types';
import { BODY_DATA } from '../constants';
import { X, Activity, Stethoscope } from 'lucide-react';

interface SymptomDialogProps {
  selectedPart: BodyPartId | null;
  onClose: () => void;
}

const SymptomDialog: React.FC<SymptomDialogProps> = ({ selectedPart, onClose }) => {
  const [activeTab, setActiveTab] = useState<'symptoms' | 'diseases'>('symptoms');

  if (!selectedPart) return null;

  const data = BODY_DATA[selectedPart];
  const hasDiseases = data.diseases && data.diseases.length > 0;

  return (
    <div className="symptom-dialog">
      <div className="symptom-dialog-header">
        <h3 className="symptom-dialog-title">{data.label}</h3>
        <button
          onClick={onClose}
          className="symptom-dialog-close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Tab Navigation (only show if diseases exist) */}
      {hasDiseases && (
        <div className="symptom-dialog-tabs">
          <button
            className={`symptom-tab ${activeTab === 'symptoms' ? 'active' : ''}`}
            onClick={() => setActiveTab('symptoms')}
          >
            <Activity size={14} />
            <span>Symptoms</span>
          </button>
          <button
            className={`symptom-tab ${activeTab === 'diseases' ? 'active' : ''}`}
            onClick={() => setActiveTab('diseases')}
          >
            <Stethoscope size={14} />
            <span>Related Diseases</span>
          </button>
        </div>
      )}

      <div className="symptom-dialog-content">
        {activeTab === 'symptoms' ? (
          data.symptoms.length > 0 ? (
            <ul className="symptom-list">
              {data.symptoms.map((symptom) => (
                <li
                  key={symptom.id}
                  className="symptom-item"
                >
                  {symptom.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="symptom-empty">No symptoms listed.</div>
          )
        ) : (
          hasDiseases ? (
            <ul className="symptom-list disease-list">
              {data.diseases!.map((disease, index) => (
                <li
                  key={index}
                  className="symptom-item disease-item"
                >
                  {disease}
                </li>
              ))}
            </ul>
          ) : (
            <div className="symptom-empty">No related diseases listed.</div>
          )
        )}
      </div>
      <div className="symptom-dialog-footer">
        {activeTab === 'symptoms'
          ? 'Select a symptom to continue'
          : 'Related conditions for this area'}
      </div>
    </div>
  );
};

export default SymptomDialog;
