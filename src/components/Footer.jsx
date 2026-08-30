export default function Footer() {
    return (
        <footer className="border-t border-stone-800/60 py-8 text-center text-stone-500 text-xs">
            <p>
                © {new Date().getFullYear()} • Handcrafted with React & Tailwind
                CSS
            </p>
        </footer>
    );
}
