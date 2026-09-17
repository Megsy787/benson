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
    period: '2023 – Present',
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
    period: 'Completed',
    description: [
      'Tukuza Award: Served as a core Camera Operator, capturing high-quality live event footage for the prestigious award ceremony.',
      'Manyani NSY Graduation: Operated professional camera equipment executing precise framing and focus for event broadcasting and archiving.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="section-eyebrow">Career</div>
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="experience-card"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="accent-line" />

                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <h4 className="exp-company">
                      <span>{exp.company}</span> &mdash; {exp.location}
                    </h4>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>

                <ul className="exp-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
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
