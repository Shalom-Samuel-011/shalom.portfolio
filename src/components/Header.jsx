import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-950/90 border-b border-stone-800/80 w-full">
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-purple-400 font-bold text-lg tracking-wider"
                >
                    <Code2 className="w-5 h-5" />
                    <span className="uppercase">shalom.portfolio</span>
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
                    <a
                        href="#about"
                        className="hover:text-purple-400 transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-purple-400 transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-purple-400 transition-colors"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-5 py-2 rounded-full transition-all text-xs uppercase tracking-wider"
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-stone-300 hover:text-white p-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-stone-900 border-b border-stone-800 px-6 py-6 flex flex-col gap-4 text-stone-300 font-medium text-base"
                    >
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-purple-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-purple-400 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-purple-400 transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2.5 rounded-xl transition-all text-center text-xs uppercase tracking-wider mt-2"
                        >
                            Contact
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
