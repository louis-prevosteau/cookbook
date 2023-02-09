import { AnyAction } from "@reduxjs/toolkit";
import { AUTH } from "../../constants/ActionsTypes";

export const AuthenticationReducer = (state = null, action: AnyAction) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('token', action.payload);
            break;
        default:
            return state;
    }
};