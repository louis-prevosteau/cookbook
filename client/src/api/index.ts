import axios from "axios";
import { CategoryModel, LoginModel, UserModel, RegisterModel, IngredientModel, RecipeModel } from "../models";

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

export const getProfile = () => api.get('users/profile');
export const updateProfile = (data: UserModel) => api.patch('users/profile', data);

export const getIngredients = (recipe: string) => api.get(`ingredients/${recipe}`);
export const createIngredient = (data: IngredientModel) => api.post('ingredients', data);
export const updateIngredient = (id: string, data: IngredientModel) => api.patch(`ingredients/${id}`, data);
export const deleteIngredient = (id: string) => api.delete(`ingredients/${id}`);

export const getRecipes = (category: string) => api.get(category !== '' ? `recipes?category=${category}` : 'recipes');
export const getRecipe = (id: string) => api.get(`recipes/${id}`);
export const createRecipe = (data: RecipeModel) => api.post('recipes', data);
export const updateRecipe = (id: string, data: RecipeModel) => api.patch(`recipes/${id}`, data);
export const deleteRecipe = (id: string) => api.delete(`recipes/${id}`);
export const likeRecipe = (id: string) => api.patch(`recipes/${id}/like`);
export const unlikeRecipe = (id: string) => api.patch(`recipes/${id}/unlike`);
