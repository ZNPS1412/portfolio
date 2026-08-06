import axios from "axios";

const api = axios.create();

api.interceptors.response.use(

    (response) => response,

    (error) => {

        if (error.response?.status === 401) {

            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("username");

            window.location.href = "/login";

        }

        return Promise.reject(error);

    }

);

export default api;
