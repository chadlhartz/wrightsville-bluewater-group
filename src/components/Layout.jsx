import { Link, useLocation } from 'react-router-dom'
import './Layout.css'
import logo from '../assets/logo.svg'

function Layout({ children }) {
  const location = useLocation()
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src={logo} alt="Wrightsville Bluewater Group" className="logo-image" />
              <div className="logo-text-container">
                <span className="logo-text">Wrightsville Bluewater Group</span>
                <span className="logo-tagline">Excellence in Commercial Maintenance</span>
              </div>
            </Link>
            <nav className="nav">
              <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
              <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
              <Link to="/case-studies" className={isActive('/case-studies') ? 'active' : ''}>Case Studies</Link>
              <Link to="/safety" className={isActive('/safety') ? 'active' : ''}>Safety</Link>
              <Link to="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link>
              <Link to="/contact" className="btn-contact">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Wrightsville Bluewater Group</h3>
              <p>Your trusted partner for comprehensive commercial building maintenance and operations. Available 24/7 for emergency services.</p>
              <div className="footer-contact">
                <p><strong>Emergency Hotline:</strong> 1-800-WBG-HELP</p>
                <p><strong>Office:</strong> (910) 555-0100</p>
                <p><strong>Email:</strong> info@wbgcommercial.com</p>
              </div>
            </div>

            <div className="footer-section">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services/hvac">HVAC Systems</Link></li>
                <li><Link to="/services/janitorial">Janitorial Services</Link></li>
                <li><Link to="/services/electrical">Electrical Services</Link></li>
                <li><Link to="/services/security">Security Systems</Link></li>
                <li><Link to="/services/fire-safety">Fire Safety</Link></li>
                <li><Link to="/services/inspections">Inspections</Link></li>
                <li><Link to="/services/emergency">Emergency Repairs</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/safety">Safety Program</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Service Areas</h4>
              <p>Proudly serving commercial properties throughout:</p>
              <ul>
                <li>Wilmington Metro Area</li>
                <li>Brunswick County</li>
                <li>New Hanover County</li>
                <li>Pender County</li>
                <li>And surrounding regions</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-certifications">
              <span className="cert-badge">Licensed</span>
              <span className="cert-badge">Bonded</span>
              <span className="cert-badge">Insured</span>
              <span className="cert-badge">OSHA Certified</span>
              <span className="cert-badge">EPA Compliant</span>
            </div>
            <p className="copyright">
              © {new Date().getFullYear()} Wrightsville Bluewater Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

