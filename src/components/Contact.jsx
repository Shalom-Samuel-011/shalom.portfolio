import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 border-t border-stone-800/80 text-center"
        >
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                    Let's build something great together.
                </h2>
                <p className="text-stone-400 mb-8 leading-relaxed">
                    Whether you have an open position, a project idea, or just
                    want to connect, feel free to drop a message.
                </p>
                <a
                    href="mailto:your.email@example.com"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-900/20"
                >
                    <Mail className="w-5 h-5" />
                    Get In Touch
                </a>
            </div>
        </section>
    );
}
