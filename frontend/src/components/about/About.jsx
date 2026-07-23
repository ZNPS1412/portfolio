function About() {

    const technologies = [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Docker",
        "JWT Security",
    ];

    return (
        <section
            id="about"
            className="bg-slate-900 py-28 text-white"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-16 md:grid-cols-2">

                    {/* Left */}
                    <div className="flex items-center justify-center">

                        <div
                            className="
                                flex
                                h-80
                                w-80
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-blue-500/30
                                bg-linear-to-br
                                from-slate-800
                                to-slate-900
                                text-8xl
                            "
                        >
                            👨‍💻
                        </div>

                    </div>

                    {/* Right */}
                    <div>

                        <p className="font-semibold uppercase tracking-widest text-blue-400">
                            About Me
                        </p>

                        <h2 className="mt-3 text-5xl font-bold">
                            Full-Stack Java Developer
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-400">

                            I enjoy building secure, scalable, and modern web
                            applications using Java, Spring Boot, React,
                            PostgreSQL, Docker, and REST APIs.

                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-400">

                            I graduated with First Class Honours in Computer
                            Science and enjoy learning new technologies through
                            practical projects.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            {technologies.map((technology) => (

                                <span
                                    key={technology}
                                    className="
                                        rounded-full
                                        bg-blue-600
                                        px-4
                                        py-2
                                        font-medium
                                        transition
                                        hover:bg-blue-500
                                    "
                                >
                                    {technology}
                                </span>

                            ))}

                        </div>

                        <div className="mt-14 grid grid-cols-2 gap-8">

                            <div>
                                <h3 className="text-4xl font-bold text-blue-400">
                                    10+
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Personal Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-blue-400">
                                    5+
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Years Learning
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
