export const profile = {
  name: "Oluwasanmi Owoka",
  title: "Backend Engineer",
  tagline:
    "I design and maintain production backend systems for fintech and marketplace products — customer account infrastructure, payment systems, and automated financial workflows.",
  bio: "Backend engineer with 5+ years building and maintaining production-grade systems in Python, Django, Django REST Framework, Node.js, and Express. I spend most of my time on API infrastructure, authorization workflows, and the unglamorous reliability work that keeps financial systems correct — things like customer lifecycle and account-control systems (mandates, liens, restrictions), maker-checker approval flows, and automated savings engines. I work well in Agile teams, I'm comfortable navigating codebases I didn't write, and I care about test coverage and clean deploys as much as shipping features.",
  location: "Nigeria",
  email: "owokaayoola@outlook.com",
  links: {
    github: "https://github.com/Sanmi-Owoka",
    linkedin: "https://www.linkedin.com/in/oluwasanmi-owoka/",
    email: "mailto:owokaayoola@outlook.com",
  },
  available: true,
  currentRole: { company: "Peerless", title: "Backend Engineer" },
  previousRole: { company: "Herconomy", title: "Backend Engineer" },
};

export const skills = {
  "Languages & Frameworks": [
    "Python",
    "Django",
    "Django REST Framework",
    "Pydantic",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "NestJS",
  ],
  "Data & Messaging": [
    "PostgreSQL",
    "Sequelize",
    "TypeORM",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "Apache Kafka",
    "RabbitMQ",
    "Celery",
  ],
  "Cloud & DevOps": ["Docker", "AWS (EC2, S3, Textract)", "GitHub Actions", "SonarQube"],
  "Practices": [
    "Agile / Scrum",
    "OpenAPI / Swagger",
    "Maker-Checker & Audit Systems",
    "Jest & Pytest",
    "Git & Code Review",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Peerless",
    role: "Backend Engineer",
    period: "Feb 2024 — Present",
    summary:
      "Core contributor to a multi-tenant core banking platform deployed across several banks and fintechs — covering customer lifecycle, account controls, and the event-driven systems that keep them in sync.",
    highlights: [
      "Core contributor (#3 of 60+ contributors) to the customer management service of a multi-tenant core banking platform used by several banks and fintechs.",
      "Built maker-checker workflows with segregation of duties, department- and branch-scoped approvals, and audit trails that record previous values across 10+ request types.",
      "Delivered core-banking account controls: mandates and signatories, liens, restrictions, stop-cheque (with charge and tax journal posting), withdrawal thresholds, and obligor limits.",
      "Implemented account closure with automated balance transfer and interest/earnings calculation, integrated with the core banking system's transfer and journal APIs.",
      "Set up a Customer 360 service from scratch (NestJS, TypeORM, Redis), powering ops dashboards and channel lookup APIs by BVN, NIN, phone number, and account number.",
      "Built bulk pipelines for customer migration, restrictions, and account-officer reassignment, with query and upload optimizations for large files.",
      "Shipped joint, corporate (beneficial-owner), and custodial-minor onboarding, including an automated job that hands accounts over when a minor comes of age.",
      "Built event-driven integrations on Kafka — producers for customer and account events, consumers for notifications — and migrated a Django service's background jobs from Celery to Kafka.",
    ],
    stack: ["Node.js", "Express.js", "NestJS", "TypeScript", "Python", "Django REST Framework", "PostgreSQL", "Kafka", "Redis", "Docker"],
  },
  {
    company: "Herconomy",
    role: "Backend Engineer",
    period: "Feb 2022 — Feb 2024",
    summary:
      "Built core savings and fintech infrastructure for a financial platform aimed at helping users and families save toward specific goals.",
    highlights: [
      "Built a referral system with the Product Marketing team to drive customer acquisition through referral codes and bonuses.",
      "Built a fast PDF generation system for user account statements, tracking transactions and balances.",
      "Engineered a goal-based savings feature so users could save toward specific financial targets.",
      "Built a wallet system that lets parents save for their children's future.",
      "Developed an automated piggy-bank feature with scheduled deposits and withdrawals to encourage disciplined saving.",
      "Used Python for data scraping and analysis tasks, and Docker for environment setup.",
    ],
    stack: ["Node.js", "Express.js", "Python", "Django", "Django REST Framework", "Docker", "Git", "RabbitMQ", "AWS EC2", "AWS S3"],
  },
  {
    company: "Decagon Labs",
    role: "Backend Engineer",
    period: "Jun 2021 — Jan 2022",
    summary:
      "Worked across multiple outsourced client products, building end-to-end flows for food delivery, healthcare booking, and fintech wallets.",
    highlights: [
      "Designed, developed, and tested end-to-end flows for subscription services, account tiering, ordering, and notifications in a client's food delivery app.",
      "Built cross-platform APIs for a booking system enabling seamless scheduling between patients and healthcare providers.",
      "Developed a basic fintech wallet system supporting saving and in-app transfers.",
      "Used Python web scraping to analyze the most frequently used words across an application for data-driven insight.",
    ],
    stack: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  {
    company: "Josla Electric Company Ltd.",
    role: "Backend Engineer (Intern)",
    period: "May 2020 — Jun 2021",
    summary:
      "First production engineering role — built the backend for an enterprise electricity management and usage-tracking tool.",
    highlights: [
      "Designed and built the complete backend for an enterprise electricity management tool, tracking users' electrical usage and data.",
      "Integrated third-party APIs to streamline ordering and payment processes.",
      "Worked closely with the design team to translate user requirements into technical solutions.",
    ],
    stack: ["Python", "Django"],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  status: "Live" | "Internal" | "Client Project";
};

export const projects: Project[] = [
  {
    slug: "core-banking-customer-accounts",
    name: "Core Banking — Customer & Account Management",
    category: "Core Banking / Fintech",
    description:
      "Customer lifecycle and account-control systems for a multi-tenant core banking platform deployed across several banks and fintechs — onboarding (individual, SME, corporate, joint), KYC/BVN checks, mandates, liens, restrictions, stop-cheque, withdrawal thresholds, obligor limits, and bulk customer/account migration pipelines.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "Redis", "Kafka", "AWS S3", "Docker"],
    status: "Internal",
  },
  {
    slug: "customer-360",
    name: "Customer 360 Service",
    category: "Core Banking / Internal Tooling",
    description:
      "Greenfield service built from scratch giving operations and support teams a unified view of a customer's accounts, mandates, and restrictions, plus channel lookup APIs by BVN, NIN, phone number, and account number.",
    stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Redis", "Swagger", "Docker"],
    status: "Internal",
  },
  {
    slug: "notification-service",
    name: "Notification Service",
    category: "Core Banking / Messaging",
    description:
      "Event-driven transactional notifications — lien placement, investment booking/maturity/liquidation, loan repayment, annual fees, and birthday emails — consumed from Kafka and rendered across multiple currencies.",
    stack: ["Node.js", "TypeScript", "Kafka", "TypeORM", "Handlebars"],
    status: "Internal",
  },
  {
    slug: "dinma-api",
    name: "Dinma API",
    category: "Healthcare / Booking",
    description:
      "A Django-based health services booking system connecting patients with healthcare providers. Patients sign up, search for providers, and book appointments; providers manage schedules and patient interactions.",
    stack: ["Django", "Django REST Framework", "Node.js", "Express.js", "Python"],
    link: "https://dinma-web.netlify.app/",
    linkLabel: "View Live",
    status: "Live",
  },
  {
    slug: "hitchpay",
    name: "Hitchpay",
    category: "Fintech",
    description:
      "Backend development for a fintech application handling core financial operations, built for reliability and data accuracy under real transaction volume.",
    stack: ["Express.js", "Python", "Django", "Django REST Framework"],
    link: "https://www.hitchpay.ng/",
    linkLabel: "View Live",
    status: "Live",
  },
  {
    slug: "troo",
    name: "Troo (TrooHQ)",
    category: "Retail / POS Platform",
    description:
      "A multi-branch retail and restaurant management platform. Worked on backend systems for branch operations, self-checkout, menu and order management, employee roles and permissions, subscription plans, and TrooPay — a dedicated payments middleware integrating Paystack and Flutterwave.",
    stack: ["Node.js", "Express.js", "MongoDB", "Django", "Paystack", "Flutterwave", "Docker"],
    link: "https://troohq.com/",
    linkLabel: "View Live",
    status: "Live",
  },
  {
    slug: "herconomy-platform",
    name: "Herconomy Savings Platform",
    category: "Fintech / Savings",
    description:
      "Core savings infrastructure for a consumer fintech platform: goal-based savings, an automated piggy-bank engine with scheduled deposits, a family wallet system, and a referral engine tied to acquisition bonuses.",
    stack: ["Django", "Django REST Framework", "Node.js", "Express.js", "RabbitMQ", "Docker"],
    link: "https://herconomy.com/",
    linkLabel: "View Live",
    status: "Live",
  },
];
