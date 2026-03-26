import { Link } from 'react-router-dom'
import './ServicePage.css'

function JanitorialServices() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Janitorial Services</h1>
          <p>Professional commercial cleaning for healthier, more productive workspaces</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>Commercial Cleaning Excellence</h2>
            <p>A clean facility is more than just aesthetically pleasing—it's essential for occupant health, productivity, and creating positive impressions on clients and customers. Our comprehensive janitorial services ensure your commercial property maintains the highest standards of cleanliness and sanitation.</p>
            <p>With IICRC-certified cleaning professionals, eco-friendly products, and customized cleaning programs, we deliver exceptional results for office buildings, healthcare facilities, retail spaces, industrial properties, and more. Our quality control systems, detailed checklists, and regular inspections ensure consistent, reliable service every time.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Janitorial Services</h2>
            <p>Comprehensive cleaning solutions tailored to your needs</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Daily Cleaning Services</h3>
              <p>Our core daily cleaning services maintain your facility's cleanliness and create a welcoming environment for employees and visitors.</p>
              <p><strong>Standard Daily Services Include:</strong></p>
              <ul className="list-check">
                <li>Trash removal and recycling collection</li>
                <li>Dusting of desks, surfaces, and furniture</li>
                <li>Vacuuming of carpeted areas</li>
                <li>Sweeping and mopping of hard floors</li>
                <li>Restroom cleaning and sanitation</li>
                <li>Break room and kitchen cleaning</li>
                <li>Glass and mirror cleaning</li>
                <li>Door and handle sanitization</li>
                <li>Light fixture cleaning and bulb replacement</li>
                <li>Replenishment of supplies (paper products, soap, etc.)</li>
              </ul>
              <p>We offer flexible scheduling including evening, overnight, and weekend service to avoid disruption to your operations.</p>
            </div>

            <div className="service-item card">
              <h3>Floor Care & Maintenance</h3>
              <p>Proper floor care extends the life of flooring materials, maintains appearance, and ensures safety. We provide expert care for all floor types.</p>
              <p><strong>Carpet Care:</strong></p>
              <ul className="list-check">
                <li>Regular vacuuming with HEPA filtration</li>
                <li>Spot cleaning and stain removal</li>
                <li>Deep cleaning and extraction</li>
                <li>Carpet protection treatments</li>
                <li>Deodorization services</li>
              </ul>
              <p><strong>Hard Floor Care:</strong></p>
              <ul className="list-check">
                <li>Stripping and refinishing of VCT and tile</li>
                <li>Burnishing and buffing for high-gloss finish</li>
                <li>Sealing and protection</li>
                <li>Stone and marble polishing</li>
                <li>Concrete floor maintenance</li>
                <li>Grout cleaning and sealing</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Restroom Sanitation</h3>
              <p>Clean, well-maintained restrooms are critical for occupant satisfaction and health. Our comprehensive restroom services ensure the highest standards of cleanliness and sanitation.</p>
              <p><strong>Restroom Services:</strong></p>
              <ul className="list-check">
                <li>Thorough cleaning and disinfection of all fixtures</li>
                <li>Toilet, urinal, and sink sanitization</li>
                <li>Mirror and chrome polishing</li>
                <li>Floor cleaning and disinfection</li>
                <li>Partition and wall cleaning</li>
                <li>Odor control and air freshening</li>
                <li>Supply replenishment (paper, soap, sanitizer)</li>
                <li>Deep cleaning of grout and hard-to-reach areas</li>
                <li>Fixture inspection and maintenance reporting</li>
              </ul>
              <p>We use hospital-grade disinfectants and EPA-registered products to ensure effective pathogen elimination.</p>
            </div>

            <div className="service-item card">
              <h3>Window Cleaning</h3>
              <p>Clean windows improve appearance, allow natural light, and create positive impressions. Our professional window cleaning services handle interior and exterior windows safely and effectively.</p>
              <p><strong>Window Services:</strong></p>
              <ul className="list-check">
                <li>Interior and exterior window cleaning</li>
                <li>High-rise window cleaning with certified technicians</li>
                <li>Frame and sill cleaning</li>
                <li>Screen cleaning and maintenance</li>
                <li>Streak-free cleaning solutions</li>
                <li>Scheduled regular service programs</li>
                <li>Post-construction window cleaning</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Specialized Cleaning Services</h3>
              <p>Beyond routine cleaning, we offer specialized services for specific needs and situations.</p>
              <p><strong>Healthcare & Medical Cleaning:</strong></p>
              <ul className="list-check">
                <li>Infection control protocols</li>
                <li>Examination room sanitation</li>
                <li>Waiting area maintenance</li>
                <li>Biomedical waste handling (where licensed)</li>
                <li>HIPAA-compliant procedures</li>
              </ul>
              <p><strong>Industrial Cleaning:</strong></p>
              <ul className="list-check">
                <li>Warehouse and facility cleaning</li>
                <li>Manufacturing floor maintenance</li>
                <li>Equipment cleaning (external)</li>
                <li>High-dust removal</li>
                <li>Loading dock cleaning</li>
              </ul>
              <p><strong>Post-Construction Cleaning:</strong></p>
              <ul className="list-check">
                <li>Debris and dust removal</li>
                <li>Window and surface cleaning</li>
                <li>Floor preparation and finishing</li>
                <li>Final punch-list cleaning</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Disinfection Services</h3>
              <p>Enhanced disinfection services provide additional protection against pathogens, viruses, and bacteria—especially important in healthcare, education, and high-traffic facilities.</p>
              <p><strong>Disinfection Services Include:</strong></p>
              <ul className="list-check">
                <li>Electrostatic disinfection spraying</li>
                <li>High-touch surface sanitization</li>
                <li>EPA-registered disinfectants</li>
                <li>Hospital-grade antimicrobial products</li>
                <li>Pathogen-specific protocols (flu, COVID-19, etc.)</li>
                <li>Scheduled ongoing disinfection programs</li>
                <li>Emergency outbreak response</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Day Porter Services</h3>
              <p>Day porters provide on-site cleaning presence during business hours to maintain cleanliness throughout the day and respond to immediate needs.</p>
              <p><strong>Day Porter Responsibilities:</strong></p>
              <ul className="list-check">
                <li>Continuous restroom monitoring and cleaning</li>
                <li>Lobby and common area maintenance</li>
                <li>Spill response and cleanup</li>
                <li>Trash removal throughout the day</li>
                <li>Conference room setup and cleanup</li>
                <li>Supply restocking</li>
                <li>Front-of-house cleaning</li>
                <li>Light maintenance coordination</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Green Cleaning Programs</h3>
              <p>Our eco-friendly cleaning programs use environmentally responsible products and practices that protect occupant health and reduce environmental impact.</p>
              <p><strong>Green Cleaning Includes:</strong></p>
              <ul className="list-check">
                <li>Green Seal certified cleaning products</li>
                <li>HEPA filtration vacuum systems</li>
                <li>Microfiber cleaning systems</li>
                <li>Water conservation practices</li>
                <li>Reduced chemical usage</li>
                <li>Sustainable waste management</li>
                <li>LEED building maintenance compliance</li>
                <li>Indoor air quality protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-title">
            <h2>Quality Assurance</h2>
            <p>Consistent excellence through comprehensive quality control</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Our Quality Control Systems</h3>
              <ul className="list-check">
                <li><strong>Detailed Checklists:</strong> Comprehensive task lists ensure nothing is missed during each cleaning visit</li>
                <li><strong>Regular Inspections:</strong> Supervisors conduct routine quality inspections using standardized evaluation criteria</li>
                <li><strong>Client Feedback:</strong> Regular surveys and communication channels keep us informed of your satisfaction</li>
                <li><strong>Digital Tracking:</strong> Mobile technology tracks task completion, timing, and any issues encountered</li>
                <li><strong>Continuous Training:</strong> Ongoing staff training ensures everyone knows current best practices and procedures</li>
                <li><strong>Performance Metrics:</strong> We track and report on key performance indicators to ensure consistent service</li>
                <li><strong>Rapid Response:</strong> Issues are addressed immediately—not at the next scheduled visit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Janitorial Services?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>✅ Certified Professionals</h4>
              <p>Our cleaning staff are IICRC certified, background-checked, drug-screened, and fully insured. Ongoing training ensures expertise in latest cleaning techniques and safety protocols.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔍 Attention to Detail</h4>
              <p>We don't just clean—we inspect, perfect, and ensure every detail meets our high standards. Our detailed checklists and quality control systems guarantee consistency.</p>
            </div>

            <div className="benefit-card card">
              <h4>♻️ Eco-Friendly</h4>
              <p>Green cleaning products and sustainable practices protect occupant health and the environment. We help facilities achieve LEED and sustainability certifications.</p>
            </div>

            <div className="benefit-card card">
              <h4>📱 Technology-Driven</h4>
              <p>Our mobile technology tracks services, documents completion, and provides real-time reporting. You'll always know what was done and when.</p>
            </div>

            <div className="benefit-card card">
              <h4>💼 Customized Programs</h4>
              <p>Every facility is unique. We develop customized cleaning programs tailored to your specific needs, schedule, and budget.</p>
            </div>

            <div className="benefit-card card">
              <h4>🎯 Reliable Service</h4>
              <p>Count on us to show up on time, every time. Our backup systems ensure your facility is cleaned even if team members are unavailable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready for a Cleaner, Healthier Facility?</h2>
            <p>Contact us for a free walkthrough and customized cleaning proposal</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Free Proposal</Link>
              <a href="tel:+19106136570" className="btn btn-secondary">Call: (910) 613-6570</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JanitorialServices

