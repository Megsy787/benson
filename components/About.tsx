'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Cinematography & Camera',
    icon: 'fa-video',
    skills: [
      { name: 'Camera Operation', icon: 'fa-camera' },
      { name: 'Focus Pulling', icon: 'fa-crosshairs' },
      { name: 'Lighting Design', icon: 'fa-lightbulb' },
      { name: 'Gimbal & Drone', icon: 'fa-vr-cardboard' },
      { name: 'Composition', icon: 'fa-images' },
      { name: 'Visual Aesthetics', icon: 'fa-eye' },
    ]
  },
  {
    title: 'Post-Production',
    icon: 'fa-film',
    skills: [
      { name: 'Video Editing', icon: 'fa-cut' },
      { name: 'Adobe Premiere Pro', icon: 'fa-layer-group' },
    ]
  },
  {
    title: 'Direction & Live',
    icon: 'fa-broadcast-tower',
    skills: [
      { name: 'Creative Directing', icon: 'fa-bullhorn' },
      { name: 'Live Streaming', icon: 'fa-wifi' },
      { name: 'Video Switching', icon: 'fa-sliders-h' },
      { name: 'Crew Leadership', icon: 'fa-users' },
      { name: 'Production Planning', icon: 'fa-calendar-alt' },
    ]
  }
]

export default function About() {
  return (
    <section id="about" className="about-skills">
      <div className="container">
        <div className="split-layout">
          {/* Left Column: Creative Vision */}
          <motion.div 
            className="vision-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Creative Vision</h2>
            <div className="about-text">
              <p>I am a dedicated visual professional with a passion for <strong>Cinematography</strong> and <strong>Creative Direction</strong>. My journey has taken me from the energy of live award shows like the Tukuza Awards to specialized VIP camera operations for high-profile events in Manyani.</p>
              <p>Every frame I capture is a blend of storytelling and technical excellence. Whether I am directing a live stream, producing a cinematic project, or capturing the perfect still, my focus is on delivering a narrative that resonates. I thrive on the challenge of high-pressure environments, ensuring every production is seamless and visually stunning.</p>
              <div className="about-details">
                <div className="detail-item">
                  <i className="fas fa-user"></i>
                  <span><strong>Name:</strong> Benson Chome Makau</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-envelope"></i>
                  <span><strong>Email:</strong> bensonchome80@gmail.com</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <span><strong>Phone:</strong> +254 713 806 508</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span><strong>Location:</strong> Nairobi, Kenya</span>
                </div>
              </div>
              <a href="/static/BensonChome.pdf" className="btn btn-primary" download>Download Portfolio PDF</a>
            </div>
          </motion.div>

          {/* Right Column: Technical Expertise */}
          <motion.div 
            className="skills-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Technical Expertise</h2>
            <div className="skills-container">
              {skillCategories.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3><i className={`fas ${category.icon}`}></i> {category.title}</h3>
                  <div className="skills-grid">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skill-badge">
                        <i className={`fas ${skill.icon}`}></i> {skill.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
