import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { SKILLS } from "../data/portfolioData";

export default function TechStack() {
    return (
        <section id="skills" className="py-16 border-t border-brown/80">
            <div className="flex items-center gap-2 text-cream/75 text-sm font-semibold uppercase tracking-widest mb-8">
                <Terminal className="w-4 h-4 text-terracotta" />
                <span>Technologies & Ecosystem</span>
            </div>

            <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-brown/80 border border-brown hover:border-cream/50 text-cream/90 font-medium text-sm px-5 py-2.5 rounded-xl transition-all hover:text-cream"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </section>
    );
}
