import { Link } from 'react-router-dom'
import './ServicePage.css'

function EmergencyRepairs() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Emergency Repair Services</h1>
          <p>24/7 rapid response for critical building system failures</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>When You Need Help Most, We're There</h2>
            <p>Building emergencies don't follow a 9-to-5 schedule. HVAC failures during heat waves, electrical outages, plumbing disasters, security breaches, and other critical issues require immediate professional response. At Wrightsville Bluewater Group, our emergency repair team is available 24 hours a day, 7 days a week, 365 days a year to respond to your urgent maintenance needs.</p>
            <p>With strategically located service vehicles stocked with common parts, experienced technicians on-call around the clock, and direct relationships with equipment suppliers, we provide rapid response that minimizes downtime and prevents further damage. Our average emergency response time is under 60 minutes, and we're prepared to handle any commercial building emergency.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Emergency Services We Provide</h2>
            <p>Rapid response for critical building system failures</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>HVAC Emergency Service</h3>
              <p>HVAC system failures can create unsafe conditions, threaten temperature-sensitive inventory, and make buildings uninhabitable. Our HVAC emergency team responds quickly to restore comfort and safety.</p>
              <p><strong>HVAC Emergencies We Handle:</strong></p>
              <ul className="list-check">
                <li>Complete system failures (no heat or cooling)</li>
                <li>Compressor failures</li>
                <li>Refrigerant leaks</li>
                <li>Frozen coils and pipes</li>
                <li>Thermostat and control failures</li>
                <li>Fan motor failures</li>
                <li>Gas heating system problems</li>
                <li>Chiller and boiler emergencies</li>
                <li>Building automation system failures</li>
                <li>Ductwork failures and disconnections</li>
              </ul>
              <p><strong>Emergency Response Capabilities:</strong></p>
              <ul className="list-check">
                <li>24/7 EPA-certified technicians available</li>
                <li>Service vehicles stocked with common parts</li>
                <li>Access to after-hours parts suppliers</li>
                <li>Temporary cooling/heating solutions</li>
                <li>Emergency repairs to restore basic operation</li>
                <li>Follow-up permanent repairs scheduled</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Electrical Emergency Service</h3>
              <p>Electrical emergencies pose serious safety risks including fire hazards, electrocution danger, and business disruption. Our licensed electricians respond immediately to electrical emergencies.</p>
              <p><strong>Electrical Emergencies:</strong></p>
              <ul className="list-check">
                <li>Power outages and failures</li>
                <li>Electrical fires and smoke</li>
                <li>Burning smells or sparks</li>
                <li>Tripped breakers that won't reset</li>
                <li>Exposed or damaged wiring</li>
                <li>Generator failures during outages</li>
                <li>Emergency lighting failures</li>
                <li>Panel or equipment overheating</li>
                <li>Lightning strike damage</li>
                <li>Electrical shock incidents</li>
              </ul>
              <p><strong>Electrical Emergency Response:</strong></p>
              <ul className="list-check">
                <li>Licensed master electricians available 24/7</li>
                <li>Fully-equipped emergency vehicles</li>
                <li>Safety assessment and hazard mitigation</li>
                <li>Temporary power solutions</li>
                <li>Generator deployment and connection</li>
                <li>Emergency repairs to restore power</li>
                <li>Code-compliant emergency work</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Plumbing Emergency Service</h3>
              <p>Plumbing emergencies can cause extensive water damage, create unsanitary conditions, and disrupt business operations. Our emergency plumbers stop leaks and restore function quickly.</p>
              <p><strong>Plumbing Emergencies:</strong></p>
              <ul className="list-check">
                <li>Major water leaks and pipe bursts</li>
                <li>Sewer line backups and overflows</li>
                <li>Toilet and drain clogs</li>
                <li>Water heater failures and leaks</li>
                <li>Frozen and burst pipes</li>
                <li>Flooding from plumbing failures</li>
                <li>Gas line leaks (natural gas or propane)</li>
                <li>Backflow preventer failures</li>
                <li>Sump pump failures</li>
                <li>Fire sprinkler system leaks</li>
              </ul>
              <p><strong>Plumbing Emergency Response:</strong></p>
              <ul className="list-check">
                <li>Licensed plumbers on-call 24/7</li>
                <li>Water shut-off and leak containment</li>
                <li>Emergency drain cleaning equipment</li>
                <li>Water extraction and drying coordination</li>
                <li>Temporary plumbing solutions</li>
                <li>Gas leak detection and emergency repairs</li>
                <li>Documentation for insurance claims</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Storm Damage Response</h3>
              <p>Severe weather events can cause extensive building damage requiring immediate response to prevent further loss. Our storm damage team mobilizes quickly during and after storms.</p>
              <p><strong>Storm Damage Services:</strong></p>
              <ul className="list-check">
                <li>Emergency roof tarping and repairs</li>
                <li>Window and door boarding</li>
                <li>Water intrusion mitigation</li>
                <li>Temporary weatherproofing</li>
                <li>Debris removal</li>
                <li>Electrical system assessment and restoration</li>
                <li>HVAC equipment damage assessment</li>
                <li>Generator deployment for extended outages</li>
                <li>Building security during damage</li>
                <li>Damage documentation for insurance</li>
              </ul>
              <p>We maintain relationships with specialized contractors for major storm damage including roofing, glass replacement, structural repairs, and restoration services.</p>
            </div>

            <div className="service-item card">
              <h3>Fire Safety System Emergencies</h3>
              <p>Fire protection system failures compromise life safety and code compliance. Our NICET-certified technicians respond to fire system emergencies at any hour.</p>
              <p><strong>Fire System Emergencies:</strong></p>
              <ul className="list-check">
                <li>Fire alarm system failures or faults</li>
                <li>Continuous false alarms</li>
                <li>Sprinkler system leaks or breaks</li>
                <li>Fire pump failures</li>
                <li>Supervisory and trouble signals</li>
                <li>Post-fire system restoration</li>
                <li>Emergency lighting failures</li>
                <li>Fire door failures</li>
                <li>System tampering or vandalism</li>
              </ul>
              <p><strong>Fire System Emergency Response:</strong></p>
              <ul className="list-check">
                <li>NICET-certified technicians available 24/7</li>
                <li>Fire marshal coordination</li>
                <li>Impairment notifications and fire watch</li>
                <li>Emergency repairs to restore protection</li>
                <li>System reset and testing</li>
                <li>Documentation and reporting</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Security System Emergencies</h3>
              <p>Security system failures leave your property vulnerable. We respond quickly to restore protection and investigate security incidents.</p>
              <p><strong>Security Emergencies:</strong></p>
              <ul className="list-check">
                <li>Intrusion alarm system failures</li>
                <li>Access control system outages</li>
                <li>Doors stuck open or locked</li>
                <li>Camera system failures</li>
                <li>After-hours lockouts</li>
                <li>Security breaches or intrusions</li>
                <li>Vandalism of security equipment</li>
                <li>Communication path failures</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Water Damage Mitigation</h3>
              <p>Water damage spreads quickly and requires immediate action. We coordinate rapid water extraction and drying to minimize damage and prevent mold.</p>
              <p><strong>Water Damage Response:</strong></p>
              <ul className="list-check">
                <li>Emergency water extraction</li>
                <li>Source identification and repair</li>
                <li>Moisture detection and mapping</li>
                <li>Industrial dehumidification</li>
                <li>Air movement and drying</li>
                <li>Content protection and removal</li>
                <li>Antimicrobial treatment</li>
                <li>Moisture monitoring during drying</li>
                <li>Insurance coordination and documentation</li>
                <li>Reconstruction and restoration coordination</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Building Lockout Service</h3>
              <p>Locked out after hours? Lost keys? Failed access control? We provide emergency access service to get you back into your building safely and securely.</p>
              <p><strong>Lockout Services:</strong></p>
              <ul className="list-check">
                <li>24/7 emergency lockout response</li>
                <li>Non-destructive entry when possible</li>
                <li>Lock picking and bypassing</li>
                <li>Electronic lock troubleshooting</li>
                <li>Emergency lock changes</li>
                <li>Access control system override</li>
                <li>Master key system access</li>
                <li>Verification of authorization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section response-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Emergency Response Process</h2>
            <p>Fast, professional response when every minute counts</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>How Our Emergency Service Works</h3>
              <div className="response-steps">
                <div className="response-step">
                  <h4>Step 1: Call Our Emergency Hotline</h4>
                  <p><strong>1-800-WBG-HELP (1-800-924-4357)</strong></p>
                  <p>Available 24/7/365 - Your call is answered by a live person, not an answering service. Our dispatcher gathers essential information about your emergency including:</p>
                  <ul className="list-check">
                    <li>Nature of the emergency</li>
                    <li>Location and property details</li>
                    <li>Safety concerns or hazards</li>
                    <li>Contact information</li>
                    <li>Access instructions</li>
                  </ul>
                </div>

                <div className="response-step">
                  <h4>Step 2: Immediate Dispatch</h4>
                  <p>Based on your emergency, we immediately dispatch the appropriate technician(s) from our on-call rotation. You'll receive:</p>
                  <ul className="list-check">
                    <li>Technician name and callback number</li>
                    <li>Estimated arrival time</li>
                    <li>Any immediate safety instructions</li>
                    <li>Confirmation call or text</li>
                  </ul>
                  <p>Our goal: technician on-site within 60 minutes for critical emergencies.</p>
                </div>

                <div className="response-step">
                  <h4>Step 3: On-Site Assessment</h4>
                  <p>Upon arrival, our technician:</p>
                  <ul className="list-check">
                    <li>Assesses the situation and safety hazards</li>
                    <li>Takes immediate action to prevent further damage</li>
                    <li>Diagnoses the problem</li>
                    <li>Explains findings and recommended repairs</li>
                    <li>Provides cost estimate for emergency repairs</li>
                    <li>Obtains authorization to proceed</li>
                  </ul>
                </div>

                <div className="response-step">
                  <h4>Step 4: Emergency Repairs</h4>
                  <p>Our technician performs necessary emergency repairs to:</p>
                  <ul className="list-check">
                    <li>Restore safety</li>
                    <li>Prevent further damage</li>
                    <li>Restore basic functionality</li>
                    <li>Secure the building</li>
                  </ul>
                  <p>If parts are needed that aren't in stock, we implement temporary solutions and schedule permanent repairs during business hours.</p>
                </div>

                <div className="response-step">
                  <h4>Step 5: Documentation & Follow-Up</h4>
                  <p>After emergency repairs, we provide:</p>
                  <ul className="list-check">
                    <li>Detailed service report</li>
                    <li>Photos of damage and repairs</li>
                    <li>Recommendations for permanent repairs</li>
                    <li>Preventive measures to avoid recurrence</li>
                    <li>Insurance documentation if needed</li>
                    <li>Follow-up appointment scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section emergency-preparedness-section">
        <div className="container">
          <div className="section-title">
            <h2>Emergency Preparedness for Maintenance Clients</h2>
            <p>Additional benefits for our preventive maintenance contract clients</p>
          </div>
          
          <div className="grid grid-2">
            <div className="benefit-card card">
              <h4>⚡ Priority Response</h4>
              <p>Maintenance contract clients receive priority dispatch for emergency calls. While we serve all clients quickly, contract clients move to the front of the queue during high-demand situations.</p>
            </div>

            <div className="benefit-card card">
              <h4>💰 Discounted Emergency Rates</h4>
              <p>Contract clients receive reduced after-hours and emergency service rates. Regular maintenance reduces emergencies, but when they occur, you'll pay less.</p>
            </div>

            <div className="benefit-card card">
              <h4>📱 Direct Contact Numbers</h4>
              <p>Contract clients receive direct contact information for their account manager and service supervisor for faster communication during emergencies.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔍 Preventive Approach</h4>
              <p>Regular maintenance significantly reduces emergency situations. Our data shows maintenance clients experience 75% fewer emergency calls than non-contract properties.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tips-section">
        <div className="container">
          <div className="section-title">
            <h2>What to Do Before We Arrive</h2>
            <p>Steps to take during common building emergencies</p>
          </div>
          
          <div className="grid grid-2">
            <div className="tips-card card">
              <h4>⚡ Electrical Emergencies</h4>
              <ul className="list-check">
                <li>If you smell burning or see smoke, evacuate and call 911</li>
                <li>Turn off power at the main breaker if safe to access</li>
                <li>Don't touch electrical equipment</li>
                <li>Keep people away from the affected area</li>
                <li>Identify the location of the problem for our technician</li>
              </ul>
            </div>

            <div className="tips-card card">
              <h4>💧 Water Leaks & Flooding</h4>
              <ul className="list-check">
                <li>Shut off water at the main valve if possible</li>
                <li>Move valuable items away from water</li>
                <li>Place buckets or containers to catch dripping water</li>
                <li>Turn off electricity in affected areas if safe</li>
                <li>Document damage with photos for insurance</li>
              </ul>
            </div>

            <div className="tips-card card">
              <h4>🌡️ HVAC Failures</h4>
              <ul className="list-check">
                <li>Check thermostat settings and batteries</li>
                <li>Check that circuit breakers haven't tripped</li>
                <li>Check for frozen coils or ice buildup</li>
                <li>Don't attempt repairs yourself</li>
                <li>Extreme temperatures: consider temporary space heaters/fans</li>
              </ul>
            </div>

            <div className="tips-card card">
              <h4>🔥 Fire Safety System Issues</h4>
              <ul className="list-check">
                <li>Never disable a fire protection system</li>
                <li>If alarms won't stop, silence but don't disconnect</li>
                <li>For sprinkler leaks, shut off zone valve if accessible</li>
                <li>Notify fire marshal of system impairments</li>
                <li>Establish fire watch if system is offline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Emergency Service?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>⏰ True 24/7 Availability</h4>
              <p>Real people answer our emergency line 24/7/365—not answering services or voicemail. Technicians are on-call and ready to respond at any hour.</p>
            </div>

            <div className="benefit-card card">
              <h4>⚡ Rapid Response</h4>
              <p>Average response time under 60 minutes for critical emergencies. Our strategically located service vehicles and stocked parts inventory enable fast response.</p>
            </div>

            <div className="benefit-card card">
              <h4>🎓 Experienced Technicians</h4>
              <p>Licensed, certified professionals with years of emergency response experience. Our technicians stay calm under pressure and work efficiently.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔧 Fully Equipped</h4>
              <p>Service vehicles stocked with common parts, specialized tools, and safety equipment. We come prepared to handle most emergencies immediately.</p>
            </div>

            <div className="benefit-card card">
              <h4>🏢 Commercial Focus</h4>
              <p>We specialize in commercial properties and understand the urgency of business disruptions. We work quickly to minimize downtime and restore operations.</p>
            </div>

            <div className="benefit-card card">
              <h4>📋 Complete Service</h4>
              <p>From initial emergency response through permanent repairs and prevention, we handle the complete process. One call, complete solution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section emergency-cta-section">
        <div className="container">
          <div className="emergency-cta-box">
            <h2>🚨 Need Emergency Service Now?</h2>
            <p className="emergency-text">Don't wait—call our 24/7 emergency hotline immediately</p>
            <a href="tel:1-800-924-4357" className="btn btn-emergency">
              CALL EMERGENCY HOTLINE: 1-800-WBG-HELP
            </a>
            <p className="emergency-subtext">Available 24 hours a day, 7 days a week, 365 days a year</p>
            
            <div className="emergency-info-box">
              <h3>For Non-Emergency Service Requests</h3>
              <p>If your situation is not urgent, you can:</p>
              <div className="emergency-options">
                <Link to="/contact" className="btn btn-secondary">Submit Service Request Online</Link>
                <p>Or call our main office during business hours: (910) 555-0100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmergencyRepairs

