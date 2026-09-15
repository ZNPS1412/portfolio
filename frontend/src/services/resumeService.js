import api from "./api";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export const uploadResume = (language, file) => {
    const formData = new FormData();

    formData.append("language", language);
    formData.append("file", file);

    return api.post("/api/resume", formData, getAuthHeader());
};

export const getResume = (language) => api.get(`/api/resume/${language}`);

export const downloadResume = (language) =>  `${import.meta.env.VITE_API_URL}/api/resume/download/${language}`;
