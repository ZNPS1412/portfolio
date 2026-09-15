import api from "./api";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export const getProjects = () => api.get("/api/projects");

export const createProject = (project) => api.post("/api/projects", project, getAuthHeader());

export const deleteProject = (id) => api.delete(`/api/projects/${id}`, getAuthHeader());

export const updateProject = (id, project) => api.put(`/api/projects/${id}`, project, getAuthHeader());

export const sendMessage = (message) => api.post("/api/projects", message);

export const getMessages = () => api.get("/api/projects", getAuthHeader());

export const deleteMessage = (id) => api.delete(`/api/projects/${id}`, getAuthHeader());
