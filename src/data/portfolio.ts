export const profile = {
  name: "Muhammad Rayyan Khan",
  role: "SOFTWARE ENGINEER",
  location: "KARACHI, PAKISTAN",
  email: "ray990khan@gmail.com",
  phone: "+92 323 2701819",
  available: "Open to internships & junior engineering roles",
  summary:
    "Computer Science student with hands-on experience in Artificial Intelligence, full-stack development, and software engineering. I build AI-powered applications, web platforms, and RESTful APIs with Python, FastAPI, React, and Next.js.",
  links: [
    { label: "GitHub", href: "https://github.com/muhammad-rayyankhan" },
    { label: "LinkedIn", href: "https://linkedin.com/in/iamrayyan001" },
    { label: "Email", href: "mailto:ray990khan@gmail.com" },
  ],
};

export const about = {
  paragraphs: [
    "I like taking a system from an idea to something that actually runs — then making it sturdier. Most of my projects start the same way: a small working version, shipped fast, followed by the unglamorous work of making it hold up.",
    "That habit pulled me toward AI agents and full-stack systems — Artist.ai has me designing how autonomous agents coordinate and generate content together, while smaller projects like the OpenAI Agents SDK chatbot force me to get the fundamentals of agent orchestration right at a scale I can actually reason about.",
    "I'd rather build the thing before I feel fully ready for it, then go back and fix what I got wrong. That's usually where the real learning happens.",
  ],
};

export const featuredProjects = [
  {
    index: "01",
    title: "Artist.ai",
    year: "In progress",
    role: "Creator",
    summary:
      "An AI-native visual social platform where autonomous AI agents create and interact through generative visual content.",
    outcomes: [
      "Designing scalable multi-agent architecture for AI-driven content generation",
      "Modelling autonomous social interactions between agents",
      "Exploring agentic AI workflows and orchestration patterns",
    ],
    stack: ["React", "Next.js", "TypeScript", "AI Agents"],
    links: [{ label: "GitHub", href: "https://github.com/muhammad-rayyankhan/Artist.ai" }],
  },
  {
    index: "02",
    title: "One Direction Chatbot",
    year: "2025",
    role: "Author",
    summary:
      "A modular command-line chatbot built on the OpenAI Agents SDK for structured conversational AI workflows.",
    outcomes: [
      "Clean CLI interface with an extensible agent architecture",
      "Structured conversation flows via the Agents SDK",
      "Designed for future capability expansion without rewrites",
    ],
    stack: ["Python", "OpenAI Agents SDK"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/muhammad-rayyankhan/Python/tree/main/onedirection",
      },
    ],
  },
  {
    index: "03",
    title: "Physical AI Interactive Textbook",
    year: "2025",
    role: "Developer",
    summary:
      "A publicly deployed interactive educational website focused on Physical AI concepts, built for readability first.",
    outcomes: [
      "Developed and deployed a live, publicly accessible site",
      "Fully responsive educational interfaces across devices",
      "Content-first layout tuned for long-form reading",
    ],
    stack: ["React", "Next.js"],
    links: [
      { label: "Live demo", href: "https://website-seven-eta-74.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/muhammad-rayyankhan/physical-ai-textbook",
      },
    ],
  },
  {
    index: "04",
    title: "Student Task Manager",
    year: "2025",
    role: "Full-stack developer",
    summary:
      "A full-stack task management application with a React frontend and a FastAPI-powered REST API backend.",
    outcomes: [
      "Complete CRUD operations end to end",
      "Frontend-to-backend data flow over RESTful endpoints",
      "Clear separation between API layer and UI state",
    ],
    stack: ["React", "FastAPI", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/muhammad-rayyankhan/studentTaskApp" },
    ],
  },
];

// Detailed skills, education, certifications, and languages live in the
// downloadable resume (see profile.links / Contact) rather than on the page —
// this site is meant to lead with projects and how I think about building them.
