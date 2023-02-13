export class RegisterModel {
    username!: string;
    email!: string;
    password!: string;
    role?: string;
};

export class LoginModel {
    email!: string;
    password!: string;
};