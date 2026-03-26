import { Link } from 'react-router-dom'
import './ServicePage.css'

function ElectricalServices() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Electrical Services</h1>
          <p>Licensed commercial electrical contractors you can trust</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>Commercial Electrical Excellence</h2>
            <p>Reliable electrical systems are the backbone of modern commercial facilities—powering everything from lighting and HVAC to computers and specialized equipment. At Wrightsville Bluewater Group, our licensed master electricians provide comprehensive electrical services that keep your property safe, compliant, and operating efficiently.</p>
            <p>With NC electrical contractor licenses, NFPA 70E Arc Flash certifications, and decades of combined experience, our electrical team handles projects of all sizes—from simple circuit repairs to complete power distribution system installations. We prioritize safety, code compliance, and minimal disruption to your operations.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Electrical Services</h2>
            <p>Comprehensive electrical solutions for commercial properties</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Electrical System Design & Installation</h3>
              <p>We design and install complete electrical systems for new construction, renovations, and expansions. Our design-build approach ensures efficient, code-compliant installations.</p>
              <p><strong>Design Services:</strong></p>
              <ul className="list-check">
                <li>Electrical load calculations and planning</li>
                <li>Power distribution design</li>
                <li>Lighting design and layout</li>
                <li>Emergency power system design</li>
                <li>Energy efficiency optimization</li>
                <li>Permit acquisition and code compliance</li>
              </ul>
              <p><strong>Installation Services:</strong></p>
              <ul className="list-check">
                <li>Service entrance and meter installation</li>
                <li>Main electrical panels and subpanels</li>
                <li>Power distribution systems</li>
                <li>Branch circuit wiring</li>
                <li>Conduit and raceway systems</li>
                <li>Grounding and bonding systems</li>
                <li>Testing and commissioning</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Power Distribution & Panel Upgrades</h3>
              <p>Older buildings often require electrical upgrades to meet modern power demands and safety standards. We upgrade and expand electrical systems to support your facility's needs.</p>
              <p><strong>Upgrade Services:</strong></p>
              <ul className="list-check">
                <li>Service capacity increases (100A to 4000A+)</li>
                <li>Electrical panel replacements and upgrades</li>
                <li>Subpanel installation</li>
                <li>Circuit breaker replacement</li>
                <li>Bus duct and wireway installation</li>
                <li>Transformer installation and replacement</li>
                <li>Voltage conversion systems</li>
                <li>Power factor correction</li>
                <li>Surge protection installation</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Commercial Lighting Services</h3>
              <p>Proper lighting enhances safety, productivity, and energy efficiency. We design, install, and maintain lighting systems that meet your facility's unique requirements.</p>
              <p><strong>Interior Lighting:</strong></p>
              <ul className="list-check">
                <li>LED retrofit and conversion</li>
                <li>Office and workspace lighting</li>
                <li>Industrial high-bay lighting</li>
                <li>Emergency and exit lighting</li>
                <li>Decorative and architectural lighting</li>
                <li>Task lighting installation</li>
                <li>Lighting control systems</li>
                <li>Occupancy sensor installation</li>
                <li>Daylight harvesting systems</li>
              </ul>
              <p><strong>Exterior Lighting:</strong></p>
              <ul className="list-check">
                <li>Parking lot and area lighting</li>
                <li>Building façade lighting</li>
                <li>Security and safety lighting</li>
                <li>Sign lighting</li>
                <li>Landscape lighting</li>
                <li>Photocell and timer controls</li>
              </ul>
              <p>Our LED conversion services typically reduce lighting energy costs by 50-70% while improving light quality and reducing maintenance.</p>
            </div>

            <div className="service-item card">
              <h3>Generator Installation & Service</h3>
              <p>Backup power systems ensure business continuity during power outages. We design, install, and maintain generator systems sized appropriately for your needs.</p>
              <p><strong>Generator Services:</strong></p>
              <ul className="list-check">
                <li>Standby generator sizing and selection</li>
                <li>Generator installation (natural gas, propane, diesel)</li>
                <li>Automatic transfer switch installation</li>
                <li>Load bank testing</li>
                <li>Preventive maintenance programs</li>
                <li>Generator repairs</li>
                <li>Fuel system maintenance</li>
                <li>Battery replacement</li>
                <li>Control system upgrades</li>
              </ul>
              <p>We work with all major generator brands including Generac, Kohler, Cummins, Caterpillar, and more.</p>
            </div>

            <div className="service-item card">
              <h3>Electrical Repairs & Troubleshooting</h3>
              <p>Electrical issues require prompt attention from qualified professionals. Our experienced electricians diagnose and repair problems quickly and safely.</p>
              <p><strong>Common Electrical Repairs:</strong></p>
              <ul className="list-check">
                <li>Circuit breaker trips and failures</li>
                <li>Outlet and switch replacement</li>
                <li>Lighting fixture repair</li>
                <li>Ballast and driver replacement</li>
                <li>Wiring repairs and replacement</li>
                <li>Panel and bus bar repairs</li>
                <li>Voltage problems</li>
                <li>Power quality issues</li>
                <li>Ground fault troubleshooting</li>
              </ul>
              <p>We use advanced diagnostic equipment including thermal imaging, power quality analyzers, and circuit tracers to identify issues accurately.</p>
            </div>

            <div className="service-item card">
              <h3>Electrical Safety Services</h3>
              <p>Electrical safety is paramount in commercial facilities. We provide comprehensive safety services to protect people and property.</p>
              <p><strong>Safety Services Include:</strong></p>
              <ul className="list-check">
                <li>Comprehensive electrical safety inspections</li>
                <li>Arc flash hazard assessments</li>
                <li>Arc flash labeling (NFPA 70E compliance)</li>
                <li>Infrared thermal scanning</li>
                <li>Ground fault testing</li>
                <li>GFCI and AFCI installation</li>
                <li>Emergency lighting testing</li>
                <li>Exit sign inspection and repair</li>
                <li>Electrical safety training</li>
              </ul>
              <p>Our thermal imaging inspections identify hot spots and potential failures before they cause problems or fires.</p>
            </div>

            <div className="service-item card">
              <h3>EV Charging Station Installation</h3>
              <p>Electric vehicle charging infrastructure is increasingly important for commercial properties. We design and install charging solutions for employee and customer use.</p>
              <p><strong>EV Charging Services:</strong></p>
              <ul className="list-check">
                <li>Site assessment and planning</li>
                <li>Level 2 charger installation (208-240V)</li>
                <li>DC fast charging installation</li>
                <li>Electrical service upgrades as needed</li>
                <li>Multiple charging station installations</li>
                <li>Load management systems</li>
                <li>Network-connected charging stations</li>
                <li>Maintenance and repair services</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Energy Management & Monitoring</h3>
              <p>Understanding electrical consumption is key to reducing costs. We install systems that monitor energy usage and identify optimization opportunities.</p>
              <p><strong>Energy Services:</strong></p>
              <ul className="list-check">
                <li>Energy monitoring system installation</li>
                <li>Submetering and tenant metering</li>
                <li>Power usage analytics</li>
                <li>Demand response systems</li>
                <li>Load shedding controls</li>
                <li>Energy efficiency audits</li>
                <li>Utility rebate coordination</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Emergency Electrical Service</h3>
              <p>Electrical emergencies require immediate response from qualified professionals. Our emergency electricians are available 24/7.</p>
              <p><strong>Emergency Response:</strong></p>
              <ul className="list-check">
                <li>24/7/365 emergency service: (910) 613-6570</li>
                <li>Rapid response (average under 60 minutes)</li>
                <li>Power outage troubleshooting</li>
                <li>Emergency repairs and temporary power</li>
                <li>Safety hazard resolution</li>
                <li>Storm damage response</li>
                <li>Fully-stocked emergency vehicles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-title">
            <h2>Expertise & Capabilities</h2>
            <p>Licensed, certified, and experienced commercial electricians</p>
          </div>
          
          <div className="expertise-content">
            <div className="expertise-category">
              <h4>Licenses & Certifications</h4>
              <ul className="list-check">
                <li>NC Master Electrical Contractor License</li>
                <li>NC Journeyman Electrician Licenses</li>
                <li>NFPA 70E Arc Flash Certified</li>
                <li>OSHA 30 Safety Certified</li>
                <li>Manufacturer Certifications (lighting, generators)</li>
                <li>Continuing Education Current</li>
              </ul>
            </div>

            <div className="expertise-category">
              <h4>Code Compliance</h4>
              <ul className="list-check">
                <li>National Electrical Code (NEC) current edition</li>
                <li>NFPA 70E Electrical Safety Standards</li>
                <li>Local electrical codes and amendments</li>
                <li>Building and fire codes</li>
                <li>ADA accessibility requirements</li>
                <li>Energy codes (IECC, ASHRAE 90.1)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Electrical Services?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>🎓 Licensed Professionals</h4>
              <p>All our electricians are licensed, insured, and continuously trained on the latest codes, technologies, and safety practices. Master electricians oversee all work.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔒 Safety First</h4>
              <p>Safety is never compromised. We follow strict safety protocols, use proper PPE, and maintain OSHA compliance. Our safety record is outstanding.</p>
            </div>

            <div className="benefit-card card">
              <h4>⚡ 24/7 Emergency Service</h4>
              <p>Electrical emergencies can't wait. Our emergency response team is available around the clock with fully-equipped vehicles ready to respond.</p>
            </div>

            <div className="benefit-card card">
              <h4>💡 Energy Efficiency Focus</h4>
              <p>We prioritize energy-efficient solutions including LED lighting, power factor correction, and smart controls that reduce operating costs.</p>
            </div>

            <div className="benefit-card card">
              <h4>📋 Complete Documentation</h4>
              <p>We provide thorough documentation including as-built drawings, test reports, warranties, and maintenance recommendations for all installations.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔧 Full-Service Capability</h4>
              <p>From small repairs to complete installations, low voltage to 480V 3-phase systems, we handle all commercial electrical needs under one roof.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Need Electrical Services?</h2>
            <p>Contact us for professional electrical solutions that prioritize safety and reliability</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Service</Link>
              <a href="tel:+19106136570" className="btn btn-secondary">Call: (910) 613-6570</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ElectricalServices

