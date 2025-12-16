import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Link2 } from 'lucide-react'
import './LinksDropdown.css'

export interface LinkItem {
  id: string
  label: string
  icon: React.ReactNode
  onClick: () => void
}

interface LinksDropdownProps {
  links: LinkItem[]
}

export function LinksDropdown({ links }: LinksDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="links-dropdown" ref={dropdownRef}>
      <button
        className={`links-dropdown-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Link2 size={16} />
        <span>Links</span>
        <ChevronDown size={14} className="dropdown-chevron" />
      </button>

      {isOpen && (
        <div className="links-dropdown-menu" role="menu">
          {links.map(link => (
            <button
              key={link.id}
              className="links-dropdown-item"
              role="menuitem"
              onClick={() => {
                link.onClick()
                setIsOpen(false)
              }}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
