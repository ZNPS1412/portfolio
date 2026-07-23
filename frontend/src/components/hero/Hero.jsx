import TypingText from "./TypingText";
import TechBadge from "./TechBadge";

function Hero() {
    
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">


            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-blue-950" />

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-125
                    w-125
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/20
                    blur-3xl
                "
            />

            <div className="relative z-10 text-center">

                <p className="mb-4 text-lg text-blue-400">
                    👋 Hello, I'm
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                    Zarni Paing Sett
                </h1>

                <TypingText />

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                    Building modern backend systems with Spring Boot,
                    secure REST APIs, PostgreSQL, Docker, and now
                    creating responsive frontend applications with React.
                </p>

                <div className="mt-12 flex justify-center gap-6">

                    <button
                        className="
                        rounded-xl
                        bg-blue-600
                        px-8
                        py-4
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:-translate-y-1
                        hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
                        active:scale-95
                        ">
                        🚀 View Projects
                    </button>

                    <button
                        className="
                        rounded-xl
                        border
                        border-slate-600
                        px-8
                        py-4
                        text-white
                        transition-all
                        duration-300
                        hover:border-blue-400
                        hover:bg-slate-900
                    ">
                        📧 Contact Me
                    </button>

                </div>

                <div className="mt-14 flex flex-wrap justify-center gap-4">

                    <TechBadge name="Java" animation="float" />
                    <TechBadge name="Spring Boot" animation="float-delay" />
                    <TechBadge name="React" animation="float-delay-2" />
                    <TechBadge name="PostgreSQL" animation="float" />
                    <TechBadge name="Docker" animation="float-delay" />
                    <TechBadge name="JWT" animation="float-delay-2" />
                    <TechBadge name="Git" animation="float" />

                </div>

            </div>

        </section>
    );
}

export default Hero;
