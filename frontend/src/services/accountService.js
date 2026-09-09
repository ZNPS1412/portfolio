import api from "./api";

const API_URL = "http://localhost:8080/api/account";

const getAuthHeader = () => ({

    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }

});

export const changeUsername = (newUsername) =>

    api.put(

        `${API_URL}/username`,

        { newUsername },

        getAuthHeader()

    );


export const changePassword = (currentPassword, newPassword) =>

    api.put(

        `${API_URL}/password`,

        {
            currentPassword,
            newPassword
        },

        getAuthHeader()

    );
