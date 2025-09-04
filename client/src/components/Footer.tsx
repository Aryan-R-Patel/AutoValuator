function Footer() {
    return (
        <>
            <footer className="w-full py-6 bg-slate-900 text-gray-400 text-center mt-auto flex flex-col items-center justify-center border-t border-zinc-800">
                <span className="text-sm">
                    © 2025 Aryan Patel |{" "}
                    <a
                        href="https://github.com/Aryan-R-Patel/AutoValuator"
                        target="_blank"
                        className="underline hover:text-sky-400 transition-colors"
                    >
                        GitHub
                    </a>{" "}
                    | AutoValuator
                </span>
            </footer>
        </>
    );
}

export default Footer;
