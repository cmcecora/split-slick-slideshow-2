import { useState } from 'react'
import { MedicalExplorer } from './components/MedicalExplorer'
import { SplitSlideshow } from './components/Slideshow/SplitSlideshow'

type View = 'explorer' | 'slideshow'

function App() {
  const [currentView, setCurrentView] = useState<View>('explorer')

  return (
    <div className="app">
      {currentView === 'explorer' ? (
        <MedicalExplorer onSwitchView={() => setCurrentView('slideshow')} />
      ) : (
        <SplitSlideshow onSwitchView={() => setCurrentView('explorer')} />
      )}
    </div>
  )
}

export default App

