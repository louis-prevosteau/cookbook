import { Dispatch } from 'redux';
import * as api from '../../api';
import { LoginDto, RegisterDto } from '../../dto';
import { AUTH } from '../../constants/ActionsTypes';
import { NavigateFunction } from 'react-router-dom';

export const register = (registerData: RegisterDto, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
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

export const login = (loginData: LoginDto, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
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