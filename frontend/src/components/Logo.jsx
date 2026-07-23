import logo from "../assets/logo.svg";

function Logo() {
    return (
        <div className="flex items-center gap-3">

            <img
                src={logo}
                alt="Logo"
                className="
                    h-12
                    w-auto
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]
                "
            />

            <div>
                <h1 className="text-lg font-bold text-white">
                    Zarni Paing Sett
                </h1>

                <p className="text-xs text-slate-400">
                    Software Engineer
                </p>

            </div>

        </div>
    );
}

export default Logo;
