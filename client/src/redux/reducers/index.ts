import { combineReducers } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./AuthenticationReducer";
import { CategoriesReducer } from "./CategoryReducer";
import { IngredientsReducer } from "./IngredientReducer";
import { RecipeReducer, RecipesReducer } from "./RecipeReducer";
import { ProfileReducer } from "./UserReducer";

export default combineReducers(
    {
        auth: AuthenticationReducer,
        categories: CategoriesReducer,
        profile: ProfileReducer,
        ingredients: IngredientsReducer,
        recipes: RecipesReducer,
        recipe: RecipeReducer,
    }
);