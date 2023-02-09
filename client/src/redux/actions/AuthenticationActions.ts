import { Dispatch } from 'redux';
import * as api from '../../api';
import { LoginDto, RegisterDto } from '../../dto';
import { AUTH } from '../../constants/ActionsTypes';
import { NavigateFunction } from 'react-router-dom';

export const register = (registerData: RegisterDto, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    const { data } = await api.register(registerData);
    dispatch(
        {
            type: AUTH,
            paylaod: data
        }
    );
    navigate('/');
};

export const login = (loginData: LoginDto, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    const { data } = await api.login(loginData);
    dispatch(
        {
            type: AUTH,
            paylaod: data
        }
    );
    navigate('/');
};