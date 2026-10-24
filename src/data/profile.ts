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
    "Node.js",
    "Express.js",
  ],
  "Data & Messaging": ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Celery"],
  "Infrastructure": ["Docker", "AWS (EC2, S3)", "Git & GitHub", "CI/CD"],
  "Process": ["Agile / Scrum", "API Design", "Test Coverage", "Code Review"],
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
      "Work on customer management and Customer 360 — the systems that handle a customer's full lifecycle and the account-level controls placed on them.",
    highlights: [
      "Own the customer management module covering the full customer lifecycle: creation, modification, deactivation, and reactivation of customer records.",
      "Enforce validation, authorization, and audit trails at each lifecycle state change to keep customer data accurate and traceable.",
      "Build and maintain Customer 360, giving support and operations teams a unified view of a customer's accounts and the controls placed on them.",
      "Implement mandate setup, allowing account-level permissions and standing instructions to be configured per customer.",
      "Implement lien placement, enabling funds on an account to be held or restricted against withdrawal when required.",
      "Implement account restriction placement, controlling what actions a customer can perform on their account.",
      "Managed Dockerized environments and Git-based deployments for feature development.",
      "Performed end-to-end API testing and resolved user-reported bugs to keep system quality high.",
    ],
    stack: ["Node.js", "Express.js", "Python", "Django", "Django REST Framework", "Docker", "Celery"],
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
