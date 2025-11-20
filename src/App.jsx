import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { WrightsvilleChatbot } from './components/WrightsvilleChatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import HVACServices from './pages/services/HVACServices'
import JanitorialServices from './pages/services/JanitorialServices'
import ElectricalServices from './pages/services/ElectricalServices'
import SecuritySystems from './pages/services/SecuritySystems'
import FireSafety from './pages/services/FireSafety'
import Inspections from './pages/services/Inspections'
import EmergencyRepairs from './pages/services/EmergencyRepairs'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Safety from './pages/Safety'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hvac" element={<HVACServices />} />
          <Route path="/services/janitorial" element={<JanitorialServices />} />
          <Route path="/services/electrical" element={<ElectricalServices />} />
          <Route path="/services/security" element={<SecuritySystems />} />
          <Route path="/services/fire-safety" element={<FireSafety />} />
          <Route path="/services/inspections" element={<Inspections />} />
          <Route path="/services/emergency" element={<EmergencyRepairs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>
      </Layout>
      
      {/* Chatbot - Available on all pages */}
      <WrightsvilleChatbot
        chatflowId="d1ff67e4-215d-4535-807b-c8f0db24031a"
        apiHost="https://wrightsvillebluewatergroup.fetchpointai.com"
      />
    </Router>
  )
}

export default App

