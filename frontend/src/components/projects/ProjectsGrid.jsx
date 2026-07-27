import ProjectCard from "./ProjectCard";

function ProjectsGrid({ projects }) {

    return (

        <div
            className="
                mt-20
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {projects.map((project) => (

                <ProjectCard
                    key={project.id}
                    project={project}
                />

            ))}

        </div>

    );

}

export default ProjectsGrid;
