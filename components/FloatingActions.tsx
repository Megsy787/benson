'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function FloatingActions() {
  const [mounted, setMounted] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="floating-actions">
      <a 
        href="#home" 
        className={`action-btn ${showBackToTop ? 'active' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{ 
          opacity: showBackToTop ? 1 : 0, 
          visibility: showBackToTop ? 'visible' : 'hidden',
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transform: showBackToTop ? 'scale(1)' : 'scale(0.5)'
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
      
      <div className="action-btn" onClick={toggleTheme} aria-label="Toggle theme">
        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      
      <a 
        href="https://wa.me/qr/7MADDXZXMDE7J1" 
        className="action-btn whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  )
}
