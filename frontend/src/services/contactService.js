import api from "./api";

const API_URL = "http://localhost:8080/api/contact";

const getAuthHeader = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

});

export const sendMessage = (message) => api.post(API_URL, message);

export const getMessages = () => api.get(API_URL, getAuthHeader());

export const deleteMessage = (id) => api.delete(`${API_URL}/${id}`, getAuthHeader());
