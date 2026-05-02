'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch("https://formsubmit.co/ajax/bensonchome80@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        showNotification('Message sent successfully!', 'success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      showNotification('Failed to send message. Please try again.', 'error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Start a Project</h2>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Let&apos;s Create Together</h3>
            <p>Ready to bring your vision to life? Whether you need a cinematographer for your next production or a photographer for an event, I am here to help.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>bensonchome80@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+254 713 806 508</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/benson-chome-343a84373" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:bensonchome80@gmail.com" className="social-icon" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${status === 'loading' ? 'loading' : ''}`} disabled={status === 'loading'}>
              <span className="btn-text">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </span>
              {status === 'loading' && (
                <span className="loading-spinner">
                  <i className="fas fa-spinner fa-spin"></i>
                </span>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {notification && (
          <motion.div 
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: 20, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              background: notification.type === 'success' ? 'var(--success-color)' : 'var(--danger-color)',
              position: 'fixed',
              top: '100px',
              right: '20px'
            }}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
