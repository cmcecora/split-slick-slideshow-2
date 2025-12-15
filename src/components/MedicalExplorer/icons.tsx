import { 
  Heart, Brain, Wind, Droplets, Utensils, 
  Droplet, Shield, Square, Dumbbell, Bone,
  Circle, User, Smile, Activity
} from 'lucide-react'

// Category icons
export function getCategoryIcon(category: string) {
  const iconProps = { size: 14 }
  
  switch (category) {
    case 'Head & Brain':
      return <Smile {...iconProps} />
    case 'Neck & Throat':
      return <User {...iconProps} />
    case 'Chest & Heart':
      return <Heart {...iconProps} />
    case 'Abdomen':
      return <Circle {...iconProps} />
    case 'Pelvis & Reproductive':
      return <Circle {...iconProps} />
    case 'Spine & Back':
      return <Activity {...iconProps} />
    case 'Upper Extremities':
      return <User {...iconProps} />
    case 'Lower Extremities':
      return <User {...iconProps} />
    case 'Vascular':
      return <Activity {...iconProps} />
    case 'Lymphatic & Immune':
      return <Shield {...iconProps} />
    case 'Skin & Soft Tissue':
      return <Square {...iconProps} />
    case 'Whole Body & General':
      return <User {...iconProps} />
    default:
      return <Circle {...iconProps} />
  }
}

// System icons with specific colors
export function getSystemIcon(system: string) {
  const iconProps = { size: 14 }
  
  switch (system) {
    case 'Cardiovascular':
      return <Heart {...iconProps} style={{ color: '#ef4444' }} />
    case 'Nervous':
      return <Brain {...iconProps} style={{ color: '#a855f7' }} />
    case 'Respiratory':
      return <Wind {...iconProps} style={{ color: '#3b82f6' }} />
    case 'Endocrine':
      return <Droplets {...iconProps} style={{ color: '#f59e0b' }} />
    case 'Digestive':
      return <Utensils {...iconProps} style={{ color: '#22c55e' }} />
    case 'Excretory':
      return <Droplet {...iconProps} style={{ color: '#eab308' }} />
    case 'Immune':
      return <Shield {...iconProps} style={{ color: '#06b6d4' }} />
    case 'Integumentary':
      return <Square {...iconProps} style={{ color: '#ec4899' }} />
    case 'Muscular':
      return <Dumbbell {...iconProps} style={{ color: '#f97316' }} />
    case 'Skeletal':
      return <Bone {...iconProps} style={{ color: '#94a3b8' }} />
    case 'Reproductive Female':
      return <Circle {...iconProps} style={{ color: '#f472b6' }} />
    case 'Reproductive Male':
      return <Circle {...iconProps} style={{ color: '#60a5fa' }} />
    default:
      return <Circle {...iconProps} />
  }
}

// Test type icons
export function getTestTypeIcon(type: string) {
  const iconProps = { size: 48 }
  
  switch (type) {
    case 'ct':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <circle cx="32" cy="32" r="24" strokeDasharray="8 4"/>
          <circle cx="32" cy="32" r="16"/>
          <circle cx="32" cy="32" r="8"/>
          <line x1="32" y1="4" x2="32" y2="12"/>
          <line x1="32" y1="52" x2="32" y2="60"/>
          <line x1="4" y1="32" x2="12" y2="32"/>
          <line x1="52" y1="32" x2="60" y2="32"/>
        </svg>
      )
    case 'mri':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <ellipse cx="32" cy="32" rx="28" ry="20"/>
          <ellipse cx="32" cy="32" rx="20" ry="14"/>
          <ellipse cx="32" cy="32" rx="12" ry="8"/>
          <path d="M4 32h8M52 32h8"/>
        </svg>
      )
    case 'ultrasound':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M20 16c8 8 16 8 24 0"/>
          <path d="M16 24c12 12 20 12 32 0"/>
          <path d="M12 32c16 16 24 16 40 0"/>
          <path d="M8 40c20 16 28 16 48 0"/>
          <circle cx="32" cy="48" r="4" fill="currentColor"/>
        </svg>
      )
    case 'xray':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <rect x="8" y="8" width="48" height="48" rx="4"/>
          <circle cx="32" cy="24" r="8"/>
          <path d="M24 36h16v16H24z"/>
          <line x1="32" y1="32" x2="32" y2="36"/>
        </svg>
      )
    case 'pet':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <circle cx="32" cy="32" r="24"/>
          <circle cx="32" cy="32" r="16" strokeDasharray="4 2"/>
          <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="24" cy="28" r="3" fill="currentColor"/>
          <circle cx="40" cy="28" r="3" fill="currentColor"/>
          <circle cx="32" cy="38" r="4" fill="currentColor"/>
        </svg>
      )
    case 'nuclear':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <circle cx="32" cy="32" r="6"/>
          <path d="M32 26c-6-8-16-8-16 6"/>
          <path d="M32 26c6-8 16-8 16 6"/>
          <path d="M26 32c-8 6-8 16 6 16"/>
          <path d="M38 32c8 6 8 16-6 16"/>
          <circle cx="32" cy="32" r="24" strokeDasharray="6 3"/>
        </svg>
      )
    case 'angio':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M32 8v12"/>
          <path d="M32 20c-8 0-12 8-12 16s4 12 12 12"/>
          <path d="M32 20c8 0 12 8 12 16s-4 12-12 12"/>
          <path d="M32 48v8"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <rect x="12" y="8" width="40" height="48" rx="4"/>
          <line x1="20" y1="20" x2="44" y2="20"/>
          <line x1="20" y1="28" x2="44" y2="28"/>
          <line x1="20" y1="36" x2="36" y2="36"/>
          <circle cx="32" cy="48" r="3"/>
        </svg>
      )
  }
}

// Body part placeholder icon
export function getBodyPartPlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  )
}

