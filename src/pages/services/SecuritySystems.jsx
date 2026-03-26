import { Link } from 'react-router-dom'
import './ServicePage.css'

function SecuritySystems() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Security Systems</h1>
          <p>Advanced security solutions protecting people, property, and assets</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>Comprehensive Commercial Security Solutions</h2>
            <p>Protecting your commercial property requires more than locks on doors. Modern security threats demand integrated systems that provide multiple layers of protection, real-time monitoring, and rapid response capabilities. Wrightsville Bluewater Group designs, installs, and maintains comprehensive security systems that safeguard your property, assets, employees, and customers.</p>
            <p>Our ASIS-certified security professionals bring decades of experience in commercial security system design and implementation. We work with leading security technology manufacturers to deliver reliable, scalable solutions customized to your facility's unique security challenges and risk profile.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Security Services</h2>
            <p>Integrated security solutions for complete protection</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Access Control Systems</h3>
              <p>Control who enters your facility, when they enter, and which areas they can access. Our access control systems provide security, accountability, and detailed audit trails.</p>
              <p><strong>Access Control Solutions:</strong></p>
              <ul className="list-check">
                <li>Card-based access control systems</li>
                <li>Key fob and proximity card readers</li>
                <li>Biometric access (fingerprint, facial recognition)</li>
                <li>Mobile credential systems (smartphone access)</li>
                <li>Multi-factor authentication</li>
                <li>Electronic door locks and strikes</li>
                <li>Magnetic locks and electric strikes</li>
                <li>Door position monitoring</li>
                <li>Elevator access control integration</li>
                <li>Visitor management systems</li>
                <li>Temporary access credentials</li>
                <li>Scheduled access restrictions</li>
              </ul>
              <p><strong>Access Control Features:</strong></p>
              <ul className="list-check">
                <li>Centralized management and reporting</li>
                <li>Real-time activity monitoring</li>
                <li>Detailed audit trails and logs</li>
                <li>Forced entry and propped door alerts</li>
                <li>Integration with video surveillance</li>
                <li>Remote access management</li>
                <li>Scalable from single door to enterprise systems</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Video Surveillance Systems</h3>
              <p>Modern IP-based video surveillance provides high-resolution recording, intelligent analytics, and remote viewing capabilities. Our systems deter crime, document incidents, and provide valuable operational intelligence.</p>
              <p><strong>Video Surveillance Solutions:</strong></p>
              <ul className="list-check">
                <li>High-definition IP cameras (4K resolution available)</li>
                <li>Indoor and outdoor cameras</li>
                <li>PTZ (pan-tilt-zoom) cameras</li>
                <li>Fixed and varifocal lens options</li>
                <li>Day/night and low-light cameras</li>
                <li>Wide-angle and 360-degree cameras</li>
                <li>License plate recognition (LPR) cameras</li>
                <li>Thermal imaging cameras</li>
                <li>Network video recorders (NVR)</li>
                <li>Cloud-based recording options</li>
                <li>Storage from 30 to 180+ days</li>
              </ul>
              <p><strong>Advanced Video Features:</strong></p>
              <ul className="list-check">
                <li>Video analytics and intelligent alerts</li>
                <li>Motion detection and object tracking</li>
                <li>Facial recognition capabilities</li>
                <li>People counting and heat mapping</li>
                <li>Loitering detection</li>
                <li>Perimeter intrusion detection</li>
                <li>Remote viewing via smartphone/tablet</li>
                <li>Video search and playback</li>
                <li>Integration with access control</li>
                <li>Automated incident clip generation</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Intrusion Detection Systems</h3>
              <p>Intrusion detection systems provide early warning of unauthorized entry and trigger appropriate response. Our systems protect perimeters, doors, windows, and interior spaces.</p>
              <p><strong>Intrusion Detection Components:</strong></p>
              <ul className="list-check">
                <li>Door and window contacts</li>
                <li>Motion detectors (PIR and dual-technology)</li>
                <li>Glass break detectors</li>
                <li>Vibration sensors</li>
                <li>Panic buttons and duress codes</li>
                <li>Interior and exterior sirens</li>
                <li>Strobe lights and visual alerts</li>
                <li>Central monitoring station connection</li>
                <li>Cellular and IP communication backup</li>
                <li>Smartphone alerts and notifications</li>
              </ul>
              <p><strong>Advanced Intrusion Features:</strong></p>
              <ul className="list-check">
                <li>Zone-based arming and disarming</li>
                <li>Scheduled arming automation</li>
                <li>User-specific access codes</li>
                <li>Activity logs and reports</li>
                <li>Integration with video verification</li>
                <li>Remote arming/disarming</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>24/7 Monitoring Services</h3>
              <p>Professional monitoring provides peace of mind that trained security professionals are watching your property around the clock, ready to respond to any alerts or incidents.</p>
              <p><strong>Monitoring Services Include:</strong></p>
              <ul className="list-check">
                <li>UL-certified central monitoring station</li>
                <li>24/7/365 professional monitoring</li>
                <li>Intrusion alarm monitoring</li>
                <li>Video alarm verification</li>
                <li>Access control monitoring</li>
                <li>Fire alarm monitoring</li>
                <li>Environmental monitoring (temperature, water)</li>
                <li>Emergency dispatch coordination</li>
                <li>Custom response protocols</li>
                <li>Redundant communication paths</li>
                <li>Regular test signal verification</li>
                <li>Monthly activity reports</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Intercom & Communication Systems</h3>
              <p>Intercom systems facilitate secure communication and visitor management. Modern IP-based systems integrate with access control and video surveillance.</p>
              <p><strong>Intercom Solutions:</strong></p>
              <ul className="list-check">
                <li>Video intercom systems</li>
                <li>Door entry intercom</li>
                <li>Multi-station intercom</li>
                <li>IP-based intercom systems</li>
                <li>Mobile app integration</li>
                <li>Remote door release</li>
                <li>Visitor photo capture</li>
                <li>Recorded conversations</li>
                <li>Integration with access control</li>
                <li>Emergency communication capability</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Perimeter Security</h3>
              <p>Perimeter security creates the first line of defense, detecting and deterring threats before they reach your building.</p>
              <p><strong>Perimeter Solutions:</strong></p>
              <ul className="list-check">
                <li>Perimeter intrusion detection</li>
                <li>Fence-mounted sensors</li>
                <li>Photoelectric beam detectors</li>
                <li>Buried cable sensors</li>
                <li>Microwave and radar detection</li>
                <li>Thermal imaging surveillance</li>
                <li>Automated gate systems</li>
                <li>Vehicle barrier systems</li>
                <li>Perimeter lighting integration</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Integrated Security Platforms</h3>
              <p>Maximum security effectiveness comes from integrating multiple systems into a unified platform. We design and implement integrated solutions that work together seamlessly.</p>
              <p><strong>Integration Capabilities:</strong></p>
              <ul className="list-check">
                <li>Unified security management platforms</li>
                <li>Access control and video integration</li>
                <li>Intrusion and video verification</li>
                <li>Building automation integration</li>
                <li>Emergency notification systems</li>
                <li>Elevator control integration</li>
                <li>Parking management integration</li>
                <li>Single-pane-of-glass management</li>
                <li>Correlated event management</li>
                <li>Automated response protocols</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Security System Maintenance</h3>
              <p>Security systems must remain operational to provide protection. Our maintenance programs ensure your systems function reliably when you need them most.</p>
              <p><strong>Maintenance Services:</strong></p>
              <ul className="list-check">
                <li>Scheduled system testing and inspection</li>
                <li>Software updates and patches</li>
                <li>Camera cleaning and adjustment</li>
                <li>Battery replacement</li>
                <li>Sensor testing and calibration</li>
                <li>Communication path testing</li>
                <li>User training and support</li>
                <li>System health monitoring</li>
                <li>Preventive maintenance</li>
                <li>Emergency repair services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-title">
            <h2>Security Assessment & Planning</h2>
            <p>Every facility has unique security requirements</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Our Security Assessment Process</h3>
              <p>We begin every engagement with a comprehensive security assessment to understand your risks, requirements, and objectives.</p>
              <ul className="list-check">
                <li><strong>Threat Assessment:</strong> Identify potential security threats specific to your industry, location, and operations</li>
                <li><strong>Vulnerability Analysis:</strong> Evaluate current security measures and identify gaps or weaknesses</li>
                <li><strong>Risk Evaluation:</strong> Assess likelihood and impact of various security scenarios</li>
                <li><strong>Requirements Definition:</strong> Define security objectives, performance requirements, and success criteria</li>
                <li><strong>Solution Design:</strong> Develop customized security system design addressing identified needs</li>
                <li><strong>Cost-Benefit Analysis:</strong> Evaluate security options against budget and return on investment</li>
                <li><strong>Implementation Planning:</strong> Create phased implementation plan minimizing disruption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Security Services?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>🎯 Expertise & Experience</h4>
              <p>Our security professionals bring decades of experience in commercial security system design, installation, and management. ASIS-certified security specialists lead every project.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔧 Comprehensive Solutions</h4>
              <p>From assessment through installation, monitoring, and ongoing maintenance, we provide complete security solutions. One partner for all your security needs.</p>
            </div>

            <div className="benefit-card card">
              <h4>🏢 Commercial Focus</h4>
              <p>We specialize in commercial properties and understand the unique security challenges of office buildings, retail spaces, industrial facilities, and more.</p>
            </div>

            <div className="benefit-card card">
              <h4>📱 Latest Technology</h4>
              <p>We deploy cutting-edge security technology including AI analytics, cloud-based systems, mobile integration, and smart automation for maximum effectiveness.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔒 Reliable Protection</h4>
              <p>Our systems are designed for 24/7 reliability with redundant communication, backup power, and professional monitoring ensuring continuous protection.</p>
            </div>

            <div className="benefit-card card">
              <h4>📊 Scalable Systems</h4>
              <p>Our solutions scale from single-location properties to multi-site enterprises. Add cameras, doors, and features as your needs grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Protect Your Property With Advanced Security</h2>
            <p>Schedule a free security assessment to discuss your facility's protection needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Security Assessment</Link>
              <a href="tel:+19106136570" className="btn btn-secondary">Call: (910) 613-6570</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecuritySystems

