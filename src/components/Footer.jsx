export default function Footer() {
    return (
        <footer className="border-t border-brown/60 py-8 text-center text-muted text-xs">
            <p>
                © {new Date().getFullYear()} • Handcrafted with React & Tailwind
                CSS
            </p>
        </footer>
    );
}
