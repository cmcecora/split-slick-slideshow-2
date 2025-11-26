/**
 * Medical Tests Explorer - Main Script
 * Handles body part selection, filtering, search, and view toggling
 */

(function() {
  'use strict';

  // DOM Elements
  const groupedView = document.getElementById('groupedView');
  const systemsView = document.getElementById('systemsView');
  const flatView = document.getElementById('flatView');
  const testsGrid = document.getElementById('testsGrid');
  const bodyPartSearch = document.getElementById('bodyPartSearch');
  const activeFilter = document.getElementById('activeFilter');
  const clearFilterBtn = document.getElementById('clearFilter');
  const testCount = document.getElementById('testCount');
  const viewToggleButtons = document.querySelectorAll('.toggle-btn');

  // State
  let selectedBodyPart = null;
  let currentView = 'grouped';

  // ============================================
  // Initialization
  // ============================================

  function init() {
    renderGroupedView();
    renderSystemsView();
    renderFlatView();
    renderTests(TESTS);
    setupEventListeners();
  }

  // ============================================
  // Render Functions
  // ============================================

  function renderGroupedView() {
    let html = '';
    
    for (const [categoryName, bodyParts] of Object.entries(BODY_PART_CATEGORIES)) {
      const filteredParts = bodyParts.filter(bp => 
        !bp.includes('Unspecified') && 
        !bp.includes('Target organ') &&
        !bp.includes('Varies')
      );
      
      if (filteredParts.length === 0) continue;

      html += `
        <div class="category" data-category="${categoryName}">
          <div class="category-header">
            <span class="category-title">
              ${getCategoryIcon(categoryName)}
              ${categoryName}
              <span class="category-count">${filteredParts.length}</span>
            </span>
            <svg class="category-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="category-items">
            ${filteredParts.map(bp => createBodyPartCard(bp)).join('')}
          </div>
        </div>
      `;
    }

    groupedView.innerHTML = html;
  }

  function renderSystemsView() {
    let html = '';
    
    for (const [systemName, bodyParts] of Object.entries(BODY_SYSTEMS)) {
      const filteredParts = bodyParts.filter(bp => 
        !bp.includes('Unspecified') && 
        !bp.includes('Target organ') &&
        !bp.includes('Varies')
      );
      
      if (filteredParts.length === 0) continue;

      // Remove duplicates from filtered parts
      const uniqueParts = [...new Set(filteredParts)];

      html += `
        <div class="category system-category" data-system="${systemName}">
          <div class="category-header system-header">
            <span class="category-title">
              ${getSystemIcon(systemName)}
              ${systemName}
              <span class="category-count">${uniqueParts.length}</span>
            </span>
            <svg class="category-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="category-items system-items">
            ${uniqueParts.map(bp => createBodyPartCard(bp)).join('')}
          </div>
        </div>
      `;
    }

    systemsView.innerHTML = html;
  }

  function renderFlatView() {
    // Get all unique body parts, sorted alphabetically
    const allParts = [...new Set(
      Object.values(BODY_PART_CATEGORIES).flat()
    )].filter(bp => 
      !bp.includes('Unspecified') && 
      !bp.includes('Target organ') &&
      !bp.includes('Varies')
    ).sort();

    flatView.innerHTML = `
      <div class="body-parts-grid">
        ${allParts.map(bp => createBodyPartCard(bp)).join('')}
      </div>
    `;
  }

  function createBodyPartCard(bodyPart) {
    const imageUrl = getBodyPartImage(bodyPart);
    const hasImage = imageUrl !== null;
    
    return `
      <div class="body-part-card" data-body-part="${bodyPart}">
        ${hasImage 
          ? `<img class="body-part-image" src="${imageUrl}" alt="${bodyPart}" loading="lazy">`
          : `<div class="body-part-placeholder">
              ${getBodyPartIcon(bodyPart)}
            </div>`
        }
        <div class="body-part-name">${formatBodyPartName(bodyPart)}</div>
      </div>
    `;
  }

  function renderTests(tests, animate = false) {
    if (tests.length === 0) {
      testsGrid.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <h3>No tests found</h3>
          <p>Try selecting a different body part or clearing the filter.</p>
        </div>
      `;
      testCount.textContent = '0 tests';
      return;
    }

    const html = tests.map((test, index) => {
      const testImage = typeof getTestImage === 'function' 
        ? getTestImage(test.name, test.type) 
        : `./images/placeholder-${test.type}.svg`;
      
      return `
      <div class="test-card ${animate ? 'showing' : ''}" style="${animate ? `animation-delay: ${index * 30}ms` : ''}">
        <div class="test-card-image">
          <img src="${testImage}" alt="${test.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="placeholder-icon" style="display:none;">${getTestIcon(test.type)}</div>
          <span class="test-type-badge ${test.type}">${test.type.toUpperCase()}</span>
        </div>
        <div class="test-card-content">
          <h3 class="test-card-title">${test.name}</h3>
          <div class="test-card-body-parts">
            ${test.bodyParts.slice(0, 3).map(bp => 
              `<span class="test-card-body-part">${formatBodyPartName(bp)}</span>`
            ).join('')}
            ${test.bodyParts.length > 3 ? `<span class="test-card-body-part">+${test.bodyParts.length - 3}</span>` : ''}
          </div>
        </div>
      </div>
    `}).join('');

    testsGrid.innerHTML = html;
    testCount.textContent = `${tests.length} test${tests.length !== 1 ? 's' : ''}`;
  }

  // ============================================
  // Event Handlers
  // ============================================

  function setupEventListeners() {
    // Category accordion toggles
    groupedView.addEventListener('click', (e) => {
      const header = e.target.closest('.category-header');
      if (header) {
        header.classList.toggle('expanded');
      }

      const card = e.target.closest('.body-part-card');
      if (card) {
        selectBodyPart(card.dataset.bodyPart);
      }
    });

    // Flat view clicks
    flatView.addEventListener('click', (e) => {
      const card = e.target.closest('.body-part-card');
      if (card) {
        selectBodyPart(card.dataset.bodyPart);
      }
    });

    // Systems view clicks
    systemsView.addEventListener('click', (e) => {
      const header = e.target.closest('.category-header');
      if (header) {
        header.classList.toggle('expanded');
      }

      const card = e.target.closest('.body-part-card');
      if (card) {
        selectBodyPart(card.dataset.bodyPart);
      }
    });

    // View toggle
    viewToggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        switchView(view);
      });
    });

    // Search
    bodyPartSearch.addEventListener('input', (e) => {
      filterBodyParts(e.target.value);
    });

    // Clear filter
    clearFilterBtn.addEventListener('click', () => {
      clearSelection();
    });

    // Expand first category by default
    const firstHeader = groupedView.querySelector('.category-header');
    if (firstHeader) {
      firstHeader.classList.add('expanded');
    }
  }

  function selectBodyPart(bodyPart) {
    // Remove previous selection
    document.querySelectorAll('.body-part-card.active').forEach(card => {
      card.classList.remove('active');
    });

    // If clicking the same body part, deselect
    if (selectedBodyPart === bodyPart) {
      clearSelection();
      return;
    }

    // Add new selection
    selectedBodyPart = bodyPart;
    document.querySelectorAll(`[data-body-part="${bodyPart}"]`).forEach(card => {
      card.classList.add('active');
    });

    // Update filter display
    activeFilter.querySelector('.filter-value').textContent = formatBodyPartName(bodyPart);
    clearFilterBtn.classList.remove('hidden');

    // Filter tests with animation
    const filteredTests = getTestsForBodyPart(bodyPart);
    
    // Animate out current cards
    const currentCards = testsGrid.querySelectorAll('.test-card');
    currentCards.forEach(card => card.classList.add('hiding'));

    setTimeout(() => {
      renderTests(filteredTests, true);
    }, 200);
  }

  function clearSelection() {
    selectedBodyPart = null;
    document.querySelectorAll('.body-part-card.active').forEach(card => {
      card.classList.remove('active');
    });
    activeFilter.querySelector('.filter-value').textContent = 'All Tests';
    clearFilterBtn.classList.add('hidden');
    
    const currentCards = testsGrid.querySelectorAll('.test-card');
    currentCards.forEach(card => card.classList.add('hiding'));

    setTimeout(() => {
      renderTests(TESTS, true);
    }, 200);
  }

  function switchView(view) {
    currentView = view;
    
    viewToggleButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Hide all views first
    groupedView.classList.add('hidden');
    systemsView.classList.add('hidden');
    flatView.classList.add('hidden');

    // Show the selected view
    if (view === 'grouped') {
      groupedView.classList.remove('hidden');
    } else if (view === 'systems') {
      systemsView.classList.remove('hidden');
    } else {
      flatView.classList.remove('hidden');
    }
  }

  function filterBodyParts(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (currentView === 'grouped' || currentView === 'systems') {
      // Filter in grouped or systems view
      const container = currentView === 'grouped' ? groupedView : systemsView;
      container.querySelectorAll('.category').forEach(category => {
        const cards = category.querySelectorAll('.body-part-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
          const bodyPart = card.dataset.bodyPart.toLowerCase();
          const matches = bodyPart.includes(term);
          card.style.display = matches ? '' : 'none';
          if (matches) visibleCount++;
        });
        
        // Hide entire category if no matches
        category.style.display = visibleCount > 0 ? '' : 'none';
        
        // Expand categories with matches
        if (term && visibleCount > 0) {
          category.querySelector('.category-header').classList.add('expanded');
        }
      });
    } else {
      // Filter in flat view
      flatView.querySelectorAll('.body-part-card').forEach(card => {
        const bodyPart = card.dataset.bodyPart.toLowerCase();
        card.style.display = bodyPart.includes(term) ? '' : 'none';
      });
    }
  }

  // ============================================
  // Helper Functions
  // ============================================

  function formatBodyPartName(name) {
    return name
      .replace(/\(.*?\)/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getCategoryIcon(category) {
    const icons = {
      'Head & Brain': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
      'Neck & Throat': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M8 6c0 3 4 3 4 6s-4 3-4 6M16 6c0 3-4 3-4 6s4 3 4 6"></path></svg>',
      'Chest & Heart': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
      'Abdomen': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="8" ry="10"></ellipse><path d="M12 2v20"></path></svg>',
      'Pelvis & Reproductive': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="6"></circle><path d="M12 16v6M9 22h6"></path></svg>',
      'Spine & Back': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M8 4h8M9 8h6M8 12h8M9 16h6M8 20h8"></path></svg>',
      'Upper Extremities': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 11V7a5 5 0 0 1 10 0v4M5 17h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z"></path></svg>',
      'Lower Extremities': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 16v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M6 22l2-6M18 22l-2-6"></path></svg>',
      'Vascular': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
      'Lymphatic & Immune': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2"></path></svg>',
      'Skin & Soft Tissue': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"></path><path d="M3 9h18M9 3v18"></path></svg>',
      'Whole Body & General': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="8" x2="12" y2="16"></line><path d="M8 21l4-5 4 5"></path><path d="M6 12l6 4 6-4"></path></svg>'
    };
    return icons[category] || '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>';
  }

  function getBodyPartIcon(bodyPart) {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    `;
  }

  function getTestIcon(type) {
    const icons = {
      ct: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="32" cy="32" r="24" stroke-dasharray="8 4"/>
        <circle cx="32" cy="32" r="16"/>
        <circle cx="32" cy="32" r="8"/>
        <line x1="32" y1="4" x2="32" y2="12"/>
        <line x1="32" y1="52" x2="32" y2="60"/>
        <line x1="4" y1="32" x2="12" y2="32"/>
        <line x1="52" y1="32" x2="60" y2="32"/>
      </svg>`,
      mri: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <ellipse cx="32" cy="32" rx="28" ry="20"/>
        <ellipse cx="32" cy="32" rx="20" ry="14"/>
        <ellipse cx="32" cy="32" rx="12" ry="8"/>
        <path d="M4 32h8M52 32h8"/>
      </svg>`,
      ultrasound: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 16c8 8 16 8 24 0"/>
        <path d="M16 24c12 12 20 12 32 0"/>
        <path d="M12 32c16 16 24 16 40 0"/>
        <path d="M8 40c20 16 28 16 48 0"/>
        <circle cx="32" cy="48" r="4" fill="currentColor"/>
      </svg>`,
      xray: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="8" y="8" width="48" height="48" rx="4"/>
        <circle cx="32" cy="24" r="8"/>
        <path d="M24 36h16v16H24z"/>
        <line x1="32" y1="32" x2="32" y2="36"/>
      </svg>`,
      pet: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="32" cy="32" r="24"/>
        <circle cx="32" cy="32" r="16" stroke-dasharray="4 2"/>
        <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.3"/>
        <circle cx="24" cy="28" r="3" fill="currentColor"/>
        <circle cx="40" cy="28" r="3" fill="currentColor"/>
        <circle cx="32" cy="38" r="4" fill="currentColor"/>
      </svg>`,
      nuclear: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="32" cy="32" r="6"/>
        <path d="M32 26c-6-8-16-8-16 6"/>
        <path d="M32 26c6-8 16-8 16 6"/>
        <path d="M26 32c-8 6-8 16 6 16"/>
        <path d="M38 32c8 6 8 16-6 16"/>
        <circle cx="32" cy="32" r="24" stroke-dasharray="6 3"/>
      </svg>`,
      angio: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M32 8v12"/>
        <path d="M32 20c-8 0-12 8-12 16s4 12 12 12"/>
        <path d="M32 20c8 0 12 8 12 16s-4 12-12 12"/>
        <path d="M32 48v8"/>
        <circle cx="32" cy="32" r="4" fill="currentColor"/>
      </svg>`,
      other: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="12" y="8" width="40" height="48" rx="4"/>
        <line x1="20" y1="20" x2="44" y2="20"/>
        <line x1="20" y1="28" x2="44" y2="28"/>
        <line x1="20" y1="36" x2="36" y2="36"/>
        <circle cx="32" cy="48" r="3"/>
      </svg>`
    };
    return icons[type] || icons.other;
  }

  // ============================================
  // Start the app
  // ============================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
