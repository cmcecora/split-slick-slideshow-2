import { 
  Info, AlertCircle, Activity, FileText, 
  Coffee, HeartPulse, Apple 
} from 'lucide-react'
import type { TabType } from '../../types'

interface TabNavigationProps {
  currentTab: TabType
  onTabChange: (tab: TabType) => void
}

const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: 'overview', label: 'Overview', icon: <Info size={16} /> },
  { id: 'diseases', label: 'Diseases', icon: <AlertCircle size={16} /> },
  { id: 'symptoms', label: 'Symptoms', icon: <Activity size={16} /> },
  { id: 'tests', label: 'Tests', icon: <FileText size={16} /> },
  { id: 'procedures', label: 'Procedures', icon: <Coffee size={16} /> },
  { id: 'treatments', label: 'Treatments', icon: <HeartPulse size={16} /> },
  { id: 'food', label: 'Food', icon: <Apple size={16} /> },
]

export function TabNavigation({ currentTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="tab-nav-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-nav-item ${currentTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

