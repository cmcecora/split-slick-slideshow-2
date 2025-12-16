import { Activity } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { getBodyPartContent } from "../../data/bodyPartContent";

interface SymptomsPanelProps {
  bodyPartName: string;
}

export function SymptomsPanel({ bodyPartName }: SymptomsPanelProps) {
  const content = getBodyPartContent(bodyPartName);
  const symptoms = content?.symptoms || [];

  const getCommonalityBadge = (
    commonality?: "common" | "uncommon" | "rare"
  ) => {
    if (!commonality) return undefined;
    return commonality.charAt(0).toUpperCase() + commonality.slice(1);
  };

  const getCommonalityVariant = (
    commonality?: "common" | "uncommon" | "rare"
  ) => {
    switch (commonality) {
      case "common":
        return "success" as const;
      case "uncommon":
        return "warning" as const;
      case "rare":
        return "info" as const;
      default:
        return "default" as const;
    }
  };

  if (symptoms.length === 0) {
    return (
      <div className="panel-empty-state">
        <Activity size={64} />
        <h3>No Symptom Information</h3>
        <p>Symptom information for {bodyPartName} is not yet available.</p>
      </div>
    );
  }

  return (
    <div className="symptoms-panel">
      <div className="panel-header-info">
        <h2 className="panel-section-title">
          <Activity size={24} />
          Related Symptoms
        </h2>
        <p className="panel-section-subtitle">
          {symptoms.length} symptoms associated with{" "}
          {bodyPartName.toLowerCase()} conditions
        </p>
      </div>

      <div className="content-cards-grid">
        {symptoms.map((symptom, index) => (
          <ContentCard
            key={symptom.name}
            title={symptom.name}
            description={symptom.description}
            type="symptom"
            badge={getCommonalityBadge(symptom.commonality)}
            badgeVariant={getCommonalityVariant(symptom.commonality)}
            animationDelay={index * 50}
          />
        ))}
      </div>
    </div>
  );
}
