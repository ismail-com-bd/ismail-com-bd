
import { SkillGroup, Experience, Education, Project } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Industrial Controlling',
    icon: 'wrench',
    items: [
      'Relay, Timer, Indicator',
      'Photo-Sensor & Proximity',
      'Limit & Level Switch',
      'Thermocouple Systems',
      'Solenoid Valve Control',
      'Air Cylinder Access Control'
    ]
  },
  {
    category: 'PLC & HMI Logic',
    icon: 'cpu',
    items: [
      'Siemens (Logo) Programming',
      'Delta & Mitsubishi PLC',
      'LS MASTER-K Series',
      'HMI Design & Layout',
      'Communication Setup'
    ]
  },
  {
    category: 'Welding & Mechanics',
    icon: 'zap',
    items: [
      'SMAW & GTAW/TIG',
      'GMAW/MIG & Gas Welding',
      'Spot Welding Precision',
      'Automotive Mechanics L1',
      'Industrial Fabrication'
    ]
  },
  {
    category: 'Software & Digital',
    icon: 'code',
    items: [
      'AutoCAD (Engineering)',
      'Flutter (ICT Certified)',
      'Web Development Basic',
      'M.S Office Suite'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Agility Power System',
    role: 'Maintenance Engineer',
    period: 'APR 2025 – PRESENT',
    description: [
      'Handling servicing, repair, and troubleshooting of CNG Compressors, Gas Generators, and LPG systems.',
      'Maintenance of Fuel Dispensers and dispenser controller systems to minimize downtime.',
      'Managing spare parts sales and providing on-site technical assistance and CRM.'
    ]
  },
  {
    company: 'M/s Khorshed Alam CNG & LPG',
    role: 'Maintenance Engineer',
    period: 'AUG 2024 – APR 2025',
    description: [
      'Ensured smooth operation of high-pressure CNG and LPG filling equipment.',
      'Responsible for the comprehensive maintenance and repair of mechanical systems.',
      'Managed a technician team to optimize facility efficiency and safety.'
    ]
  },
  {
    company: 'New Jannat Engineering Workshop',
    role: 'Mechanic',
    period: 'JUN 2024 – AUG 2024',
    description: [
      'Performed repair, fitting, and fabrication works on industrial and commercial machinery.',
      'Technical support and machinery troubleshooting for diverse client requirements.',
      'Execution of high-quality mechanical assembly and structural fabrication.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Diploma In Engineering (Mechanical)',
    institution: 'Cumilla Polytechnic Institute',
    result: 'CGPA 3.43 (Out of 4)',
    year: '2023',
    location: 'Cumilla, Bangladesh'
  },
  {
    degree: 'Secondary School Certificate (Electrical)',
    institution: 'Laksam Pilot High School',
    result: 'GPA 4.82 (Out of 5)',
    year: '2019',
    location: 'Laksam, Cumilla'
  },
  {
    degree: 'Welding NTVQF Level-1',
    institution: 'Cumilla Technical Training Center',
    year: '2022'
  },
  {
    degree: 'Automotive Mechanics Level-1',
    institution: 'Cumilla Technical Training Center',
    year: '2022'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'CNG Compressor Optimization',
    description: 'Technical overhaul and performance tuning of high-pressure industrial compressors for Agility Power Systems.',
    tags: ['Compressors', 'CNG', 'Maintenance'],
    icon: 'wrench'
  },
  {
    title: 'PLC System Troubleshooting',
    description: 'Programming and issue resolution for dispenser controller systems using Siemens Logo and LS Master logic.',
    tags: ['PLC', 'Automation', 'Siemens'],
    icon: 'cpu'
  },
  {
    title: 'LPG Dispenser Calibration',
    description: 'Precision maintenance and communication setup for multi-fuel dispensing units in commercial filling stations.',
    tags: ['HMI', 'Calibration', 'LPG'],
    icon: 'zap'
  },
  {
    title: 'Industrial Fabrication Project',
    description: 'Design and welding of machinery components using TIG and MIG techniques for commercial workshops.',
    tags: ['Fabrication', 'Welding', 'Safety'],
    icon: 'shield'
  }
];
