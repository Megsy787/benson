'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Manyani KWS Cadet Graduation',
    description: 'VIP Camera Operations for high-profile graduation ceremony involving national leadership.',
    category: 'live',
    image: '/static/ben3.jpeg',
    tags: ['Live Switching', 'Camera Op']
  },
  {
    id: 2,
    title: 'Tukuza Awards Kenya',
    description: 'Multi-camera coverage of the prestigious Tukuza Awards at KICC, capturing award-winning moments.',
    category: 'live',
    image: '/static/ben2.jpeg',
    tags: ['Event Coverage', 'Live Streaming']
  },
  {
    id: 3,
    title: 'Creative Narrative Direction',
    description: 'Directing and producing high-quality cinematic content with a focus on powerful storytelling.',
    category: 'cinematic',
    image: '/static/vid.jpeg',
    tags: ['Directing', 'Storytelling']
  },
  {
    id: 4,
    title: 'Visual Perspectives',
    description: 'Exploring human connection and environmental beauty through high-resolution still photography.',
    category: 'stills',
    image: '/static/ben1.jpeg',
    tags: ['Portraiture', 'Composition']
  },
  {
    id: 5,
    title: 'Production Logistics',
    description: 'Coordinating complex shoots and ensuring every technical aspect aligns with the creative vision.',
    category: 'cinematic',
    image: '/static/production-logistics.jpeg',
    tags: ['Production', 'Leadership']
  },
  {
    id: 6,
    title: 'Broadcasting Excellence',
    description: 'Ensuring technical reliability and high visual standards for multi-platform live broadcasts.',
    category: 'live',
    image: '/static/ben5.jpeg',
    tags: ['Switching', 'Tech Ops']
  }
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'live', name: 'Live Events' },
  { id: 'cinematic', name: 'Cinematic' },
  { id: 'stills', name: 'Photography' }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Cinematic Portfolio</h2>
        
        <div className="projects-filter">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card"
              >
                <div className="project-image">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
