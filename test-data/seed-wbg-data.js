#!/usr/bin/env node

/**
 * Demo Data Script for Wrightsville Bluewater Group
 * 
 * This script populates departments and directory entries for the demo customer.
 * 
 * Usage:
 *   node apps/backend/scripts/seed-wrightsville-demo.js
 * 
 * DO NOT COMMIT THIS FILE - It's for manual demo data population only
 * 
 * Install pg if needed: npm install pg
 */

const { Client } = require('pg');

// Database configuration
const DB_CONFIG = {
  host: '',
  port: 5432,
  database: 'fetchpoint',
  user: '',
  password: '',
  ssl: {
    rejectUnauthorized: false, // AWS RDS requires SSL
  },
};

const CUSTOMER_ID = 'cmi3wc1x9000011d9kycrhta0';
const SCHEMA_NAME = 'public';

// Department definitions based on Wrightsville Bluewater Group services
const DEPARTMENTS = [
  {
    name: 'Executive Leadership',
    description: 'Senior leadership team responsible for strategic direction, client relationships, and overall company operations',
  },
  {
    name: 'HVAC Services',
    description: 'Heating, ventilation, and air conditioning installation, maintenance, repair, and energy efficiency optimization',
  },
  {
    name: 'Electrical Services',
    description: 'Licensed electrical contractors providing commercial wiring, lighting, power distribution, and safety inspections',
  },
  {
    name: 'Janitorial Services',
    description: 'Professional cleaning and sanitation for commercial facilities with customized schedules and eco-friendly products',
  },
  {
    name: 'Security Systems',
    description: 'Access control, surveillance, intrusion detection, and 24/7 monitoring solutions',
  },
  {
    name: 'Fire Safety',
    description: 'Fire protection systems, sprinkler maintenance, fire alarm testing, and NFPA compliance',
  },
  {
    name: 'Inspections & Compliance',
    description: 'Building inspections, safety audits, compliance assessments, and preventive maintenance evaluations',
  },
  {
    name: 'Emergency Response',
    description: '24/7 emergency repair services for critical system failures and urgent maintenance issues',
  },
  {
    name: 'Operations & Dispatch',
    description: 'Service coordination, scheduling, work order management, and client communications',
  },
  {
    name: 'Customer Success',
    description: 'Account management, client relations, service quality assurance, and support',
  },
  {
    name: 'Billing & Finance',
    description: 'Invoicing, payment processing, account receivables, contract billing, financial inquiries, and payment plan management',
  },
];

