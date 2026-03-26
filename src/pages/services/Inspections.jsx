import { Link } from 'react-router-dom'
import './ServicePage.css'

function Inspections() {
  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Commercial Building Inspections</h1>
          <p>Comprehensive property assessments identifying issues before they become problems</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2>Thorough Property Inspections & Assessments</h2>
            <p>Regular building inspections are essential for maintaining property value, ensuring occupant safety, achieving regulatory compliance, and preventing costly surprises. Wrightsville Bluewater Group's certified inspectors conduct comprehensive assessments that identify current conditions, potential problems, and opportunities for improvement.</p>
            <p>Our inspection services go beyond simple checklists—we provide detailed analysis, prioritized recommendations, cost estimates, and actionable plans for addressing deficiencies. With decades of combined experience across all building systems, our inspectors understand how buildings work and what to look for.</p>
          </div>
        </div>
      </section>

      <section className="section services-detail-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Inspection Services</h2>
            <p>Comprehensive assessments for every need</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>Comprehensive Building Inspections</h3>
              <p>Our most thorough inspection service evaluates all major building systems and components to provide a complete picture of property condition.</p>
              <p><strong>Comprehensive Inspection Includes:</strong></p>
              <ul className="list-check">
                <li><strong>Structural Systems:</strong> Foundation, framing, roof structure, load-bearing elements</li>
                <li><strong>Building Envelope:</strong> Roof covering, walls, windows, doors, weather sealing</li>
                <li><strong>HVAC Systems:</strong> Heating and cooling equipment, ductwork, controls, ventilation</li>
                <li><strong>Electrical Systems:</strong> Service entrance, panels, wiring, lighting, safety devices</li>
                <li><strong>Plumbing Systems:</strong> Water supply, drainage, fixtures, water heaters</li>
                <li><strong>Fire Protection:</strong> Alarms, sprinklers, extinguishers, emergency lighting</li>
                <li><strong>Life Safety:</strong> Exits, egress paths, accessibility, signage</li>
                <li><strong>Interior Conditions:</strong> Ceilings, walls, floors, finishes</li>
                <li><strong>Site & Grounds:</strong> Parking, drainage, landscaping, exterior lighting</li>
              </ul>
              <p><strong>Inspection Report Includes:</strong></p>
              <ul className="list-check">
                <li>Executive summary of findings</li>
                <li>Detailed condition assessment of each system</li>
                <li>Photos documenting conditions and deficiencies</li>
                <li>Prioritized recommendations (immediate, short-term, long-term)</li>
                <li>Cost estimates for recommended repairs</li>
                <li>Code compliance issues identified</li>
                <li>Maintenance recommendations</li>
                <li>Digital report delivered within 48-72 hours</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Pre-Purchase Property Inspections</h3>
              <p>Before purchasing commercial property, thorough due diligence is critical. Our pre-purchase inspections identify issues that could impact value, require costly repairs, or create liability.</p>
              <p><strong>Pre-Purchase Inspection Value:</strong></p>
              <ul className="list-check">
                <li>Identify major defects before closing</li>
                <li>Estimate cost of repairs and deferred maintenance</li>
                <li>Inform purchase negotiations</li>
                <li>Identify code violations and compliance issues</li>
                <li>Assess remaining useful life of major systems</li>
                <li>Prioritize capital improvements</li>
                <li>Reduce post-purchase surprises</li>
                <li>Support financing and insurance requirements</li>
              </ul>
              <p>We work with buyers, sellers, attorneys, and lenders to provide objective assessments within transaction timelines.</p>
            </div>

            <div className="service-item card">
              <h3>Safety Compliance Audits</h3>
              <p>Regulatory compliance is complex and constantly evolving. Our safety compliance audits identify violations and provide corrective action plans.</p>
              <p><strong>Safety Compliance Areas:</strong></p>
              <ul className="list-check">
                <li><strong>OSHA Compliance:</strong> Workplace safety standards, hazard communication, PPE requirements</li>
                <li><strong>ADA Compliance:</strong> Accessibility requirements for facilities and parking</li>
                <li><strong>Fire Code Compliance:</strong> Fire protection systems, exits, occupancy limits</li>
                <li><strong>Building Code Compliance:</strong> Current code adherence, grandfathered conditions</li>
                <li><strong>Environmental Compliance:</strong> Hazardous materials, waste management, air quality</li>
                <li><strong>Electrical Safety:</strong> NEC compliance, arc flash hazards, grounding</li>
                <li><strong>Life Safety:</strong> Emergency egress, lighting, signage, assembly areas</li>
              </ul>
              <p><strong>Compliance Audit Deliverables:</strong></p>
              <ul className="list-check">
                <li>Detailed compliance checklist</li>
                <li>Non-compliance issues documented</li>
                <li>Regulatory citations and requirements</li>
                <li>Corrective action recommendations</li>
                <li>Priority ranking of corrections</li>
                <li>Cost estimates for compliance work</li>
                <li>Follow-up inspection services</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Preventive Maintenance Inspections</h3>
              <p>Regular preventive maintenance inspections identify minor issues before they escalate into major problems. Our PM inspections are customized to your property's systems and needs.</p>
              <p><strong>Preventive Maintenance Inspection Benefits:</strong></p>
              <ul className="list-check">
                <li>Extend equipment and system lifespan</li>
                <li>Reduce unexpected breakdowns</li>
                <li>Lower long-term maintenance costs</li>
                <li>Maintain warranty compliance</li>
                <li>Optimize system performance</li>
                <li>Plan and budget for replacements</li>
                <li>Track property condition over time</li>
              </ul>
              <p><strong>PM Inspection Frequency Options:</strong></p>
              <ul className="list-check">
                <li>Monthly inspections for critical facilities</li>
                <li>Quarterly inspections for active maintenance programs</li>
                <li>Semi-annual inspections for standard programs</li>
                <li>Annual comprehensive inspections</li>
                <li>Custom schedules based on system requirements</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Energy Efficiency Assessments</h3>
              <p>Energy costs represent a significant portion of operating expenses. Our energy assessments identify opportunities to reduce consumption and lower costs.</p>
              <p><strong>Energy Assessment Components:</strong></p>
              <ul className="list-check">
                <li>Utility bill analysis and benchmarking</li>
                <li>Building envelope evaluation</li>
                <li>HVAC system efficiency assessment</li>
                <li>Lighting energy audit</li>
                <li>Building automation and controls review</li>
                <li>Thermal imaging inspection</li>
                <li>Equipment nameplate data collection</li>
                <li>Occupancy and usage pattern analysis</li>
              </ul>
              <p><strong>Energy Report Includes:</strong></p>
              <ul className="list-check">
                <li>Current energy consumption baseline</li>
                <li>Comparison to similar properties</li>
                <li>Energy cost breakdown by system</li>
                <li>Efficiency improvement recommendations</li>
                <li>Cost-benefit analysis of improvements</li>
                <li>Utility rebate and incentive identification</li>
                <li>Projected energy savings</li>
                <li>Implementation priority and phasing</li>
              </ul>
            </div>

            <div className="service-item card">
              <h3>Roof Inspections</h3>
              <p>The roof is your building's primary weather barrier. Regular roof inspections identify problems early and maximize roof system life.</p>
              <p><strong>Roof Inspection Services:</strong></p>
              <ul className="list-check">
                <li>Visual roof surface inspection</li>
                <li>Drainage system evaluation</li>
                <li>Flashing and penetration inspection</li>
                <li>Leak investigation</li>
                <li>Moisture detection (infrared scanning available)</li>
                <li>Roof deck assessment</li>
                <li>Condition rating and life expectancy</li>
                <li>Repair vs. replacement recommendations</li>
                <li>Warranty compliance verification</li>
                <li>Documentation with photos</li>
              </ul>
              <p>We inspect all commercial roofing types: built-up, modified bitumen, single-ply (TPO, PVC, EPDM), metal, and more.</p>
            </div>

            <div className="service-item card">
              <h3>Environmental Inspections</h3>
              <p>Environmental hazards can impact occupant health and create significant liability. We conduct assessments for common environmental concerns.</p>
              <p><strong>Environmental Assessment Services:</strong></p>
              <ul className="list-check">
                <li><strong>Asbestos Surveys:</strong> Identification of asbestos-containing materials</li>
                <li><strong>Lead Paint Testing:</strong> Lead-based paint inspection and risk assessment</li>
                <li><strong>Mold Inspections:</strong> Visual inspection and moisture assessment</li>
                <li><strong>Indoor Air Quality:</strong> Air sampling and IAQ evaluation</li>
                <li><strong>Radon Testing:</strong> Radon level measurement and mitigation recommendations</li>
                <li><strong>Phase I ESA:</strong> Environmental site assessment (ASTM E1527)</li>
              </ul>
              <p>All environmental assessments are conducted by certified professionals with appropriate licenses and credentials.</p>
            </div>

            <div className="service-item card">
              <h3>Capital Planning Inspections</h3>
              <p>Long-term capital planning requires understanding when major systems will need replacement. Our capital planning inspections provide the data you need.</p>
              <p><strong>Capital Planning Inspection Includes:</strong></p>
              <ul className="list-check">
                <li>Comprehensive property condition assessment</li>
                <li>Remaining useful life estimates for major systems</li>
                <li>Replacement cost estimates</li>
                <li>Multi-year capital improvement recommendations</li>
                <li>Priority ranking of projects</li>
                <li>Reserve fund recommendations</li>
                <li>10-20 year capital forecast</li>
              </ul>
              <p>Essential for property owners, portfolio managers, lenders, and investors planning for long-term property ownership.</p>
            </div>

            <div className="service-item card">
              <h3>Specialized Inspections</h3>
              <p>We offer additional specialized inspection services for specific needs.</p>
              <ul className="list-check">
                <li><strong>Thermal Imaging Inspections:</strong> Identify energy loss, moisture intrusion, electrical hot spots</li>
                <li><strong>Drone Roof Inspections:</strong> Safe aerial roof assessment without access equipment</li>
                <li><strong>Post-Storm Damage Assessment:</strong> Document storm damage for insurance claims</li>
                <li><strong>Tenant Improvement Inspections:</strong> Verify quality of TI work</li>
                <li><strong>Maintenance Contract Audits:</strong> Verify contractor performance and compliance</li>
                <li><strong>Indoor Air Quality Testing:</strong> Comprehensive IAQ assessment and testing</li>
                <li><strong>Water Intrusion Investigation:</strong> Identify sources of leaks and moisture</li>
                <li><strong>Structural Assessments:</strong> Structural engineer evaluation of concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Inspection Process</h2>
            <p>Thorough, professional, and actionable assessments</p>
          </div>
          
          <div className="service-items">
            <div className="service-item card">
              <h3>How We Conduct Inspections</h3>
              <p><strong>1. Pre-Inspection Planning:</strong> We review property information, previous reports, and inspection objectives to plan our approach.</p>
              <p><strong>2. On-Site Inspection:</strong> Our inspectors conduct thorough visual and functional evaluation of all systems and components, taking extensive photos and notes.</p>
              <p><strong>3. Testing & Measurement:</strong> We use specialized equipment including moisture meters, thermal cameras, electrical testers, and more to gather objective data.</p>
              <p><strong>4. Analysis & Reporting:</strong> We analyze findings, research applicable codes and standards, and develop prioritized recommendations with cost estimates.</p>
              <p><strong>5. Report Delivery:</strong> Comprehensive digital reports delivered promptly with executive summary, detailed findings, photos, and recommendations.</p>
              <p><strong>6. Review & Discussion:</strong> We're available to review findings, answer questions, and discuss priorities and implementation.</p>
              <p><strong>7. Follow-Up Services:</strong> We can coordinate repairs, track correction of deficiencies, and conduct re-inspections to verify completion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Inspection Services?</h2>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-card card">
              <h4>🎓 Experienced Inspectors</h4>
              <p>Our inspectors have decades of combined experience in commercial building systems, construction, and facilities management. We understand how buildings work.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔍 Thorough Assessment</h4>
              <p>We don't rush through inspections. Our comprehensive approach ensures nothing is missed, and our detailed reports provide complete documentation.</p>
            </div>

            <div className="benefit-card card">
              <h4>📊 Actionable Reports</h4>
              <p>Our reports go beyond identifying problems—we provide prioritized recommendations, cost estimates, and implementation guidance.</p>
            </div>

            <div className="benefit-card card">
              <h4>🔧 In-House Expertise</h4>
              <p>With expertise in HVAC, electrical, plumbing, fire protection, and more, we understand all building systems and how they interact.</p>
            </div>

            <div className="benefit-card card">
              <h4>⚡ Fast Turnaround</h4>
              <p>We deliver professional inspection reports within 48-72 hours of inspection completion. Rush reports available when needed for transactions.</p>
            </div>

            <div className="benefit-card card">
              <h4>🛠️ Correction Services</h4>
              <p>As a full-service provider, we can implement the recommendations from our inspections. One company, complete solution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Schedule Your Property Inspection</h2>
            <p>Identify issues before they become problems—contact us for comprehensive building assessment</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Inspection Quote</Link>
              <a href="tel:+19106136570" className="btn btn-secondary">Call: (910) 613-6570</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inspections

