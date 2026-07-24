import Logo from "../Logo";
import useActiveSection from "../../hooks/useActiveSection";

function Navbar() {

    const activeSection = useActiveSection();
    
    const links = [
        {
            id: "home",
            label: "Home",
        },

        {
            id: "about",
            label: "About",
        },

        {
            id: "skills",
            label: "Skills",
        },

        {
            id: "projects",
            label: "Projects",
        },

        {
            id: "contact",
            label: "Contact",
        },

    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

                <Logo />

                <nav className="flex gap-8 text-slate-300">

                    {
                        links.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={
                                    activeSection === link.id
                                        ? "text-blue-400 font-semibold"
                                        : "text-slate-300 hover:text-blue-400"
                                }
                            >
                                {link.label}
                            </a>

                        ))
                    }

                </nav>

            </div>

        </header>
    );
}

export default Navbar;
