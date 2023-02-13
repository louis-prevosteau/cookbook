import axios from "axios";
import { CategoryModel, LoginModel, RegisterModel } from "../models";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return req;
});

export const register = (data: RegisterModel) => api.post('auth/register', data);
export const login = (data: LoginModel) => api.post('auth/login', data);

export const getCategories = () => api.get('categories');
export const createCategory = (data: CategoryModel) => api.post('categories', data);
export const updateCategory = (id: string, data: CategoryModel) => api.patch(`categories/${id}`, data);
export const deleteCategory = (id: string) => api.delete(`categories/${id}`);