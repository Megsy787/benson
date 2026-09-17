'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'services', 'projects', 'experience', 'contact']
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 140) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleMenu = () => {
    const next = !isMenuOpen
    setIsMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          {/* Brand */}
          <a href="#home" className="nav-brand" onClick={handleLinkClick}>
            BigBen<span> Productions</span>
          </a>

          {/* Nav Links */}
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" role="button" tabIndex={0}>
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
            <div
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              role="button"
              tabIndex={0}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
