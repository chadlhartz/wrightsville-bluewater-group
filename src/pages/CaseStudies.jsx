import './CaseStudies.css'

function CaseStudies() {
  return (
    <div className="case-studies">
      <section className="hero">
        <div className="container">
          <h1>Case Studies</h1>
          <p>Real results for real clients—see how we solve complex facility challenges</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-content">
            <h2>Success Stories From Our Clients</h2>
            <p>These case studies showcase our ability to tackle complex facility challenges, deliver measurable results, and build lasting partnerships with our clients. Each project demonstrates our technical expertise, problem-solving capabilities, and commitment to excellence.</p>
          </div>
        </div>
      </section>

      <section className="section case-study-detail">
        <div className="container">
          <div className="case-study-card card">
            <div className="case-study-header">
              <div className="case-badge">HVAC Systems</div>
              <h2>Coastal Technology Center: 40% Energy Reduction Through HVAC Optimization</h2>
            </div>
            
            <div className="case-study-content">
              <div className="case-section">
                <h4>Client Profile</h4>
                <p><strong>Industry:</strong> Technology/Office<br/>
                <strong>Property Size:</strong> 185,000 sq ft, 4-story office building<br/>
                <strong>Location:</strong> Wilmington, NC<br/>
                <strong>Occupancy:</strong> 450 employees</p>
              </div>

              <div className="case-section">
                <h4>The Challenge</h4>
                <p>The Coastal Technology Center was experiencing skyrocketing energy costs, frequent HVAC breakdowns, and persistent comfort complaints from tenants. Their aging HVAC system consisted of 15-year-old rooftop units with outdated controls. Annual maintenance costs exceeded $85,000, and energy bills were 40% above comparable buildings. The property management team needed a comprehensive solution to reduce costs while improving reliability and comfort.</p>
              </div>

              <div className="case-section">
                <h4>Our Solution</h4>
                <p>We conducted a comprehensive building energy audit and developed a phased optimization plan:</p>
                <ul className="list-check">
                  <li><strong>Building Automation System:</strong> Installed state-of-the-art BAS with zone-level control, occupancy sensors, and demand-based ventilation</li>
                  <li><strong>Equipment Upgrades:</strong> Replaced failing rooftop units with high-efficiency models (SEER 16+) and variable speed drives</li>
                  <li><strong>Ductwork Improvements:</strong> Sealed leaks and improved insulation, recovering 25% of conditioned air previously lost</li>
                  <li><strong>Preventive Maintenance Program:</strong> Implemented comprehensive PM program with quarterly inspections and filter management</li>
                  <li><strong>Staff Training:</strong> Trained facility staff on system operation and basic troubleshooting</li>
                </ul>
              </div>

              <div className="case-section">
                <h4>Results Achieved</h4>
                <div className="results-grid">
                  <div className="result-stat">
                    <span className="result-number">40%</span>
                    <span className="result-label">Energy Cost Reduction</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">$127K</span>
                    <span className="result-label">Annual Savings</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">85%</span>
                    <span className="result-label">Fewer Service Calls</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">18mo</span>
                    <span className="result-label">ROI Payback Period</span>
                  </div>
                </div>
                <p>Additionally, tenant satisfaction scores improved by 35%, and the building achieved ENERGY STAR certification for the first time.</p>
              </div>

              <div className="case-section testimonial-section">
                <blockquote>
                  "Wrightsville Bluewater Group transformed our building operations. The energy savings alone paid for the upgrades in less than two years, but the real value is in the improved reliability and tenant satisfaction. We haven't had a single HVAC-related complaint in six months."
                </blockquote>
                <p className="testimonial-author"><strong>David Richardson</strong>, Property Manager, Coastal Technology Center</p>
              </div>
            </div>
          </div>

          <div className="case-study-card card">
            <div className="case-study-header">
              <div className="case-badge">Comprehensive Maintenance</div>
              <h2>Harbor View Shopping Plaza: Single-Source Facility Management Success</h2>
            </div>
            
            <div className="case-study-content">
              <div className="case-section">
                <h4>Client Profile</h4>
                <p><strong>Industry:</strong> Retail<br/>
                <strong>Property Size:</strong> 325,000 sq ft shopping center with 42 tenant spaces<br/>
                <strong>Location:</strong> Brunswick County, NC<br/>
                <strong>Property Type:</strong> Open-air retail plaza</p>
              </div>

              <div className="case-section">
                <h4>The Challenge</h4>
                <p>Harbor View Shopping Plaza was managing relationships with 11 different contractors for various building maintenance needs—HVAC, electrical, plumbing, janitorial, landscaping, and more. This fragmented approach created numerous problems: inconsistent service quality, poor communication, finger-pointing when issues arose, complex billing from multiple vendors, and no single entity responsible for overall building performance. The property management company was spending excessive time coordinating contractors instead of focusing on tenant relationships and property improvements.</p>
              </div>

              <div className="case-section">
                <h4>Our Solution</h4>
                <p>We proposed and implemented a comprehensive single-source facility management solution:</p>
                <ul className="list-check">
                  <li><strong>Consolidated Services:</strong> Took over all mechanical, electrical, janitorial, and maintenance services under one contract</li>
                  <li><strong>Dedicated On-Site Team:</strong> Assigned full-time facility manager plus rotating service crews</li>
                  <li><strong>Preventive Maintenance Program:</strong> Implemented comprehensive PM schedules for all building systems</li>
                  <li><strong>24/7 Emergency Response:</strong> Provided dedicated hotline with guaranteed 1-hour response times</li>
                  <li><strong>Digital Platform:</strong> Deployed client portal for work order management, reporting, and communication</li>
                  <li><strong>Regular Business Reviews:</strong> Established monthly check-ins and quarterly strategic reviews</li>
                </ul>
              </div>

              <div className="case-section">
                <h4>Results Achieved</h4>
                <div className="results-grid">
                  <div className="result-stat">
                    <span className="result-number">32%</span>
                    <span className="result-label">Operating Cost Reduction</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">95%</span>
                    <span className="result-label">First-Call Resolution Rate</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">70%</span>
                    <span className="result-label">Less Management Time</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">Zero</span>
                    <span className="result-label">Code Violations (prev. 7/year)</span>
                  </div>
                </div>
                <p>Tenant satisfaction scores increased significantly, renewal rates improved, and the property management team could finally focus on strategic initiatives rather than day-to-day maintenance firefighting.</p>
              </div>

              <div className="case-section testimonial-section">
                <blockquote>
                  "Consolidating all our facility services with WBG was the best operational decision we've made. The single point of contact, streamlined billing, and improved service quality have been game-changing. Our team is finally able to focus on what matters most—our tenants and property performance."
                </blockquote>
                <p className="testimonial-author"><strong>Maria Santos</strong>, VP of Operations, Harbor View Properties</p>
              </div>
            </div>
          </div>

          <div className="case-study-card card">
            <div className="case-study-header">
              <div className="case-badge">Emergency Response</div>
              <h2>Wilmington Medical Plaza: Critical System Restoration During Hurricane</h2>
            </div>
            
            <div className="case-study-content">
              <div className="case-section">
                <h4>Client Profile</h4>
                <p><strong>Industry:</strong> Healthcare<br/>
                <strong>Property Size:</strong> 65,000 sq ft medical office building<br/>
                <strong>Location:</strong> Wilmington, NC<br/>
                <strong>Occupancy:</strong> 12 medical practices, 200+ daily patients</p>
              </div>

              <div className="case-section">
                <h4>The Challenge</h4>
                <p>During Hurricane Florence in September 2018, Wilmington Medical Plaza suffered significant damage from flooding and power loss. The building's electrical systems were compromised, HVAC equipment was flooded, and the backup generator failed. With critical medical practices needing to resume operations immediately to serve community needs post-storm, the facility required rapid emergency response and system restoration. The challenge was complicated by widespread regional damage limiting availability of contractors, materials, and equipment.</p>
              </div>

              <div className="case-section">
                <h4>Our Response</h4>
                <p>Our emergency response team mobilized immediately:</p>
                <ul className="list-check">
                  <li><strong>Immediate Assessment:</strong> On-site within 2 hours to assess damage and develop restoration plan</li>
                  <li><strong>Emergency Power:</strong> Deployed temporary generators within 6 hours to restore critical systems</li>
                  <li><strong>Water Extraction & Cleanup:</strong> Removed standing water, performed emergency drying, and treated for mold prevention</li>
                  <li><strong>Electrical System Restoration:</strong> Replaced damaged switchgear, panels, and circuits; restored full power in 48 hours</li>
                  <li><strong>HVAC Equipment Replacement:</strong> Sourced and installed replacement air handlers and condensers; fully operational in 72 hours</li>
                  <li><strong>Generator Repair:</strong> Rebuilt emergency generator system with enhanced flood protection</li>
                  <li><strong>Documentation:</strong> Provided comprehensive documentation for insurance claims</li>
                </ul>
              </div>

              <div className="case-section">
                <h4>Results Achieved</h4>
                <div className="results-grid">
                  <div className="result-stat">
                    <span className="result-number">72hrs</span>
                    <span className="result-label">Full Restoration Time</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">$450K</span>
                    <span className="result-label">Estimated Loss Prevented</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">Zero</span>
                    <span className="result-label">Patient Care Days Lost</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">100%</span>
                    <span className="result-label">Insurance Claim Approved</span>
                  </div>
                </div>
                <p>Medical practices were able to resume operations on schedule, minimizing disruption to patient care during a critical time. The building owner praised our rapid response and comprehensive coordination.</p>
              </div>

              <div className="case-section testimonial-section">
                <blockquote>
                  "When disaster struck, WBG's emergency response was nothing short of heroic. They worked around the clock to get our building operational. Their preparedness, resources, and dedication ensured our medical practices could continue serving patients when the community needed us most."
                </blockquote>
                <p className="testimonial-author"><strong>Dr. James Peterson</strong>, Building Owner, Wilmington Medical Plaza</p>
              </div>
            </div>
          </div>

          <div className="case-study-card card">
            <div className="case-study-header">
              <div className="case-badge">Fire Safety & Security</div>
              <h2>Riverwalk Office Complex: Comprehensive Safety System Modernization</h2>
            </div>
            
            <div className="case-study-content">
              <div className="case-section">
                <h4>Client Profile</h4>
                <p><strong>Industry:</strong> Mixed-Use Office<br/>
                <strong>Property Size:</strong> 3-building campus, 420,000 total sq ft<br/>
                <strong>Location:</strong> Wilmington, NC<br/>
                <strong>Occupancy:</strong> 1,200+ employees, 24/7 operations</p>
              </div>

              <div className="case-section">
                <h4>The Challenge</h4>
                <p>The Riverwalk Office Complex had outdated fire alarm and security systems that were no longer code-compliant. An insurance audit identified numerous deficiencies that needed immediate correction or the property would face coverage cancellation. Additionally, recent security concerns had tenants demanding improved access control and surveillance. The property needed comprehensive fire safety and security upgrades with minimal disruption to 24/7 operations across three buildings.</p>
              </div>

              <div className="case-section">
                <h4>Our Solution</h4>
                <p>We developed and executed a phased modernization plan:</p>
                <ul className="list-check">
                  <li><strong>Fire Alarm System:</strong> Installed addressable fire alarm system with voice evacuation, meeting current NFPA 72 standards</li>
                  <li><strong>Sprinkler System Upgrade:</strong> Replaced non-compliant sprinkler heads, updated standpipes, installed flow monitoring</li>
                  <li><strong>Emergency Lighting:</strong> Upgraded to LED emergency lighting with battery backup and automated testing</li>
                  <li><strong>Access Control:</strong> Deployed card-based access control for all entrances with integration to elevator controls</li>
                  <li><strong>Video Surveillance:</strong> Installed 120 high-resolution IP cameras with 90-day storage and remote monitoring</li>
                  <li><strong>Integration:</strong> Unified all systems on single monitoring platform for centralized management</li>
                  <li><strong>Training & Documentation:</strong> Trained facility staff and provided comprehensive as-built documentation</li>
                </ul>
              </div>

              <div className="case-section">
                <h4>Results Achieved</h4>
                <div className="results-grid">
                  <div className="result-stat">
                    <span className="result-number">100%</span>
                    <span className="result-label">Code Compliance</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">15%</span>
                    <span className="result-label">Insurance Premium Reduction</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">Zero</span>
                    <span className="result-label">Operational Disruptions</span>
                  </div>
                  <div className="result-stat">
                    <span className="result-number">90%</span>
                    <span className="result-label">Tenant Satisfaction Score</span>
                  </div>
                </div>
                <p>The property passed insurance audit with flying colors, insurance premiums were reduced, and tenant security concerns were fully addressed. The modernized systems provide superior protection while reducing long-term maintenance costs.</p>
              </div>

              <div className="case-section testimonial-section">
                <blockquote>
                  "WBG managed this complex project flawlessly. They coordinated work across three buildings without disrupting our 24/7 operations, brought us into full code compliance, and delivered modern systems that will serve us for years. The project came in on schedule and under budget."
                </blockquote>
                <p className="testimonial-author"><strong>Robert Chang</strong>, Facilities Director, Riverwalk Office Complex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Transform Your Facility Operations?</h2>
            <p>Let's discuss how we can solve your unique challenges and deliver measurable results</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Schedule a Consultation</a>
              <a href="tel:1-800-924-4357" className="btn btn-secondary">Call: 1-800-WBG-HELP</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies

