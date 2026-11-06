from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    Table,
    TableStyle,
    KeepTogether,
)
from reportlab.lib import colors

OUT = "/Users/ayoolaowoka/Documents/Projects/PORTFOLIO/public/resume.pdf"

doc = SimpleDocTemplate(
    OUT,
    pagesize=letter,
    leftMargin=0.68 * inch,
    rightMargin=0.68 * inch,
    topMargin=0.28 * inch,
    bottomMargin=0.28 * inch,
    title="Oluwasanmi Owoka - Resume",
    author="Oluwasanmi Owoka",
)

NAVY = colors.HexColor("#1a3a5c")
NAVY_SOFT = colors.HexColor("#6c86a0")

styles = {
    "name": ParagraphStyle(
        "name", fontName="Helvetica-Bold", fontSize=21, leading=24,
        tracking=1, alignment=TA_LEFT, spaceAfter=1,
    ),
    "subtitle": ParagraphStyle(
        "subtitle", fontName="Helvetica-Bold", fontSize=10.5, leading=13,
        textColor=NAVY, spaceAfter=4,
    ),
    "contact": ParagraphStyle(
        "contact", fontName="Helvetica", fontSize=10, leading=13,
        textColor=colors.HexColor("#333333"), spaceAfter=9,
    ),
    "section": ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=11.3, leading=13.5,
        spaceBefore=4, spaceAfter=1.6, textColor=NAVY,
    ),
    "competency": ParagraphStyle(
        "competency", fontName="Helvetica", fontSize=9.3, leading=13,
        textColor=colors.HexColor("#1a1a1a"),
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=9.3, leading=12,
        spaceAfter=2.5, textColor=colors.HexColor("#1a1a1a"),
    ),
    "jobtitle": ParagraphStyle(
        "jobtitle", fontName="Helvetica-Bold", fontSize=11, leading=14,
    ),
    "jobrole": ParagraphStyle(
        "jobrole", fontName="Helvetica-Oblique", fontSize=10, leading=13,
        textColor=colors.HexColor("#333333"),
    ),
    "jobdate": ParagraphStyle(
        "jobdate", fontName="Helvetica", fontSize=9.5, leading=12,
        textColor=colors.HexColor("#555555"), alignment=2,
    ),
    "bullet": ParagraphStyle(
        "bullet", fontName="Helvetica", fontSize=9, leading=11.3,
        textColor=colors.HexColor("#1a1a1a"),
        leftIndent=13, firstLineIndent=-13, spaceAfter=1.7,
    ),
    "tech": ParagraphStyle(
        "tech", fontName="Helvetica-Bold", fontSize=8.8, leading=11.3,
        textColor=colors.HexColor("#333333"), spaceBefore=1.6,
    ),
    "projecttitle": ParagraphStyle(
        "projecttitle", fontName="Helvetica-Bold", fontSize=10.5, leading=13.5,
    ),
    "projectdesc": ParagraphStyle(
        "projectdesc", fontName="Helvetica", fontSize=9, leading=11.3,
        textColor=colors.HexColor("#1a1a1a"), spaceAfter=1.7,
    ),
    "link": ParagraphStyle(
        "link", fontName="Helvetica", fontSize=9.3, leading=12.8,
        textColor=NAVY,
    ),
    "jobscope": ParagraphStyle(
        "jobscope", fontName="Helvetica-Oblique", fontSize=9, leading=12,
        textColor=colors.HexColor("#444444"), spaceAfter=4,
    ),
}

story = []

# --- Header ---
story.append(Paragraph("OLUWASANMI AYOOLA OWOKA", styles["name"]))
story.append(Paragraph("Backend Engineer — Core Banking &amp; Fintech Infrastructure", styles["subtitle"]))
story.append(Paragraph(
    "owokaayoola@outlook.com &nbsp;&bull;&nbsp; +2348106387865 &nbsp;&bull;&nbsp; "
    "github.com/Sanmi-Owoka &nbsp;&bull;&nbsp; linkedin.com/in/oluwasanmi-owoka &nbsp;&bull;&nbsp; "
    "oluwasanmiowoka.vercel.app",
    styles["contact"],
))
story.append(HRFlowable(width="100%", thickness=1.4, color=NAVY))

def section(title):
    story.append(Paragraph(f"•&nbsp; {title}", styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.6, color=NAVY_SOFT))
    story.append(Spacer(1, 5))

def bullets(items):
    for i in items:
        story.append(Paragraph(f"•&nbsp;&nbsp;{i}", styles["bullet"]))

def job_scope(text):
    story.append(Paragraph(text, styles["jobscope"]))

# Available text width given the page's left/right margins — used to size
# tables to the full line width so ReportLab's default table centering
# (hAlign="CENTER") can't introduce a left-edge offset.
PAGE_WIDTH = doc.width

