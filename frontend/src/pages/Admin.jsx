import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import { logout } from "../services/authService";
import ProjectForm from "../components/admin/ProjectForm";
import ProjectTable from "../components/admin/ProjectTable";
import ResumeManager from "../components/admin/ResumeManager";
import ContactMessages from "../components/admin/ContactMessages";
import AccountSettings from "../components/admin/AccountSettings";

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

    const handleLogout = () => {

        logout();

        window.location.href = "/login";

    };

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

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <div>

                        <h1 className="text-4xl font-bold">
                            Project Admin
                        </h1>

                        <p className="mt-2 text-slate-400">
                            Manage portfolio projects.
                        </p>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="
                            rounded-xl
                            border
                            border-red-400/30
                            px-5
                            py-3
                            font-medium
                            text-red-400
                            transition
                            hover:bg-red-400/10
                        "
                    >
                        Logout
                    </button>

                </div>

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

                <ResumeManager />

                <ContactMessages />

                <AccountSettings />

            </div>

        </main>

    );

}

export default Admin;
