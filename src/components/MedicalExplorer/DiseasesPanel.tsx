import { AlertCircle } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { getBodyPartContent } from "../../data/bodyPartContent";

interface DiseasesPanelProps {
  bodyPartName: string;
}

export function DiseasesPanel({ bodyPartName }: DiseasesPanelProps) {
  const content = getBodyPartContent(bodyPartName);
  const diseases = content?.diseases || [];

  const getSeverityBadge = (severity?: "mild" | "moderate" | "severe") => {
    if (!severity) return undefined;
    return severity.charAt(0).toUpperCase() + severity.slice(1);
  };

  const getSeverityVariant = (severity?: "mild" | "moderate" | "severe") => {
    switch (severity) {
      case "mild":
        return "success" as const;
      case "moderate":
        return "warning" as const;
      case "severe":
        return "default" as const;
      default:
        return "default" as const;
    }
  };

  if (diseases.length === 0) {
    return (
      <div className="panel-empty-state">
        <AlertCircle size={64} />
        <h3>No Disease Information</h3>
        <p>Disease information for {bodyPartName} is not yet available.</p>
      </div>
    );
  }

  return (
    <div className="diseases-panel">
      <div className="panel-header-info">
        <h2 className="panel-section-title">
          <AlertCircle size={24} />
          Common Diseases & Conditions
        </h2>
        <p className="panel-section-subtitle">
          {diseases.length} conditions associated with the{" "}
          {bodyPartName.toLowerCase()}
        </p>
      </div>

      <div className="content-cards-grid">
        {diseases.map((disease, index) => (
          <ContentCard
            key={disease.name}
            title={disease.name}
            description={disease.description}
            type="disease"
            badge={getSeverityBadge(disease.severity)}
            badgeVariant={getSeverityVariant(disease.severity)}
            animationDelay={index * 50}
          />
        ))}
      </div>
    </div>
  );
}
