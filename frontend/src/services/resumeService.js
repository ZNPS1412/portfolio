import api from "./api";

const API_URL = "http://localhost:8080/api/resume";

const getAuthHeader = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

});

export const uploadResume = (language, file) => {

    const formData = new FormData();

    formData.append("language", language);

    formData.append("file", file);

    return api.post(API_URL, formData, getAuthHeader());

};

export const getResume = (language) => api.get(`${API_URL}/${language}`);
