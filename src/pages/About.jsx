import './About.css'
import teamPhoto from '../assets/team-placeholder.svg'

function About() {
  return (
    <div className="about">
      <section className="hero">
        <div className="container">
          <h1>About Wrightsville Bluewater Group</h1>
          <p>Excellence in Commercial Building Maintenance Since 1998</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <h2>Our Story</h2>
            <p>Founded in 1998 by veterans of the commercial construction and facilities management industries, Wrightsville Bluewater Group began with a simple mission: to provide comprehensive, reliable, and professional building maintenance services that commercial property owners and managers could truly depend on. What started as a small HVAC service company in Wilmington, North Carolina, has grown into a full-service building operations partner serving over 500 commercial properties across the greater Wilmington area and beyond.</p>
            
            <p>Our name reflects our roots—"Wrightsville" honors our coastal North Carolina heritage and commitment to the local business community, while "Bluewater" represents our dedication to clarity, reliability, and smooth operations. Just as bluewater sailors navigate open seas with skill and preparation, we navigate the complexities of commercial building maintenance with expertise and foresight.</p>
            
            <p>Over 25 years, we've continuously expanded our service offerings in response to client needs. We've added janitorial services, electrical contracting, security systems, fire safety, comprehensive inspections, and emergency repair capabilities. Today, we're proud to be recognized as one of the region's most trusted and comprehensive commercial maintenance providers.</p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-card card">
              <h3>Our Mission</h3>
              <p>To deliver exceptional commercial building maintenance and operations services that enhance property value, ensure occupant safety and comfort, optimize operational efficiency, and provide peace of mind to property owners and managers. We achieve this through:</p>
              <ul className="list-check">
                <li>Employing highly trained, certified professionals</li>
                <li>Utilizing cutting-edge technology and best practices</li>
                <li>Maintaining unwavering commitment to safety and compliance</li>
                <li>Providing responsive, personalized service</li>
                <li>Building long-term partnerships based on trust and results</li>
              </ul>
            </div>

            <div className="mission-card card">
              <h3>Our Vision</h3>
              <p>To be the Southeast's premier commercial building maintenance and operations company, recognized for:</p>
              <ul className="list-check">
                <li>Unmatched service quality and reliability</li>
                <li>Innovation in facility management solutions</li>
                <li>Environmental sustainability leadership</li>
                <li>Exceptional client satisfaction and retention</li>
                <li>Being the employer of choice for facility professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-3">
            <div className="value-card card">
              <h4>🎯 Excellence</h4>
              <p>We pursue excellence in every task, from routine maintenance to complex system installations. Our commitment to quality is non-negotiable, and we continuously seek to exceed industry standards and client expectations.</p>
            </div>

            <div className="value-card card">
              <h4>🤝 Integrity</h4>
              <p>We operate with complete honesty and transparency. We provide accurate assessments, fair pricing, and truthful communication. Our clients can trust us to always do what's right, even when no one is watching.</p>
            </div>

            <div className="value-card card">
              <h4>⚡ Responsiveness</h4>
              <p>We understand that building issues can't wait. Our commitment to rapid response, clear communication, and timely resolution sets us apart. We're available when you need us most.</p>
            </div>

            <div className="value-card card">
              <h4>🔒 Safety First</h4>
              <p>The safety of building occupants, our team members, and the environment is our top priority. We maintain rigorous safety protocols, ongoing training, and strict compliance with all regulations.</p>
            </div>

            <div className="value-card card">
              <h4>💡 Innovation</h4>
              <p>We embrace technology and new methodologies that improve service delivery, efficiency, and sustainability. Our investment in training, tools, and systems keeps us at the forefront of the industry.</p>
            </div>

            <div className="value-card card">
              <h4>🌱 Sustainability</h4>
              <p>We're committed to environmental stewardship. From energy-efficient solutions to eco-friendly products, we help our clients reduce environmental impact while lowering operating costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-title">
            <h2>Leadership Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>
          
          <div className="grid grid-2">
            <div className="leader-card card">
              <div className="leader-photo">
                <img src={teamPhoto} alt="Bob Matthews" />
              </div>
              <h3>Robert "Bob" Matthews</h3>
              <h5>Founder & CEO</h5>
              <p>With over 35 years in commercial facilities management, Bob founded Wrightsville Bluewater Group with a vision to transform how commercial properties approach maintenance and operations. A licensed mechanical engineer and certified facility manager (CFM), Bob leads our strategic direction and maintains close relationships with key clients. His expertise in HVAC systems and building automation has been instrumental in our growth and reputation for technical excellence.</p>
            </div>

            <div className="leader-card card">
              <div className="leader-photo">
                <img src={teamPhoto} alt="Patricia Daniels" />
              </div>
              <h3>Patricia "Tricia" Daniels</h3>
              <h5>Chief Operations Officer</h5>
              <p>Tricia brings 28 years of operational excellence to WBG, overseeing all service delivery, quality assurance, and team management. With certifications in Six Sigma, OSHA safety management, and facility operations, she ensures our services meet the highest standards. Tricia's process improvement initiatives have enhanced efficiency by 40% while maintaining our industry-leading service quality. She's passionate about team development and operational innovation.</p>
            </div>

            <div className="leader-card card">
              <div className="leader-photo">
                <img src={teamPhoto} alt="Marcus Johnson" />
              </div>
              <h3>Marcus Johnson</h3>
              <h5>Director of Technical Services</h5>
              <p>Marcus oversees our technical departments including HVAC, electrical, and fire safety services. A master electrician with additional certifications in HVAC, building automation systems, and fire protection, Marcus has 22 years of hands-on experience with complex commercial systems. He leads our technical training programs, ensuring our technicians stay current with evolving technology and maintains our relationships with equipment manufacturers.</p>
            </div>

            <div className="leader-card card">
              <div className="leader-photo">
                <img src={teamPhoto} alt="Lisa Chen" />
              </div>
              <h3>Lisa Chen</h3>
              <h5>Director of Safety & Compliance</h5>
              <p>Lisa ensures WBG maintains the highest safety and compliance standards across all operations. With a background in environmental health and safety (OSHA 500 certified) and 15 years in commercial facility compliance, she develops and oversees safety protocols, conducts training, manages regulatory compliance, and leads our sustainability initiatives. Under her leadership, we've achieved a zero-incident safety record for three consecutive years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <div className="section-title">
            <h2>Certifications & Affiliations</h2>
            <p>Recognized excellence in the facility management industry</p>
          </div>
          
          <div className="certifications-content">
            <div className="cert-category">
              <h4>Industry Certifications</h4>
              <ul className="list-check">
                <li>Licensed General Contractor (License #87654)</li>
                <li>Master Electrical Contractor (License #E-34567)</li>
                <li>HVAC Master Contractor (License #H-45678)</li>
                <li>EPA Section 608 Certified (Universal)</li>
                <li>NFPA Fire Protection Specialist</li>
                <li>IICRC Certified (Cleaning & Restoration)</li>
                <li>ASIS Certified Protection Professional (CPP)</li>
                <li>Building Performance Institute (BPI) Certified</li>
              </ul>
            </div>

            <div className="cert-category">
              <h4>Professional Memberships</h4>
              <ul className="list-check">
                <li>International Facility Management Association (IFMA)</li>
                <li>Building Owners and Managers Association (BOMA)</li>
                <li>Associated Builders and Contractors (ABC)</li>
                <li>National Association of Electrical Contractors (NECA)</li>
                <li>Air Conditioning Contractors of America (ACCA)</li>
                <li>National Fire Protection Association (NFPA)</li>
                <li>U.S. Green Building Council (USGBC)</li>
                <li>Wilmington Chamber of Commerce</li>
              </ul>
            </div>

            <div className="cert-category">
              <h4>Awards & Recognition</h4>
              <ul className="list-check">
                <li>BOMA Pinnacle Award for Service Excellence (2022, 2023)</li>
                <li>ABC Excellence in Construction Award (2021, 2022, 2023)</li>
                <li>Wilmington Business Journal Top 100 Companies (2020-2024)</li>
                <li>Best Places to Work in North Carolina (2021-2024)</li>
                <li>Green Business Leadership Award (2023)</li>
                <li>Safety Excellence Award - Zero Incidents (2021-2023)</li>
              </ul>
            </div>

            <div className="cert-category">
              <h4>Insurance & Bonding</h4>
              <ul className="list-check">
                <li>General Liability: $5 Million</li>
                <li>Professional Liability: $2 Million</li>
                <li>Workers' Compensation: Fully Covered</li>
                <li>Bonding Capacity: $10 Million</li>
                <li>Commercial Auto Coverage: $2 Million</li>
                <li>Cyber Liability: $1 Million</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section community-section">
        <div className="container">
          <div className="section-title">
            <h2>Community Commitment</h2>
            <p>Giving back to the communities we serve</p>
          </div>
          
          <div className="community-content">
            <p>At Wrightsville Bluewater Group, we believe in being more than just a business—we're active members of our community. We're committed to making a positive impact through various initiatives:</p>
            
            <div className="grid grid-2">
              <div className="community-card card">
                <h4>Workforce Development</h4>
                <p>We partner with local technical schools and community colleges to provide apprenticeships, internships, and training opportunities. Our "Pathways to Trades" program has helped over 100 young people launch successful careers in facility management and skilled trades.</p>
              </div>

              <div className="community-card card">
                <h4>Environmental Stewardship</h4>
                <p>Through our "Green Buildings Initiative," we offer free energy audits to non-profit organizations and help implement sustainability improvements. We've helped local non-profits reduce energy costs by an average of 35%, freeing up resources for their missions.</p>
              </div>

              <div className="community-card card">
                <h4>Emergency Response Support</h4>
                <p>During natural disasters and emergencies, we provide pro-bono services to emergency shelters, hospitals, and critical community facilities. Our emergency response teams have supported the community through hurricanes, storms, and other crises.</p>
              </div>

              <div className="community-card card">
                <h4>Charitable Partnerships</h4>
                <p>We maintain ongoing partnerships with organizations like Habitat for Humanity, Food Bank of Central & Eastern NC, and local schools. Our team members volunteer thousands of hours annually, and we donate services and materials to support community projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

