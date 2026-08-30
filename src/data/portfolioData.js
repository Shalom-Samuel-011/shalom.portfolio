export const SKILLS = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Redux",
    "Git",
];

export const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend / API"];

export const PROJECTS = [
    {
        id: 1,
        title: "Fast Pizza Co.",
        category: "Full Stack",
        description:
            "A real-time pizza ordering platform featuring interactive cart management, geolocation order routing, and live status updates.",
        tags: ["React", "Tailwind CSS", "React Router", "Redux"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: 2,
        title: "Dev Workflow Metrics",
        category: "Backend / API",
        description:
            "Developer productivity tool that integrates with GitHub REST API to visualize commit history, PR velocity, and code quality stats.",
        tags: ["Node.js", "Express", "MongoDB", "Chart.js"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: 3,
        title: "Modern UI Design System",
        category: "Frontend",
        description:
            "Accessible, component-driven UI library built with React, Tailwind, and Radix Primitives for rapid full-stack prototyping.",
        tags: ["React", "Tailwind CSS", "Storybook"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
];