// Directory entries with detailed profiles for AI call routing
const DIRECTORY_ENTRIES = [
  // Executive Leadership
  {
    department: 'Executive Leadership',
    name: 'Robert Matthews',
    title: 'Founder & CEO',
    email: 'demo+1@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Licensed mechanical engineer and certified facility manager (CFM) with over 35 years in commercial facilities management. Handles strategic partnerships, major client relationships, large-scale project approvals, and company direction. Best contact for: enterprise-level contracts, strategic facility planning, major capital projects, executive escalations, and partnership opportunities. Currently leading the Green Buildings Initiative and expansion into the Research Triangle market.',
  },
  {
    department: 'Executive Leadership',
    name: 'Patricia Daniels',
    title: 'Chief Operations Officer',
    email: 'demo+2@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Six Sigma Black Belt and OSHA safety management certified with 28 years operational excellence experience. Oversees all service delivery, quality assurance, team management, and operational efficiency. Best contact for: service quality issues, operational improvements, process optimization, team performance matters, and major service disruptions. Currently implementing the Operations Excellence 2.0 program and leading the sustainability certification initiative.',
  },
  {
    department: 'Executive Leadership',
    name: 'Marcus Johnson',
    title: 'Director of Technical Services',
    email: 'demo+3@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Master electrician with certifications in HVAC, building automation systems, and fire protection. 22 years hands-on experience with complex commercial systems. Oversees technical departments including HVAC, electrical, and fire safety. Best contact for: complex technical issues, building automation integration, equipment selection, technical training matters, and manufacturer warranty claims. Leading the Smart Building Technology project and Advanced HVAC Diagnostics program.',
  },
  {
    department: 'Executive Leadership',
    name: 'Lisa Chen',
    title: 'Director of Safety & Compliance',
    email: 'demo+4@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'OSHA 500 certified with 15 years in environmental health and safety for commercial facilities. Manages all safety protocols, regulatory compliance, environmental initiatives, and sustainability programs. Best contact for: safety violations, OSHA compliance, environmental concerns, sustainability initiatives, regulatory audits, and incident investigations. Currently managing the Zero Incidents Safety Program and coordinating the company-wide environmental sustainability certification.',
  },

  // HVAC Services
  {
    department: 'HVAC Services',
    name: 'David Rodriguez',
    title: 'HVAC Service Manager',
    email: 'demo+5@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'EPA Universal certified with 18 years HVAC experience specializing in commercial systems. Manages the HVAC service team, preventive maintenance programs, and emergency repairs. Expert in chiller systems, rooftop units, and building automation. Best contact for: HVAC service scheduling, system performance issues, maintenance contracts, equipment failures, and temperature control problems. Currently overseeing the Predictive Maintenance pilot program for large commercial HVAC systems.',
  },
  {
    department: 'HVAC Services',
    name: 'Jennifer Wu',
    title: 'Senior HVAC Technician',
    email: 'demo+6@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Master HVAC technician with expertise in variable refrigerant flow (VRF) systems and energy management. 12 years experience with commercial HVAC installations and complex troubleshooting. Best contact for: VRF systems, energy efficiency upgrades, system diagnostics, refrigerant issues, and indoor air quality problems. Specialist in hospital and healthcare facility HVAC requirements. Working on the Energy Optimization Project for three major office complexes.',
  },
  {
    department: 'HVAC Services',
    name: 'Thomas Anderson',
    title: 'Building Automation Specialist',
    email: 'demo+7@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Certified in Trane, Carrier, and Johnson Controls building management systems. 10 years experience programming and maintaining BAS/BMS systems. Expert in HVAC automation, remote monitoring, and smart building integration. Best contact for: building automation issues, BMS programming, remote monitoring setup, energy management systems, and HVAC control sequences. Leading implementation of IoT sensors for predictive maintenance across client portfolio.',
  },
  {
    department: 'HVAC Services',
    name: 'Rachel Martinez',
    title: 'HVAC Project Coordinator',
    email: 'demo+8@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '8 years experience coordinating large-scale HVAC installations and replacements. Manages project timelines, vendor relationships, equipment procurement, and client communications. Best contact for: HVAC installation projects, equipment replacement scheduling, project status updates, vendor coordination, and capital improvement planning. Currently managing the Convention Center HVAC modernization project.',
  },

  // Electrical Services
  {
    department: 'Electrical Services',
    name: 'William Foster',
    title: 'Master Electrician & Electrical Manager',
    email: 'demo+9@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Licensed master electrician with 20 years commercial electrical experience. Manages electrical service team, complex installations, and power distribution projects. Expert in high-voltage systems, emergency generators, and electrical code compliance. Best contact for: electrical emergencies, power distribution issues, generator problems, electrical inspections, and major electrical projects. Currently leading the LED Retrofit Initiative and EV Charging Station deployment program.',
  },
  {
    department: 'Electrical Services',
    name: 'Angela Thompson',
    title: 'Lighting Systems Specialist',
    email: 'demo+10@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Certified lighting designer with expertise in commercial LED retrofits and lighting control systems. 9 years experience in energy-efficient lighting solutions. Best contact for: lighting upgrades, LED conversions, lighting control systems, photocell issues, and occupancy sensor problems. Specializes in retail and office lighting design. Managing the Smart Lighting project for three retail centers totaling 500,000 sq ft.',
  },
  {
    department: 'Electrical Services',
    name: 'Kevin Park',
    title: 'Emergency Power Systems Technician',
    email: 'demo+11@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Specialist in backup power systems including generators, UPS systems, and automatic transfer switches. 11 years experience maintaining critical power infrastructure. Best contact for: generator maintenance, generator testing, transfer switch issues, UPS system problems, and backup power emergencies. Expert in Generac, Kohler, and Cummins generator systems. Supporting the Healthcare Facilities Backup Power Compliance project.',
  },

  // Janitorial Services
  {
    department: 'Janitorial Services',
    name: 'Maria Santos',
    title: 'Janitorial Services Manager',
    email: 'demo+12@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'IICRC certified with 15 years managing commercial cleaning operations. Oversees 40+ janitorial staff, quality control, and green cleaning programs. Expert in healthcare facility cleaning, floor care, and disinfection protocols. Best contact for: cleaning service issues, special cleaning requests, staff scheduling, quality concerns, and green cleaning programs. Currently implementing the Enhanced Disinfection Protocol and managing the Green Seal certification process.',
  },
  {
    department: 'Janitorial Services',
    name: 'James Wilson',
    title: 'Floor Care Specialist',
    email: 'demo+13@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '12 years specializing in commercial floor maintenance including VCT, hardwood, concrete, and carpet care. Expert in floor stripping, waxing, refinishing, and restoration. Best contact for: floor maintenance issues, carpet cleaning, floor refinishing projects, slip-and-fall prevention, and floor restoration. Certified in concrete polishing and epoxy floor systems. Leading the Floor Care Excellence training program.',
  },
  {
    department: 'Janitorial Services',
    name: 'Christine Lee',
    title: 'Quality Assurance Inspector',
    email: 'demo+14@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '7 years conducting quality inspections for janitorial services across multiple facility types. Performs detailed facility walkthroughs, documents issues, and ensures cleaning standards are met. Best contact for: cleaning quality complaints, inspection scheduling, cleaning standard questions, and restroom sanitation concerns. Specialist in healthcare and food service facility cleaning compliance. Managing the Quality Metrics Dashboard implementation.',
  },

  // Security Systems
  {
    department: 'Security Systems',
    name: 'Robert Jackson',
    title: 'Security Systems Manager',
    email: 'demo+15@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'ASIS Certified Protection Professional (CPP) with 16 years in commercial security systems. Manages security installations, access control programming, and surveillance systems. Expert in integrated security platforms including Genetec, CCURE, and Lenel. Best contact for: security system issues, access control problems, camera malfunctions, security upgrades, and badge system questions. Currently overseeing the Enterprise Security Integration project connecting 15 properties.',
  },
  {
    department: 'Security Systems',
    name: 'Michelle Davis',
    title: 'Access Control Specialist',
    email: 'demo+16@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '10 years specializing in electronic access control systems and credential management. Expert in card readers, biometric systems, and mobile access solutions. Best contact for: badge access issues, door access problems, credential programming, visitor management systems, and access control integration. Certified in HID and Schlage access control platforms. Leading the Mobile Credentials rollout project.',
  },
  {
    department: 'Security Systems',
    name: 'Daniel Rivera',
    title: 'Video Surveillance Technician',
    email: 'demo+17@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '8 years installing and maintaining commercial video surveillance systems. Expert in IP cameras, NVR systems, video analytics, and remote monitoring. Best contact for: camera problems, video system issues, footage retrieval requests, surveillance system expansion, and video analytics setup. Specialist in Axis, Hanwha, and Milestone systems. Supporting the AI-Powered Video Analytics pilot program.',
  },

  // Fire Safety
  {
    department: 'Fire Safety',
    name: 'Steven Brown',
    title: 'Fire Safety Manager',
    email: 'demo+18@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'NICET Level III certified in fire alarm systems with NFPA Fire Protection Specialist credentials. 19 years managing fire protection systems for commercial properties. Oversees fire alarm testing, sprinkler maintenance, and life safety compliance. Best contact for: fire alarm issues, sprinkler problems, fire safety inspections, code compliance questions, and fire protection system upgrades. Currently managing the Fire Safety Modernization program for aging buildings.',
  },
  {
    department: 'Fire Safety',
    name: 'Laura Mitchell',
    title: 'Fire Alarm Systems Technician',
    email: 'demo+19@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'NICET certified with 11 years installing and servicing fire alarm systems. Expert in addressable fire alarm panels, smoke detection, and emergency notification systems. Best contact for: fire alarm testing, false alarm issues, smoke detector problems, fire panel errors, and notification device issues. Certified in Simplex, Notifier, and Edwards fire alarm systems. Supporting the Annual Fire Alarm Testing program across 200+ buildings.',
  },
  {
    department: 'Fire Safety',
    name: 'Brian Cooper',
    title: 'Sprinkler Systems Specialist',
    email: 'demo+20@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Licensed fire sprinkler contractor with 14 years experience in commercial sprinkler systems. Expert in wet pipe, dry pipe, and pre-action sprinkler systems. Best contact for: sprinkler leaks, frozen pipes, sprinkler head damage, system pressure issues, and backflow preventer problems. Specialist in warehouse and cold storage sprinkler systems. Managing the Sprinkler System Retrofit project for three industrial facilities.',
  },

  // Inspections & Compliance
  {
    department: 'Inspections & Compliance',
    name: 'Amanda Greene',
    title: 'Chief Inspector',
    email: 'demo+21@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'Certified Facility Manager (CFM) and Building Performance Institute (BPI) certified with 13 years conducting comprehensive building assessments. Performs detailed property inspections covering all systems. Best contact for: comprehensive building inspections, pre-purchase assessments, annual facility audits, code compliance reviews, and capital planning inspections. Expert in ADA compliance and energy efficiency assessments. Leading the Proactive Inspection Program identifying issues before they become critical.',
  },
  {
    department: 'Inspections & Compliance',
    name: 'Gregory Turner',
    title: 'Safety Compliance Inspector',
    email: 'demo+22@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: 'OSHA 30-hour certified with extensive knowledge of commercial building safety codes and regulations. 9 years conducting safety audits and compliance inspections. Best contact for: OSHA compliance issues, safety hazard assessments, workplace safety audits, fall protection inspections, and emergency egress reviews. Specializes in multi-story building safety requirements. Supporting the Safety Excellence certification program.',
  },
  {
    department: 'Inspections & Compliance',
    name: 'Nicole Peterson',
    title: 'Environmental Compliance Specialist',
    email: 'demo+23@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '10 years experience in environmental compliance for commercial facilities. Expert in EPA regulations, hazardous material handling, waste management, and environmental reporting. Best contact for: environmental compliance issues, hazmat concerns, waste disposal questions, EPA reporting, and environmental audit preparation. Certified in asbestos awareness and lead paint safety. Managing the Environmental Management System (EMS) implementation.',
  },

  // Emergency Response
  {
    department: 'Emergency Response',
    name: 'Christopher Hayes',
    title: 'Emergency Response Coordinator',
    email: 'demo+24@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '15 years managing 24/7 emergency response operations for commercial facilities. Coordinates rapid response teams, prioritizes emergency calls, and manages crisis situations. Best contact for: urgent facility emergencies, after-hours critical issues, natural disaster response, major system failures, and emergency service coordination. Expert in business continuity planning and emergency preparedness. On-call coordinator for the 24/7 Emergency Hotline.',
  },
  {
    department: 'Emergency Response',
    name: 'Sarah Phillips',
    title: 'Emergency Services Dispatcher',
    email: 'demo+25@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '8 years dispatching emergency service technicians and coordinating urgent repair responses. Monitors building automation systems for critical alerts and coordinates rapid response. Best contact for: emergency dispatch, technician ETA questions, urgent work order status, and after-hours service requests. Certified in emergency communications and crisis management. Manages the 24/7 Emergency Response Dashboard.',
  },

  // Operations & Dispatch
  {
    department: 'Operations & Dispatch',
    name: 'Michael Torres',
    title: 'Operations Manager',
    email: 'demo+26@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '12 years managing facility operations and service coordination. Oversees work order management, technician scheduling, parts inventory, and service delivery across all departments. Best contact for: service scheduling, work order status, multi-service coordination, resource allocation, and operational efficiency questions. Expert in facility management software and service optimization. Leading the Digital Operations Transformation initiative.',
  },
  {
    department: 'Operations & Dispatch',
    name: 'Jessica Morgan',
    title: 'Service Coordinator',
    email: 'demo+27@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '7 years coordinating service requests, scheduling technicians, and managing client communications. Primary point of contact for routine service scheduling and work order management. Best contact for: routine maintenance scheduling, service appointment changes, work order creation, technician assignments, and general service inquiries. Expert in preventive maintenance program coordination. Managing the Client Portal Enhancement project.',
  },

  // Customer Success
  {
    department: 'Customer Success',
    name: 'Elizabeth Campbell',
    title: 'Director of Customer Success',
    email: 'demo+28@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '14 years in customer success and account management for facility services. Manages major client relationships, conducts quarterly business reviews, and ensures service satisfaction. Best contact for: account management, service quality concerns, contract discussions, client satisfaction issues, and quarterly business reviews. Expert in client retention and service optimization. Currently managing relationships for 50+ enterprise clients.',
  },
  {
    department: 'Customer Success',
    name: 'Jonathan White',
    title: 'Account Manager',
    email: 'demo+29@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '9 years managing mid-market client accounts and service delivery. Primary contact for assigned accounts handling service requests, billing questions, and relationship management. Best contact for: account-specific questions, service plan modifications, billing inquiries, contract renewals, and service customization. Manages portfolio of 30 commercial properties. Leading the Client Satisfaction Improvement initiative.',
  },
  {
    department: 'Customer Success',
    name: 'Samantha King',
    title: 'Customer Support Specialist',
    email: 'demo+30@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '5 years providing frontline customer support and service request intake. First point of contact for many client inquiries handling general questions, service requests, and basic troubleshooting. Best contact for: general inquiries, service request submission, account information, client portal assistance, and billing questions. Certified in customer service excellence and CMMS software. Supporting the Customer Experience Enhancement program.',
  },

  // Billing & Finance
  {
    department: 'Billing & Finance',
    name: 'Karen Mitchell',
    title: 'Billing Specialist',
    email: 'demo+31@fetchpointai.com',
    phone: '(111) 111-1111',
    profile: '11 years managing commercial service billing, invoicing, and payment processing for facility maintenance contracts. Expert in contract billing, service invoice generation, payment reconciliation, and financial reporting. Best contact for: invoice questions, payment issues, billing disputes, contract billing inquiries, payment plan arrangements, account balance questions, and payment method updates. Handles both recurring maintenance contracts and time-and-materials billing. Specialist in multi-property billing and consolidated invoicing for property management companies. Currently implementing the Automated Billing System upgrade and managing the Paperless Billing initiative.',
  },
];

