import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen w-full bg-stone-950 text-stone-100 font-sans selection:bg-purple-400 selection:text-stone-900 overflow-x-hidden">
            {/* Background Grid Pattern */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <Header />

            <main className="w-full px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
                <Hero />
                <TechStack />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
