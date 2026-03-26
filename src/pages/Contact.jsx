import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team—we're here to help</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Discuss Your Facility Needs</h2>
              <p>Whether you need routine maintenance, emergency service, or want to learn more about our comprehensive solutions, our team is ready to assist you.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p><strong>Call Us:</strong> (910) 613-6570</p>
                    <p><strong>Hours:</strong> Monday-Friday, 7:00 AM - 6:00 PM</p>
                    <p><strong>Emergency Service:</strong> Available 24/7</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p><strong>General Inquiries:</strong> info@wbgcommercial.com</p>
                    <p><strong>New Clients:</strong> sales@wbgcommercial.com</p>
                    <p><strong>Service Requests:</strong> service@wbgcommercial.com</p>
                    <p><strong>Careers:</strong> careers@wbgcommercial.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Address</h4>
                    <p><strong>Headquarters:</strong></p>
                    <p>Wrightsville Bluewater Group</p>
                    <p>1250 Industrial Park Drive</p>
                    <p>Wilmington, NC 28405</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-details">
                    <h4>Service Areas</h4>
                    <p>We proudly serve commercial properties throughout:</p>
                    <ul>
                      <li>New Hanover County</li>
                      <li>Brunswick County</li>
                      <li>Pender County</li>
                      <li>And surrounding areas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container card">
              <h3>Request a Free Consultation</h3>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType">Property Type *</label>
                  <select id="propertyType" name="propertyType" required>
                    <option value="">Select property type...</option>
                    <option value="office">Office Building</option>
                    <option value="retail">Retail/Shopping Center</option>
                    <option value="industrial">Industrial/Warehouse</option>
                    <option value="healthcare">Healthcare Facility</option>
                    <option value="education">Educational Institution</option>
                    <option value="hospitality">Hotel/Hospitality</option>
                    <option value="multifamily">Multi-Family Residential</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="services">Services Interested In *</label>
                  <select id="services" name="services" required>
                    <option value="">Select service...</option>
                    <option value="hvac">HVAC Systems</option>
                    <option value="janitorial">Janitorial Services</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="security">Security Systems</option>
                    <option value="fire">Fire Safety</option>
                    <option value="inspections">Inspections</option>
                    <option value="emergency">Emergency Repairs</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="comprehensive">Comprehensive Facility Management</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Needs *</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Please describe your facility and what services you're interested in..."></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">When do you need service?</label>
                  <select id="timeline" name="timeline">
                    <option value="">Select timeline...</option>
                    <option value="immediate">Immediate/Emergency</option>
                    <option value="1-2weeks">Within 1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="planning">Just planning/gathering information</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section emergency-section">
        <div className="container">
          <div className="emergency-banner">
            <h2>🚨 Need Emergency Service?</h2>
            <p>Our emergency response team is available 24/7/365 for critical issues</p>
            <a href="tel:+19106136570" className="btn btn-secondary">Call Now: (910) 613-6570</a>
            <div className="emergency-info">
              <p><strong>Average Response Time:</strong> Under 60 minutes</p>
              <p><strong>Service Coverage:</strong> All of our service areas, including after-hours and weekends</p>
              <p><strong>Emergency Services:</strong> HVAC failures, electrical emergencies, plumbing issues, security concerns, fire safety, and more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="section-title">
            <h2>Visit Our Facility</h2>
            <p>Stop by our headquarters to meet the team and tour our operations center</p>
          </div>
          
          <div className="map-info">
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <p>1250 Industrial Park Drive</p>
              <p>Wilmington, NC 28405</p>
            </div>
            
            <div className="directions-info card">
              <h4>Directions & Parking</h4>
              <ul className="list-check">
                <li><strong>From Downtown Wilmington:</strong> Take US-17 North to Industrial Park Drive. Turn right, and we're the third building on the left.</li>
                <li><strong>From I-40:</strong> Take exit 420 toward Wilmington. Merge onto US-117 South, then turn left on Industrial Park Drive.</li>
                <li><strong>Parking:</strong> Ample free parking available in front of and behind the building.</li>
                <li><strong>Accessibility:</strong> Our facility is fully ADA accessible with designated parking spaces near the entrance.</li>
              </ul>
              
              <h5>Facility Tour</h5>
              <p>Interested in seeing our operations center, meeting our team, and learning more about our capabilities? We offer facility tours by appointment. Contact us to schedule your visit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

