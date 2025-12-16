import { useMemo } from "react";
import { X, Search, Layers, Scan, User } from "lucide-react";
import { TabNavigation } from "./TabNavigation";
import { OverviewPanel } from "./OverviewPanel";
import { DiseasesPanel } from "./DiseasesPanel";
import { SymptomsPanel } from "./SymptomsPanel";
import { TestCard } from "./TestCard";
import { ProceduresPanel } from "./ProceduresPanel";
import { TreatmentsPanel } from "./TreatmentsPanel";
import { NutritionPanel } from "./NutritionPanel";
import { LinksDropdown, type LinkItem } from "../common/LinksDropdown";
import {
  TESTS,
  getTestsForBodyPart,
  formatBodyPartName,
  IMAGING_TYPES,
} from "../../data/testData";
import type { TabType, TestFilterType, MedicalTest } from "../../types";

interface MainContentPanelProps {
  selectedBodyPart: string | null;
  onClearSelection: () => void;
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  testFilter: TestFilterType;
  onTestFilterChange: (filter: TestFilterType) => void;
  onSwitchToSlideshow: () => void;
  onSwitchToBodyMap: () => void;
  onSwitchToBodyExplorer: () => void;
}

export function MainContentPanel({
  selectedBodyPart,
  onClearSelection,
  currentTab,
  onTabChange,
  testFilter,
  onTestFilterChange,
  onSwitchToSlideshow,
  onSwitchToBodyMap,
  onSwitchToBodyExplorer,
}: MainContentPanelProps) {
  // Define navigation links for the dropdown
  const navigationLinks: LinkItem[] = [
    {
      id: "body-explorer",
      label: "Body Explorer",
      icon: <User size={16} />,
      onClick: onSwitchToBodyExplorer,
    },
    {
      id: "body-map",
      label: "Body Map",
      icon: <Scan size={16} />,
      onClick: onSwitchToBodyMap,
    },
    {
      id: "slideshow",
      label: "Slideshow",
      icon: <Layers size={16} />,
      onClick: onSwitchToSlideshow,
    },
  ];

  // Get filtered tests
  const filteredTests = useMemo(() => {
    let tests: MedicalTest[] = selectedBodyPart
      ? getTestsForBodyPart(selectedBodyPart)
      : TESTS;

    if (testFilter === "imaging") {
      tests = tests.filter((test) => IMAGING_TYPES.includes(test.type));
    } else if (testFilter === "lab") {
      tests = tests.filter((test) => test.type === "other");
    }

    return tests;
  }, [selectedBodyPart, testFilter]);

  // Render content based on current tab
  const renderTabContent = () => {
    if (!selectedBodyPart) {
      // No body part selected - show all tests
      return (
        <div className="tests-grid">
          {filteredTests.length > 0 ? (
            filteredTests.map((test, index) => (
              <TestCard
                key={test.name}
                test={test}
                animationDelay={index * 30}
              />
            ))
          ) : (
            <div className="empty-state">
              <Search size={64} />
              <h3>No tests found</h3>
              <p>Try selecting a different body part or clearing the filter.</p>
            </div>
          )}
        </div>
      );
    }

    // Body part selected - show tab content
    switch (currentTab) {
      case "overview":
        return <OverviewPanel bodyPartName={selectedBodyPart} />;
      case "diseases":
        return <DiseasesPanel bodyPartName={selectedBodyPart} />;
      case "symptoms":
        return <SymptomsPanel bodyPartName={selectedBodyPart} />;
      case "tests":
        return (
          <div className="tests-grid">
            {filteredTests.length > 0 ? (
              filteredTests.map((test, index) => (
                <TestCard
                  key={test.name}
                  test={test}
                  animationDelay={index * 30}
                />
              ))
            ) : (
              <div className="empty-state">
                <Search size={64} />
                <h3>No tests found</h3>
                <p>
                  Try selecting a different body part or clearing the filter.
                </p>
              </div>
            )}
          </div>
        );
      case "procedures":
        return <ProceduresPanel bodyPartName={selectedBodyPart} />;
      case "treatments":
        return <TreatmentsPanel bodyPartName={selectedBodyPart} />;
      case "food":
        return <NutritionPanel bodyPartName={selectedBodyPart} />;
      default:
        return <OverviewPanel bodyPartName={selectedBodyPart} />;
    }
  };

  return (
    <main className="tests-panel">
      <div className="tests-header">
        <div className="tests-header-top">
          <div className="active-filter">
            <span className="filter-label">Showing:</span>
            <span className="filter-value">
              {selectedBodyPart
                ? formatBodyPartName(selectedBodyPart)
                : "All Tests"}
            </span>
            {selectedBodyPart && (
              <button className="clear-filter" onClick={onClearSelection}>
                <X size={14} />
              </button>
            )}
          </div>
          <div className="test-count-container">
            <LinksDropdown links={navigationLinks} />
            {currentTab === "tests" && (
              <span className="test-count">
                {filteredTests.length} test
                {filteredTests.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>

        {/* Tab navigation - only show when body part is selected */}
        {selectedBodyPart && (
          <TabNavigation currentTab={currentTab} onTabChange={onTabChange} />
        )}

        {/* Test filter bar - only show when on tests tab with body part selected */}
        {selectedBodyPart && currentTab === "tests" && (
          <div className="tests-filter-bar">
            <div className="tests-filter-group">
              <button
                className={`tests-filter-btn ${
                  testFilter === "all" ? "active" : ""
                }`}
                onClick={() => onTestFilterChange("all")}
              >
                All
              </button>
              <button
                className={`tests-filter-btn ${
                  testFilter === "imaging" ? "active" : ""
                }`}
                onClick={() => onTestFilterChange("imaging")}
              >
                Imaging
              </button>
              <button
                className={`tests-filter-btn ${
                  testFilter === "lab" ? "active" : ""
                }`}
                onClick={() => onTestFilterChange("lab")}
              >
                Lab
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="main-content-area">{renderTabContent()}</div>
    </main>
  );
}
