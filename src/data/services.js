// src/data/services.js
import { 
  Calculator, FileSearch, Building, LineChart, Receipt, Briefcase, 
  ShieldCheck, Globe, Scale, Zap, PieChart, Users 
} from 'lucide-react';

export const servicesData = [
  {
    id: '01',
    slug: 'accounts-outsourcing',
    title: 'Accounts Outsourcing & Payroll',
    icon: Calculator,
    shortDescription: 'End-to-end financial management for startups and established enterprises.',
    longDescription: `In today's fast-paced business environment, maintaining a dedicated in-house accounts department can be resource-intensive. BKK & Associates provides a virtual back-office for all your accounting needs, ensuring that your books are always 'audit-ready'. Our team leverages modern cloud accounting software to provide real-time visibility into your cash flow.`,
    benefits: [
      { title: 'Cost Efficiency', desc: 'Reduce overhead costs by up to 40% compared to a full-time in-house team.', icon: Zap },
      { title: 'Data Security', desc: 'We use encrypted cloud environments to ensure your financial data is never compromised.', icon: ShieldCheck },
      { title: 'Expert Oversight', desc: 'Every entry is reviewed by a qualified CA to ensure 100% accuracy.', icon: Users }
    ],
    features: [
      {
        title: 'Day-to-day Bookkeeping & Accounting',
        desc: 'Recording daily transactions, journal entries, ledgers, bank reconciliation, and maintaining accurate books of accounts as per accounting standards.'
      },
      {
        title: 'Monthly MIS Reporting & Analysis',
        desc: 'Preparation of monthly financial statements, ratio analysis, and management reports to monitor business performance.'
      },
      {
        title: 'Payroll Processing & TDS Compliance',
        desc: 'Salary processing, payslips, PF, ESI, PT, TDS calculation, and filing of payroll related returns.'
      },
      {
        title: 'Fixed Asset Register Maintenance',
        desc: 'Maintaining asset register, depreciation calculation, and compliance with Income Tax and Companies Act.'
      },
      {
        title: 'Inventory Accounting & Reconciliation',
        desc: 'Stock valuation, inventory reconciliation, and cost tracking for accurate profit calculation.'
      },
      {
        title: 'Accounts Payable / Receivable Management',
        desc: 'Tracking customer balances, vendor payments, ageing reports, and cash flow control.'
      }
    ],
    process: [
      { step: 'Onboarding', detail: 'We analyze your current accounting workflow and software.' },
      { step: 'Execution', detail: 'Daily/Weekly processing of transactions and payroll.' },
      { step: 'Reporting', detail: 'Delivery of MIS reports and statutory compliance filings.' }
    ],
    faqs: [
      { q: 'Why should I outsource my accounting?', a: 'Outsourcing allows you to focus on core business growth while ensuring that experts handle your compliance and financial accuracy.' },
      { q: 'Which software do you use?', a: 'We are proficient in Tally, QuickBooks, Zoho Books, and SAP B1.' }
    ],
    industries: [
      'Manufacturing',
      'IT Companies',
      'Startups',
      'Traders',
      'Real Estate',
      'NGO',
      'Professionals'
    ],
  },
  {
    id: '02',
    slug: 'auditing-and-attest',
    title: 'Auditing & Assurance Services',
    icon: FileSearch,
    shortDescription: 'Statutory, Internal, and Forensic audits to ensure transparency and trust.',
    longDescription: 'Audit is not just a regulatory requirement; it is a tool for business improvement. At BKK & Associates, our audit methodology is designed to identify operational bottlenecks and financial risks before they become liabilities. We provide an independent, objective perspective that adds value to your stakeholders.',
    benefits: [
      { title: 'Compliance', desc: 'Full adherence to Companies Act 2013 and ICAI Standards.', icon: Scale },
      { title: 'Risk Mitigation', desc: 'Early detection of fraud, leakages, and inefficiencies.', icon: ShieldCheck },
      { title: 'Stakeholder Trust', desc: 'Build credibility with banks, investors, and vendors.', icon: Globe }
    ],
features: [
  {
    title: 'Statutory Audit under Companies Act',
    desc: 'Conducting statutory audit as per Companies Act 2013 and ICAI standards to ensure true and fair view of financial statements.'
  },
  {
    title: 'Tax Audit under Income Tax Act',
    desc: 'Tax audit under section 44AB including verification of books, compliance, and reporting in prescribed formats.'
  },
  {
    title: 'Internal & Operational Audits',
    desc: 'Review of internal controls, operational efficiency, and risk management systems to improve business performance.'
  },
  {
    title: 'Forensic Audit & Fraud Investigation',
    desc: 'Investigation of financial irregularities, fraud detection, and preparation of forensic audit reports.'
  },
  {
    title: 'Management & Stock Audits',
    desc: 'Verification of stock, assets, and management records to ensure accuracy and control.'
  },
  {
    title: 'Certification & Attestation Functions',
    desc: 'Issuing certificates required for banks, government authorities, and regulatory compliance.'
  }
],
    process: [
      { step: 'Planning', detail: 'Defining the scope and identifying high-risk areas.' },
      { step: 'Fieldwork', detail: 'Verifying vouchers, balances, and internal controls.' },
      { step: 'Conclusion', detail: 'Issuing the Audit Report and Management Letter.' }
    ],
    faqs: [
      { q: 'Is internal audit mandatory?', a: 'Internal audit is mandatory for certain classes of companies under Section 138, but it is recommended for all growing businesses.' }
    ],
    industries: [
      'Manufacturing',
      'IT Companies',
      'Startups',
      'Traders',
      'Real Estate',
      'NGO',
      'Professionals'
    ],
  },
  {
    id: '03',
    slug: 'company-formation',
    title: 'Company Formation & Corporate Law',
    icon: Building,
    shortDescription: 'Business registration, ROC compliance, and corporate advisory for startups and growing companies.',
    longDescription: `Starting a business in India requires proper legal structuring, registrations, and ongoing compliance under the Companies Act, LLP Act, and other laws. BKK & Associates provides complete support from company incorporation to post-registration compliance, ensuring that your business remains legally compliant and investor-ready.`,

    benefits: [
      {
        title: 'Correct Structure',
        desc: 'Choose the right entity: Pvt Ltd, LLP, OPC, Partnership, or Proprietorship.',
        icon: Scale
      },
      {
        title: 'Fast Registration',
        desc: 'Quick incorporation with MCA, PAN, TAN, GST, and bank setup.',
        icon: Zap
      },
      {
        title: 'Compliance Support',
        desc: 'We handle ROC filings, board resolutions, and annual returns.',
        icon: ShieldCheck
      }
    ],

    features: [
  {
    title: 'Private Limited Company Registration',
    desc: 'Complete incorporation of private limited company including MCA filing, PAN, TAN, and bank account setup.'
  },
  {
    title: 'LLP Registration',
    desc: 'Formation of Limited Liability Partnership with proper documentation and compliance.'
  },
  {
    title: 'OPC Registration',
    desc: 'Registration of One Person Company suitable for single entrepreneurs.'
  },
  {
    title: 'Partnership & Firm Registration',
    desc: 'Drafting partnership deed and registration with registrar of firms.'
  },
  {
    title: 'Startup India Registration',
    desc: 'DPIIT registration for startup benefits including tax exemptions.'
  },
  {
    title: 'ROC Annual Compliance',
    desc: 'Filing annual returns, financial statements, and director KYC with MCA.'
  },
  {
    title: 'Director KYC & DIN Services',
    desc: 'Director identification number and KYC compliance services.'
  },
  {
    title: 'Share Transfer & Allotment',
    desc: 'Documentation and filing for share transfer and issue of shares.'
  },
  {
    title: 'MCA Filing & Returns',
    desc: 'All company law filings including forms, resolutions, and reports.'
  }
],

    process: [
      { step: 'Consultation', detail: 'Understanding your business model and choosing structure.' },
      { step: 'Registration', detail: 'Filing SPICe+, PAN, TAN, GST, and incorporation forms.' },
      { step: 'Post Compliance', detail: 'ROC filings, annual returns, and board documentation.' }
    ],

    faqs: [
      {
        q: 'Which is better LLP or Pvt Ltd?',
        a: 'It depends on funding plans, liability, and compliance needs. We help choose the best structure.'
      },
      {
        q: 'How many days for company registration?',
        a: 'Usually 5-10 working days if documents are ready.'
      }
    ],

    industries: [
      'Manufacturing',
      'IT Companies',
      'Startups',
      'Traders',
      'Real Estate',
      'NGO',
      'Professionals'
    ],
  },
  {
    id: '04',
    slug: 'management-consultancy',
    title: 'Management Consultancy & MIS',
    icon: LineChart,
    shortDescription: 'Financial planning, MIS reporting, and business strategy consulting.',
    longDescription: `Strong financial planning and management reporting are essential for business growth. Our consultancy services help business owners understand profitability, cost control, and future planning through detailed MIS reports, budgeting, and performance analysis.`,

    benefits: [
      {
        title: 'Better Decisions',
        desc: 'Accurate MIS reports help management take informed decisions.',
        icon: PieChart
      },
      {
        title: 'Cost Control',
        desc: 'Identify wasteful expenses and improve profit margins.',
        icon: Zap
      },
      {
        title: 'Growth Planning',
        desc: 'Financial forecasting for expansion and funding.',
        icon: Globe
      }
    ],

    features: [
  {
    title: 'MIS Reporting',
    desc: 'Preparation of management reports including profit, cost, and performance analysis.'
  },
  {
    title: 'Budget & Forecasting',
    desc: 'Financial planning, budgeting, and forecasting for future growth.'
  },
  {
    title: 'Costing System Design',
    desc: 'Designing costing methods to track product and service profitability.'
  },
  {
    title: 'Financial Analysis',
    desc: 'Ratio analysis, trend analysis, and performance evaluation.'
  },
  {
    title: 'Cash Flow Planning',
    desc: 'Planning inflow and outflow to maintain liquidity.'
  },
  {
    title: 'Business Policy Advisory',
    desc: 'Guidance on internal policies and financial controls.'
  },
  {
    title: 'Performance Review Reports',
    desc: 'Periodic review reports for management decision making.'
  }
],

    process: [
      { step: 'Data Collection', detail: 'Understanding business operations and finances.' },
      { step: 'Analysis', detail: 'Preparing MIS, ratios, and projections.' },
      { step: 'Advisory', detail: 'Providing strategy and improvement plan.' }
    ],

    faqs: [
      {
        q: 'What is MIS reporting?',
        a: 'MIS reports give management insights into profit, cost, and performance.'
      }
    ],

    industries: [
      'Manufacturing',
      'IT Companies',
      'Startups',
      'Traders',
      'Real Estate',
      'NGO',
      'Professionals'
    ],
  },
  {
    id: '05',
    slug: 'taxation',
    title: 'Taxation Services (Income Tax & GST)',
    icon: Receipt,
    shortDescription: 'Complete tax planning, GST, income tax filing, audit, and representation.',
    longDescription: `Tax compliance in India involves multiple laws including Income Tax, GST, TDS, and international taxation. BKK & Associates provides end-to-end taxation services including planning, filing, audits, and representation before authorities to ensure minimum tax liability and full compliance.`,

    benefits: [
      {
        title: 'Tax Saving',
        desc: 'Proper planning reduces unnecessary tax burden.',
        icon: PieChart
      },
      {
        title: 'Full Compliance',
        desc: 'Avoid penalties and notices from IT and GST department.',
        icon: ShieldCheck
      },
      {
        title: 'Expert Representation',
        desc: 'We represent clients before tax authorities.',
        icon: Scale
      }
    ],
    features: [
      {
        title: 'Income Tax Return Filing',
        desc: 'Preparation and filing of income tax returns for individuals, firms, companies, and NRIs with proper tax planning.'
      },
      {
        title: 'GST Registration & Filing',
        desc: 'GST registration, monthly return filing, reconciliation, and compliance support.'
      },
      {
        title: 'GST Audit',
        desc: 'GST audit, reconciliation of GSTR-1, GSTR-3B, and books of accounts.'
      },
      {
        title: 'Tax Audit u/s 44AB',
        desc: 'Tax audit for businesses and professionals as per Income Tax Act.'
      },
      {
        title: 'TDS Return Filing',
        desc: 'Quarterly TDS return filing, correction, and compliance.'
      },
      {
        title: 'Appeals & Notices',
        desc: 'Handling income tax notices, scrutiny, and appeals before authorities.'
      },
      {
        title: 'Transfer Pricing',
        desc: 'Transfer pricing study, documentation, and certification.'
      },
      {
        title: 'International Taxation',
        desc: 'DTAA, FEMA, and cross-border tax advisory.'
      },
      {
        title: 'DTAA Consultancy',
        desc: 'Avoid double taxation with proper treaty planning.'
      }
    ],
    process: [
      { step: 'Review', detail: 'Checking books and tax applicability.' },
      { step: 'Planning', detail: 'Applying deductions and exemptions.' },
      { step: 'Filing', detail: 'Return filing and compliance.' },
      { step: 'Support', detail: 'Handling notices and assessments.' }
    ],

    faqs: [
      {
        q: 'Do you handle GST notices?',
        a: 'Yes, we handle GST, Income Tax, and TDS notices.'
      },
      {
        q: 'Can you reduce tax legally?',
        a: 'Yes, through proper tax planning and deductions.'
      }
    ],

    industries: [
      'Manufacturing',
      'IT Companies',
      'Startups',
      'Traders',
      'Real Estate',
      'NGO',
      'Professionals'
    ],
  },
  {
    id: '06',
    slug: 'other-services',
    title: 'Other Advisory Services',
    icon: Briefcase,
    shortDescription: 'Registrations, agreements, trust formation, and corporate advisory.',
    longDescription: `Apart from core accounting and taxation, businesses require multiple registrations, agreements, and advisory support. We provide professional assistance in legal documentation, statutory registrations, trust formation, and policy consulting.`,

    benefits: [
      {
        title: 'One Stop Solution',
        desc: 'All professional services under one roof.',
        icon: Globe
      },
      {
        title: 'Legal Safety',
        desc: 'Proper documentation avoids disputes.',
        icon: ShieldCheck
      },
      {
        title: 'Professional Drafting',
        desc: 'Agreements prepared by experts.',
        icon: Scale
      }
    ],

    features: [
  {
    title: 'Trust Registration',
    desc: 'Formation and registration of charitable trusts with legal documentation.'
  },
  {
    title: 'Society Registration',
    desc: 'Registration of societies under applicable laws.'
  },
  {
    title: 'NGO Registration',
    desc: 'Complete NGO registration including trust, society, and section 8 company.'
  },
  {
    title: 'Partnership Deed',
    desc: 'Drafting and registration of partnership agreements.'
  },
  {
    title: 'MOUs & Agreements',
    desc: 'Preparation of legal agreements, MOUs, and contracts.'
  },
  {
    title: 'Professional Certification',
    desc: 'Certificates required for banks, tenders, and authorities.'
  },
  {
    title: 'Statutory Registrations',
    desc: 'PAN, TAN, GST, PF, ESI, and other registrations.'
  },
  {
    title: 'Corporate Training',
    desc: 'Training programs on finance, taxation, and compliance.'
  }
],

    process: [
      { step: 'Requirement', detail: 'Understanding legal need.' },
      { step: 'Drafting', detail: 'Preparing documents.' },
      { step: 'Registration', detail: 'Filing with authorities.' }
    ],

    faqs: [
      {
        q: 'Do you prepare agreements?',
        a: 'Yes, we draft MOUs, partnership deeds, and legal agreements.'
      }
    ]
  },
  {
    id: '07',
    slug: 'gst-consultancy',
    title: 'GST Consultancy Services',
    icon: Receipt,
    shortDescription: 'GST registration, filing, audit, and notices handling.',

    longDescription: `GST compliance requires timely filing, proper classification, and correct input credit usage. Our GST consultancy services help businesses avoid penalties and maintain full compliance.`,

    benefits: [
      {
        title: 'Avoid Penalties',
        desc: 'Timely GST filing and compliance.',
        icon: ShieldCheck
      },
      {
        title: 'Correct ITC',
        desc: 'Maximize input tax credit.',
        icon: PieChart
      },
      {
        title: 'Notice Handling',
        desc: 'We reply to GST notices.',
        icon: Scale
      }
    ],

    features: [
  {
    title: 'GST Registration',
    desc: 'New GST registration for businesses and professionals.'
  },
  {
    title: 'GST Return Filing',
    desc: 'Monthly and annual GST return preparation and filing.'
  },
  {
    title: 'GST Audit',
    desc: 'GST reconciliation and audit support.'
  },
  {
    title: 'GST Notices',
    desc: 'Reply to GST notices and departmental queries.'
  },
  {
    title: 'GST Refund',
    desc: 'Processing refund claims for exporters and others.'
  },
  {
    title: 'GST Advisory',
    desc: 'Consultancy on GST rules and classification.'
  },
  {
    title: 'GST LUT',
    desc: 'LUT filing for exporters.'
  },
  {
    title: 'GST Annual Return',
    desc: 'Preparation and filing of GSTR-9 / 9C.'
  }
],

    process: [
      { step: 'Registration', detail: 'GST number creation' },
      { step: 'Monthly Filing', detail: 'Return preparation' },
      { step: 'Audit & Notices', detail: 'Support & replies' }
    ],

    faqs: [
      {
        q: 'Who needs GST?',
        a: 'Businesses crossing threshold or interstate supply.'
      }
    ]
  },
{
  id: '08',
  slug: 'nri-services',
  title: 'NRI Taxation & FEMA Services',
  icon: Globe,
  shortDescription: 'Tax, FEMA, and compliance services for NRIs.',

  longDescription: `NRIs need special compliance under FEMA and Income Tax. We provide taxation, property, and investment advisory for non-resident clients.`,

  benefits: [
    {
      title: 'FEMA Compliance',
      desc: 'RBI rules followed',
      icon: ShieldCheck
    },
    {
      title: 'Tax Planning',
      desc: 'Avoid double tax',
      icon: PieChart
    },
    {
      title: 'Property Advisory',
      desc: 'Sale / purchase support',
      icon: Scale
    }
  ],

  features: [
  {
    title: 'NRI Income Tax Filing',
    desc: 'Income tax return for non-resident individuals.'
  },
  {
    title: 'FEMA Compliance',
    desc: 'Compliance with RBI and FEMA regulations.'
  },
  {
    title: 'DTAA Consultancy',
    desc: 'Avoid double taxation using treaty benefits.'
  },
  {
    title: 'Property Sale Tax',
    desc: 'Capital gain calculation for NRI property sale.'
  },
  {
    title: 'TDS for NRI',
    desc: 'TDS compliance on NRI transactions.'
  },
  {
    title: 'Investment Advisory',
    desc: 'Guidance on investment in India.'
  }
],

  process: [
    { step: 'Review', detail: 'Check NRI status' },
    { step: 'Planning', detail: 'Apply DTAA' },
    { step: 'Filing', detail: 'Return filing' }
  ],

  faqs: [
    {
      q: 'Do NRIs pay tax in India?',
      a: 'Only for income earned in India.'
    }
  ]
},
{
  id: '09',
  slug: 'startup-services',
  title: 'Startup Advisory Services',
  icon: Zap,
  shortDescription: 'Complete support for startups from idea to funding.',

  longDescription: `We help startups with company registration, funding, compliance, and tax planning.`,

  benefits: [
    {
      title: 'Fast Setup',
      desc: 'Quick company registration',
      icon: Zap
    },
    {
      title: 'Funding Ready',
      desc: 'Investor documentation',
      icon: PieChart
    },
    {
      title: 'Compliance Safe',
      desc: 'ROC & GST handled',
      icon: ShieldCheck
    }
  ],

  features: [
  {
    title: 'Startup Registration',
    desc: 'Company incorporation for startups.'
  },
  {
    title: 'DPIIT Registration',
    desc: 'Startup India benefits registration.'
  },
  {
    title: 'Pitch Deck Support',
    desc: 'Preparation of investor presentation.'
  },
  {
    title: 'Financial Projection',
    desc: 'Future financial planning for funding.'
  },
  {
    title: 'ROC Compliance',
    desc: 'Company law compliance.'
  },
  {
    title: 'GST & Tax',
    desc: 'Complete tax support.'
  }
],

  process: [
    { step: 'Idea', detail: 'Business structure' },
    { step: 'Register', detail: 'Company formation' },
    { step: 'Grow', detail: 'Funding support' }
  ],

  faqs: [
    {
      q: 'Can you help with funding?',
      a: 'Yes, projections & reports provided.'
    }
  ]
},
{
  id: '10',
  slug: 'project-finance',
  title: 'Project Finance & Loan Consultancy',
  icon: PieChart,
  shortDescription: 'Loan, CMA report, and project report services.',

  longDescription: `We prepare CMA data, project reports, and financial projections for bank loans and funding.`,

  benefits: [
    {
      title: 'Bank Approval',
      desc: 'Professional reports',
      icon: ShieldCheck
    },
    {
      title: 'Accurate Projection',
      desc: 'Realistic planning',
      icon: PieChart
    },
    {
      title: 'Funding Support',
      desc: 'Loan assistance',
      icon: Globe
    }
  ],

  features: [
  {
    title: 'CMA Data',
    desc: 'Preparation of CMA data for bank loans.'
  },
  {
    title: 'Project Report',
    desc: 'Detailed project report for funding.'
  },
  {
    title: 'Bank Loan Support',
    desc: 'Documentation for loan approval.'
  },
  {
    title: 'Financial Projection',
    desc: 'Projected profit and cash flow.'
  },
  {
    title: 'DSCR Calculation',
    desc: 'Debt service coverage ratio preparation.'
  },
  {
    title: 'Working Capital',
    desc: 'Working capital assessment.'
  }
],

  process: [
    { step: 'Data', detail: 'Collect details' },
    { step: 'Report', detail: 'Prepare CMA' },
    { step: 'Submit', detail: 'Bank support' }
  ],

  faqs: [
    {
      q: 'What is CMA?',
      a: 'Bank financial report for loan.'
    }
  ]
},
];