import ProjectWindow from "./ProjectWindow";

function ProjectImage({ project }) {

    return (

        <ProjectWindow>

            <img
                src={project.image}
                alt={project.title}
                className="
                    h-auto
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                "
            />

        </ProjectWindow>

    );

}

export default ProjectImage;
