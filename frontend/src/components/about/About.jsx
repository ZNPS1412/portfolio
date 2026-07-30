import Section from "../common/Section";
import profileImage from "../../assets/profile/profile.png";

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
        
        <Section
            id="about"
            variant="light"
            glow="violet"
        >

            <div className="grid gap-16 md:grid-cols-2">

                {/* Left */}
                <div className="flex items-center justify-center">

                    <div
                        className="
                            rounded-full
                            bg-gradient-to-br
                            from-cyan-500
                            via-blue-500
                            to-violet-500
                            p-1
                        "
                    >

                        <div
                            className="
                                h-80
                                w-80
                                overflow-hidden
                                rounded-full
                                bg-slate-900
                            "
                        >

                            <img
                                src={profileImage}
                                alt="Zarni Paing Sett"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />

                        </div>

                    </div>

                </div>

                {/* Right */}
                <div>

                    <p className="font-semibold uppercase tracking-widest text-blue-400">
                        About Me
                    </p>

                    <h2 className="mt-3 text-5xl font-bold">
                        Software Developer
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

        </Section>
    );
}

export default About;
