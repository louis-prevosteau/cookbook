import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';

const Login = () => {
    const [state, setState] = useState(
        {
            email: '',
            password: ''
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(state));
    };

    return (
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component={'h1'} variant='h5'>{t('auth.login.title')}</Typography>
            <Box component='form' onSubmit={onSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField name='email' type="text" label={t('auth.fields.email')} required onChange={(e) => setState({ ...state, email: e.target.value })} fullWidth/>
                        <TextField name='password' type="password" label={t('auth.fields.password')} required onChange={(e) => setState({ ...state, password: e.target.value })} fullWidth/>
                    </Grid>
                </Grid>
                <Button type='submit' fullWidth sx={{ mt: 3, mb: 2 }}>{t('auth.login.title')}</Button>
            </Box>
        </Box>
    );
};

export default Login;