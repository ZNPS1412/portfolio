import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

const getAuthHeader = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },

});

export const getProjects = () => axios.get(API_URL);

export const createProject = (project) => axios.post(API_URL, project, getAuthHeader());

export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`, getAuthHeader());

export const updateProject = (id, project) => axios.put( `${API_URL}/${id}`, project, getAuthHeader());