def job_header(company, role, period):
    t = Table(
        [[Paragraph(company, styles["jobtitle"]), Paragraph(period, styles["jobdate"])],
         [Paragraph(role, styles["jobrole"]), ""]],
        colWidths=[PAGE_WIDTH - 2.0 * inch, 2.0 * inch],
    )
    t.hAlign = "LEFT"
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(t)
    story.append(Spacer(1, 2.6))

# --- Summary ---
section("SUMMARY")
story.append(Paragraph(
    "Backend engineer with 5+ years building and scaling production fintech systems — currently "
    "a core contributor to a multi-tenant core banking platform used by several banks and "
    "fintechs. Strong track record owning services end-to-end, from greenfield builds to "
    "maker-checker controls and event-driven integrations, with a focus on reliability, test "
    "coverage, and clean deploys.",
    styles["body"],
))

# --- Core Competencies ---
section("CORE COMPETENCIES")
competencies = [
    "Core Banking & Fintech Systems",
    "Event-Driven Architecture (Kafka)",
    "Maker-Checker & Audit Controls",
    "Multi-Tenant SaaS Platforms",
    "RESTful API Design & Integration",
    "Database Design (PostgreSQL, MongoDB)",
    "CI/CD & DevOps (Docker, GitHub Actions)",
    "Agile Delivery & Cross-Team Collaboration",
]
_comp_rows = []
for i in range(0, len(competencies), 2):
    pair = competencies[i:i + 2]
    row = [Paragraph(f"•&nbsp; {pair[0]}", styles["competency"])]
    row.append(Paragraph(f"•&nbsp; {pair[1]}", styles["competency"]) if len(pair) > 1 else "")
    _comp_rows.append(row)
_comp_table = Table(_comp_rows, colWidths=[PAGE_WIDTH / 2, PAGE_WIDTH / 2])
_comp_table.hAlign = "LEFT"
_comp_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("TOPPADDING", (0, 0), (-1, -1), 1),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
]))
story.append(_comp_table)
story.append(Spacer(1, 3))

# --- Skills ---
section("SKILLS AND TECHNOLOGIES")
skills_rows = [
    ("Languages & Frameworks:", "Python, Django, Django REST Framework, Pydantic, JavaScript, "
               "TypeScript, Node.js, Express.js, NestJS."),
    ("Data & Messaging:", "PostgreSQL, Sequelize, TypeORM, MongoDB, Redis, Elasticsearch, "
               "Apache Kafka, RabbitMQ, Celery."),
    ("Cloud & DevOps:", "Docker, AWS (EC2, S3, Textract), GitHub Actions, SonarQube."),
    ("Practices:", "Agile / Scrum, OpenAPI / Swagger, Maker-Checker & Audit Systems, "
               "Jest & Pytest, Git & Code Review."),
]
for label, text in skills_rows:
    story.append(Paragraph(f"<b>{label}</b> {text}", styles["body"]))

# --- Experience ---
section("PROFESSIONAL EXPERIENCE")

job_header("Peerless", "Backend Engineer", "February 2024 - Present")
job_scope(
    "Core contributor to a multi-tenant core banking platform deployed across several banks "
    "and fintechs, owning customer lifecycle and account-control systems."
)
bullets([
    "Core contributor (#3 of 60+ contributors) to the customer management service of a "
    "multi-tenant core banking platform used by several banks and fintechs.",
    "Built maker-checker workflows with segregation of duties, department- and branch-scoped "
    "approvals, and audit trails that record previous values across 10+ request types.",
    "Delivered core-banking account controls: mandates and signatories, liens, restrictions, "
    "stop-cheque (with charge and tax journal posting), withdrawal thresholds, and obligor limits.",
    "Implemented account closure with automated balance transfer and interest/earnings "
    "calculation, integrated with the core banking system's transfer and journal APIs.",
    "Set up a Customer 360 service from scratch (NestJS, TypeORM, Redis), powering ops "
    "dashboards and channel lookup APIs by BVN, NIN, phone number, and account number.",
    "Built bulk pipelines for customer migration, restrictions, and account-officer "
    "reassignment, with query and upload optimizations for large files.",
    "Shipped joint, corporate (beneficial-owner), and custodial-minor onboarding, including an "
    "automated job that hands accounts over when a minor comes of age.",
    "Built event-driven integrations on Kafka — producers for customer and account events, "
    "consumers for notifications — and migrated a Django service's background jobs from "
    "Celery to Kafka.",
])
story.append(Paragraph(
    "<b>Technologies:</b> Node.js, Express.js, NestJS, TypeScript, Python, Django REST "
    "Framework, PostgreSQL, Kafka, Redis, Docker.",
    styles["tech"],
))
story.append(Spacer(1, 2.6))

