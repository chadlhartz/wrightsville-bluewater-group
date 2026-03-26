import { Link } from 'react-router-dom'
import './ServicePage.css'

function FireSafety() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Fire Safety Services</h1>
          <p>Comprehensive fire protection systems and life safety solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>Complete Fire Protection & Life Safety</h2>
            <p>Fire protection systems are among the most critical building systems—they protect lives, property, and business continuity. At Wrightsville Bluewater Group, our NICET-certified fire protection specialists provide comprehensive services that ensure your fire protection systems function reliably and meet all code requirements.</p>
            <p>From fire alarm systems and sprinkler maintenance to emergency lighting and fire extinguisher service, we handle all aspects of commercial fire protection. Our expertise in NFPA codes, local fire marshal requirements, and insurance standards ensures your property maintains full compliance while providing maximum protection.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Fire Safety Services</h2>
            <p>Comprehensive fire protection for commercial properties</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Fire Alarm Systems</h3>
              <p>Modern fire alarm systems provide early detection, rapid notification, and coordinated emergency response. We design, install, test, and maintain fire alarm systems compliant with NFPA 72 and local codes.</p>
              <p><strong>Fire Alarm Installation:</strong></p>
              <ul className="list-check">
                <li>Addressable fire alarm control panels</li>
                <li>Smoke detectors (photoelectric, ionization, multi-criteria)</li>
                <li>Heat detectors (fixed and rate-of-rise)</li>
                <li>Duct smoke detectors</li>
                <li>Manual pull stations</li>
                <li>Horn/strobe notification devices</li>
                <li>Voice evacuation systems</li>
                <li>Visual notification devices (ADA compliant)</li>
                <li>Elevator recall systems</li>
                <li>HVAC shutdown integration</li>
                <li>Door holder release systems</li>
                <li>Mass notification capabilities</li>
              </ul>
              <p><strong>Fire Alarm Services:</strong></p>
              <ul className="list-check">
                <li>System design and engineering</li>
                <li>New installation and retrofits</li>
                <li>System upgrades and expansion</li>
                <li>Annual testing and inspection (NFPA 72)</li>
                <li>Quarterly, semi-annual testing programs</li>
                <li>Device testing and sensitivity checks</li>
                <li>Battery replacement and testing</li>
                <li>Central station monitoring connection</li>
                <li>False alarm investigation and correction</li>
                <li>System programming and configuration</li>
                <li>Documentation and reporting</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Fire Sprinkler Systems</h3>
              <p>Automatic fire sprinkler systems are the most effective fire suppression technology available. Our licensed sprinkler technicians maintain all types of water-based fire protection systems.</p>
              <p><strong>Sprinkler System Types:</strong></p>
              <ul className="list-check">
                <li>Wet pipe sprinkler systems</li>
                <li>Dry pipe sprinkler systems</li>
                <li>Pre-action sprinkler systems</li>
                <li>Deluge systems</li>
                <li>Antifreeze systems</li>
                <li>Fire pump systems</li>
                <li>Standpipe and hose systems</li>
                <li>Underground fire service piping</li>
              </ul>
              <p><strong>Sprinkler Services (NFPA 25):</strong></p>
              <ul className="list-check">
                <li>Quarterly sprinkler inspections</li>
                <li>Annual trip tests and flow tests</li>
                <li>Fire pump testing (weekly, monthly, annual)</li>
                <li>Backflow preventer testing</li>
                <li>Valve inspection and exercising</li>
                <li>Gauge testing and replacement</li>
                <li>5-year internal pipe inspection</li>
                <li>Sprinkler head replacement</li>
                <li>Obstruction investigation</li>
                <li>Impairment coordination</li>
                <li>Freeze protection winterization</li>
                <li>System repairs and modifications</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Special Hazard Suppression Systems</h3>
              <p>Some areas require specialized fire suppression systems beyond standard sprinklers. We install and maintain clean agent and chemical suppression systems.</p>
              <p><strong>Special Suppression Systems:</strong></p>
              <ul className="list-check">
                <li>Clean agent systems (FM-200, Novec 1230)</li>
                <li>CO2 total flood systems</li>
                <li>Kitchen hood suppression (wet chemical)</li>
                <li>Paint booth suppression</li>
                <li>Server room and data center protection</li>
                <li>Generator room suppression</li>
                <li>Electrical room protection</li>
                <li>Archives and storage protection</li>
              </ul>
              <p><strong>Suppression System Services:</strong></p>
              <ul className="list-check">
                <li>System design and installation</li>
                <li>Semi-annual inspections</li>
                <li>Agent level monitoring</li>
                <li>Tank and cylinder testing</li>
                <li>Discharge testing</li>
                <li>Nozzle inspection and cleaning</li>
                <li>System recharge after discharge</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Fire Extinguishers</h3>
              <p>Portable fire extinguishers provide the first line of defense for small fires. We provide complete fire extinguisher sales, service, and training.</p>
              <p><strong>Fire Extinguisher Services:</strong></p>
              <ul className="list-check">
                <li>Annual inspection and maintenance</li>
                <li>6-year maintenance (internal inspection)</li>
                <li>12-year hydrostatic testing</li>
                <li>Recharge after use or inspection</li>
                <li>Mounting bracket installation</li>
                <li>Compliance tags and documentation</li>
                <li>Sales and delivery of new extinguishers</li>
                <li>Proper placement assessment</li>
                <li>Employee training on proper use</li>
              </ul>
              <p><strong>Extinguisher Types Available:</strong></p>
              <ul className="list-check">
                <li>ABC dry chemical extinguishers</li>
                <li>CO2 extinguishers</li>
                <li>Class K kitchen extinguishers</li>
                <li>Clean agent extinguishers</li>
                <li>Water and foam extinguishers</li>
                <li>Wheeled units for large areas</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Emergency Lighting & Exit Signs</h3>
              <p>Emergency lighting and exit signs guide occupants to safety during emergencies. We install, test, and maintain emergency lighting systems per NFPA 101 and building codes.</p>
              <p><strong>Emergency Lighting Services:</strong></p>
              <ul className="list-check">
                <li>Emergency light installation</li>
                <li>Exit sign installation and replacement</li>
                <li>LED exit sign retrofits</li>
                <li>Battery backup systems</li>
                <li>Central inverter systems</li>
                <li>Monthly 30-second tests</li>
                <li>Annual 90-minute discharge tests</li>
                <li>Battery replacement</li>
                <li>Lamp and bulb replacement</li>
                <li>Self-testing emergency lighting</li>
                <li>Photoluminescent exit signs</li>
                <li>Code compliance verification</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Fire Dampers & Smoke Dampers</h3>
              <p>Fire and smoke dampers prevent fire and smoke spread through HVAC ductwork. Regular inspection and testing is required by code but often overlooked.</p>
              <p><strong>Damper Services:</strong></p>
              <ul className="list-check">
                <li>Fire damper inspection and testing</li>
                <li>Smoke damper inspection and testing</li>
                <li>Combination fire/smoke damper service</li>
                <li>Damper location identification</li>
                <li>Access door installation for inspection</li>
                <li>Damper repairs and adjustment</li>
                <li>Fusible link replacement</li>
                <li>Damper replacement</li>
                <li>Documentation and reporting</li>
              </ul>
              <p>NFPA 80 requires fire damper inspection every 4-6 years depending on building type and damper location.</p>
            </div>

            <div className="service-item card">
              <h3>Fire Safety Inspections & Testing</h3>
              <p>Regular inspections and testing ensure fire protection systems function properly when needed. We provide comprehensive inspection programs meeting all code requirements.</p>
              <p><strong>Inspection Programs:</strong></p>
              <ul className="list-check">
                <li>Comprehensive fire safety inspections</li>
                <li>Pre-insurance inspections</li>
                <li>Fire marshal inspection preparation</li>
                <li>Deficiency correction and follow-up</li>
                <li>Code compliance assessments</li>
                <li>System functionality testing</li>
                <li>Integrated system testing</li>
                <li>Documentation and record-keeping</li>
                <li>Regulatory reporting assistance</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Fire Safety Plans & Training</h3>
              <p>Effective fire safety requires more than equipment—it requires planning, training, and preparedness. We help develop comprehensive fire safety programs.</p>
              <p><strong>Planning & Training Services:</strong></p>
              <ul className="list-check">
                <li>Fire safety plan development</li>
                <li>Evacuation plan creation</li>
                <li>Fire drill coordination</li>
                <li>Employee fire safety training</li>
                <li>Fire extinguisher training</li>
                <li>Emergency response team training</li>
                <li>Fire warden designation and training</li>
                <li>Occupancy load calculations</li>
                <li>Exit path analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-title">
            <h2>Code Compliance & Standards</h2>
            <p>Expert knowledge of fire codes and standards</p>
          </div>
          
          <div className="expertise-content">
            <div className="expertise-category">
              <h4>Codes & Standards We Follow</h4>
              <ul className="list-check">
                <li><strong>NFPA 72:</strong> National Fire Alarm and Signaling Code</li>
                <li><strong>NFPA 25:</strong> Water-Based Fire Protection Systems Inspection, Testing, and Maintenance</li>
                <li><strong>NFPA 10:</strong> Portable Fire Extinguishers</li>
                <li><strong>NFPA 101:</strong> Life Safety Code</li>
                <li><strong>NFPA 13:</strong> Installation of Sprinkler Systems</li>
                <li><strong>NFPA 80:</strong> Fire Doors and Fire Dampers</li>
                <li><strong>NFPA 2001:</strong> Clean Agent Fire Extinguishing Systems</li>
                <li><strong>IBC & IFC:</strong> International Building and Fire Codes</li>
                <li><strong>Local Fire Codes:</strong> City and county fire marshal requirements</li>
              </ul>
            </div>

            <div className="expertise-category">
              <h4>Certifications & Qualifications</h4>
              <ul className="list-check">
                <li>NICET Fire Alarm Level II & III</li>
                <li>NICET Fire Sprinkler Level II</li>
                <li>NC Fire Sprinkler Contractor License</li>
                <li>Fire Alarm System Contractor License</li>
                <li>Manufacturer Certifications (Simplex, Edwards, Notifier)</li>
                <li>NFPA Certified Fire Protection Specialist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Fire Safety Services?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>🎓 NICET Certified</h4>
              <p>Our fire protection technicians hold NICET certifications and undergo continuous training on fire protection systems, codes, and technologies.</p>
            </div>

            <div className="benefit-card card">
              <h4>📋 Full Compliance</h4>
              <p>We ensure complete compliance with NFPA codes, local fire marshal requirements, and insurance standards. We handle all documentation and reporting.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔧 All Systems</h4>
              <p>From fire alarms to sprinklers, suppression systems to emergency lighting, we service all fire protection system types under one roof.</p>
            </div>

            <div className="benefit-card card">
              <h4>⏰ Scheduled Service</h4>
              <p>We track inspection and testing schedules and automatically remind you when service is due. Never miss a required inspection again.</p>
            </div>

            <div className="benefit-card card">
              <h4>🚨 Emergency Response</h4>
              <p>Fire protection system failures require immediate attention. Our 24/7 emergency service restores system functionality quickly.</p>
            </div>

            <div className="benefit-card card">
              <h4>📊 Detailed Documentation</h4>
              <p>Complete documentation of all inspections, testing, and maintenance for your records and regulatory compliance. Digital records available via client portal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Protect Lives & Property With Reliable Fire Safety</h2>
            <p>Schedule fire protection system inspection and ensure full compliance</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Schedule Inspection</Link>
              <a href="tel:+19106136570" className="btn btn-secondary">Call: (910) 613-6570</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FireSafety

