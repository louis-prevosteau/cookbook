import { combineReducers } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./AuthenticationReducer";

export default combineReducers(
    {
        auth: AuthenticationReducer
    }
);