function generateCuid() {
  // Simple CUID-like ID generator
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 15);
  return `c${timestamp}${randomStr}`;
}

async function main() {
  const client = new Client(DB_CONFIG);

  try {
    console.log('🚀 Starting Wrightsville Bluewater Group demo data seed...\n');
    console.log(`📡 Connecting to database...`);
    
    await client.connect();
    console.log(`✅ Connected successfully\n`);

    // Set the schema for this session
    await client.query(`SET search_path TO "${SCHEMA_NAME}"`);
    console.log(`✅ Using schema: ${SCHEMA_NAME}\n`);

    // Verify customer exists (in public schema)
    const customerResult = await client.query(
      'SELECT id, name FROM public."customers" WHERE id = $1',
      [CUSTOMER_ID]
    );

    if (customerResult.rows.length === 0) {
      console.error(`❌ Customer with ID ${CUSTOMER_ID} not found!`);
      process.exit(1);
    }

    console.log(`✅ Found customer: ${customerResult.rows[0].name}\n`);

    // Create departments
    console.log('📁 Creating departments...');
    const departmentMap = new Map();
    
    for (const dept of DEPARTMENTS) {
      // Check if department exists
      const existingDept = await client.query(
        `SELECT id FROM "${SCHEMA_NAME}"."departments" WHERE "customerId" = $1 AND name = $2`,
        [CUSTOMER_ID, dept.name]
      );

      let departmentId;

      if (existingDept.rows.length > 0) {
        // Update existing department
        departmentId = existingDept.rows[0].id;
        await client.query(
          `UPDATE "${SCHEMA_NAME}"."departments" 
           SET description = $1, "updatedAt" = NOW() 
           WHERE id = $2`,
          [dept.description, departmentId]
        );
      } else {
        // Create new department
        departmentId = generateCuid();
        await client.query(
          `INSERT INTO "${SCHEMA_NAME}"."departments" (id, "customerId", name, description, "createdAt", "updatedAt")
           VALUES ($1, $2, $3, $4, NOW(), NOW())`,
          [departmentId, CUSTOMER_ID, dept.name, dept.description]
        );
      }

      departmentMap.set(dept.name, departmentId);
      console.log(`  ✓ ${dept.name}`);
    }

    console.log(`\n✅ Created/Updated ${DEPARTMENTS.length} departments\n`);

    // Create directory entries
    console.log('👥 Creating directory entries...');
    let createdCount = 0;

    for (const entry of DIRECTORY_ENTRIES) {
      const departmentId = departmentMap.get(entry.department);
      
      if (!departmentId) {
        console.warn(`  ⚠️  Skipping ${entry.name} - department not found: ${entry.department}`);
        continue;
      }

      const entryId = generateCuid();
      
      try {
        await client.query(
          `INSERT INTO "${SCHEMA_NAME}"."customer_directory" 
           (id, "customerId", "departmentId", name, phone, title, profile, email, "createdAt", "updatedAt")
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())`,
          [entryId, CUSTOMER_ID, departmentId, entry.name, entry.phone, entry.title, entry.profile, entry.email]
        );

        console.log(`  ✓ ${entry.name} - ${entry.title}`);
        createdCount++;
      } catch (error) {
        console.warn(`  ⚠️  Skipping ${entry.name} - may already exist`);
      }
    }

    console.log(`\n✅ Created ${createdCount} directory entries\n`);
    console.log('🎉 Demo data seed completed successfully!');

  } catch (error) {
    console.error('❌ Error seeding demo data:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();

