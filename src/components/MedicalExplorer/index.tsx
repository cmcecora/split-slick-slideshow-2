import { useState } from "react";
import { BodyPartsPanel } from "./BodyPartsPanel";
import { MainContentPanel } from "./MainContentPanel";
import type { ViewMode, TabType, TestFilterType } from "../../types";
import "./MedicalExplorer.css";

interface MedicalExplorerProps {
  onSwitchView: (view: "slideshow" | "body-map" | "body-explorer") => void;
}

export function MedicalExplorer({ onSwitchView }: MedicalExplorerProps) {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewMode>("grouped");
  const [currentTab, setCurrentTab] = useState<TabType>("overview");
  const [testFilter, setTestFilter] = useState<TestFilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleClearSelection = () => {
    setSelectedBodyPart(null);
    setCurrentTab("overview");
    setTestFilter("all");
  };

  // When a body part is selected, switch to overview tab
  const handleSelectBodyPart = (bodyPart: string | null) => {
    setSelectedBodyPart(bodyPart);
    if (bodyPart) {
      setCurrentTab("overview");
    }
  };

  return (
    <div className="app-container">
      <BodyPartsPanel
        currentView={currentView}
        onViewChange={setCurrentView}
        selectedBodyPart={selectedBodyPart}
        onSelectBodyPart={handleSelectBodyPart}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onNavigateToBodyMap={() => onSwitchView("body-map")}
      />
      <MainContentPanel
        selectedBodyPart={selectedBodyPart}
        onClearSelection={handleClearSelection}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        testFilter={testFilter}
        onTestFilterChange={setTestFilter}
        onSwitchToSlideshow={() => onSwitchView("slideshow")}
        onSwitchToBodyMap={() => onSwitchView("body-map")}
        onSwitchToBodyExplorer={() => onSwitchView("body-explorer")}
      />
    </div>
  );
}
