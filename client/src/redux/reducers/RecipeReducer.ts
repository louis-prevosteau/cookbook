import { AnyAction } from "@reduxjs/toolkit";
import { CREATE_RECIPE, DELETE_RECIPE, GET_RECIPE, GET_RECIPES, UPDATE_RECIPE } from "../../constants/ActionsTypes";
import { RecipeModel } from "../../models";

export const RecipesReducer = (state: RecipeModel[] = [], action: AnyAction): RecipeModel[] => {
    switch (action.type) {
        case GET_RECIPES:
            return action.payload;
        case CREATE_RECIPE:
            return [...state, action.payload];
        case UPDATE_RECIPE:
            return state.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case DELETE_RECIPE:
            return state.filter((recipe) => recipe._id !== action.payload._id);
        default:
            return state;
    }
};

export const RecipeReducer = (state: RecipeModel = { _id: '', name: '', body: '', image: '', category: {}, duration: '' }, action: AnyAction): RecipeModel => {
    switch (action.type) {
        case GET_RECIPE:
            return action.payload;
        default:
            return state;
    }
};