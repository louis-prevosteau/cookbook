import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/actions';

const Register = () => {

    const [state, setState] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();
    const navigate = useNavigate()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(register(state, navigate));
    };

    return (
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component={'h1'} variant='h5'>{t('auth.register.title')}</Typography>
            <Box component='form' onSubmit={onSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField name='username' type="text" label={t('auth.fields.username')} required onChange={(e) => setState({ ...state, username: e.target.value })} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name='email' type="text" label={t('auth.fields.email')} required onChange={(e) => setState({ ...state, email: e.target.value })} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name='password' type="password" label={t('auth.fields.password')} required onChange={(e) => setState({ ...state, password: e.target.value })} fullWidth/>
                    </Grid>
                </Grid>
                <Button type='submit' fullWidth sx={{ mt: 3, mb: 2 }}>{t('auth.register.title')}</Button>
            </Box>
        </Box>
    );
};

export default Register;