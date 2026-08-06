import { useEffect, useState } from "react";
import { createProject, updateProject } from "../../services/projectService";
import { uploadImage } from "../../services/uploadService";

function ProjectForm({ editingProject, setEditingProject, onProjectCreated }) {

    const INITIAL_FORM_STATE = {
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveDemoUrl: "",
        imageUrl: "",
        featured: false,
    };

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const [uploading, setUploading] = useState(false);

    const [selectedFileName, setSelectedFileName] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);

    const [imagePreview, setImagePreview] = useState("");

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

            let imageUrl = formData.imageUrl;

            if (selectedImage) {

                setUploading(true);

                const uploadResponse = await uploadImage(selectedImage);

                imageUrl = uploadResponse.data.data;

                setUploading(false);

            }

            const payload = {
                ...formData,
                imageUrl
            };

            if (editingProject) {

                await updateProject(editingProject.id, payload);

                setSuccess("Project updated successfully.");

            } else {

                await createProject(payload);

                setSuccess("Project created successfully.");

            }

            setFormData(INITIAL_FORM_STATE);

            setSelectedImage(null);

            setSelectedFileName("");

            setImagePreview("");

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

            imageUrl: editingProject.imageUrl?.replace("http://localhost:8080/uploads/", "") || "",

            featured: editingProject.featured || false,

        });

    }, [editingProject]);

    const resetForm = () => {

        setFormData(INITIAL_FORM_STATE);
        setSelectedImage(null);
        setSelectedFileName("");
        setImagePreview("");
        setSuccess("");
        setError("");
        setEditingProject(null);

    };

    const handleImageUpload = (e) => {

        const file = e.target.files[0];

        if (!file) {
            return;
        }

        setSelectedImage(file);

        setSelectedFileName(file.name);

        setImagePreview(URL.createObjectURL(file));

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
                {
                    editingProject
                        ? "Edit Project"
                        : "Create Project"
                }
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

                <div>

                    <label
                        htmlFor="project-image"
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-slate-400
                        "
                    >
                        Project Image
                    </label>

                    <input
                        id="project-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />

                    <label
                        htmlFor="project-image"
                        className="
                            flex
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-slate-700
                            bg-slate-900
                            px-4
                            py-3
                            text-slate-300
                            transition-all

                            hover:border-cyan-400
                            hover:text-white
                        "
                    >
                        {
                            uploading
                                ? "Uploading..."
                                : "Choose Image"
                        }
                    </label>

                    {
                        selectedFileName && (
                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Selected:
                                {" "}
                                {selectedFileName}
                            </p>
                        )
                    }

                    {
                        (imagePreview || formData.imageUrl) && (

                            <div
                                className="
                                    mt-4
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-slate-800
                                    bg-slate-900
                                "
                            >

                                <img
                                    src={
                                        imagePreview
                                            ? imagePreview
                                            : `http://localhost:8080/uploads/${formData.imageUrl}`
                                    }
                                    alt="Project Preview"
                                    className="
                                        h-48
                                        w-full
                                        object-cover
                                    "
                                />

                                <div
                                    className="
                                        border-t
                                        border-slate-800
                                        px-4
                                        py-3
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            text-green-400
                                        "
                                    >
                                        ✓ Image ready
                                    </p>

                                </div>

                            </div>

                        )
                    }

                </div>

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
                            border-slate-800
                            bg-slate-900
                            py-3
                            font-medium
                            text-slate-400
                            transition-all

                            hover:border-slate-600
                            hover:text-white
                        "
                    >
                        Cancel
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
                            transition-all

                            hover:bg-cyan-400
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
