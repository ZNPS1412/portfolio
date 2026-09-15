import api from "./api";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export const sendMessage = (message) => api.post("/api/contact", message);

export const getMessages = () => api.get("/api/contact", getAuthHeader());

export const deleteMessage = (id) => api.delete(`/api/contact/${id}`, getAuthHeader());
