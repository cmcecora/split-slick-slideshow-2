import { useState } from 'react'
import { MedicalExplorer } from './components/MedicalExplorer'
import { SplitSlideshow } from './components/Slideshow/SplitSlideshow'
import BodyMap from './components/BodyMap'

type View = 'explorer' | 'slideshow' | 'body-map'

function App() {
  const [currentView, setCurrentView] = useState<View>('explorer')

  return (
    <div className="app">
      {currentView === 'explorer' && (
        <MedicalExplorer onSwitchView={(view) => setCurrentView(view)} />
      )}
      {currentView === 'slideshow' && (
        <SplitSlideshow onSwitchView={() => setCurrentView('explorer')} />
      )}
      {currentView === 'body-map' && (
        <BodyMap onSwitchView={() => setCurrentView('explorer')} />
      )}
    </div>
  )
}

export default App

