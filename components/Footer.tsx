export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-brand-name">
              BigBen<span> Productions</span>
            </div>
            <p>
              Cinematographer, Visual Storyteller, and Creative Director based in Nairobi, Kenya.
              Delivering high-impact visual narratives for every production.
            </p>
            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com/in/benson-chome-343a84373"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="mailto:bensonchome80@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://wa.me/qr/7MADDXZXMDE7J1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                bensonchome80@gmail.com
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +254 713 806 508
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BigBen Productions. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Cinematographer & Visual Storyteller</p>
        </div>
      </div>
    </footer>
  )
}
