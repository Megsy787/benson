'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const roles = ["Cinematographer", "Visual Storyteller", "Creative Director", "Video Editor"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex]

      if (isDeleting) {
        setCharIndex(prev => prev - 1)
        setTypingSpeed(50)
      } else {
        setCharIndex(prev => prev + 1)
        setTypingSpeed(100)
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true)
        setTypingSpeed(2200)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex(prev => (prev + 1) % roles.length)
        setTypingSpeed(500)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, typingSpeed])

  return (
    <section id="home" className="hero">
      <div className="container">
        {/* Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-eyebrow">
            Available for Projects
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m{' '}
            <span>
              {roles[roleIndex].substring(0, charIndex)}
              <span style={{ opacity: 0.7, animation: 'pulse 1s infinite' }}>|</span>
            </span>
          </h1>

          <h2 className="hero-subtitle">
            <strong>Benson Chome Makau</strong>
          </h2>

          <p className="hero-description">
            Transforming ideas into captivating visual narratives. From multi-camera live broadcasts
            to intimate cinematic portraits — I combine technical precision with creative vision to
            deliver high-impact productions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-play"></i>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number"><span>3+</span></div>
              <div className="stat-label">Years Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><span>20+</span></div>
              <div className="stat-label">Productions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><span>6+</span></div>
              <div className="stat-label">Live Events</div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="image-wrapper">
            <Image
              src="/static/profileimage.jpeg"
              alt="Benson Chome Makau — Cinematographer"
              width={450}
              height={600}
              priority
              style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
