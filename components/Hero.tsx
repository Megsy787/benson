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
        setTypingSpeed(2000)
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
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I&apos;m <span>{roles[roleIndex].substring(0, charIndex)}</span>
          </h1>
          <h2 className="hero-subtitle">Benson Chome Makau</h2>
          <p className="hero-description">
            Transforming ideas into captivating visual narratives. From multi-camera live broadcasts to intimate cinematic portraits, I combine technical precision with creative vision to deliver high-impact production.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <Image 
              src="/static/ben5.jpeg" 
              alt="Benson Chome Makau" 
              width={450} 
              height={562} 
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
