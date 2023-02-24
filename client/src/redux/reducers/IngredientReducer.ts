import { AnyAction } from "@reduxjs/toolkit";
import { CREATE_INGREDIENT, DELETE_INGREDIENT, GET_INGREDIENTS, UPDATE_INGREDIENT } from "../../constants/ActionsTypes";
import { IngredientModel } from "../../models";

export const IngredientsReducer = (state: IngredientModel[] = [], action: AnyAction): IngredientModel[] => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return action.payload;
        case CREATE_INGREDIENT:
            return [...state, action.payload];
        case UPDATE_INGREDIENT:
            return state.map((ingredient) => ingredient._id === action.payload._id ? action.payload : ingredient);
        case DELETE_INGREDIENT:
            return state.filter((ingredient) => ingredient._id !== action.payload._id)
        default:
            return state;
    }
};