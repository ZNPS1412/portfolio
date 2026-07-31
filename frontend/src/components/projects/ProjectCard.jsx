import Card from "../common/Card";
import ProjectWindow from "./ProjectWindow";
import ProjectBadges from "./ProjectBadges";
import ProjectLinks from "./ProjectLinks";
import Reveal from "../common/Reveal";

function ProjectCard({ project }) {

    return (

        <Card className="group overflow-hidden p-0">

            <Reveal>
            <ProjectWindow>

                <img
                    src={project.image}
                    alt={project.title}
                    className="
                        h-50
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.03]
                    "
                />

            </ProjectWindow>
            </Reveal>

            <div className="p-6">

                <Reveal>
                <h3 className="text-2xl font-bold text-white">
                    {project.title}
                </h3>
                </Reveal>

                <Reveal>
                <p className=" mt-4 text-slate-400 leading-7">
                    {project.description}
                </p>
                </Reveal>

                <ProjectBadges
                    technologies={project.technologies}
                />

                <ProjectLinks
                    project={project}
                />

            </div>

        </Card>

    );

}

export default ProjectCard;
