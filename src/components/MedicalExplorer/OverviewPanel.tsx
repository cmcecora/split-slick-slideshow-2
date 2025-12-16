import { User } from "lucide-react";
import { BodyPartMiniMap, getRegionForBodyPart } from "./BodyPartMiniMap";
import { getBodyPartContent } from "../../data/bodyPartContent";
import { getBodyPartImage, BODY_SYSTEMS } from "../../data/testData";

interface OverviewPanelProps {
  bodyPartName: string;
}

// Get all systems that include a given body part
function getSystemsForBodyPart(bodyPartName: string): string[] {
  const systems: string[] = [];
  for (const [system, parts] of Object.entries(BODY_SYSTEMS)) {
    if (parts.some((p) => p.toLowerCase() === bodyPartName.toLowerCase())) {
      systems.push(system);
    }
  }
  return systems;
}

export function OverviewPanel({ bodyPartName }: OverviewPanelProps) {
  const content = getBodyPartContent(bodyPartName);
  const imageUrl = getBodyPartImage(bodyPartName);
  const highlightedRegion = getRegionForBodyPart(bodyPartName);

  // Use content if available, otherwise generate from existing data
  const description =
    content?.description ||
    `The ${bodyPartName.toLowerCase()} is an important part of the human body.`;
  const relatedSystems =
    content?.relatedSystems || getSystemsForBodyPart(bodyPartName);

  return (
    <div className="overview-panel">
      {/* Hero Section */}
      <div className="overview-hero">
        <div className="overview-hero-left">
          {/* Body Part Image */}
          <div className="overview-image-container">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={bodyPartName}
                className="overview-body-image"
              />
            ) : (
              <div className="overview-image-placeholder">
                <User size={64} />
              </div>
            )}
          </div>

          {/* Mini Body Map */}
          <div className="overview-mini-map-container">
            <BodyPartMiniMap
              highlightedRegion={highlightedRegion}
              className="overview-mini-map"
            />
            <span className="overview-mini-map-label">Location in body</span>
          </div>
        </div>

        <div className="overview-hero-right">
          {/* Title */}
          <h1 className="overview-title">{bodyPartName}</h1>

          {/* Description */}
          <p className="overview-description">{description}</p>

          {/* Related Systems */}
          {relatedSystems.length > 0 && (
            <div className="overview-systems">
              <h3 className="overview-systems-title">Related Body Systems</h3>
              <div className="overview-systems-list">
                {relatedSystems.map((system) => (
                  <span
                    key={system}
                    className="overview-system-badge"
                    data-system={system}
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      {content && (
        <div className="overview-stats">
          <div className="overview-stat">
            <span className="overview-stat-value">
              {content.diseases.length}
            </span>
            <span className="overview-stat-label">Common Diseases</span>
          </div>
          <div className="overview-stat">
            <span className="overview-stat-value">
              {content.symptoms.length}
            </span>
            <span className="overview-stat-label">Related Symptoms</span>
          </div>
          <div className="overview-stat">
            <span className="overview-stat-value">
              {content.procedures.length}
            </span>
            <span className="overview-stat-label">Procedures</span>
          </div>
          <div className="overview-stat">
            <span className="overview-stat-value">
              {content.treatments.length}
            </span>
            <span className="overview-stat-label">Treatments</span>
          </div>
          <div className="overview-stat">
            <span className="overview-stat-value">
              {content.nutrition.length}
            </span>
            <span className="overview-stat-label">Beneficial Foods</span>
          </div>
        </div>
      )}

      {/* Quick Preview Sections */}
      {content && (
        <div className="overview-previews">
          {/* Top Diseases Preview */}
          <div className="overview-preview-section">
            <h3 className="overview-preview-title">Common Conditions</h3>
            <div className="overview-preview-tags">
              {content.diseases.slice(0, 5).map((disease) => (
                <span
                  key={disease.name}
                  className="overview-preview-tag overview-preview-tag--disease"
                >
                  {disease.name}
                </span>
              ))}
            </div>
          </div>

          {/* Top Symptoms Preview */}
          <div className="overview-preview-section">
            <h3 className="overview-preview-title">Common Symptoms</h3>
            <div className="overview-preview-tags">
              {content.symptoms.slice(0, 5).map((symptom) => (
                <span
                  key={symptom.name}
                  className="overview-preview-tag overview-preview-tag--symptom"
                >
                  {symptom.name}
                </span>
              ))}
            </div>
          </div>

          {/* Top Foods Preview */}
          <div className="overview-preview-section">
            <h3 className="overview-preview-title">Beneficial Foods</h3>
            <div className="overview-preview-tags">
              {content.nutrition.slice(0, 5).map((food) => (
                <span
                  key={food.name}
                  className="overview-preview-tag overview-preview-tag--nutrition"
                >
                  {food.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
