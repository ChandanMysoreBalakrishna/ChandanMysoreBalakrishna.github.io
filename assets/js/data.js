// Edit this file to update the website content.
// Timeline entries are sorted automatically (newest first) by `start` (YYYY-MM).
// Entries with an empty `start` are shown last, under their `marker` label.
// type: "work" | "education" | "extracurricular"

window.SITE_DATA = {
  profile: {
    name: "Chandan Mysore Balakrishna",
    title: "Technical Product Manager",
    bio: "Senior AI Technical Product Manager with 13+ years of experience delivering enterprise software across the Automotive and Airline industries — combining product leadership with hands-on software engineering to take AI products from idea to production.",
    stats: [
      { value: "13+", label: "Years experience" },
      { value: "20", label: "Engineers led" },
      { value: "0→1", label: "AI product delivery" }
    ]
  },

  highlights: [
    {
      title: "AI Engineering Copilot",
      text: "Leading the strategy and development of an AI-powered Engineering Copilot for automotive component specifications, built on Generative AI, AI Agents and the Model Context Protocol (MCP)."
    },
    {
      title: "Cross-functional leadership",
      text: "Leading a cross-functional Agile team of 20 engineers, working with architects, UX designers and business stakeholders using SAFe."
    },
    {
      title: "0→1 product development",
      text: "Product discovery, MVP validation, roadmap planning and backlog ownership — from ideation through production deployment."
    },
    {
      title: "Data-driven product decisions",
      text: "Defined product KPIs, adoption metrics and A/B tests to measure customer value, engineering efficiency and product success."
    },
    {
      title: "Hands-on prototyping",
      text: "Rapid Proofs of Concept from Figma to production-ready prototypes with React, Spring Boot, Spring AI, Python and LangChain."
    },
    {
      title: "Enterprise toolchain integration",
      text: "Built microservice integrations and automation for secure requirement exchange between OEMs and Tier-1 suppliers."
    }
  ],

  skills: [
    {
      group: "Software Engineering",
      items: ["Java", "Spring Boot", "Python", "React", "REST APIs", "Microservices", "Event-Driven Architecture", "PostgreSQL"]
    },
    {
      group: "Artificial Intelligence",
      items: ["Generative AI", "AI Agents", "Model Context Protocol (MCP)", "AI Copilots", "Prompt Engineering", "Spring AI", "LangChain", "LangGraph", "LangFuse"]
    },
    {
      group: "Product Strategy & Delivery",
      items: ["Product Vision", "Product Discovery", "Roadmaps", "Backlog Management", "MVP Delivery", "Product KPIs", "A/B Testing"]
    },
    {
      group: "Cloud & DevOps",
      items: ["AWS", "Azure", "Kubernetes", "GitHub", "CI/CD"]
    },
    {
      group: "Enterprise Engineering",
      items: ["IBM ELM (DOORS Next)", "Requirements Management", "MBSE", "Workflow Automation", "Tool Integration"]
    },
    {
      group: "Leadership & Agile",
      items: ["Stakeholder Management", "SAFe", "Scrum", "PI Planning", "Cost Planning & ROI", "Figma"]
    },
    {
      group: "Languages",
      items: ["English — Business fluent", "German — A2 (working towards B1)"]
    }
  ],

  contact: [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/chandan-mysore-balakrishna",
      href: "https://www.linkedin.com/in/chandan-mysore-balakrishna-a5856299",
      icon: "linkedin"
    },
    {
      label: "GitHub",
      value: "github.com/ChandanMysoreBalakrishna",
      href: "https://github.com/ChandanMysoreBalakrishna",
      icon: "github"
    }
    // { label: "Email", value: "you@example.com", href: "mailto:you@example.com", icon: "mail" }
  ],

  timeline: [
    {
      type: "work",
      start: "2020-02",
      period: "Feb 2020 – Present",
      title: "AI Technical Product Owner",
      org: "Mercedes-Benz AG",
      description: "Leading the strategy and development of an AI-powered Engineering Copilot for automotive component specifications. Defining product vision, roadmap and end-to-end delivery; driving 0→1 development through customer discovery, MVP validation and AI experimentation; owning backlog, prioritisation, KPIs and A/B testing across multiple engineering teams.",
      tags: ["Generative AI", "AI Agents", "MCP", "Product Strategy", "SAFe", "Spring AI", "LangChain", "React"]
    },
    {
      type: "work",
      start: "2014-08",
      period: "Aug 2014 – Jan 2020",
      title: "Senior Software Engineer",
      org: "Robert Bosch India",
      description: "Designed and developed microservice adapters integrating enterprise engineering toolchains. Built automation solutions for secure requirement exchange between OEMs and Tier-1 suppliers, and contributed to architecture, database design and the enterprise SDLC.",
      tags: ["Java", "Spring Boot", "Microservices", "Messaging", "Requirements Exchange"]
    },
    {
      type: "work",
      start: "2012-12",
      period: "Dec 2012 – Jun 2014",
      title: "Software Developer",
      org: "Wipro Technologies",
      description: "Developed cargo management modules for the airline industry following IATA standards.",
      tags: ["Java", "Spring", "Oracle", "Apache ActiveMQ", "IATA"]
    },
    {
      type: "education",
      start: "",
      marker: "Education",
      period: "Bachelor's degree",
      title: "Bachelor of Engineering in Information Science and Engineering",
      org: "Visvesvaraya Technological University — Karnataka, India",
      description: "",
      tags: ["Information Science", "Software Engineering"]
    }
  ]
};
