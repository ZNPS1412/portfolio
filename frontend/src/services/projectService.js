import api from "./api";

const API_URL = "http://localhost:8080/api/projects";

const getAuthHeader = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

});

export const getProjects = () => api.get(API_URL);

export const createProject = (project) => api.post(API_URL, project, getAuthHeader());

export const deleteProject = (id) => api.delete(`${API_URL}/${id}`, getAuthHeader());

export const updateProject = (id, project) => api.put( `${API_URL}/${id}`, project, getAuthHeader());

export const sendMessage = (message) => api.post(API_URL, message);

export const getMessages = () => api.get(API_URL, getAuthHeader());

export const deleteMessage = (id) => api.delete(`${API_URL}/${id}`, getAuthHeader());
