import api from "./api";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export const uploadImage = (file) => {
    const formData = new FormData();

    formData.append("file", file);

    return api.post("/api/upload", formData, getAuthHeader());
};
