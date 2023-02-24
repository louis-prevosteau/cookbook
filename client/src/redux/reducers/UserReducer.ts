import { AnyAction } from "@reduxjs/toolkit";
import { GET_PROFILE, UPDATE_PROFILE } from "../../constants/ActionsTypes";
import { UserModel } from "../../models";

export const ProfileReducer = (state: UserModel = null as any, action: AnyAction): UserModel => {
    switch (action.type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return action.payload;
        default:
            return state;
    }
}