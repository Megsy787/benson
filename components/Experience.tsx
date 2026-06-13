'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Accountant',
    company: 'SkyFaiba',
    location: 'Nairobi',
    period: '2024 – Present',
    description: [
      'Expertly manage complex bank and ledger reconciliations to ensure accuracy, maintain data integrity, and resolve discrepancies.',
      'Streamline accounts payable processes, optimizing working capital and maintaining positive supplier relationships.',
      'Oversee accounts receivable cycles, effectively reducing outstanding debts and improving cash flow.',
      'Conduct internal audits and generate detailed financial reports for executive decision-making and regulatory compliance.',
      'Collaborate on formulating comprehensive annual budgets and track actual performance.',
      'Manage inventory control, ensuring accurate stock reconciliation and effective safeguarding of assets.'
    ]
  },
  {
    id: 2,
    title: 'Video Producer',
    company: 'Reconciliation at the Cross Ministry',
    location: 'Nairobi',
    period: '2023 – 2025',
    description: [
      'Operate professional camera systems to capture high-quality cinematic visuals under varying lighting conditions.',
      'Lead creative and technical teams on set to execute artistic visions and deliver compelling visual narratives.',
      'Manage complex live broadcasts and multi-camera productions, engineering and operating video switchers.',
      'Assemble and refine raw footage into polished final cuts using advanced post-production software for pacing, color grading, and sound design.'
    ]
  },
  {
    id: 3,
    title: 'Freelance Camera Operator',
    company: 'Independent Projects',
    location: 'Kenya',
    period: 'Ongoing',
    description: [
      'Tukuza Award: Served as a core Camera Operator, capturing high-quality live event footage for the prestigious award ceremony.',
      'Manyani NSY Graduation: Operated professional camera equipment executing precise framing and focus for event broadcasting and archiving.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience" style={{ padding: '80px 0', backgroundColor: 'var(--darker-color)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="experience-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="experience-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--glass-bg)', 
                  padding: '30px', 
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent line on the left */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--gradient-1)' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '5px', color: 'var(--light-color)' }}>{exp.title}</h3>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--gray-color)', fontWeight: '500' }}>
                      <span style={{ color: 'var(--primary-color)' }}>{exp.company}</span> <span style={{ opacity: 0.7 }}>— {exp.location}</span>
                    </h4>
                  </div>
                  <div style={{ padding: '5px 15px', backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--primary-color)', marginTop: '5px', fontWeight: '600' }}>
                    {exp.period}
                  </div>
                </div>
                
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-color)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
