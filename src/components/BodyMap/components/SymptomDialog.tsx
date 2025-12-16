import React from 'react';
import { BodyPartId } from '../types';
import { BODY_DATA } from '../constants';
import { X } from 'lucide-react';

interface SymptomDialogProps {
  selectedPart: BodyPartId | null;
  onClose: () => void;
}

const SymptomDialog: React.FC<SymptomDialogProps> = ({ selectedPart, onClose }) => {
  if (!selectedPart) return null;

  const data = BODY_DATA[selectedPart];

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
      <div className="symptom-dialog-content">
        {data.symptoms.length > 0 ? (
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
        )}
      </div>
      <div className="symptom-dialog-footer">
        Select a symptom to continue
      </div>
    </div>
  );
};

export default SymptomDialog;
