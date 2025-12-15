import { useState, useCallback, useMemo } from 'react'
import type { ViewMode, TabType, TestFilterType, MedicalExplorerState, MedicalTest } from '../types'
import { TESTS, getTestsForBodyPart, IMAGING_TYPES } from '../data/testData'

export function useMedicalExplorer() {
  const [state, setState] = useState<MedicalExplorerState>({
    selectedBodyPart: null,
    currentView: 'grouped',
    currentTab: 'tests',
    testFilter: 'all',
    searchTerm: ''
  })

  // Select a body part
  const selectBodyPart = useCallback((bodyPart: string | null) => {
    setState(prev => ({
      ...prev,
      selectedBodyPart: bodyPart === prev.selectedBodyPart ? null : bodyPart
    }))
  }, [])

  // Clear selection
  const clearSelection = useCallback(() => {
    setState(prev => ({
      ...prev,
      selectedBodyPart: null,
      currentTab: 'tests',
      testFilter: 'all'
    }))
  }, [])

  // Change view mode
  const setViewMode = useCallback((view: ViewMode) => {
    setState(prev => ({ ...prev, currentView: view }))
  }, [])

  // Change tab
  const setTab = useCallback((tab: TabType) => {
    setState(prev => ({ ...prev, currentTab: tab }))
  }, [])

  // Change test filter
  const setTestFilter = useCallback((filter: TestFilterType) => {
    setState(prev => ({ ...prev, testFilter: filter }))
  }, [])

  // Update search term
  const setSearchTerm = useCallback((term: string) => {
    setState(prev => ({ ...prev, searchTerm: term }))
  }, [])

  // Get filtered tests
  const filteredTests = useMemo((): MedicalTest[] => {
    let tests = state.selectedBodyPart 
      ? getTestsForBodyPart(state.selectedBodyPart)
      : TESTS

    if (state.testFilter === 'imaging') {
      tests = tests.filter(test => IMAGING_TYPES.includes(test.type))
    } else if (state.testFilter === 'lab') {
      tests = tests.filter(test => test.type === 'other')
    }

    return tests
  }, [state.selectedBodyPart, state.testFilter])

  // Check if body part is selected
  const hasSelection = state.selectedBodyPart !== null

  return {
    // State
    ...state,
    filteredTests,
    hasSelection,
    
    // Actions
    selectBodyPart,
    clearSelection,
    setViewMode,
    setTab,
    setTestFilter,
    setSearchTerm
  }
}

