# Wrightsville Bluewater Group Website

A comprehensive brochure website for a commercial building maintenance and operations company. This demo website is designed to showcase AI chatbot training capabilities with extensive, detailed content.

## About

Wrightsville Bluewater Group is a full-service commercial building maintenance and operations company providing:

- HVAC Systems
- Janitorial Services
- Electrical Services
- Security Systems
- Fire Safety
- Building Inspections
- Emergency Repairs

## Technology Stack

- **React 18** - Modern UI library
- **React Router 6** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with responsive design
- **Flowise Embed React** - AI chatbot integration

## Quick Start

### Install Dependencies

```bash
npm install
```

> **🤖 Chatbot Setup**: See [`CHATBOT-QUICK-START.md`](CHATBOT-QUICK-START.md) for AI chatbot configuration

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

To deploy this website, build it first and then use the upload script:

```bash
# Build the website
npm run build

# Deploy to S3 (requires AWS CLI configured)
node upload-website.js wrightsville-bluewater ./dist
```

The website will be deployed to: `https://sites.fetchpointai.com/wrightsville-bluewater`

### Deployment Requirements

- AWS CLI installed and configured
- Proper AWS credentials with S3 access
- Access to the `fetchpoint-websites` S3 bucket

## Website Structure

### Main Pages

- **Home** - Overview, services, statistics, testimonials
- **About** - Company history, mission, leadership, certifications
- **Services** - Comprehensive overview of all service offerings
- **Case Studies** - Detailed success stories with results
- **Safety** - Safety program, compliance, culture
- **Careers** - Job opportunities, benefits, company culture
- **Contact** - Contact form, location, service areas

### Service Detail Pages

1. **HVAC Services** - Heating, cooling, and ventilation
2. **Janitorial Services** - Professional cleaning and sanitation
3. **Electrical Services** - Licensed electrical contracting
4. **Security Systems** - Access control, surveillance, monitoring
5. **Fire Safety** - Fire protection systems and compliance
6. **Inspections** - Property assessments and audits
7. **Emergency Repairs** - 24/7 emergency response services

## Content Features

The website includes extensive content designed for AI training:

- 13+ pages of detailed information
- Comprehensive service descriptions
- Industry-specific terminology and processes
- Company policies and procedures
- Technical specifications and capabilities
- Case studies with measurable results
- Safety protocols and compliance information
- Employee benefits and career opportunities

## Design Features

- Responsive design (mobile, tablet, desktop)
- Modern gradient hero sections
- Card-based layouts
- Interactive hover effects
- Professional color scheme (blue/cyan theme)
- Clear typography and hierarchy
- Accessible navigation
- Call-to-action buttons throughout
- **AI Chatbot Integration** - 24/7 intelligent support

## 🤖 AI Chatbot

The website includes a fully-integrated AI chatbot powered by Flowise:

- **370+ Services** with unique service numbers
- **5 NC Counties** with service availability
- **24/7 Support** interface
- **Mobile-Optimized** full-screen mode
- **Smart Routing** to estimators and staff

### Quick Setup
1. Install dependencies: `npm install`
2. Update chatflow ID in `src/App.jsx`
3. Build and deploy: `npm run build`

📖 **Full Documentation**: See [`CHATBOT-QUICK-START.md`](CHATBOT-QUICK-START.md)

### Chatbot Features
- Service catalog with 370+ services
- County availability checking
- Service number references for estimates
- Staff directory for transfers
- No pricing display (routes to estimators)
- Ocean blue branding
- Smooth animations
- ESC key to close
- Mobile full-screen mode

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo website created for demonstration purposes.

## Contact

For questions about this demo website, contact the development team.

