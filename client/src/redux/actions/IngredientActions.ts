import { Dispatch } from "@reduxjs/toolkit";
import * as api from '../../api';
import { CREATE_INGREDIENT, DELETE_INGREDIENT, GET_INGREDIENTS, UPDATE_INGREDIENT } from "../../constants/ActionsTypes";
import { IngredientModel } from "../../models";

export const getIngredients = (recipe: string) => async (dispatch: Dispatch) => {
    const { data } = await api.getIngredients(recipe);
    dispatch(
        {
            type: GET_INGREDIENTS,
            payload: data
        }
    );
};

export const createIngredient = (ingredientData: IngredientModel) => async (dispatch: Dispatch) => {
    const { data } = await api.createIngredient(ingredientData);
    dispatch(
        {
            type: CREATE_INGREDIENT,
            payload: data
        }
    );
};

export const updateIngredient = (id: string, ingredientData: IngredientModel) => async (dispatch: Dispatch) => {
    const { data } = await api.updateIngredient(id, ingredientData);
    dispatch(
        {
            type: UPDATE_INGREDIENT,
            payload: data
        }
    );
};

export const deleteIngredient = (id: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteIngredient(id);
    dispatch(
        {
            type: DELETE_INGREDIENT,
            payload: data
        }
    );
};
