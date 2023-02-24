import { CategoryModel } from "./CategoryModel";
import { UserModel } from "./UserModel";

export interface RecipeModel {
    _id?: string;
    name?: string;
    image?: string;
    body?: string;
    category?: CategoryModel;
    duration?: string;
    tip?: string;
    user?: UserModel;
    likes?: UserModel[];
};