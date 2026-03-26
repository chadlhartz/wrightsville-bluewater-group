import { Link } from 'react-router-dom'
import './ServicePage.css'

function HVACServices() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>HVAC Services</h1>
          <p>Commercial heating, ventilation, and air conditioning excellence</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>Complete HVAC Solutions for Commercial Properties</h2>
            <p>Your HVAC system is the heart of your building—it directly impacts occupant comfort, productivity, energy costs, and equipment lifespan. At Wrightsville Bluewater Group, we provide comprehensive commercial HVAC services that keep your systems running efficiently, reliably, and cost-effectively.</p>
            <p>With over 25 years of experience serving commercial properties throughout the region, our EPA-certified technicians have the expertise to handle systems of any size and complexity—from small office buildings to large industrial facilities. We service all major brands and equipment types, and our preventive maintenance programs can reduce your HVAC costs by 30-40% while improving system reliability.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Our HVAC Services</h2>
            <p>Comprehensive heating and cooling solutions for every need</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>System Installation & Replacement</h3>
              <p>We design, specify, and install commercial HVAC systems tailored to your building's unique requirements. Our installation services include:</p>
              <ul className="list-check">
                <li>Comprehensive load calculations and system sizing</li>
                <li>Energy-efficient equipment selection</li>
                <li>Rooftop units (RTUs) and packaged systems</li>
                <li>Split systems and ductless mini-splits</li>
                <li>Chiller and boiler systems</li>
                <li>Variable refrigerant flow (VRF) systems</li>
                <li>Building automation and control integration</li>
                <li>Ductwork design and installation</li>
                <li>Ventilation and makeup air systems</li>
              </ul>
              <p>Every installation includes comprehensive startup, testing, balancing, and commissioning to ensure optimal performance. We provide detailed documentation and train your staff on system operation.</p>
            </div>

            <div className="service-item card">
              <h3>Preventive Maintenance Programs</h3>
              <p>Our comprehensive preventive maintenance programs are designed to maximize equipment life, improve efficiency, and prevent costly breakdowns. We offer flexible maintenance plans tailored to your needs:</p>
              <ul className="list-check">
                <li><strong>Quarterly Service Plans:</strong> Comprehensive inspections and maintenance four times per year</li>
                <li><strong>Monthly Service Plans:</strong> For critical facilities requiring maximum uptime</li>
                <li><strong>Seasonal Tune-Ups:</strong> Pre-season preparation for heating and cooling systems</li>
                <li><strong>Filter Management:</strong> Regular filter changes with automated scheduling</li>
              </ul>
              <p><strong>What's Included in Preventive Maintenance:</strong></p>
              <ul className="list-check">
                <li>Complete system inspection and performance testing</li>
                <li>Cleaning of coils, blowers, and condensers</li>
                <li>Refrigerant level check and adjustment</li>
                <li>Electrical connection inspection and tightening</li>
                <li>Belt inspection and adjustment</li>
                <li>Lubrication of motors and bearings</li>
                <li>Thermostat calibration and testing</li>
                <li>Control system verification</li>
                <li>Documentation and reporting</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Repair Services</h3>
              <p>When HVAC issues arise, our experienced technicians diagnose problems quickly and implement effective repairs. We maintain extensive parts inventory and relationships with all major manufacturers to minimize downtime.</p>
              <p><strong>Common Repairs:</strong></p>
              <ul className="list-check">
                <li>Compressor replacement and repair</li>
                <li>Refrigerant leak detection and repair</li>
                <li>Fan motor and blower repair</li>
                <li>Thermostat and control issues</li>
                <li>Electrical component replacement</li>
                <li>Drainage and condensate pump problems</li>
                <li>Ductwork repair and modification</li>
                <li>Gas valve and ignition system repair</li>
              </ul>
              <p>All repairs include thorough system testing and come with our workmanship warranty. We provide detailed explanations and recommendations for any additional issues discovered.</p>
            </div>

            <div className="service-item card">
              <h3>Building Automation Systems (BAS)</h3>
              <p>Modern building automation systems provide unprecedented control over HVAC operations, resulting in improved comfort, energy savings, and remote monitoring capabilities.</p>
              <p><strong>Our BAS Services Include:</strong></p>
              <ul className="list-check">
                <li>BAS design and specification</li>
                <li>System installation and programming</li>
                <li>Integration with existing HVAC equipment</li>
                <li>Touchscreen interface and controls</li>
                <li>Scheduling and setback programming</li>
                <li>Zone-level temperature control</li>
                <li>Occupancy-based operation</li>
                <li>Remote monitoring and alerts</li>
                <li>Energy usage tracking and reporting</li>
                <li>System upgrades and expansion</li>
              </ul>
              <p>Our BAS solutions can reduce energy consumption by 20-30% while improving comfort and providing valuable operational data.</p>
            </div>

            <div className="service-item card">
              <h3>Energy Audits & Optimization</h3>
              <p>Our comprehensive energy audits identify opportunities to reduce HVAC energy consumption and operating costs without sacrificing comfort.</p>
              <p><strong>Our Energy Services:</strong></p>
              <ul className="list-check">
                <li>Comprehensive building energy audits</li>
                <li>Thermal imaging and leak detection</li>
                <li>System performance analysis</li>
                <li>Energy usage benchmarking</li>
                <li>Cost-benefit analysis of improvements</li>
                <li>Incentive and rebate identification</li>
                <li>Implementation of recommended upgrades</li>
                <li>Ongoing energy monitoring</li>
              </ul>
              <p>We help clients achieve ENERGY STAR certification and meet sustainability goals while reducing operating costs.</p>
            </div>

            <div className="service-item card">
              <h3>Indoor Air Quality (IAQ)</h3>
              <p>Indoor air quality directly impacts occupant health, comfort, and productivity. Our IAQ services ensure your building provides a healthy environment.</p>
              <p><strong>IAQ Solutions:</strong></p>
              <ul className="list-check">
                <li>Air quality testing and assessment</li>
                <li>High-efficiency filtration systems</li>
                <li>UV germicidal irradiation</li>
                <li>Humidity control systems</li>
                <li>Ventilation rate verification</li>
                <li>Carbon dioxide monitoring</li>
                <li>Air purification systems</li>
                <li>Duct cleaning and sanitization</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Chillers & Boilers</h3>
              <p>Large commercial properties often rely on central chiller and boiler systems. Our technicians are experienced with all types of central plant equipment.</p>
              <p><strong>Chiller Services:</strong></p>
              <ul className="list-check">
                <li>Centrifugal, screw, and absorption chillers</li>
                <li>Water-cooled and air-cooled systems</li>
                <li>Chiller maintenance and optimization</li>
                <li>Cooling tower service</li>
                <li>Chemical water treatment</li>
                <li>Energy efficiency improvements</li>
              </ul>
              <p><strong>Boiler Services:</strong></p>
              <ul className="list-check">
                <li>Fire-tube and water-tube boilers</li>
                <li>Hot water and steam systems</li>
                <li>Combustion analysis and tuning</li>
                <li>Boiler inspection and certification</li>
                <li>Control system upgrades</li>
                <li>Safety device testing</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Emergency HVAC Service</h3>
              <p>HVAC emergencies can't wait. Our 24/7 emergency service team responds quickly to restore comfort and protect your property.</p>
              <p><strong>Emergency Response:</strong></p>
              <ul className="list-check">
                <li>24/7/365 emergency hotline: (910) 613-6570</li>
                <li>Average response time: Under 60 minutes</li>
                <li>Fully-stocked service vehicles</li>
                <li>Access to extensive parts inventory</li>
                <li>Experienced emergency technicians</li>
                <li>Priority service for maintenance contract clients</li>
              </ul>
              <p>We understand that HVAC failures during extreme weather can endanger occupants and damage property. Our emergency team is trained and equipped to handle any situation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-title">
            <h2>Equipment Expertise</h2>
            <p>We service all major commercial HVAC brands and equipment types</p>
          </div>
          
          <div className="expertise-content">
            <div className="expertise-category">
              <h4>Manufacturers We Service</h4>
              <div className="brands-grid">
                <span className="brand-badge">Carrier</span>
                <span className="brand-badge">Trane</span>
                <span className="brand-badge">York</span>
                <span className="brand-badge">Lennox</span>
                <span className="brand-badge">Daikin</span>
                <span className="brand-badge">Mitsubishi</span>
                <span className="brand-badge">Rheem</span>
                <span className="brand-badge">Goodman</span>
                <span className="brand-badge">Amana</span>
                <span className="brand-badge">Bryant</span>
                <span className="brand-badge">Payne</span>
                <span className="brand-badge">Coleman</span>
              </div>
            </div>

            <div className="expertise-category">
              <h4>Property Types We Serve</h4>
              <ul className="list-check">
                <li>Office buildings and business parks</li>
                <li>Retail centers and shopping malls</li>
                <li>Healthcare and medical facilities</li>
                <li>Educational institutions</li>
                <li>Hospitality and hotels</li>
                <li>Industrial and warehouse facilities</li>
                <li>Multi-family residential properties</li>
                <li>Government and municipal buildings</li>
                <li>Religious institutions</li>
                <li>Mixed-use developments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our HVAC Services?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>🎓 Certified Technicians</h4>
              <p>All our HVAC technicians hold EPA Section 608 Universal Certification and undergo continuous manufacturer training. Many also hold NATE, HVAC Excellence, and manufacturer-specific certifications.</p>
            </div>

            <div className="benefit-card card">
              <h4>⚡ Rapid Response</h4>
              <p>We understand HVAC issues need quick resolution. Our dispatch system ensures fast response times, and our fully-equipped service vehicles carry extensive parts inventory.</p>
            </div>

            <div className="benefit-card card">
              <h4>💰 Cost Savings</h4>
              <p>Our preventive maintenance programs reduce energy costs, extend equipment life, and prevent expensive emergency repairs. Clients typically see 30-40% reduction in total HVAC costs.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔧 Full-Service Capability</h4>
              <p>From small repairs to complete system replacements, from single units to central plants, we handle it all. No job is too large or too small for our team.</p>
            </div>

            <div className="benefit-card card">
              <h4>📱 Technology Integration</h4>
              <p>Our client portal provides real-time access to service history, maintenance schedules, and system performance data. Receive automatic reminders and instant notifications.</p>
            </div>

            <div className="benefit-card card">
              <h4>🌱 Energy Efficiency Focus</h4>
              <p>We prioritize energy efficiency in every recommendation and service. Our energy optimization services help clients meet sustainability goals while reducing costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Optimize Your HVAC Systems?</h2>
            <p>Contact us for a free assessment and learn how we can improve comfort while reducing costs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Free Assessment</Link>
              <a href="tel:+19106136570" className="btn btn-secondary">Call: (910) 613-6570</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HVACServices

