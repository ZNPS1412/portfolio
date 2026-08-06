import api from "./api";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (credentials) => {

    const response = await api.post(
        `${API_URL}/login`,
        credentials
    );

    return response.data;

};
