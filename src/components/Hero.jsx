import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="about"
            className="py-20 sm:py-28 md:py-36 flex flex-col items-start w-full"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-stone-900 border border-stone-800 text-purple-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
            >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for Full-Time Roles</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-5xl"
            >
                Building high-performance <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600">
                    web applications.
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-stone-400 max-w-3xl mb-10 leading-relaxed"
            >
                I’m a Full-Stack Web Developer specializing in clean React
                architectures, fast Tailwind interfaces, and robust Node.js
                backend services.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
                <a
                    href="#projects"
                    className="bg-purple-600 text-white font-bold px-7 py-3.5 rounded-full hover:bg-purple-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 text-center"
                >
                    Explore Work <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-stone-800 bg-stone-900/50 hover:bg-stone-800 text-stone-200 font-semibold px-7 py-3.5 rounded-full transition-colors text-center"
                >
                    Download CV
                </a>
            </motion.div>
        </section>
    );
}
