import { Button, ButtonGroup, Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () => {

    const [state, setState] = useState(
        {
            isLogin: false
        }
    );
    const { t } = useTranslation();

    const onSwitchAuth = () => {
        setState({ isLogin: !state.isLogin});
    };

    return (
        <Container component='main' maxWidth='xs'>
            <ButtonGroup variant='contained'>
                <Button disabled={!state.isLogin} onClick={onSwitchAuth}>{t('auth.register.title')}</Button>
                <Button disabled={state.isLogin}  onClick={onSwitchAuth}>{t('auth.login.title')}</Button>
            </ButtonGroup>
            <Paper elevation={5}>
                {state.isLogin ? <Login/> : <Register/>}
            </Paper>
        </Container>
    );
};

export default Auth;