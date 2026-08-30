import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group bg-stone-900/40 border border-stone-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-stone-700 hover:bg-stone-900/70 transition-all relative overflow-hidden"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        {project.category}
                    </span>
                    <div className="flex items-center gap-3 text-stone-400">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <GitBranch className="w-5 h-5" />
                        </a>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-800/60">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-stone-400 font-mono"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
