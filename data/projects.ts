export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Exploring" | "Building" | "Paused" | "Published";
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal AI Platform",
    description: "A working map of models, tools, agents, memory, automations, and channels for personal AI infrastructure.",
    tags: ["AI", "Systems", "Tools"],
    status: "Building",
    href: "#",
    featured: true,
  },
  {
    title: "Open Data Archive",
    description: "A lightweight archive for datasets, notes, and references collected during urban and technical research.",
    tags: ["Data", "Archive", "Research"],
    status: "Exploring",
    href: "#",
    featured: true,
  },
  {
    title: "Git Podcast",
    description: "An experiment in turning repository history and development logs into conversational project updates.",
    tags: ["Git", "Audio", "Automation"],
    status: "Exploring",
    href: "#",
    featured: true,
  },
  {
    title: "Heat & Health Dashboard",
    description: "A dashboard concept for connecting urban heat, health risk, neighborhood context, and public data.",
    tags: ["Cities", "Health", "Visualization"],
    status: "Paused",
    href: "#",
    featured: true,
  },
  {
    title: "NBA API Package",
    description: "A small package for accessing, shaping, and analyzing basketball data from public APIs.",
    tags: ["API", "Sports", "Python"],
    status: "Building",
    href: "#",
    featured: true,
  },
  {
    title: "Reflection System",
    description: "A personal capture and review tool for turning everyday observations into structured signals.",
    tags: ["Reflection", "Streamlit", "SQLite"],
    status: "Building",
    href: "#",
  },
];
