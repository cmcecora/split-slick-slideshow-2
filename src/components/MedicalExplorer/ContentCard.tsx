import {
  AlertCircle,
  Activity,
  Stethoscope,
  Pill,
  Apple,
  ChevronRight,
} from "lucide-react";

type CardType = "disease" | "symptom" | "procedure" | "treatment" | "nutrition";

interface ContentCardProps {
  title: string;
  description: string;
  type: CardType;
  badge?: string;
  badgeVariant?: "default" | "warning" | "success" | "info";
  animationDelay?: number;
}

const typeIcons: Record<CardType, React.ReactNode> = {
  disease: <AlertCircle size={20} />,
  symptom: <Activity size={20} />,
  procedure: <Stethoscope size={20} />,
  treatment: <Pill size={20} />,
  nutrition: <Apple size={20} />,
};

const typeColors: Record<CardType, string> = {
  disease: "disease",
  symptom: "symptom",
  procedure: "procedure",
  treatment: "treatment",
  nutrition: "nutrition",
};

export function ContentCard({
  title,
  description,
  type,
  badge,
  badgeVariant = "default",
  animationDelay = 0,
}: ContentCardProps) {
  return (
    <div
      className={`content-card content-card--${typeColors[type]}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="content-card-header">
        <div className="content-card-icon">{typeIcons[type]}</div>
        <div className="content-card-title-area">
          <h4 className="content-card-title">{title}</h4>
          {badge && (
            <span
              className={`content-card-badge content-card-badge--${badgeVariant}`}
            >
              {badge}
            </span>
          )}
        </div>
        <ChevronRight size={16} className="content-card-chevron" />
      </div>
      <p className="content-card-description">{description}</p>
    </div>
  );
}

// Compact version for smaller displays
interface CompactContentCardProps {
  title: string;
  type: CardType;
  onClick?: () => void;
}

export function CompactContentCard({
  title,
  type,
  onClick,
}: CompactContentCardProps) {
  return (
    <button
      className={`compact-content-card compact-content-card--${typeColors[type]}`}
      onClick={onClick}
    >
      <span className="compact-content-card-icon">{typeIcons[type]}</span>
      <span className="compact-content-card-title">{title}</span>
    </button>
  );
}
