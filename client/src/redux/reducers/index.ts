import { combineReducers } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./AuthenticationReducer";
import { CategoriesReducer } from "./CategoryReducer";

export default combineReducers(
    {
        auth: AuthenticationReducer,
        categories: CategoriesReducer,
    }
);