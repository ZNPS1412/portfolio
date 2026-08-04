import { useEffect, useState } from "react";
import { createProject, updateProject } from "../../services/projectService";

function ProjectForm({ editingProject, setEditingProject, onProjectCreated }) {

    const [formData, setFormData] = useState({

        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveDemoUrl: "",
        imageUrl: "",
        featured: false,

    });

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({

            ...formData,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setError("");
            setSuccess("");

            if (editingProject) {

                await updateProject(editingProject.id, formData);

                setSuccess("Project updated successfully.");

            } else {

                await createProject(formData);

                setSuccess("Project created successfully.");

            }

            setFormData({

                title: "",
                description: "",
                technologies: "",
                githubUrl: "",
                liveDemoUrl: "",
                imageUrl: "",
                featured: false,

            });

            onProjectCreated?.();

        } catch (error) {

            setSuccess("");

            setError("Operation failed.");

            console.error(error);

        }

    };

    useEffect(() => {

        if (!editingProject) {
            return;
        }

        setFormData({

            title: editingProject.title || "",

            description: editingProject.description || "",

            technologies: editingProject.technologies || "",

            githubUrl: editingProject.githubUrl || "",

            liveDemoUrl: editingProject.liveDemoUrl || "",

            imageUrl: editingProject.imageUrl || "",

            featured: editingProject.featured || false,

        });

    }, [editingProject]);

    const resetForm = () => {

        setFormData({

            title: "",
            description: "",
            technologies: "",
            githubUrl: "",
            liveDemoUrl: "",
            imageUrl: "",
            featured: false,

        });

        setSuccess("");
        setError("");

        setEditingProject(null);

    };


    return (

        <form
            onSubmit={handleSubmit}
            className="
                mb-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
            "
        >

            <h2 className="mb-6 text-2xl font-bold">
                Create Project
            </h2>

            <div className="grid gap-4">

                <input
                    required
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Project Title"
                    className="rounded-lg bg-slate-900 p-3"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    rows="4"
                    className="rounded-lg bg-slate-900 p-3"
                />

                <input
                    required
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder="Technologies (comma-separated)"
                    className="rounded-lg bg-slate-900 p-3"
                />

                <input
                    required
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    placeholder="GitHub URL"
                    className="rounded-lg bg-slate-900 p-3"
                />

                <input
                    name="liveDemoUrl"
                    value={formData.liveDemoUrl}
                    onChange={handleChange}
                    placeholder="Live Demo URL"
                    className="rounded-lg bg-slate-900 p-3"
                />

                <input
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="rounded-lg bg-slate-900 p-3"
                />

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleChange}
                    />

                    Featured Project

                </label>

                {
                    success && (
                        <p className="text-green-400">
                            {success}
                        </p>
                    )
                }

                {
                    error && (
                        <p className="text-red-400">
                            {error}
                        </p>
                    )
                }

                <div className="flex gap-3">

                    <button
                        type="button"
                        onClick={resetForm}
                        className="
                            flex-1
                            rounded-lg
                            border
                            border-slate-700
                            py-3
                            font-semibold
                            text-slate-300
                            transition
                            hover:bg-slate-800
                        "
                    >
                        Clear Form
                    </button>

                    <button
                        type="submit"
                        className="
                            flex-1
                            rounded-lg
                            bg-cyan-500
                            py-3
                            font-semibold
                            text-slate-950
                        "
                    >
                        {
                            editingProject
                                ? "Update Project"
                                : "Create Project"
                        }
                    </button>

                </div>

            </div>

        </form>

    );

}

export default ProjectForm;
