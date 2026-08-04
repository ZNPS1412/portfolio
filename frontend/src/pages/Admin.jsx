import { useEffect, useState } from "react";
import ProjectForm from "../components/admin/ProjectForm";
import ProjectTable from "../components/admin/ProjectTable";
import { getProjects } from "../services/projectService";

function Admin() {

    const [projects, setProjects] = useState([]);

    const [editingProject, setEditingProject] = useState(null);
    
    const loadProjects = async () => {

        try {

            const response = await getProjects();

            setProjects(response.data.data.items);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadProjects();

    }, []);

    return (

        <main
            className="
                min-h-screen
                bg-slate-950
                px-6
                py-24
                text-white
            "
        >

            <div className="mx-auto max-w-4xl">

                <h1
                    className="
                        text-4xl
                        font-bold
                    "
                >
                    Project Admin
                </h1>

                <p className="mt-5 mb-8 text-slate-400">
                    Manage portfolio projects.
                </p>

                <ProjectForm
                    editingProject={editingProject}
                    setEditingProject={setEditingProject}
                    onProjectCreated={loadProjects}
                />

                <ProjectTable
                    projects={projects}
                    onProjectDeleted={loadProjects}
                    onEdit={setEditingProject}
                />

            </div>

        </main>

    );

}

export default Admin;
