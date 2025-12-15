import { useState } from 'react'
import { BodyPartsPanel } from './BodyPartsPanel'
import { TestsPanel } from './TestsPanel'
import type { ViewMode, TabType, TestFilterType } from '../../types'
import './MedicalExplorer.css'

interface MedicalExplorerProps {
  onSwitchView: () => void
}

export function MedicalExplorer({ onSwitchView }: MedicalExplorerProps) {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState<ViewMode>('grouped')
  const [currentTab, setCurrentTab] = useState<TabType>('tests')
  const [testFilter, setTestFilter] = useState<TestFilterType>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleClearSelection = () => {
    setSelectedBodyPart(null)
    setCurrentTab('tests')
    setTestFilter('all')
  }

  return (
    <div className="app-container">
      <BodyPartsPanel
        currentView={currentView}
        onViewChange={setCurrentView}
        selectedBodyPart={selectedBodyPart}
        onSelectBodyPart={setSelectedBodyPart}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <TestsPanel
        selectedBodyPart={selectedBodyPart}
        onClearSelection={handleClearSelection}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        testFilter={testFilter}
        onTestFilterChange={setTestFilter}
        onSwitchToSlideshow={onSwitchView}
      />
    </div>
  )
}

