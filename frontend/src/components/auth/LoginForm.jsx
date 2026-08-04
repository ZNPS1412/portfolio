import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login({ username, password });

            const authData = response.data;

            localStorage.setItem("token", authData.token);

            localStorage.setItem("role", authData.role);

            localStorage.setItem("username", authData.username);

            navigate("/admin");

        } catch (error) {
            console.error(error);
            alert("Invalid username or password.");
        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
            "
        >

            <h1
                className="
                    mb-8
                    text-center
                    text-3xl
                    font-bold
                    text-white
                "
            >
                Admin Login
            </h1>

            <div className="space-y-6">

                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) =>
                        setUsername(
                            e.target.value
                        )
                    }
                    className="
                        w-full
                        rounded-lg
                        bg-slate-900
                        p-3
                        text-white
                    "
                />

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                    className="
                        w-full
                        rounded-lg
                        bg-slate-900
                        p-3
                        text-white
                    "
                />

                <button
                    type="submit"
                    className="
                        w-full
                        rounded-lg
                        bg-cyan-500
                        py-3
                        font-semibold
                        text-slate-950
                    "
                >
                    Login
                </button>

            </div>

        </form>

    );

}

export default LoginForm;
