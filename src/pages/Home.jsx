import { Link } from 'react-router-dom'
import './Home.css'
import buildingImage from '../assets/building-image.svg'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Wrightsville Bluewater Group</h1>
          <p>Your Trusted Partner for Complete Commercial Building Maintenance & Operations</p>
          <p className="hero-subtitle">Available 24/7 • Licensed & Insured • Serving the Greater Wilmington Area Since 1998</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Commercial Properties Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Certified Technicians</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">Client Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Comprehensive Commercial Building Services</h2>
            <p>One partner for all your facility maintenance and operations needs</p>
          </div>
          
          <div className="services-grid grid grid-3">
            <div className="service-card card">
              <div className="icon-box">🌡️</div>
              <h3>HVAC Systems</h3>
              <p>Complete heating, ventilation, and air conditioning services including installation, maintenance, repair, and energy efficiency optimization for commercial facilities of all sizes.</p>
              <Link to="/services/hvac" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card card">
              <div className="icon-box">✨</div>
              <h3>Janitorial Services</h3>
              <p>Professional cleaning and sanitation services for offices, retail spaces, healthcare facilities, and industrial buildings with customized schedules and eco-friendly products.</p>
              <Link to="/services/janitorial" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card card">
              <div className="icon-box">⚡</div>
              <h3>Electrical Services</h3>
              <p>Licensed electrical contractors providing commercial wiring, lighting systems, power distribution, generator installation, and electrical safety inspections.</p>
              <Link to="/services/electrical" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card card">
              <div className="icon-box">🔒</div>
              <h3>Security Systems</h3>
              <p>Advanced security solutions including access control, surveillance cameras, intrusion detection, and 24/7 monitoring for complete property protection.</p>
              <Link to="/services/security" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card card">
              <div className="icon-box">🔥</div>
              <h3>Fire Safety</h3>
              <p>Fire protection systems, sprinkler maintenance, fire alarm testing, emergency lighting, and compliance with NFPA standards to keep your property safe.</p>
              <Link to="/services/fire-safety" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card card">
              <div className="icon-box">📋</div>
              <h3>Inspections</h3>
              <p>Comprehensive building inspections, safety audits, compliance assessments, and preventive maintenance evaluations to identify issues before they become problems.</p>
              <Link to="/services/inspections" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card card">
              <div className="icon-box">🚨</div>
              <h3>Emergency Repairs</h3>
              <p>24/7 emergency response team ready to handle urgent repairs, system failures, and critical maintenance issues with rapid response times.</p>
              <Link to="/services/emergency" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="why-choose-header">
            <div className="section-title">
              <h2>Why Choose Wrightsville Bluewater Group?</h2>
              <p>Setting the standard for commercial building maintenance excellence</p>
            </div>
            <div className="building-image-container">
              <img src={buildingImage} alt="Commercial Buildings" className="building-image" />
            </div>
          </div>
          
          <div className="grid grid-2">
            <div className="feature-card card">
              <h3>🎯 Single-Source Solution</h3>
              <p>Eliminate the hassle of managing multiple contractors. We provide comprehensive building maintenance services under one roof, streamlining communication, accountability, and billing. Our integrated approach ensures all building systems work together efficiently.</p>
            </div>

            <div className="feature-card card">
              <h3>⏰ 24/7 Emergency Response</h3>
              <p>Building emergencies don't wait for business hours. Our dedicated emergency response team is available around the clock, 365 days a year. Average response time: under 60 minutes for critical issues. We maintain fully-stocked service vehicles and strategic parts inventory.</p>
            </div>

            <div className="feature-card card">
              <h3>🎓 Certified Professionals</h3>
              <p>Our team holds industry-leading certifications including EPA Section 608, NFPA, OSHA 30, IICRC, and manufacturer-specific credentials. Every technician undergoes continuous training, background checks, and drug screening. Safety and expertise are never compromised.</p>
            </div>

            <div className="feature-card card">
              <h3>📱 Technology-Driven Service</h3>
              <p>Access our client portal for real-time work order tracking, digital inspection reports, maintenance history, and automated scheduling. Receive instant notifications, review service documentation, and manage invoices from any device. Modern technology for modern facilities.</p>
            </div>

            <div className="feature-card card">
              <h3>♻️ Sustainable Practices</h3>
              <p>We're committed to environmental responsibility. Our services include energy-efficient HVAC solutions, green cleaning products, LED lighting retrofits, water conservation systems, and waste reduction programs. Help your property meet sustainability goals while reducing operating costs.</p>
            </div>

            <div className="feature-card card">
              <h3>💼 Industry Experience</h3>
              <p>With over 25 years serving commercial properties, we understand the unique challenges of different facility types: office buildings, retail centers, healthcare facilities, industrial warehouses, educational institutions, and multi-tenant properties. We've seen it all and solved it all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Trusted by leading businesses across the region</p>
          </div>
          
          <div className="grid grid-3">
            <div className="testimonial card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Wrightsville Bluewater Group has been maintaining our 200,000 sq ft office complex for five years. Their proactive approach has reduced our maintenance costs by 30% while improving system reliability. The emergency response team saved us during a major HVAC failure in July."</p>
              <div className="testimonial-author">
                <strong>Jennifer Martinez</strong>
                <span>Facilities Director, Coastal Properties LLC</span>
              </div>
            </div>

            <div className="testimonial card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"As a property management company overseeing 12 retail centers, we needed a reliable partner who could handle everything. WBG's comprehensive services and responsive communication have made our jobs so much easier. They're always professional and get the job done right."</p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>VP Operations, Atlantic Retail Management</span>
              </div>
            </div>

            <div className="testimonial card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Healthcare facilities require the highest standards for cleanliness, safety, and system reliability. Wrightsville Bluewater Group exceeds these standards consistently. Their attention to detail and compliance knowledge gives us complete peace of mind."</p>
              <div className="testimonial-author">
                <strong>Dr. Sarah Thompson</strong>
                <span>Administrator, Wilmington Medical Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Experience Excellence in Building Maintenance?</h2>
            <p>Contact us today for a free consultation and discover how we can optimize your facility operations.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request a Free Quote</Link>
              <a href="tel:1-800-924-4357" className="btn btn-secondary">Call: 1-800-WBG-HELP</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

