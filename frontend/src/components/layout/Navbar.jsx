import Logo from "./Logo";
import useActiveSection from "../../hooks/useActiveSection";
import { navigation } from "../../data/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

    const activeSection = useActiveSection();

    const [isOpen, setIsOpen] = useState(false);

    const links = navigation;

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

                <Logo />

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        text-white
                        transition-colors
                        hover:text-cyan-400
                        md:hidden
                    "
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <nav className="hidden md:flex gap-8 text-slate-300">

                    {
                        navigation.map((link) => (
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

                {
                    isOpen && (

                        <div
                            className="
                                absolute
                                left-0
                                top-full
                                w-full
                                border-t
                                border-slate-800
                                bg-slate-900/95
                                backdrop-blur-md
                                md:hidden
                            "
                        >

                            <nav
                                className="
                                    flex
                                    flex-col
                                    px-8
                                    py-6
                                "
                            >

                                {links.map((link) => (

                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`
                                            py-3
                                            transition-colors

                                            ${
                                                activeSection === link.id
                                                    ? "font-semibold text-blue-400"
                                                    : "text-slate-300 hover:text-blue-400"
                                            }
                                        `}
                                    >
                                        {link.label}
                                    </a>

                                ))}

                            </nav>

                        </div>

                    )
                }

            </div>

        </header>
    );
}

export default Navbar;
