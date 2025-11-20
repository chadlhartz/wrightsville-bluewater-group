import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive commercial building maintenance and operations solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <h2>Complete Facility Management Under One Roof</h2>
            <p>Wrightsville Bluewater Group offers a comprehensive suite of commercial building maintenance and operations services designed to keep your property running smoothly, safely, and efficiently. By consolidating all your facility needs with a single, trusted partner, you'll benefit from streamlined communication, coordinated service delivery, simplified billing, and enhanced accountability.</p>
            <p>Our integrated approach means all building systems are maintained by professionals who understand how they work together. This holistic perspective leads to better system performance, longer equipment life, reduced downtime, and lower total cost of ownership.</p>
          </div>

          <div className="grid grid-2 services-detail">
            <div className="service-detail-card card">
              <div className="icon-box">🌡️</div>
              <h3>HVAC Systems</h3>
              <p className="service-summary">Complete heating, ventilation, and air conditioning services for optimal comfort and efficiency.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>System design and installation</li>
                  <li>Preventive maintenance programs</li>
                  <li>Emergency repair services</li>
                  <li>Energy efficiency audits</li>
                  <li>Building automation integration</li>
                  <li>Indoor air quality solutions</li>
                  <li>Ductwork and ventilation</li>
                  <li>Chiller and boiler services</li>
                </ul>
              </div>
              
              <Link to="/services/hvac" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-detail-card card">
              <div className="icon-box">✨</div>
              <h3>Janitorial Services</h3>
              <p className="service-summary">Professional cleaning and sanitation for healthy, productive work environments.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>Daily cleaning services</li>
                  <li>Floor care and maintenance</li>
                  <li>Restroom sanitation</li>
                  <li>Window cleaning</li>
                  <li>Carpet and upholstery care</li>
                  <li>Disinfection services</li>
                  <li>Green cleaning programs</li>
                  <li>Special event cleaning</li>
                </ul>
              </div>
              
              <Link to="/services/janitorial" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-detail-card card">
              <div className="icon-box">⚡</div>
              <h3>Electrical Services</h3>
              <p className="service-summary">Licensed electrical contractors providing safe, reliable power distribution and systems.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>Electrical system design</li>
                  <li>Power distribution upgrades</li>
                  <li>Lighting systems and retrofits</li>
                  <li>Generator installation and service</li>
                  <li>Electrical safety inspections</li>
                  <li>Circuit breaker panel upgrades</li>
                  <li>Energy monitoring systems</li>
                  <li>Electric vehicle charging stations</li>
                </ul>
              </div>
              
              <Link to="/services/electrical" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-detail-card card">
              <div className="icon-box">🔒</div>
              <h3>Security Systems</h3>
              <p className="service-summary">Advanced security solutions to protect your property, assets, and people.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>Access control systems</li>
                  <li>Video surveillance</li>
                  <li>Intrusion detection</li>
                  <li>24/7 monitoring services</li>
                  <li>Badge and card readers</li>
                  <li>Intercom systems</li>
                  <li>Perimeter security</li>
                  <li>Integration with building systems</li>
                </ul>
              </div>
              
              <Link to="/services/security" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-detail-card card">
              <div className="icon-box">🔥</div>
              <h3>Fire Safety</h3>
              <p className="service-summary">Comprehensive fire protection systems and services to ensure life safety compliance.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>Fire alarm systems</li>
                  <li>Sprinkler system maintenance</li>
                  <li>Fire extinguisher service</li>
                  <li>Emergency lighting</li>
                  <li>Exit signage</li>
                  <li>Fire suppression systems</li>
                  <li>Smoke detection</li>
                  <li>Code compliance inspections</li>
                </ul>
              </div>
              
              <Link to="/services/fire-safety" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-detail-card card">
              <div className="icon-box">📋</div>
              <h3>Inspections</h3>
              <p className="service-summary">Thorough property assessments to identify issues and ensure regulatory compliance.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>Building system assessments</li>
                  <li>Safety compliance audits</li>
                  <li>Preventive maintenance evaluations</li>
                  <li>Energy efficiency assessments</li>
                  <li>ADA compliance reviews</li>
                  <li>Environmental inspections</li>
                  <li>Roof and structural inspections</li>
                  <li>Pre-purchase property evaluations</li>
                </ul>
              </div>
              
              <Link to="/services/inspections" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-detail-card card">
              <div className="icon-box">🚨</div>
              <h3>Emergency Repairs</h3>
              <p className="service-summary">24/7 rapid response for critical system failures and urgent maintenance issues.</p>
              
              <div className="service-capabilities">
                <h5>Services Include:</h5>
                <ul className="list-check">
                  <li>24/7 emergency hotline</li>
                  <li>Rapid response teams</li>
                  <li>HVAC system failures</li>
                  <li>Electrical emergencies</li>
                  <li>Plumbing emergencies</li>
                  <li>Water damage mitigation</li>
                  <li>Storm damage response</li>
                  <li>Emergency generator support</li>
                </ul>
              </div>
              
              <Link to="/services/emergency" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Service Approach</h2>
            <p>How we deliver excellence in every interaction</p>
          </div>
          
          <div className="approach-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h4>Consultation & Assessment</h4>
                <p>We begin by understanding your facility's unique needs, challenges, and goals. Our experts conduct a comprehensive property assessment to identify current conditions, potential issues, and opportunities for improvement. We review your existing maintenance programs, service history, and budget considerations.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h4>Customized Service Plan</h4>
                <p>Based on our assessment, we develop a tailored service plan that addresses your specific needs and priorities. This includes recommended service frequencies, preventive maintenance schedules, budget forecasts, and performance metrics. Every plan is designed to optimize system performance while managing costs.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h4>Seamless Implementation</h4>
                <p>We coordinate a smooth transition to our services with minimal disruption to your operations. This includes documenting all systems, establishing communication protocols, setting up our client portal access, and conducting orientation meetings with your team. We make sure everyone knows who to contact and how to submit service requests.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h4>Proactive Service Delivery</h4>
                <p>Our teams execute the service plan with precision and professionalism. We conduct scheduled maintenance, perform regular inspections, respond promptly to service requests, and maintain detailed documentation. Our client portal provides real-time visibility into all service activities and property conditions.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>We regularly review service performance, analyze data trends, and identify optimization opportunities. Quarterly business reviews keep you informed about property conditions, service metrics, completed work, and recommendations. We continuously refine our approach based on results and your evolving needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Benefits of Partnering With Us</h2>
            <p>The advantages of a comprehensive maintenance partnership</p>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>💰 Reduced Operating Costs</h4>
              <p>Preventive maintenance extends equipment life, reduces emergency repairs, and improves energy efficiency. Our clients typically see 20-35% reduction in total facility operating costs within the first year.</p>
            </div>

            <div className="benefit-card card">
              <h4>⏱️ Time Savings</h4>
              <p>One point of contact for all building needs eliminates the time spent coordinating multiple vendors. Our client portal streamlines work orders, approvals, and documentation.</p>
            </div>

            <div className="benefit-card card">
              <h4>🎯 Improved Reliability</h4>
              <p>Regular maintenance and monitoring dramatically reduce unexpected system failures. Our predictive maintenance approach identifies issues before they cause costly downtime.</p>
            </div>

            <div className="benefit-card card">
              <h4>🛡️ Risk Mitigation</h4>
              <p>Comprehensive inspections, safety compliance, and proper documentation protect you from liability. We maintain detailed records and ensure code compliance across all systems.</p>
            </div>

            <div className="benefit-card card">
              <h4>📊 Data-Driven Insights</h4>
              <p>Our reporting and analytics provide valuable insights into property performance, maintenance trends, and capital planning needs. Make informed decisions backed by solid data.</p>
            </div>

            <div className="benefit-card card">
              <h4>😊 Enhanced Satisfaction</h4>
              <p>Well-maintained facilities lead to happier tenants, customers, and employees. Comfortable, clean, safe environments improve productivity and reduce turnover.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Optimize Your Facility Operations?</h2>
            <p>Let's discuss how our comprehensive services can benefit your property</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
              <a href="tel:1-800-924-4357" className="btn btn-secondary">Call: 1-800-WBG-HELP</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

