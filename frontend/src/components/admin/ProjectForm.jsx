import { useState } from "react";

function ProjectForm() {

    const [formData, setFormData] = useState({

        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveDemoUrl: "",
        featured: false,

    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,

        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
        >

            <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 p-3"
            />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 p-3"
            />

            <input
                type="text"
                name="technologies"
                placeholder="Java, Spring Boot, PostgreSQL"
                value={formData.technologies}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 p-3"
            />

            <button
                type="submit"
                className="
                    rounded-lg
                    bg-cyan-500
                    px-6
                    py-3
                    font-semibold
                "
            >
                Create Project
            </button>

        </form>

    );

}

export default ProjectForm;
