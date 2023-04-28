import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/login");
    }, [token]);

    return children;
};
