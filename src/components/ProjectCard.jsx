import { ExternalLink, GitBranch } from "lucide-react";

export default function ProjectCard({ project, onProjectClick }) {
    return (
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 hover:border-stone-700 transition-all flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-stone-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Render tags array safely */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {(project.tags || []).map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs font-mono bg-stone-800 text-purple-300 px-2.5 py-1 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-stone-800/60">
                <button
                    onClick={onProjectClick}
                    className="flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors"
                >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                </button>
                <button
                    onClick={onProjectClick}
                    className="flex items-center gap-1.5 text-sm text-stone-300 hover:text-white transition-colors"
                >
                    <GitBranch className="w-4 h-4" /> Code
                </button>
            </div>
        </div>
    );
}
