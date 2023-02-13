import { Dispatch } from '@reduxjs/toolkit';
import * as api from '../../api';
import { LoginModel, RegisterModel } from '../../models';
import { AUTH } from '../../constants/ActionsTypes';
import { NavigateFunction } from 'react-router-dom';

export const register = (registerData: RegisterModel, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    const { data, status } = await api.register(registerData);
    if (status === 200 || status === 201) {
        navigate('/');
        dispatch(
        {
            type: AUTH,
            payload: data
        });
    }
};

export const login = (loginData: LoginModel, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    const { data, status } = await api.login(loginData);
    if (status === 200 || status === 201) {
        navigate('/');
        dispatch(
        {
            type: AUTH,
            payload: data
        });
    }
};