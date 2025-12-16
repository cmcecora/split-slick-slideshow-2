import { HeartPulse } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { getBodyPartContent } from "../../data/bodyPartContent";

interface TreatmentsPanelProps {
  bodyPartName: string;
}

export function TreatmentsPanel({ bodyPartName }: TreatmentsPanelProps) {
  const content = getBodyPartContent(bodyPartName);
  const treatments = content?.treatments || [];

  const getTypeBadge = (
    type: "medication" | "therapy" | "surgery" | "lifestyle"
  ) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getTypeVariant = (
    type: "medication" | "therapy" | "surgery" | "lifestyle"
  ) => {
    switch (type) {
      case "medication":
        return "info" as const;
      case "therapy":
        return "success" as const;
      case "surgery":
        return "warning" as const;
      case "lifestyle":
        return "default" as const;
      default:
        return "default" as const;
    }
  };

  if (treatments.length === 0) {
    return (
      <div className="panel-empty-state">
        <HeartPulse size={64} />
        <h3>No Treatment Information</h3>
        <p>Treatment information for {bodyPartName} is not yet available.</p>
      </div>
    );
  }

  return (
    <div className="treatments-panel">
      <div className="panel-header-info">
        <h2 className="panel-section-title">
          <HeartPulse size={24} />
          Treatment Options
        </h2>
        <p className="panel-section-subtitle">
          {treatments.length} treatment approaches for{" "}
          {bodyPartName.toLowerCase()} conditions
        </p>
      </div>

      <div className="content-cards-grid">
        {treatments.map((treatment, index) => (
          <ContentCard
            key={treatment.name}
            title={treatment.name}
            description={treatment.description}
            type="treatment"
            badge={getTypeBadge(treatment.type)}
            badgeVariant={getTypeVariant(treatment.type)}
            animationDelay={index * 50}
          />
        ))}
      </div>
    </div>
  );
}
