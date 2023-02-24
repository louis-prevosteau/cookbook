export interface RegisterModel {
    username: string;
    email: string;
    password: string;
    role?: string;
};

export interface LoginModel {
    email: string;
    password: string;
};