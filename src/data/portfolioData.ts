export interface TechnicalCaseStudy {
  id: string;
  title: string;
  systemType: string;
  role: string;
  period: string;
  image: string;
  repoUrl: string;
  liveUrl?: string;
  architectureSummary: string;
  techStack: string[];
  systemConstraints: string[];
  engineeringChallenge: string;
  technicalSolution: string;
  architecturalHighlights: {
    title: string;
    description: string;
  }[];
  measurableImpact: {
    metric: string;
    label: string;
  }[];
  interactiveDemoType: 'mpesa-webhook' | 'rbac-security' | 'offline-sync' | 'ai-diagnosis' | 'fee-queue';
}

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  technicalHighlights: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  focusArea: string;
  relevantCoursework: string[];
  capstoneProject: {
    title: string;
    description: string;
  };
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  verificationId?: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: string;
  }[];
}

export const DEVELOPER_PROFILE = {
  name: "Weldon Rono",
  title: "Full-Stack Software Developer & Systems Engineer",
  location: "Nairobi & Nakuru, Kenya",
  email: "weldonrono474@gmail.com",
  phone: "+254741791513",
  phoneDisplay: "+254 741 791 513",
  githubUrl: "https://github.com/weldonrono",
  linkedinUrl: "https://www.linkedin.com/in/weldon-rono",
  portfolioUrl: "https://weldonrono.dev",
  headline: "Designing, building, integrating, testing, and deploying resilient production web applications.",
  summary: "Software Developer with strong foundational computer science training and proven production experience building mission-critical web applications. Specialized in end-to-end full-stack architectures (React/Next.js, Node.js/TypeScript, PostgreSQL), distributed fintech integrations (Safaricom M-Pesa Daraja 2.0 APIs with zero-loss idempotent webhooks), offline-first PWAs, and cloud-native container deployments on AWS and Linux environments.",
  availability: "Open to Full-Time Software Engineering Roles & Technical Contracts",
  coreMetrics: [
    { value: "4,200+", label: "Concurrent Active Users Supported" },
    { value: "< 120ms", label: "p95 API Endpoint Latency" },
    { value: "99.98%", label: "M-Pesa Webhook Ingestion Reliability" },
    { value: "100%", label: "Type-Safe Production Codebases" }
  ]
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Software Engineer",
    organization: "KilimoFresh Agribusiness Platform",
    location: "Nairobi, Kenya",
    period: "2024 – Present",
    type: "Full-Time / Engineering Lead",
    summary: "Led technical design, development, and production deployment of an end-to-end agritech marketplace and cold-chain logistics platform handling daily high-concurrency order surges.",
    technicalHighlights: [
      "Architected an idempotent payment reconciliation pipeline for Safaricom Daraja 2.0 (STK Push & C2B webhooks) with Redis distributed locks, eliminating double-charging vulnerabilities and payment race conditions.",
      "Engineered real-time inventory locking using PostgreSQL row-level locks (`SELECT FOR UPDATE`) within ACID transactions, preventing stock overselling during flash sales.",
      "Optimized Next.js 14 frontend using server-side rendering, selective React Server Components (RSC), and edge image caching, achieving 98+ Google Lighthouse Performance scores.",
      "Implemented automated asynchronous order notification workers using BullMQ and Redis, offloading SMS/email dispatch from the main API thread."
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Safaricom Daraja API", "Docker", "AWS S3"]
  },
  {
    id: "exp-2",
    role: "Software Developer & Systems Specialist",
    organization: "ApexCare Health Technologies",
    location: "Nairobi & Kiambu, Kenya",
    period: "2023 – 2024",
    type: "Contract / Full-Stack",
    summary: "Designed and implemented a secure, role-based clinic management ERP across 3 outpatient branches, digitizing medical triage, doctor consultations, and pharmacy dispensary billing.",
    technicalHighlights: [
      "Constructed strict Role-Based Access Control (RBAC) middleware in Node.js/Express, verifying cryptographic JWT claims and resource ownership for Doctors, Triage Nurses, Pharmacists, and Cashiers.",
      "Developed a real-time patient triage room queue using WebSockets (Socket.io) with Redis Pub/Sub adapter, slashing patient wait times from 135 minutes to under 38 minutes.",
      "Integrated AWS S3 pre-signed URLs for zero-knowledge, encrypted medical report uploads, ensuring private health data never touches unauthenticated server disks.",
      "Wrote comprehensive unit and integration test suites using Vitest and Supertest covering critical billing calculation algorithms and patient audit log records."
    ],
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "AWS S3", "Redis", "Docker"]
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern / Web Developer",
    organization: "Campus ICT Systems Directorate",
    location: "Kenya",
    period: "2022 – 2023",
    type: "Internship & Academic Fellow",
    summary: "Contributed to internal university web systems, student portal services, and automated departmental reporting pipelines.",
    technicalHighlights: [
      "Re-engineered student fee statement reconciliation scripts, adding composite B-Tree database indexes that slashed ledger generation times from 4.2 seconds to 180 milliseconds.",
      "Built responsive, accessible UI modules following WCAG AA standards using modern JavaScript and semantic HTML5.",
      "Containerized legacy PHP/Node.js services with Docker, standardizing local developer staging environments across the ICT student engineering team."
    ],
    techStack: ["JavaScript", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Git/GitHub", "Linux"]
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Science in Computer Science & Information Technology",
  institution: "School of Science & Technology",
  location: "Kenya",
  period: "2020 – 2024",
  grade:"Successfully Passed",
  focusArea: "Software Engineering, Distributed Systems, Database Management Systems & Network Security",
  relevantCoursework: [
    "Data Structures & Algorithms (DSA)",
    "Distributed Systems & Cloud Computing",
    "Database Systems & Query Optimization",
    "Software Architecture & Design Patterns",
    "Computer Networks & Protocol Engineering",
    "Information Security & Cryptography",
    "Object-Oriented Programming (OOP)"
  ],
  capstoneProject: {
    title: "Fault-Tolerant Mobile Payment Gateway & Audit Ledger Architecture",
    description: "Researched and built a distributed financial ledger prototype implementing the Saga pattern for multi-step transaction rollbacks, zero-loss webhook ingestion, and asymmetric cryptographic signature verification."
  }
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    skills: ["Cloud Architecture", "AWS IAM", "S3 Storage", "EC2 & ECS", "VPC Networking", "RDS PostgreSQL"]
  },
  {
    name: "Safaricom Daraja API Developer Accreditation",
    issuer: "Safaricom PLC / Daraja Community",
    year: "2024",
    skills: ["Daraja 2.0 REST APIs", "C2B Webhooks", "STK Push Push", "B2C Disbursal", "OAuth 2.0 Security"]
  },
  {
    name: "Meta Full-Stack Software Developer Professional Certificate",
    issuer: "Meta / Coursera",
    year: "2023",
    skills: ["React Architecture", "RESTful APIs", "Relational Databases", "Version Control CI/CD", "Testing"]
  },
  {
    name: "Cisco Networking Essentials & Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2022",
    skills: ["TCP/IP", "DNS/DHCP", "Subnetting", "Network Hardening", "Firewall Configuration"]
  }
];

