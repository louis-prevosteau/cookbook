import { Dispatch } from '@reduxjs/toolkit';
import { CREATE_RECIPE, DELETE_RECIPE, GET_RECIPE, GET_RECIPES, UPDATE_RECIPE } from '../../constants/ActionsTypes';
import { CreateRecipeModel } from '../../models';
import * as api from './../../api';

export const getRecipes = (category = '') => async (dispatch: Dispatch) => {
    const { data } = await api.getRecipes(category);
    dispatch(
        {
            type: GET_RECIPES,
            payload: data
        }
    );
};

export const getRecipe = (id: string) => async (dispatch: Dispatch) => {
    const { data } = await api.getRecipe(id);
    dispatch(
        {
            type: GET_RECIPE,
            payload: data
        }
    );
};

export const createRecipe = (recipeData: CreateRecipeModel) => async (dispatch: Dispatch) => {
    const { data } = await api.createRecipe(recipeData);
    dispatch(
        {
            type: CREATE_RECIPE,
            payload: data
        }
    );
};

export const updateRecipe = (id: string, recipeData: CreateRecipeModel) => async (dispatch: Dispatch) => {
    const { data } = await api.updateRecipe(id, recipeData);;
    dispatch(
        {
            type: UPDATE_RECIPE,
            payload: data
        }
    );
};

export const likeRecipe = (id: string) => async (dispatch: Dispatch) => {
    const { data } = await api.likeRecipe(id);
    dispatch(
        {
            type: UPDATE_RECIPE,
            payload: data
        }
    );
};


export const unlikeRecipe = (id: string) => async (dispatch: Dispatch) => {
    const { data } = await api.unlikeRecipe(id);
    dispatch(
        {
            type: UPDATE_RECIPE,
            payload: data
        }
    );
};

export const deleteRecipe = (id: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteRecipe(id);
    dispatch(
        {
            type: DELETE_RECIPE,
            payload: data
        }
    );
};