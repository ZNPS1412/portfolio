import { deleteProject } from "../../services/projectService";

function ProjectTable({ 
    projects, 
    onProjectDeleted, 
    onEdit 
}) {

    const handleDelete = async (id) => {

        const confirmed = window.confirm("Delete this project?");

        if (!confirmed) {
            return;
        }

        try {

            await deleteProject(id);

            onProjectDeleted?.();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="mt-10">

            <h2 className="mb-6 text-2xl font-bold">
                Projects
            </h2>

            <div className="space-y-4">

                {projects.map((project) => (

                    <div
                        key={project.id}
                        className="
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                        "
                    >

                        <h3 className="text-lg font-semibold">
                            {project.title}
                        </h3>

                        <p
                            className="mt-2 text-slate-400">
                            {project.description}
                        </p>
                    
                        <div className="mt-4 flex gap-3">

                            <button
                                onClick={() => onEdit(project)}
                                className="
                                    rounded-lg
                                    bg-amber-500
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-slate-950
                                "
                            >
                                Edit
                            </button>

                            <button
                                onClick={() =>
                                    handleDelete(project.id)
                                }
                                className="
                                    rounded-lg
                                    bg-red-500
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-white
                                "
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ProjectTable;
