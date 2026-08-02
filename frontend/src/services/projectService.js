import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

export const createProject = (project) => axios.post(API_URL, project);

export const getProjects = () => axios.get(API_URL);

export const updateProject = (id, project) => axios.put(`${API_URL}/${id}`, project);

export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);
