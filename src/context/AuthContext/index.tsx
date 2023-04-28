import { createContext, useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { IAuthProvider, IContext, IAuth } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IAuth | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) setUser(user);
    }, []);

    async function authenticate(email: string, password: string) {
        const response = await AuthService.login({ email, password });

        const payload = { token: response.token, email };
        setUser(payload);
        setUserLocalStorage(payload);
    }

    async function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
