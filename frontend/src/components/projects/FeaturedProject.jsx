import { FaCircleCheck } from "react-icons/fa6";

import Card from "../common/Card";
import ProjectImage from "./ProjectImage";
import ProjectBadges from "./ProjectBadges";
import ProjectLinks from "./ProjectLinks";
import Reveal from "../common/Reveal";

function FeaturedProject({ project }) {

    return (

        <Card className="group overflow-hidden p-0">

            <div className="grid gap-12 lg:grid-cols-2">

                <Reveal>
                <ProjectImage
                    project={project}
                />
                </Reveal>

                <div className="flex flex-col justify-center p-10">

                    <Reveal>
                    <span
                        className="
                            inline-flex
                            w-fit
                            items-center
                            rounded-full
                            border
                            border-cyan-400/20
                            bg-cyan-400/10
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-cyan-300
                        "
                    >
                        ✦ Featured Project
                    </span>
                    </Reveal>

                    <Reveal>
                    <h3
                        className="
                            mt-6
                            text-4xl
                            font-bold
                            text-white
                        "
                    >
                        {project.title}
                    </h3>
                    </Reveal>

                    <Reveal>
                    <p
                        className="
                            mt-6
                            leading-8
                            text-slate-400
                        "
                    >
                        {project.description}
                    </p>
                    </Reveal>

                    {project.highlights?.length > 0 && (

                        <div className="mt-8 space-y-4">

                            {project.highlights.map((highlight, index) => (

                                <Reveal key={`${highlight}-${index}`}>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            text-slate-300
                                        "
                                    >

                                        <FaCircleCheck
                                            className="text-cyan-400"
                                        />

                                        {highlight}

                                    </div>

                                </Reveal>

                            ))}

                        </div>

                    )}

                    <ProjectBadges
                        technologies={project.technologies}
                    />

                    <ProjectLinks
                        project={project}
                    />

                </div>

            </div>

        </Card>

    );

}

export default FeaturedProject;
