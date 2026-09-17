'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    icon: 'fa-video',
    title: 'Cinematography',
    description:
      'Professional camera operation for films, commercials, music videos, and events. Every shot is crafted with purpose — precise framing, depth, and light to tell your story beautifully.',
    features: ['Camera Operation', 'Lighting Setup', 'Focus Pulling', 'Gimbal Work'],
  },
  {
    id: 2,
    icon: 'fa-camera',
    title: 'Photography',
    description:
      'High-resolution still photography for events, portraits, and corporate sessions. I capture authentic moments with a keen eye for composition and visual storytelling.',
    features: ['Event Photography', 'Portrait Sessions', 'Corporate Shoots', 'Gallery Delivery'],
  },
  {
    id: 3,
    icon: 'fa-satellite-dish',
    title: 'Live Broadcast & Streaming',
    description:
      'End-to-end live production management for events, church services, award shows, and conferences — multi-camera setups with seamless video switching and real-time streaming.',
    features: ['Multi-Camera Setup', 'Video Switching', 'Live Streaming', 'Tech Operations'],
  },
  {
    id: 4,
    icon: 'fa-bullhorn',
    title: 'Creative Direction',
    description:
      'Guiding productions from concept to final frame. I work with clients to develop a cohesive visual language — managing teams, timelines, and creative output under pressure.',
    features: ['Concept Development', 'Crew Leadership', 'On-Set Direction', 'Production Planning'],
  },
  {
    id: 5,
    icon: 'fa-film',
    title: 'Video Editing & Post-Production',
    description:
      'Polished, story-driven edits using Adobe Premiere Pro. From rough cut to final delivery — pacing, color grading, and audio sync handled with precision and style.',
    features: ['Video Editing', 'Color Grading', 'Adobe Premiere Pro', 'Final Delivery'],
  },
  {
    id: 6,
    icon: 'fa-layer-group',
    title: 'Event Coverage',
    description:
      'Full-day coverage for graduations, award ceremonies, corporate events, and celebrations. Comprehensive photo and video packages tailored to the scale of your event.',
    features: ['Full-Day Coverage', 'Photo + Video', 'Highlight Reels', 'Same-Week Delivery'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">What I Offer</div>
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            From behind the lens to behind the scenes — I bring creative and technical expertise
            to every production, big or small.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check"></i>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Have a project in mind?</p>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i>
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}
