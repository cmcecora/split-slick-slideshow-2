import { Apple } from "lucide-react";
import { getBodyPartContent } from "../../data/bodyPartContent";

interface NutritionPanelProps {
  bodyPartName: string;
}

// Get emoji for food category
function getCategoryEmoji(
  category: "fruit" | "vegetable" | "protein" | "grain" | "fat" | "other"
): string {
  switch (category) {
    case "fruit":
      return "🍎";
    case "vegetable":
      return "🥬";
    case "protein":
      return "🥩";
    case "grain":
      return "🌾";
    case "fat":
      return "🥑";
    case "other":
      return "🍵";
    default:
      return "🍽️";
  }
}

export function NutritionPanel({ bodyPartName }: NutritionPanelProps) {
  const content = getBodyPartContent(bodyPartName);
  const nutrition = content?.nutrition || [];

  if (nutrition.length === 0) {
    return (
      <div className="panel-empty-state">
        <Apple size={64} />
        <h3>No Nutrition Information</h3>
        <p>Nutrition information for {bodyPartName} is not yet available.</p>
      </div>
    );
  }

  // Group by category
  const groupedByCategory = nutrition.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof nutrition>);

  const categoryOrder: Array<
    "fruit" | "vegetable" | "protein" | "grain" | "fat" | "other"
  > = ["fruit", "vegetable", "protein", "grain", "fat", "other"];

  return (
    <div className="nutrition-panel">
      <div className="panel-header-info">
        <h2 className="panel-section-title">
          <Apple size={24} />
          Beneficial Foods & Nutrition
        </h2>
        <p className="panel-section-subtitle">
          {nutrition.length} foods that support {bodyPartName.toLowerCase()}{" "}
          health
        </p>
      </div>

      <div className="nutrition-grid">
        {nutrition.map((item, index) => (
          <div
            key={item.name}
            className="nutrition-card"
            style={{ animationDelay: `${index * 30}ms` }}
          >
            <div className="nutrition-card-header">
              <span className="nutrition-emoji">
                {getCategoryEmoji(item.category)}
              </span>
              <h4 className="nutrition-name">{item.name}</h4>
              <span
                className={`nutrition-category nutrition-category--${item.category}`}
              >
                {item.category}
              </span>
            </div>
            <p className="nutrition-benefit">{item.benefit}</p>
          </div>
        ))}
      </div>

      {/* Category Legend */}
      <div className="nutrition-legend">
        <span className="nutrition-legend-title">Food Categories:</span>
        <div className="nutrition-legend-items">
          {categoryOrder.map(
            (cat) =>
              groupedByCategory[cat] && (
                <span key={cat} className="nutrition-legend-item">
                  {getCategoryEmoji(cat)}{" "}
                  {cat.charAt(0).toUpperCase() + cat.slice(1)} (
                  {groupedByCategory[cat].length})
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
}
