export const siteConfig = {
  name: "Oscar Enriquez",
  title: "Senior Software Engineer | Cloud & AI",
  description:
    "Senior Software Engineer in Guatemala designing distributed systems, cloud architecture, and payment-grade platforms for global products.",
  email: "oscar.enriquez.torre@gmail.com",
  location: "Guatemala",
  siteUrl: "https://oscarenriquez.github.io",
  keywords: [
    "Oscar Enriquez",
    "Senior Software Engineer",
    "Lead Software Engineer",
    "Distributed Systems Engineer",
    "Cloud Architect",
    "GCP Engineer",
    "Java Spring Boot Engineer",
    "FinTech Engineer",
    "Backend Engineer",
    "Event-Driven Architecture",
    "BigQuery",
    "Google Cloud Platform"
  ],
  social: {
    github: "https://github.com/oscarenriquez",
    linkedin: "https://www.linkedin.com/in/its-oscar-enriquez/",
    credly: "https://www.credly.com/users/oscarenriquez/badges#credly"
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ]
} as const;

export const featuredStacks = [
  {
    name: "Java",
    detail: "Spring-first backend services",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
  },
  {
    name: "Spring",
    detail: "Production-grade API design",
    logo: "https://cdn.simpleicons.org/spring"
  },
  {
    name: ".NET 8",
    detail: "Modern platform services",
    logo: "https://cdn.simpleicons.org/dotnet"
  },
  {
    name: "Node.js",
    detail: "Typed integration layers",
    logo: "https://cdn.simpleicons.org/nodedotjs"
  },
  {
    name: "React",
    detail: "Product-facing full-stack delivery",
    logo: "https://cdn.simpleicons.org/react"
  },
  {
    name: "Angular",
    detail: "Enterprise SPA development",
    logo: "https://cdn.simpleicons.org/angular"
  },
  {
    name: "Azure",
    detail: "Cloud-native platform focus",
    logo: "https://cdn-icons-png.flaticon.com/512/873/873107.png"
  },
  {
    name: "Google Cloud",
    detail: "Multi-cloud perspective",
    logo: "https://cdn.simpleicons.org/googlecloud"
  }
] as const;

export const experienceTimeline = [
  {
    company: "Frontsteps",
    role: "Senior Staff Software Engineer · System Designer · Technical Writer",
    period: "FinTech + PropTech",
    summary:
      "Led architecture and delivery for payment experiences inside a property management platform, shaping Stripe and ACH workflows, modernizing Angular and React surfaces, integrating with .NET-backed services, and documenting technical decisions that improved scalability, reliability, and cross-team execution."
  },
  {
    company: "FinTech Platforms",
    role: "Senior Software Engineer",
    period: "Recent Focus",
    summary:
      "Built and modernized payment-adjacent platforms with a strong focus on distributed workflows, event-driven integration, traceability, and production reliability."
  },
  {
    company: "Enterprise Product Engineering",
    role: "Senior Software Engineer",
    period: "Platform Delivery",
    summary:
      "Delivered backend and full-stack solutions for large customer-facing products, improving maintainability through cleaner APIs, service boundaries, and more responsive application experiences."
  },
  {
    company: "Data and Operations Foundations",
    role: "Engineer",
    period: "Early Career",
    summary:
      "Built early depth in SQL, ETL, automation, monitoring, and production support, which shaped a practical engineering mindset grounded in operational clarity and systems thinking."
  }
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", ".NET 8", "Node.js", "REST APIs", "Distributed Systems", "Stripe"]
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "TypeScript", "SPA Architecture", "Design Systems", "Full-Stack Delivery"]
  },
  {
    title: "Cloud",
    items: ["Azure", "GCP", "Containers", "CI/CD", "Observability", "Cloud-Native Architecture", "Payment Systems"]
  },
  {
    title: "AI",
    items: ["OpenAI APIs", "Azure AI", "Prompt Workflows", "Retrieval Patterns", "AI Product Design"]
  }
] as const;

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    shortName: "AZ-900",
    issuer: "Microsoft",
    href: "https://www.credly.com/org/microsoft-certification/badge/microsoft-certified-azure-fundamentals"
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    shortName: "DP-900",
    issuer: "Microsoft",
    href: "https://www.credly.com/org/microsoft-certification/badge/microsoft-certified-azure-data-fundamentals"
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    shortName: "AI-900",
    issuer: "Microsoft",
    href: "https://www.credly.com/org/microsoft-certification/badge/microsoft-certified-azure-ai-fundamentals"
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    shortName: "ACE",
    issuer: "Google Cloud",
    href: "https://www.credly.com/org/google-cloud/badge/associate-cloud-engineer-certification"
  }
] as const;

export const education = [
  {
    degree: "Master Degree in Security Information Technology",
    level: "Graduate",
    focus: "Information security, risk, and technology governance"
  },
  {
    degree: "Degree in Information Technology",
    level: "Undergraduate",
    focus: "Software engineering, systems, and applied technology foundations"
  }
] as const;
