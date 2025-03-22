import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
    const { setUser } = useContext(AuthContext); // Context for authentication
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user session
        localStorage.removeItem("authToken");
        setUser(null);

        // Redirect to login page
        navigate("/login");
    }, [navigate, setUser]);

    return <p>Logging out...</p>;
};

export default Logout;
