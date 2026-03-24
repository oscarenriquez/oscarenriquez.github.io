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
    name: "Azure",
    detail: "Cloud-native platform focus",
    logo: "https://cdn-icons-png.flaticon.com/512/873/873107.png"
  },
  {
    name: "Google Cloud",
    detail: "Multi-cloud perspective",
    logo: "https://cdn.simpleicons.org/googlecloud"
  },
  {
    name: "OpenAI",
    detail: "Applied AI workflows",
    logo: "https://cdn-icons-png.flaticon.com/512/11865/11865326.png"
  },
  {
    name: "Docker",
    detail: "Portable delivery pipelines",
    logo: "https://cdn.simpleicons.org/docker"
  }
] as const;

export const experienceTimeline = [
  {
    company: "Global FinTech",
    role: "Senior / Lead Software Engineer",
    period: "Most Recent",
    summary:
      "Led architecture and modernization efforts across payment-adjacent platforms, event-driven systems, and cloud initiatives where reliability, scale, and traceability were core business requirements."
  },
  {
    company: "Enterprise Telecommunications",
    role: "Senior Software Engineer",
    period: "Platform Growth",
    summary:
      "Designed full-stack and backend capabilities for large customer-facing platforms, helping modernize legacy systems into cleaner APIs, maintainable services, and more responsive product experiences."
  },
  {
    company: "Production Systems & Data Foundations",
    role: "Engineer",
    period: "Earlier Career",
    summary:
      "Started in data operations and production support, building a foundation in SQL, ETL, automation, monitoring, and operational discipline that later shaped a stronger systems and SRE-oriented engineering mindset."
  }
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", ".NET 8", "Node.js", "REST APIs", "Distributed Systems"]
  },
  {
    title: "Cloud",
    items: ["Azure", "GCP", "Containers", "CI/CD", "Observability", "Cloud-Native Architecture"]
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
