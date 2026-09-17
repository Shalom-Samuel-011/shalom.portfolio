import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
    const [showNotice, setShowNotice] = useState(false);

    const handleProjectClick = (e) => {
        e.preventDefault();
        setShowNotice(true);
        setTimeout(() => setShowNotice(false), 3000);
    };

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold mb-8 text-white">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onProjectClick={handleProjectClick}
                        />
                    ))}
                </div>
            </div>

            {/* Temporary Popup Banner */}
            {showNotice && (
                <div className="fixed bottom-6 right-6 bg-stone-900 border border-purple-500/40 text-stone-200 px-5 py-3.5 rounded-xl shadow-2xl z-50 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <p className="text-sm font-medium">
                        🚀 This project is currently under active development.
                        Stay tuned!
                    </p>
                </div>
            )}
        </section>
    );
}
