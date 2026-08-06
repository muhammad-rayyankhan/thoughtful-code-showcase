export const profile = {
  name: "Muhammad Rayyan Khan",
  role: "SOFTWARE ENGINEER",
  location: "KARACHI, PAKISTAN",
  email: "hello@example.com",
  available: "Open to new engineering opportunities",
  summary:
    "I build backend systems and developer tooling that stay comprehensible as they grow. Ten years of writing services, migrating data, and deleting code that stopped earning its keep.",
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Resume", href: "#" },
  ],
};

export const about = {
  paragraphs: [
    "I work mostly in the unglamorous middle of a system: request paths, queues, schema changes, the code that has to keep working while someone deploys on a Friday. My preference is for boring, observable architecture with clear ownership boundaries.",
    "Before that I spent four years in data infrastructure, which taught me that most performance problems are actually modelling problems. I write documentation as part of implementation, not after it.",
    "Outside of work I maintain two small open-source libraries, read more papers than I finish, and repair mechanical keyboards with mixed success.",
  ],
  facts: [
    { label: "Focus", value: "Distributed systems, APIs, DX" },
    { label: "Languages", value: "Go, TypeScript, Python, SQL" },
    { label: "Currently", value: "Reading Designing Data-Intensive Applications, again" },
    { label: "Timezone", value: "CET (UTC+1)" },
  ],
};

export const featuredProjects = [
  {
    index: "01",
    title: "Ledgerline",
    year: "2025",
    role: "Tech lead",
    summary:
      "An append-only ledger service handling double-entry accounting for a fintech with 400k monthly transactions. Replaced a mutable balances table with an event log plus derived projections, which made month-end reconciliation deterministic.",
    outcomes: [
      "Reconciliation time cut from 6 hours to 4 minutes",
      "Zero balance-drift incidents in 14 months",
      "Formal invariants enforced at write time",
    ],
    stack: ["Go", "PostgreSQL", "Kafka", "Terraform"],
    links: [
      { label: "Case study", href: "#" },
      { label: "Source", href: "https://github.com" },
    ],
  },
  {
    index: "02",
    title: "Northwind CLI",
    year: "2024",
    role: "Author & maintainer",
    summary:
      "A single-binary deployment CLI used by ~120 engineers internally, later open-sourced. Designed around explicit plan/apply steps so that no command mutates infrastructure without a reviewable diff.",
    outcomes: [
      "Median deploy prep down from 11 to 2 minutes",
      "Adopted by 9 teams without a mandate",
      "1.4k GitHub stars, 38 external contributors",
    ],
    stack: ["Go", "Cobra", "gRPC", "GitHub Actions"],
    links: [
      { label: "Documentation", href: "#" },
      { label: "Source", href: "https://github.com" },
    ],
  },
  {
    index: "03",
    title: "Atlas Search Relay",
    year: "2023",
    role: "Senior engineer",
    summary:
      "A read-path proxy that unified three legacy search backends behind one query grammar, allowing an incremental migration with no client rewrites and per-tenant traffic shifting.",
    outcomes: [
      "p99 search latency reduced 43%",
      "Legacy cluster decommissioned 5 months early",
      "Shadow-traffic diffing caught 61 behavioural regressions",
    ],
    stack: ["TypeScript", "Elasticsearch", "Redis", "OpenTelemetry"],
    links: [{ label: "Write-up", href: "#" }],
  },
];

export const archiveProjects = [
  {
    year: "2025",
    title: "pgshape",
    description: "Schema diffing tool that renders migrations as reviewable plans.",
    tags: ["Go", "PostgreSQL"],
    href: "https://github.com",
  },
  {
    year: "2024",
    title: "Trace Budget",
    description: "Per-endpoint latency budgets derived from OpenTelemetry spans.",
    tags: ["TypeScript", "OTel"],
    href: "https://github.com",
  },
  {
    year: "2024",
    title: "Quietqueue",
    description: "Minimal at-least-once job runner backed by a single SQL table.",
    tags: ["Python", "SQLite"],
    href: "https://github.com",
  },
  {
    year: "2023",
    title: "Static Status",
    description: "Status page generator with no runtime and no JavaScript.",
    tags: ["Rust", "HTML"],
    href: "https://github.com",
  },
  {
    year: "2023",
    title: "Reviewkit",
    description: "Heuristics that flag risky diffs before humans review them.",
    tags: ["TypeScript", "Git"],
    href: "https://github.com",
  },
  {
    year: "2022",
    title: "Colddown",
    description: "Cost-aware S3 lifecycle planner for archival datasets.",
    tags: ["Go", "AWS"],
    href: "https://github.com",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Go", "TypeScript", "Python", "SQL", "Bash", "Rust (working knowledge)"],
  },
  {
    title: "Systems & data",
    items: ["PostgreSQL", "Kafka", "Redis", "Elasticsearch", "ClickHouse", "Event sourcing"],
  },
  {
    title: "Platform",
    items: ["Kubernetes", "Terraform", "AWS", "GitHub Actions", "OpenTelemetry", "Grafana"],
  },
  {
    title: "Practice",
    items: [
      "API design",
      "Incremental migrations",
      "Technical writing",
      "Mentoring",
      "Incident review",
      "Threat modelling",
    ],
  },
];

export const experience = [
  {
    period: "2022 — Present",
    title: "Staff Engineer",
    org: "Meridian Financial Systems",
    detail:
      "Own the transaction platform: ledgering, settlement, and the internal APIs six product teams build on. Lead architecture review and the on-call practice.",
  },
  {
    period: "2019 — 2022",
    title: "Senior Backend Engineer",
    org: "Northwind Labs",
    detail:
      "Built deployment tooling and the service scaffolding used across the company. Took the platform from ad-hoc scripts to a reviewable, testable pipeline.",
  },
  {
    period: "2016 — 2019",
    title: "Data Infrastructure Engineer",
    org: "Cartogram",
    detail:
      "Designed batch and streaming pipelines for geospatial data, plus the query layer that analysts used directly.",
  },
];

export const education = [
  {
    period: "2012 — 2016",
    title: "BSc Computer Science",
    org: "University of Edinburgh",
    detail: "First class honours. Dissertation on consistency models in replicated stores.",
  },
  {
    period: "2021",
    title: "Distributed Systems (self-directed)",
    org: "MIT 6.824 coursework",
    detail: "Completed all labs in Go, including Raft and a sharded key-value store.",
  },
];
