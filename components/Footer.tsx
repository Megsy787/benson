export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Portfolio</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><i className="fas fa-envelope"></i> bensonchome80@gmail.com</li>
              <li><i className="fas fa-phone"></i> +254 713 806 508</li>
              <li><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</li>
            </ul>
          </div>

          <div className="footer-column social">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/benson-chome-343a84373" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:bensonchome80@gmail.com" className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Benson Chome Makau. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
