import Section from "../common/Section";
import profileImage from "../../assets/profile/profile.png";
import Reveal from "../common/Reveal";
import { downloadResume } from "../../services/resumeService";

function About() {

    return (
        
        <Section
            id="about"
            variant="light"
            glow="violet"
        >

            <div className="grid gap-16 md:grid-cols-2">

                {/* Left */}
                <div className="flex items-center justify-center">

                <Reveal>

                    <div
                        className="
                            rounded-full
                            bg-linear-to-br
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
                    
                </Reveal>

                </div>

                {/* Right */}
                <div>

                    <Reveal>
                    <p className="font-semibold uppercase tracking-widest text-blue-400">
                        About Me
                    </p>
                    </Reveal>

                    <Reveal>
                    <h2 className="mt-3 text-5xl font-bold">
                        Software Developer
                    </h2>
                    </Reveal>

                    <Reveal>
                    <p className="mt-8 text-lg leading-8 text-slate-400">

                        I enjoy building secure, scalable, and modern web
                        applications using Java, Spring Boot, React,
                        PostgreSQL, Docker, and REST APIs.

                    </p>
                    </Reveal>

                    <Reveal>
                    <p className="mt-6 text-lg leading-8 text-slate-400">

                        I graduated with First Class Honours in Computer
                        Science and enjoy learning new technologies through
                        practical projects.

                    </p>
                    </Reveal>

                    <Reveal>
                    <div className="mt-10 grid grid-cols-2 gap-8">

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
                    </Reveal>

                    <Reveal>
                    <div className="mt-14 flex flex-wrap gap-4">

                        <a
                            href={downloadResume("EN")}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                rounded-full
                                bg-cyan-500
                                px-5
                                py-3
                                font-medium
                                text-slate-950
                                transition-all

                                hover:bg-cyan-400
                                hover:scale-105
                            "
                        >
                            📄 EN | English Resume
                        </a>

                        <a
                            href={downloadResume("JP")}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                rounded-full
                                border
                                border-cyan-500
                                px-5
                                py-3
                                font-medium
                                text-cyan-400
                                transition-all

                                hover:bg-cyan-500
                                hover:text-slate-950
                                hover:scale-105
                            "
                        >
                            📄 JP | Japanese Resume
                        </a>

                    </div>
                    </Reveal>

                </div>

            </div>

        </Section>
    );
}

export default About;