export const SKILL_TAXONOMY: SkillCategory[] = [
  {
    category: "Languages & Core",
    description: "Strong foundation in typed, functional, and object-oriented programming paradigms.",
    skills: [
      { name: "TypeScript", level: "Expert", highlight: "Strict mode, generics, utility types" },
      { name: "JavaScript (ES2024)", level: "Expert", highlight: "Async/await, Event loop, DOM API" },
      { name: "SQL (PostgreSQL)", level: "Advanced", highlight: "Indexing, transactions, query plans" },
      { name: "HTML5 & CSS3", level: "Expert", highlight: "Semantic layout, accessibility, WCAG" },
      { name: "Python", level: "Proficient", highlight: "Scripting, data analysis, automation" }
    ]
  },
  {
    category: "Frontend Engineering",
    description: "Building responsive, accessible, high-performance client architectures.",
    skills: [
      { name: "React.js (v18/v19)", level: "Expert", highlight: "Custom hooks, performance profiling" },
      { name: "Next.js 14/15", level: "Expert", highlight: "App Router, SSR, Server Actions, RSC" },
      { name: "Tailwind CSS", level: "Expert", highlight: "Design systems, typography, dark mode" },
      { name: "State Management", level: "Advanced", highlight: "Zustand, React Query / TanStack, Context" },
      { name: "Progressive Web Apps", level: "Advanced", highlight: "Service Workers, IndexedDB, Offline cache" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Designing resilient REST endpoints, event-driven workers, and microservices.",
    skills: [
      { name: "Node.js & Express", level: "Advanced", highlight: "Middleware chains, stream processing" },
      { name: "RESTful API Architecture", level: "Expert", highlight: "OpenAPI, idempotent methods, rate limiting" },
      { name: "WebSockets & Events", level: "Advanced", highlight: "Socket.io, real-time sync, pub/sub" },
      { name: "Authentication & Security", level: "Advanced", highlight: "JWT, RBAC, OAuth 2.0, CORS, bcrypt" }
    ]
  },
  {
    category: "Databases & Caching",
    description: "Relational modeling, transaction isolation, and memory-tier acceleration.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: "ACID transactions, Row-level locks, B-Trees" },
      { name: "Redis", level: "Advanced", highlight: "In-memory caching, Distributed locks, Queues" },
      { name: "MySQL", level: "Advanced", highlight: "Schema normalization, relational integrity" },
      { name: "ORM & Query Builders", level: "Advanced", highlight: "Prisma, Knex, Drizzle, raw parameterized SQL" }
    ]
  },
  {
    category: "Cloud, DevOps & Tooling",
    description: "Automated pipelines, containerization, and production deployments.",
    skills: [
      { name: "AWS Cloud", level: "Proficient", highlight: "EC2, S3, RDS, CloudFront, Route53" },
      { name: "Docker", level: "Advanced", highlight: "Multi-stage builds, compose environments" },
      { name: "CI/CD & GitHub Actions", level: "Advanced", highlight: "Automated test runs, build matrix, deploy" },
      { name: "Linux & Nginx", level: "Advanced", highlight: "VPS administration, reverse proxy, SSL certs" },
      { name: "Git & GitHub", level: "Expert", highlight: "Branching workflows, semantic commits, PRs" }
    ]
  },
  {
    category: "Fintech, Telecom & AI",
    description: "Specialized API integrations for East African digital infrastructure.",
    skills: [
      { name: "Safaricom M-Pesa Daraja 2.0", level: "Specialist", highlight: "STK Push, C2B, B2C, Idempotent Webhooks" },
      { name: "Africa's Talking APIs", level: "Advanced", highlight: "Bulk SMS, Sender IDs, Delivery Receipts" },
      { name: "Gemini AI & LLM APIs", level: "Advanced", highlight: "Structured outputs, function calling, vision" }
    ]
  }
];

export const TECHNICAL_ACHIEVEMENTS = [
  {
    title: "Zero-Loss Financial Ingestion",
    description: "Engineered an idempotent webhook architecture for Safaricom Daraja that buffers incoming callbacks in Redis, deduplicates via transaction reference hashes, and processes orders in atomic database transactions with automatic dead-letter queue retries."
  },
  {
    title: "Offline-First PWA Synchronization",
    description: "Built an offline data engine utilizing browser IndexedDB to journal mutation logs when local retail internet drops, resolving synchronization conflicts against the server using timestamped operational transformation when fiber reconnects."
  },
  {
    title: "Sub-120ms p95 API Latency",
    description: "Refactored high-traffic backend endpoints using connection pooling, read-through Redis caching for frequently accessed product catalogs, and composite B-Tree indexes in PostgreSQL, reducing query execution time by up to 88%."
  },
  {
    title: "Multi-Tenant Enterprise RBAC",
    description: "Architected a zero-trust permission authorization matrix separating patient medical charts, clinical diagnostics, and financial checkout registers across multiple hospital departments with immutable cryptographic audit logging."
  }
];

export const FEATURED_CASE_STUDIES: TechnicalCaseStudy[] = [
  {
    id: "kilimofresh-platform",
    title: "KilimoFresh Distributed E-Commerce & Resilient M-Pesa Webhook Engine",
    systemType: "Distributed E-Commerce & Financial Gateway",
    role: "Full-Stack System Architect & Developer",
    period: "2024 – 2025",
    image: "/src/assets/images/project_ecommerce_kilimo_1791281787370.jpg",
    repoUrl: "https://github.com/weldonrono/kilimofresh-ecommerce",
    architectureSummary: "Next.js 14 App Router frontend backed by a Node.js/Express service, PostgreSQL transaction pool, Redis distributed lock manager, and asynchronous BullMQ notification queues.",
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Safaricom Daraja API", "Tailwind CSS"],
    systemConstraints: [
      "Zero tolerance for double billing or lost payments during mobile network handoffs.",
      "Sub-2-second end-to-end checkout experience on mobile 3G/4G connections.",
      "High-concurrency ordering bursts during morning farm produce harvest drops."
    ],
    engineeringChallenge: "Safaricom's Daraja API webhook callbacks frequently fire out of order, retry aggressively on slow responses, or encounter network drops during mobile client handoffs. If two callbacks hit simultaneously, race conditions in standard databases cause duplicate payment receipts and inventory inconsistencies.",
    technicalSolution: "Engineered a distributed idempotency pipeline using Redis atomic set-if-not-exists (`SETNX`) with a 60-second TTL keyed on the M-Pesa transaction reference (`TransID`). If a duplicate callback arrives while the worker is processing, it is immediately discarded. Wrapped checkout inventory decrement in PostgreSQL row-level locks (`SELECT stock FROM products WHERE id = $1 FOR UPDATE`) inside an explicit transaction boundary, ensuring absolute stock consistency under peak load.",
    architecturalHighlights: [
      {
        title: "Atomic Webhook Deduplication",
        description: "Implemented cryptographic payload verification and Redis distributed locks to reject duplicate payment payloads before database mutation."
      },
      {
        title: "Row-Level Inventory Protection",
        description: "Used PostgreSQL explicit pessimistic locking (`FOR UPDATE`) to prevent overselling of high-demand agricultural yields during concurrent flash sales."
      },
      {
        title: "Decoupled Async Message Workers",
        description: "Offloaded SMS delivery notifications and dispatch routing tasks to background BullMQ queues, keeping API endpoint response times below 85ms."
      }
    ],
    measurableImpact: [
      { metric: "99.98%", label: "Webhook Processing Success Rate" },
      { metric: "0", label: "Duplicate Billing Incidents" },
      { metric: "4,200+", label: "Weekly Active Shoppers Handled" },
      { metric: "< 95ms", label: "p95 API Checkout Response" }
    ],
    interactiveDemoType: "mpesa-webhook"
  },
  {
    id: "apexcare-clinical-erp",
    title: "ApexCare Multi-Tenant Clinical ERP & Secure Medical Records",
    systemType: "Enterprise Healthcare Management System",
    role: "Lead Software Engineer",
    period: "2023 – 2024",
    image: "/src/assets/images/project_management_hospital_1791281800681.jpg",
    repoUrl: "https://github.com/weldonrono/apexcare-clinical-erp",
    architectureSummary: "React frontend with WebSocket real-time event subscriptions, Node.js REST API with hierarchical Role-Based Access Control (RBAC), PostgreSQL relational data store, and AWS S3 encrypted file storage.",
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "AWS S3", "Redis", "TypeScript"],
    systemConstraints: [
      "Strict data isolation between Triage, Clinician, Pharmacy, and Billing roles.",
      "Patient electronic medical records (EMR) must maintain immutable audit trails.",
      "Zero-exposure architecture for sensitive lab reports and diagnostic imagery."
    ],
    engineeringChallenge: "The healthcare facility operated across 3 distributed clinics with paper records and uncoordinated department handoffs. The system required absolute role isolation (e.g. a billing cashier must never view confidential diagnostic notes, while doctors must verify prescriptions before pharmacy dispensation) without introducing latency into emergency room triage.",
    technicalSolution: "Architected a fine-grained RBAC permission matrix enforced at both API route middleware and database query layers using PostgreSQL schemas with tenancy foreign keys. Implemented a real-time WebSocket state synchronizer powered by Redis Pub/Sub that updates consultation room queues dynamically. For radiology and lab file uploads, generated short-lived AWS S3 pre-signed URLs (15-minute expiration) directly from authorized clinician sessions, preventing raw medical media from passing through intermediate servers.",
    architecturalHighlights: [
      {
        title: "Granular RBAC Authorization",
        description: "Centralized permission middleware verifying JWT claims against defined clinical scopes (e.g. `emr:read_diagnostics`, `billing:reconcile`, `pharmacy:dispense`)."
      },
      {
        title: "AWS S3 Pre-Signed File Ingestion",
        description: "Direct-to-S3 secure uploads using server-generated cryptographic presigned URLs with server-side AES-256 encryption."
      },
      {
        title: "Real-Time Room Queue Synchronization",
        description: "Event-driven WebSocket pipelines with Redis message brokers delivering live patient status transitions to doctor workstations."
      }
    ],
    measurableImpact: [
      { metric: "68%", label: "Reduction in Patient Queue Dwell Time" },
      { metric: "18,000+", label: "Confidential EMR Charts Digitized" },
      { metric: "100%", label: "Immutable Audit Trail Coverage" },
      { metric: "0", label: "Unauthorized Record Access Breaches" }
    ],
    interactiveDemoType: "rbac-security"
  },
  {
    id: "quickduka-offline-pos",
    title: "QuickDuka Offline-First Retail POS & PWA Synchronization Engine",
    systemType: "Progressive Web Application (PWA) & Cloud Retail POS",
    role: "Full-Stack Software Developer",
    period: "2024",
    image: "/src/assets/images/project_ecommerce_quickduka_1791281823401.jpg",
    repoUrl: "https://github.com/weldonrono/quickduka-offline-pos",
    architectureSummary: "Offline-first React PWA with Service Worker caching, local browser IndexedDB transaction journal, WebSocket live till sync, and PostgreSQL multi-branch inventory database.",
    techStack: ["React PWA", "TypeScript", "IndexedDB", "Service Workers", "Node.js", "PostgreSQL", "WebSockets"],
    systemConstraints: [
      "Must remain 100% operational during frequent fiber broadband outages.",
      "Hardware USB/Bluetooth barcode scanner integration with sub-50ms debounce.",
      "Conflict-free inventory synchronization across multiple tills upon internet reconnect."
    ],
    engineeringChallenge: "Kenyan retail stores frequently face fiber internet drops during storms and power fluctuations. Traditional web cash registers freeze, halting in-store customer queues, while naive offline caches often create massive inventory merge conflicts when multiple tills sell the same SKU offline.",
    technicalSolution: "Engineered an offline-first architecture utilizing the browser's native IndexedDB. Every sale, stock adjustment, and customer lookup is recorded to an append-only mutation journal on the local device. When the Service Worker detects the browser is back online (`navigator.onLine` and ping heartbeats), it initiates a bidirectional sync protocol using vector clocks to merge offline transactions sequentially into the cloud PostgreSQL database. Integrated hardware barcode scanners using a low-latency keyboard-wedge buffer hook in React.",
    architecturalHighlights: [
      {
        title: "Local IndexedDB Mutation Journal",
        description: "Persistent client-side append-only database allowing tills to execute sales and print receipts indefinitely without network access."
      },
      {
        title: "Vector-Clock Sync Reconciliation",
        description: "Conflict-resolving background synchronization engine that serializes multi-till mutations into the cloud upon reconnect."
      },
      {
        title: "Service Worker Cache Hierarchy",
        description: "Cache-first static asset strategy combined with network-first data fetching for zero-latency UI interaction."
      }
    ],
    measurableImpact: [
      { metric: "100%", label: "Uptime During Internet Dropouts" },
      { metric: "22s", label: "Average Checkout Speed (Down from 75s)" },
      { metric: "5", label: "Retail Branches Synchronized" },
      { metric: "KES 12M+", label: "Monthly POS Volume Managed" }
    ],
    interactiveDemoType: "offline-sync"
  },
  {
    id: "eduvantage-cloud-erp",
    title: "EduVantage Multi-Campus Academic Information System & Paybill Ingestion",
    systemType: "Cloud Enterprise Resource Planning (ERP)",
    role: "Systems Architect & Developer",
    period: "2023 – 2024",
    image: "/src/assets/images/project_management_school_1791281811812.jpg",
    repoUrl: "https://github.com/weldonrono/eduvantage-cloud-erp",
    architectureSummary: "Next.js multi-tenant portal, Node.js backend with automated Safaricom Paybill C2B validation hooks, PostgreSQL ledger, and Africa's Talking SMS dispatcher.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Safaricom Daraja", "Africa's Talking SMS"],
    systemConstraints: [
      "Real-time validation of student admission numbers from Safaricom Paybill inputs.",
      "Bulk dispatch of 25,000+ grade report SMS without hitting telecom rate limits.",
      "Strict data protection compliance for student records and financial ledgers."
    ],
    engineeringChallenge: "School bursars previously spent weeks manually cross-referencing bank slips and M-Pesa SMS alerts against 1,400+ student registers. Duplicate manual entries and mismatched student admission numbers caused financial discrepancies at every term start.",
    technicalSolution: "Designed an automated C2B validation and confirmation hook. When a parent enters the student admission number on M-Pesa Paybill, the Safaricom gateway queries the EduVantage validation endpoint in real time. If the student ID exists, the transaction is approved; the confirmation webhook automatically credits the student's sub-ledger in PostgreSQL, recalculates term balances, and triggers a branded SMS receipt to the parent's phone via Africa's Talking API.",
    architecturalHighlights: [
      {
        title: "Two-Step C2B Paybill Validation",
        description: "Real-time HTTP validation endpoint verifying student admission numbers before Safaricom accepts customer funds."
      },
      {
        title: "Automated Sub-Ledger Posting",
        description: "ACID database transaction that immediately posts tuition credits and updates balance sheets upon confirmation."
      },
      {
        title: "Throttled Telecom SMS Pipeline",
        description: "Token-bucket rate limiter managing SMS dispatch queues to adhere to Kenyan telecom provider throughput limits."
      }
    ],
    measurableImpact: [
      { metric: "94%", label: "On-Time Fee Reconciliation Rate" },
      { metric: "25,000+", label: "Termly SMS Dispatched Reliably" },
      { metric: "14 Days → 5s", label: "Ledger Reconciliation Acceleration" },
      { metric: "1,400+", label: "Active Student Profiles Managed" }
    ],
    interactiveDemoType: "fee-queue"
  },
  {
    id: "finsight-ai-agronomics",
    title: "AgroScan & FinSight AI: Multimodal Agronomic Diagnostic & Analytics Engine",
    systemType: "AI-Powered Computer Vision & Agronomic Analytics",
    role: "Full-Stack AI Engineer",
    period: "2024 – 2025",
    image: "/src/assets/images/project_ecommerce_kilimo_1791281787370.jpg",
    repoUrl: "https://github.com/weldonrono/finsight-ai-agronomics",
    architectureSummary: "Next.js 14 frontend integrating Google Gemini 2.5 Flash API with structured JSON schema outputs, Node.js proxy layer, PostgreSQL vector metadata store, and AWS S3 image storage.",
    techStack: ["Next.js 14", "TypeScript", "Google GenAI SDK", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
    systemConstraints: [
      "Zero API key exposure on client bundles via secure backend proxy routes.",
      "Strictly enforced structured JSON outputs for reliable UI parsing.",
      "Low latency crop disease diagnosis and soil telemetry inference under 2.5 seconds."
    ],
    engineeringChallenge: "Kenyan agronomists and smallholder farmers lack immediate access to certified plant pathologists. Farmers struggle with confusing pest outbreaks on high-value cash crops (avocados, maize, tomatoes), while generic text LLMs produce unstructured hallucinations unsuitable for automated treatment workflows.",
    technicalSolution: "Architected an end-to-end multimodal diagnostic pipeline. Implemented server-side streaming through the `@google/genai` TypeScript SDK using `gemini-2.5-flash` with strictly defined JSON schemas (enforcing disease identification, confidence rating, causal pathogen, organic intervention, and chemical treatment guidelines). Configured AWS S3 image ingestion with image compression before inference to minimize mobile bandwidth consumption.",
    architecturalHighlights: [
      {
        title: "Enforced Structured JSON Schema",
        description: "Utilized Gemini API response schema constraints to guarantee valid JSON outputs containing disease name, severity, and treatments."
      },
      {
        title: "Secure Server Proxy Route",
        description: "Backend route masking all AI API keys while implementing IP rate limiting and session validation."
      },
      {
        title: "Bandwidth-Optimized Image Pipeline",
        description: "Client-side WebP image normalization reducing upload payload size by 75% before cloud inference."
      }
    ],
    measurableImpact: [
      { metric: "92.4%", label: "Pathogen Diagnostic Accuracy" },
      { metric: "< 1.8s", label: "Average Multimodal Inference Time" },
      { metric: "100%", label: "Structured Schema Adherence" },
      { metric: "850+", label: "Agronomic Scans Processed" }
    ],
    interactiveDemoType: "ai-diagnosis"
  }
];
