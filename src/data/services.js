import { 
  Calculator, 
  FileSearch, 
  Building, 
  LineChart, 
  Receipt, 
  Briefcase 
} from 'lucide-react';

export const servicesData = [
  {
    id: '01',
    slug: 'accounts-outsourcing',
    title: 'Accounts Outsourcing',
    icon: Calculator,
    shortDescription: 'Comprehensive accounting and payroll management to streamline your financial operations.',
    features: [
      'Accounts Outsourcing Services',
      'Payroll Management Services',
      'Compilation of Final Accounts',
      'Preparation of Financial Statements',
      'All Statutory Compliance Services'
    ]
  },
  {
    id: '02',
    slug: 'auditing-and-attest',
    title: 'Auditing & Attest Services',
    icon: FileSearch,
    shortDescription: 'Ensuring financial integrity and regulatory compliance through meticulous statutory and specialized audits.',
    features: [
      'Statutory & Internal Audit Services',
      'Certification and Attest Functions',
      'Fixed Assets & Stock Audit',
      'IT System Audit',
      'Special Audit Services'
    ]
  },
  {
    id: '03',
    slug: 'company-formation',
    title: 'Company Formation & Corporate Law',
    icon: Building,
    shortDescription: 'Expert advisory on business setup, mergers, acquisitions, and comprehensive corporate compliance.',
    features: [
      'Company Formation Services',
      'IPO Advisory Services',
      'Mergers & Acquisition Services',
      'Company Support Services'
    ]
  },
  {
    id: '04',
    slug: 'management-consultancy',
    title: 'Management Consultancy',
    icon: LineChart,
    shortDescription: 'Strategic financial planning, MIS reporting, and policy determination for sustainable business growth.',
    features: [
      'Stock & Fixed Asset Management',
      'MIS Reporting & Budget Forecasting',
      'Costing & Accounting System Design',
      'Business Policy & Corporate Planning',
      'Organizational Development Advising'
    ]
  },
  {
    id: '05',
    slug: 'taxation',
    title: 'Taxation Services',
    icon: Receipt,
    shortDescription: 'End-to-end direct and indirect tax planning, compliance, and representation before appellate authorities.',
    features: [
      'Income Tax & GST Audit Consultancy',
      'Transfer Pricing Studies & Certification',
      'Withholding Taxation (DTAA)',
      'Tax Representation & Appeals',
      'Income Tax Planning'
    ]
  },
  {
    id: '06',
    slug: 'other-services',
    title: 'Other Advisory Services',
    icon: Briefcase,
    shortDescription: 'Tailored solutions including trust formation, statutory registrations, and corporate training.',
    features: [
      'Corporate Training',
      'Statutory Registrations',
      'Trust and Society Formation',
      'Preparation of Agreements and MOUs',
      'Consultancy for Organizational Policy'
    ]
  }
];