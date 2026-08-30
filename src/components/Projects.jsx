import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import { PROJECTS, CATEGORIES } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeFilter);

    return (
        <section
            id="projects"
            className="py-20 border-t border-stone-800/80 w-full"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                    <div className="flex items-center gap-2 text-stone-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
                        <Layers className="w-4 h-4 text-purple-400" />
                        <span>Selected Work</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                        Featured Projects
                    </h2>
                </div>

                {/* Category Filters (Horizontal Scrollable on Mobile) */}
                <div className="flex gap-2 bg-stone-900 p-1.5 rounded-xl border border-stone-800 overflow-x-auto max-w-full">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                                activeFilter === cat
                                    ? "bg-purple-600 text-white shadow-md"
                                    : "text-stone-400 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
