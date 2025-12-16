import { Stethoscope } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { getBodyPartContent } from "../../data/bodyPartContent";

interface ProceduresPanelProps {
  bodyPartName: string;
}

export function ProceduresPanel({ bodyPartName }: ProceduresPanelProps) {
  const content = getBodyPartContent(bodyPartName);
  const procedures = content?.procedures || [];

  const getTypeBadge = (type: "diagnostic" | "surgical" | "therapeutic") => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getTypeVariant = (type: "diagnostic" | "surgical" | "therapeutic") => {
    switch (type) {
      case "diagnostic":
        return "info" as const;
      case "surgical":
        return "warning" as const;
      case "therapeutic":
        return "success" as const;
      default:
        return "default" as const;
    }
  };

  if (procedures.length === 0) {
    return (
      <div className="panel-empty-state">
        <Stethoscope size={64} />
        <h3>No Procedure Information</h3>
        <p>Procedure information for {bodyPartName} is not yet available.</p>
      </div>
    );
  }

  return (
    <div className="procedures-panel">
      <div className="panel-header-info">
        <h2 className="panel-section-title">
          <Stethoscope size={24} />
          Medical Procedures
        </h2>
        <p className="panel-section-subtitle">
          {procedures.length} procedures related to the{" "}
          {bodyPartName.toLowerCase()}
        </p>
      </div>

      <div className="content-cards-grid">
        {procedures.map((procedure, index) => (
          <ContentCard
            key={procedure.name}
            title={procedure.name}
            description={procedure.description}
            type="procedure"
            badge={getTypeBadge(procedure.type)}
            badgeVariant={getTypeVariant(procedure.type)}
            animationDelay={index * 50}
          />
        ))}
      </div>
    </div>
  );
}
