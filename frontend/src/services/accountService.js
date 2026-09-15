import api from "./api";

const getAuthHeader = () => ({
    headers: { 
        Authorization: `Bearer ${localStorage.getItem("token")}` 
    }
});

export const changeUsername = (newUsername) =>
    api.put(
        "/api/account/username",
        { newUsername },
        getAuthHeader()
    );

export const changePassword = (currentPassword, newPassword) =>
    api.put(
        "/api/account/password",
        {
            currentPassword,
            newPassword
        },
        getAuthHeader()
    );
