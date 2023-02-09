import axios from "axios";
import { LoginDto, RegisterDto } from "../dto";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return req;
});

export const register = (data: RegisterDto) => api.post('auth/register', data);
export const login = (data: LoginDto) => api.post('auth/login', data);