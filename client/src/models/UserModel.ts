import { RecipeModel } from "./RecipeModel";

export interface UserModel {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    roles?: any[];
    likes?: RecipeModel[];
};