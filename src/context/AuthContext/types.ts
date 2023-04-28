export interface IAuth {
    email?: string;
    token?: string;
}

export interface IContext extends IAuth{
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}