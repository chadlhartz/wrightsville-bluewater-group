import './Safety.css'

function Safety() {
  return (
    <div className="safety">
      <section className="hero">
        <div className="container">
          <h1>Safety Program</h1>
          <p>Safety is our first priority—every day, every job, every person</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="safety-intro">
            <h2>Commitment to Zero Incidents</h2>
            <p>At Wrightsville Bluewater Group, safety isn't just a policy—it's a core value that guides every decision we make and every action we take. We are committed to creating and maintaining a workplace where every team member returns home safely at the end of each day. Our comprehensive safety program has earned us industry recognition and three consecutive years of zero-incident operations.</p>
            <p>We believe that all workplace injuries and incidents are preventable. Through rigorous training, strict protocols, continuous monitoring, and a culture that empowers everyone to prioritize safety, we've created one of the safest operations in our industry.</p>
          </div>

          <div className="safety-stats stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Years Zero Incidents</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Safe Work Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0.0</span>
              <span className="stat-label">OSHA Recordable Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compliance Record</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section program-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Safety Program Components</h2>
            <p>Comprehensive systems working together to protect our team</p>
          </div>
          
          <div className="grid grid-2">
            <div className="program-card card">
              <h4>🎓 Training & Education</h4>
              <p><strong>New Hire Safety Orientation:</strong> Every employee completes comprehensive safety orientation before starting work, covering company policies, hazard recognition, emergency procedures, and PPE requirements.</p>
              <p><strong>Ongoing Training:</strong> Monthly safety meetings, quarterly refresher courses, and annual certifications keep safety top-of-mind. We cover topics including fall protection, electrical safety, hazardous materials, confined spaces, and more.</p>
              <p><strong>Specialized Certifications:</strong> OSHA 10 and OSHA 30 certifications for all field personnel. Specialized training for elevated work, hot work, lockout/tagout, and equipment operation.</p>
            </div>

            <div className="program-card card">
              <h4>📋 Job Hazard Analysis</h4>
              <p><strong>Pre-Job Planning:</strong> Every job begins with a thorough hazard analysis. Our teams identify potential risks, develop mitigation strategies, and ensure proper resources are available before work begins.</p>
              <p><strong>Daily Safety Briefings:</strong> Each workday starts with a safety briefing covering the day's work, specific hazards, required PPE, and emergency procedures.</p>
              <p><strong>Continuous Assessment:</strong> Our teams continuously monitor conditions and reassess hazards throughout the workday, adapting as needed to maintain safe operations.</p>
            </div>

            <div className="program-card card">
              <h4>🦺 Personal Protective Equipment</h4>
              <p><strong>Comprehensive PPE Program:</strong> We provide all required PPE at no cost to employees, including hard hats, safety glasses, gloves, hearing protection, fall protection, and respiratory protection.</p>
              <p><strong>Proper Fit & Maintenance:</strong> All PPE is properly fitted, regularly inspected, and maintained or replaced as needed. We ensure every team member has equipment that fits properly and provides effective protection.</p>
              <p><strong>Specialized Equipment:</strong> Task-specific PPE including arc flash protection, chemical resistant clothing, and specialized gloves for different hazards.</p>
            </div>

            <div className="program-card card">
              <h4>🔍 Inspections & Audits</h4>
              <p><strong>Regular Workplace Inspections:</strong> Safety inspections conducted at all job sites and facilities on a scheduled basis. Hazards identified are immediately addressed.</p>
              <p><strong>Equipment Inspections:</strong> All tools, equipment, and vehicles are inspected before use and maintained according to manufacturer specifications. Defective equipment is immediately removed from service.</p>
              <p><strong>Third-Party Audits:</strong> Annual safety audits by independent third-party consultants ensure our program meets or exceeds industry standards.</p>
            </div>

            <div className="program-card card">
              <h4>⚠️ Hazard Reporting</h4>
              <p><strong>Stop Work Authority:</strong> Every employee has the authority and responsibility to stop work if they observe unsafe conditions. No one is ever penalized for raising safety concerns.</p>
              <p><strong>Reporting Systems:</strong> Multiple channels for reporting hazards including direct supervisor communication, safety hotline, and anonymous reporting options.</p>
              <p><strong>Rapid Response:</strong> All hazard reports are investigated within 24 hours with corrective actions implemented immediately.</p>
            </div>

            <div className="program-card card">
              <h4>🚨 Emergency Response</h4>
              <p><strong>Emergency Action Plans:</strong> Comprehensive emergency response procedures for all types of incidents including medical emergencies, fires, chemical spills, severe weather, and more.</p>
              <p><strong>First Aid & Medical:</strong> CPR and First Aid certified personnel on every crew. Fully-stocked first aid kits and AEDs available at all locations.</p>
              <p><strong>Emergency Drills:</strong> Regular emergency response drills ensure everyone knows their role and can respond effectively in crisis situations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section compliance-section">
        <div className="container">
          <div className="section-title">
            <h2>Regulatory Compliance</h2>
            <p>Meeting and exceeding all safety standards and requirements</p>
          </div>
          
          <div className="compliance-content grid grid-2">
            <div className="compliance-card card">
              <h4>OSHA Compliance</h4>
              <p>Full compliance with all OSHA regulations including:</p>
              <ul className="list-check">
                <li>General Industry Standards (29 CFR 1910)</li>
                <li>Construction Standards (29 CFR 1926)</li>
                <li>Personal Protective Equipment (Subpart I)</li>
                <li>Electrical Standards (Subpart S)</li>
                <li>Fall Protection (Subpart M)</li>
                <li>Hazard Communication (1910.1200)</li>
                <li>Confined Space Entry (1910.146)</li>
                <li>Lockout/Tagout (1910.147)</li>
              </ul>
            </div>

            <div className="compliance-card card">
              <h4>EPA Compliance</h4>
              <p>Environmental protection and regulatory compliance:</p>
              <ul className="list-check">
                <li>EPA Section 608 Refrigerant Handling</li>
                <li>Hazardous Waste Management</li>
                <li>Spill Prevention and Response</li>
                <li>Air Quality Standards</li>
                <li>Water Quality Protection</li>
                <li>Chemical Storage and Handling</li>
                <li>Proper Disposal Procedures</li>
              </ul>
            </div>

            <div className="compliance-card card">
              <h4>Industry Standards</h4>
              <p>Adherence to industry-specific safety codes:</p>
              <ul className="list-check">
                <li>NFPA 70E (Electrical Safety)</li>
                <li>NFPA 72 (Fire Alarm Systems)</li>
                <li>NFPA 25 (Water-Based Fire Protection)</li>
                <li>ANSI Standards for Equipment and Tools</li>
                <li>Manufacturer Safety Guidelines</li>
                <li>Building and Fire Codes</li>
              </ul>
            </div>

            <div className="compliance-card card">
              <h4>Documentation & Records</h4>
              <p>Comprehensive documentation maintaining compliance:</p>
              <ul className="list-check">
                <li>OSHA 300 Logs (Incident Records)</li>
                <li>Safety Data Sheets (SDS)</li>
                <li>Training Records and Certifications</li>
                <li>Equipment Inspection Records</li>
                <li>Incident Investigation Reports</li>
                <li>Hazard Assessments</li>
                <li>Safety Meeting Minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section culture-section">
        <div className="container">
          <div className="section-title">
            <h2>Safety Culture</h2>
            <p>Building a mindset where safety is everyone's responsibility</p>
          </div>
          
          <div className="culture-content">
            <div className="culture-principle card">
              <h3>Leadership Commitment</h3>
              <p>Safety starts at the top. Our leadership team is visibly and actively committed to safety, participating in safety meetings, conducting site visits, and leading by example. Safety performance is a key metric in leadership evaluations, and significant resources are allocated to safety programs.</p>
            </div>

            <div className="culture-principle card">
              <h3>Employee Engagement</h3>
              <p>We believe the best safety ideas come from the people doing the work. Our safety committees include representatives from all departments and levels. We actively solicit feedback, reward safety suggestions, and empower employees to contribute to continuous safety improvement.</p>
            </div>

            <div className="culture-principle card">
              <h3>Accountability</h3>
              <p>Everyone is accountable for safety—from senior leadership to new hires. Safe work practices are expected and reinforced. Unsafe behaviors are addressed immediately through coaching and corrective action. Conversely, exemplary safety performance is recognized and rewarded.</p>
            </div>

            <div className="culture-principle card">
              <h3>Continuous Improvement</h3>
              <p>Our safety program is never "finished." We continuously analyze data, review incidents (including near misses), benchmark against industry leaders, and implement improvements. Every incident is an opportunity to learn and strengthen our safety systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section client-safety-section">
        <div className="container">
          <div className="section-title">
            <h2>Client Property Safety</h2>
            <p>Protecting your property, occupants, and business operations</p>
          </div>
          
          <div className="grid grid-3">
            <div className="client-safety-card card">
              <h4>🏢 Property Protection</h4>
              <p>We implement comprehensive measures to protect your property during our work including proper equipment setup, floor and wall protection, dust containment, and careful material handling. We leave every job site clean and undamaged.</p>
            </div>

            <div className="client-safety-card card">
              <h4>👥 Occupant Safety</h4>
              <p>The safety of building occupants is paramount. We coordinate work schedules to minimize disruption, establish clear safety zones, provide advance notification of potentially disruptive work, and maintain professional, safety-conscious presence at all times.</p>
            </div>

            <div className="client-safety-card card">
              <h4>📋 Site-Specific Safety Plans</h4>
              <p>For each client property, we develop site-specific safety plans addressing unique building characteristics, occupancy considerations, access requirements, emergency procedures, and coordination protocols with property management and other contractors.</p>
            </div>

            <div className="client-safety-card card">
              <h4>🚧 Work Zone Management</h4>
              <p>We properly establish and mark work zones with appropriate signage, barriers, and traffic control. Clear communication ensures occupants know which areas to avoid and alternative routes when necessary.</p>
            </div>

            <div className="client-safety-card card">
              <h4>🔧 System Safety</h4>
              <p>Our work maintains or improves the safety of your building systems. We follow proper lockout/tagout procedures, coordinate system shutdowns to minimize impact, test systems before returning them to service, and provide thorough documentation.</p>
            </div>

            <div className="client-safety-card card">
              <h4>📞 Emergency Coordination</h4>
              <p>We integrate with your emergency response plans, provide emergency contact information for our team, respond immediately to emergencies affecting our systems, and coordinate with local emergency services as needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section awards-section">
        <div className="container">
          <div className="section-title">
            <h2>Safety Recognition & Awards</h2>
            <p>Industry recognition for our commitment to safety excellence</p>
          </div>
          
          <div className="awards-grid">
            <div className="award-card card">
              <div className="award-icon">🏆</div>
              <h4>ABC STEP Diamond Award</h4>
              <p>Associated Builders and Contractors Safety Training Evaluation Process (STEP) Diamond Level—the highest tier recognizing companies with exemplary safety programs.</p>
              <p><strong>2021, 2022, 2023</strong></p>
            </div>

            <div className="award-card card">
              <div className="award-icon">🏅</div>
              <h4>OSHA VPP Star Site</h4>
              <p>Voluntary Protection Program recognition for comprehensive safety and health management systems that exceed OSHA standards.</p>
              <p><strong>Since 2020</strong></p>
            </div>

            <div className="award-card card">
              <div className="award-icon">⭐</div>
              <h4>Safety Excellence Award</h4>
              <p>North Carolina Department of Labor recognition for outstanding safety performance and zero incident record.</p>
              <p><strong>2021, 2022, 2023</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Safety

