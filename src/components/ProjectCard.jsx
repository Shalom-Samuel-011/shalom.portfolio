import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Code2, GitBranch, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    const [showCardMessage, setShowCardMessage] = useState(false);
    const isInteractiveCard = project.isCurrentSite || project.isInDevelopment;
    const cardMessage = project.isCurrentSite ? "You're here" : "In development";

    useEffect(() => {
        if (!showCardMessage) return;

        const timeoutId = window.setTimeout(() => {
            setShowCardMessage(false);
        }, 3000);

        return () => window.clearTimeout(timeoutId);
    }, [showCardMessage]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group min-h-[360px] bg-brown/40 border border-brown/80 rounded-2xl p-8 flex flex-col justify-between hover:border-muted hover:bg-brown/70 transition-all relative overflow-hidden"
        >
            {isInteractiveCard ? (
                <button
                    type="button"
                    onClick={() => setShowCardMessage(true)}
                    aria-label={`Show ${cardMessage} message`}
                    className="absolute inset-0 z-0 cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                />
            ) : project.liveUrl ? (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} deployment`}
                    className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                />
            ) : null}

            <AnimatePresence mode="wait" initial={false}>
                {showCardMessage ? (
                    <motion.div
                        key="here-message"
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -6 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 text-cream pointer-events-none"
                    >
                        {project.isCurrentSite ? (
                            <CircleCheck className="h-10 w-10 text-terracotta" />
                        ) : (
                            <Code2 className="h-10 w-10 text-terracotta" />
                        )}
                        <span className="text-2xl font-bold">{cardMessage}</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="project-content"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex flex-1 flex-col justify-between pointer-events-none"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-terracotta bg-terracotta/15 px-3 py-1 rounded-full border border-terracotta/40">
                                    {project.category}
                                </span>
                                <div className="flex items-center gap-3 text-cream/75">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.title} source code on GitHub`}
                                        className="pointer-events-auto hover:text-cream transition-colors"
                                    >
                                        <GitBranch className="w-5 h-5" />
                                    </a>
                                    {project.liveUrl && !project.isCurrentSite && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open ${project.title} deployment`}
                                            className="pointer-events-auto hover:text-cream transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-terracotta transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-cream/75 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-brown/60">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs text-cream/75 font-mono"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
