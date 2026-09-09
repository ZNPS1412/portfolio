import { useState } from "react";
import { changeUsername, changePassword } from "../../services/accountService";
import { logout } from "../../services/authService";

function AccountSettings() {

    const [newUsername, setNewUsername] = useState("");

    const [currentPassword, setCurrentPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [usernameMessage, setUsernameMessage] = useState("");

    const [passwordMessage, setPasswordMessage] = useState("");

    const [usernameError, setUsernameError] = useState("");

    const [passwordError, setPasswordError] = useState("");

    const [updatingUsername, setUpdatingUsername] = useState(false);

    const [updatingPassword, setUpdatingPassword] = useState(false);

    const handleUsernameSubmit = async (e) => {

        e.preventDefault();

        setUsernameMessage("");
        setUsernameError("");
        setUpdatingUsername(true);

        try {

            const response = await changeUsername(newUsername);

            setUsernameMessage(
                response.data.message ||
                "Username changed successfully. Please log in again."
            );

            setNewUsername("");

            setTimeout(() => {

                logout();

                window.location.href = "/login";

            }, 1500);

        } catch (error) {

            setUsernameError(
                error.response?.data?.message ||
                "Failed to change username."
            );

        } finally {

            setUpdatingUsername(false);

        }

    };

    const handlePasswordSubmit = async (e) => {

        e.preventDefault();

        setPasswordMessage("");
        setPasswordError("");

        if (newPassword !== confirmPassword) {

            setPasswordError("New passwords do not match.");

            return;

        }

        setUpdatingPassword(true);

        try {

            const response = await changePassword(
                currentPassword,
                newPassword
            );

            setPasswordMessage(
                response.data.message ||
                "Password changed successfully. Please log in again."
            );

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

            setTimeout(() => {

                logout();

                window.location.href = "/login";

            }, 1500);

        } catch (error) {

            setPasswordError(
                error.response?.data?.message ||
                "Failed to change password."
            );

        } finally {

            setUpdatingPassword(false);

        }

    };

    return (

        <section className="mb-10">

            <h2 className="mb-6 text-2xl font-bold">
                Account Settings
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                <form
                    onSubmit={handleUsernameSubmit}
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                    "
                >

                    <h3 className="mb-4 text-xl font-semibold">
                        Change Username
                    </h3>

                    <input
                        required
                        type="text"
                        value={newUsername}
                        onChange={(e) =>
                            setNewUsername(e.target.value)
                        }
                        placeholder="New username"
                        className="
                            mb-4
                            w-full
                            rounded-lg
                            bg-slate-900
                            p-3
                            text-white
                        "
                    />

                    {usernameMessage && (
                        <p className="mb-4 text-green-400">
                            {usernameMessage}
                        </p>
                    )}

                    {usernameError && (
                        <p className="mb-4 text-red-400">
                            {usernameError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={updatingUsername}
                        className="
                            w-full
                            rounded-lg
                            bg-cyan-500
                            py-3
                            font-semibold
                            text-slate-950
                            transition
                            hover:bg-cyan-400
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        {updatingUsername
                            ? "Updating..."
                            : "Change Username"}
                    </button>

                </form>

                <form
                    onSubmit={handlePasswordSubmit}
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                    "
                >

                    <h3 className="mb-4 text-xl font-semibold">
                        Change Password
                    </h3>

                    <div className="space-y-4">

                        <input
                            required
                            type="password"
                            value={currentPassword}
                            onChange={(e) =>
                                setCurrentPassword(e.target.value)
                            }
                            placeholder="Current password"
                            className="
                                w-full
                                rounded-lg
                                bg-slate-900
                                p-3
                                text-white
                            "
                        />

                        <input
                            required
                            type="password"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                            placeholder="New password"
                            className="
                                w-full
                                rounded-lg
                                bg-slate-900
                                p-3
                                text-white
                            "
                        />

                        <input
                            required
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            placeholder="Confirm new password"
                            className="
                                w-full
                                rounded-lg
                                bg-slate-900
                                p-3
                                text-white
                            "
                        />

                    </div>

                    {passwordMessage && (
                        <p className="mt-4 text-green-400">
                            {passwordMessage}
                        </p>
                    )}

                    {passwordError && (
                        <p className="mt-4 text-red-400">
                            {passwordError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={updatingPassword}
                        className="
                            mt-4
                            w-full
                            rounded-lg
                            bg-cyan-500
                            py-3
                            font-semibold
                            text-slate-950
                            transition
                            hover:bg-cyan-400
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        {updatingPassword
                            ? "Updating..."
                            : "Change Password"}
                    </button>

                </form>

            </div>

        </section>

    );

}

export default AccountSettings;
