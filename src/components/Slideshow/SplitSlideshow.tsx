import { useState, useRef, useCallback, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import type { Slide } from '../../types'
import './SplitSlideshow.css'

interface SplitSlideshowProps {
  onSwitchView: () => void
}

const slides: Slide[] = [
  { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-2.jpg', text: 'Canyon' },
  { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-3.jpg', text: 'Desert' },
  { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg', text: 'Erosion' },
  { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg', text: 'Shape' },
]

export function SplitSlideshow({ onSwitchView }: SplitSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)
  const currentY = useRef(0)
  const wheelLocked = useRef(false)
  
  const slideHeight = typeof window !== 'undefined' ? window.innerHeight : 800
  const maxItems = slides.length

  // Navigate to next slide
  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % maxItems)
    setTimeout(() => setIsAnimating(false), 1000)
  }, [isAnimating, maxItems])

  // Navigate to previous slide
  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + maxItems) % maxItems)
    setTimeout(() => setIsAnimating(false), 1000)
  }, [isAnimating, maxItems])

  // Go to specific slide
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 1000)
  }, [isAnimating, currentIndex])

  // Handle wheel events
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault()
    
    if (wheelLocked.current || isAnimating) return
    
    wheelLocked.current = true
    
    if (e.deltaY > 0) {
      goToNext()
    } else if (e.deltaY < 0) {
      goToPrev()
    }
    
    setTimeout(() => {
      wheelLocked.current = false
    }, 1200)
  }, [isAnimating, goToNext, goToPrev])

  // Handle touch/mouse start
  const handleDragStart = useCallback((clientY: number) => {
    if (isAnimating) return
    setIsDragging(true)
    startY.current = clientY
    currentY.current = clientY
  }, [isAnimating])

  // Handle touch/mouse move
  const handleDragMove = useCallback((clientY: number) => {
    if (!isDragging) return
    currentY.current = clientY
    const diff = currentY.current - startY.current
    setDragOffset(diff)
  }, [isDragging])

  // Handle touch/mouse end
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    
    const diff = currentY.current - startY.current
    const threshold = slideHeight * 0.15
    
    if (Math.abs(diff) > threshold) {
      if (diff < 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
    
    setDragOffset(0)
  }, [isDragging, slideHeight, goToNext, goToPrev])

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const wheelHandler = (e: WheelEvent) => handleWheel(e)
    
    container.addEventListener('wheel', wheelHandler, { passive: false })
    
    return () => {
      container.removeEventListener('wheel', wheelHandler)
    }
  }, [handleWheel])

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientY)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientY)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  // Calculate transforms
  const getLeftTransform = () => {
    const baseOffset = -currentIndex * slideHeight
    const drag = isDragging ? dragOffset : 0
    return `translateY(${baseOffset + drag}px)`
  }

  const getRightTransform = () => {
    // Right side goes in opposite direction
    const baseOffset = -(maxItems - 1 - currentIndex) * slideHeight
    const drag = isDragging ? -dragOffset : 0
    return `translateY(${baseOffset + drag}px)`
  }

  const getTextTransform = () => {
    const baseOffset = -currentIndex * slideHeight
    const drag = isDragging ? dragOffset : 0
    return `translateY(${baseOffset + drag}px)`
  }

  return (
    <div 
      className="split-slideshow"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Back button */}
      <button className="slideshow-back-btn" onClick={onSwitchView}>
        <ArrowLeft size={20} />
        <span>Back to Explorer</span>
      </button>

      {/* Left slideshow (full width, clipped to right half) */}
      <div className="slideshow slideshow-left">
        <div 
          className="slider"
          style={{
            transform: getLeftTransform(),
            transition: isDragging ? 'none' : 'transform 1s cubic-bezier(0.7, 0, 0.3, 1)'
          }}
        >
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.image} alt={slide.text} />
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="slick-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      {/* Right slideshow (clipped to left half, reverse order) */}
      <div className="slideshow slideshow-right">
        <div 
          className="slider"
          style={{
            transform: getRightTransform(),
            transition: isDragging ? 'none' : 'transform 0.95s cubic-bezier(0.7, 0, 0.3, 1)'
          }}
        >
          {[...slides].reverse().map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.image} alt={slide.text} />
            </div>
          ))}
        </div>
      </div>

      {/* Text overlay */}
      <div className="slideshow-text">
        <div 
          className="text-slider"
          style={{
            transform: getTextTransform(),
            transition: isDragging ? 'none' : 'transform 0.9s cubic-bezier(0.7, 0, 0.3, 1)'
          }}
        >
          {slides.map((slide, index) => (
            <div className="text-item" key={index}>
              {slide.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

