import { Mail, Phone, GitBranch } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 border-t border-stone-800/80 text-center"
        >
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                    Let's build something great together.
                </h2>
                <p className="text-stone-400 mb-8 leading-relaxed">
                    Whether you have an open position, a project idea, or just
                    want to connect, feel free to drop a message.
                </p>

                {/* Primary CTA Button */}
                <a
                    href="mailto:shalomsamuel011@gmail.com"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-900/20 mb-8"
                >
                    <Mail className="w-5 h-5" />
                    Get In Touch
                </a>

                {/* Direct Contact Details */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-stone-300 font-medium">
                    <a
                        href="mailto:shalomsamuel011@gmail.com"
                        className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                    >
                        <Mail className="w-4 h-4 text-purple-500" />
                        shalomsamuel011@gmail.com
                    </a>

                    <span className="hidden sm:inline text-stone-600">•</span>

                    <a
                        href="tel:+918595414879"
                        className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                    >
                        <Phone className="w-4 h-4 text-purple-500" />
                        +91 8595414879
                    </a>
                </div>

                {/* GitHub Profile Icon Link */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <a
                        href="https://github.com/Shalom-Samuel-011"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-stone-900 border border-stone-800 rounded-full text-stone-400 hover:text-white hover:border-purple-500/50 transition-all flex items-center gap-2 text-xs font-mono"
                        aria-label="GitHub Profile"
                    >
                        <GitBranch className="w-5 h-5 text-purple-400" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
