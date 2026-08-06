import api from "./api";

const API_URL = "http://localhost:8080/api/upload";

const getAuthHeader = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
    }

});

export const uploadImage = (file) => {

    const formData = new FormData();

    formData.append("file", file);

    return api.post(API_URL, formData, getAuthHeader());

};