job_header("Herconomy", "Backend Engineer", "February 2022 - February 2024")
job_scope(
    "Built core savings and fintech infrastructure for a financial platform helping users and "
    "families save toward specific goals."
)
bullets([
    "Collaborated with the Product Marketing team to develop a robust referral system, driving "
    "customer acquisition through referral codes and bonuses.",
    "Built a fast and responsive PDF generation system for user account statements, tracking "
    "transactions and balances.",
    "Engineered an automated goal-based savings feature, enabling users to save towards specific "
    "financial goals.",
    "Created a wallet system to help parents save for their children's future.",
    "Developed an automated piggy bank system, allowing scheduled deposits and withdrawals to "
    "encourage disciplined saving habits.",
    "Set up and configured development environments using Docker; used Python for data scraping "
    "and analysis tasks.",
])
story.append(Paragraph(
    "<b>Technologies:</b> Node.js, Express.js, Python, Django, Django REST Framework, Docker, "
    "Git, RabbitMQ, AWS EC2, AWS S3.",
    styles["tech"],
))
story.append(Spacer(1, 2.6))

job_header("Decagon Labs", "Backend Engineer", "June 2021 - January 2022")
bullets([
    "Designed, developed, and tested end-to-end user flows for subscription services (platform "
    "and meals), account tiering, ordering, and notifications in a client's food delivery and "
    "ordering web application.",
    "Optimized user journeys and flows to enhance user satisfaction and ensure compliance with "
    "documentation standards across multiple outsourced products.",
    "Built cross-platform APIs for a booking appointment system, enabling seamless scheduling "
    "between patients and healthcare providers.",
    "Developed a basic fintech wallet system, allowing users to save funds and perform in-app "
    "transfers for faster transactions.",
    "Utilized Python web scraping techniques to analyze and identify the top five most frequently "
    "used words within an application for data-driven insights.",
])
story.append(Spacer(1, 2.6))

job_header("Josla Electric Company Ltd.", "Backend Engineer (Intern)", "May 2020 - June 2021")
bullets([
    "Designed and developed the complete backend infrastructure for an enterprise electricity "
    "management tool, enabling efficient tracking of users' electrical usage and data.",
    "Integrated third-party API services to streamline ordering and payment processes within the "
    "enterprise backend system.",
    "Collaborated closely with the design team to understand user requirements, propose technical "
    "solutions, and implement key software features.",
])

# --- Education & Certification (kept together: both tiny, read oddly split) ---
_start = len(story)
section("EDUCATION")
story.append(Paragraph("<b>Covenant University, Canaanland Ota</b>", styles["body"]))
story.append(Paragraph("B.Sc. Bachelor of Science, 2019", styles["body"]))
section("CERTIFICATION")
story.append(Paragraph("Scrum Fundamentals Certified (SFC) - VMEdu Inc.", styles["body"]))
story[_start:] = [KeepTogether(story[_start:])]

# --- Projects ---
section("PROJECTS")

def project(name, desc, tech, link, link_label="Link", note=None):
    block = [
        Paragraph(name, styles["projecttitle"]),
        Paragraph(desc, styles["projectdesc"]),
        Paragraph(f"<b>Technologies Used:</b> {tech}", styles["tech"]),
    ]
    if link:
        block.append(Paragraph(f'{link_label}: <link href="{link}">{link}</link>', styles["link"]))
    elif note:
        block.append(Paragraph(note, styles["tech"]))
    block.append(Spacer(1, 3.8))
    story.append(KeepTogether(block))

project(
    "Dinma API",
    "The Health Services Booking System is a Django-based web application designed to connect "
    "healthcare providers with patients. Patients can sign up, search for providers, and book "
    "appointments, while providers manage their schedules and patient interactions.",
    "Node.js, Express.js, Django, Django REST Framework, Python.",
    "https://dinma-web.netlify.app/",
)

project(
    "Hitchpay",
    "Backend development for a fintech application handling core financial operations, built "
    "for reliability and data accuracy under real transaction volume.",
    "Express.js, Python, Django, Django REST Framework.",
    "https://www.hitchpay.ng/",
)

project(
    "Troo (TrooHQ)",
    "A multi-branch retail and restaurant management platform. Worked on backend systems for "
    "branch operations, self-checkout, menu and order management, employee roles and "
    "permissions, subscription plans, and TrooPay, a dedicated payments middleware integrating "
    "Paystack and Flutterwave.",
    "Node.js, Express.js, MongoDB, Django, Paystack, Flutterwave, Docker.",
    "https://troohq.com/",
)

project(
    "Herconomy Savings Platform",
    "Core savings infrastructure for a consumer fintech platform: goal-based savings, an "
    "automated piggy-bank engine with scheduled deposits, a family wallet system, and a "
    "referral engine tied to acquisition bonuses.",
    "Django, Django REST Framework, Node.js, Express.js, RabbitMQ, Docker.",
    "https://herconomy.com/",
)

while story and isinstance(story[-1], Spacer):
    story.pop()

doc.build(story)
print("Wrote", OUT)
