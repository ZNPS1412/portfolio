import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../../utils/jwtUtils";

function ProtectedRoute({ children }) {

    const token = localStorage.getItem("token");

    if (!token || isTokenExpired(token)) {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    return children;

}

export default ProtectedRoute;
