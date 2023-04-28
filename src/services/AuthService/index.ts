import { api } from "../api";
import { IAuth } from "./types";

async function login({ email, password }: IAuth) {
    const response = await api.post("/login", { email, password });

    return response.data
}

const AuthService = { login }

export default AuthService