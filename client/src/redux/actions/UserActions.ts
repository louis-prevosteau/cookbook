import { Dispatch } from '@reduxjs/toolkit';
import * as api from '../../api';
import { GET_PROFILE, UPDATE_PROFILE } from '../../constants/ActionsTypes';
import { UserModel } from '../../models';

export const getProfile = () => async (dispatch: Dispatch) => {
    const { data } = await api.getProfile();
    dispatch(
        {
            type: GET_PROFILE,
            payload: data
        }
    );
};

export const updateProfile = (profileData: UserModel) => async (dispatch: Dispatch) => {
    const { data } = await api.updateProfile(profileData);
    dispatch(
        {
            type: UPDATE_PROFILE,
            payload: data
        }
    );
};