import LoginForm from "../components/auth/LoginForm";

function Login() {

    return (

        <main
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-slate-950
                px-6
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                "
            >

                <LoginForm />

            </div>

        </main>

    );

}

export default Login;
