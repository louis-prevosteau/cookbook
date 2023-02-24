import { AccountCircle, Login, Logout, MenuBook } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const BottomMenu = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const logout = () => localStorage.clear();

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={5}>
            <BottomNavigation>
                <Tooltip title={t('menu.book')} placement='top' arrow>
                    <BottomNavigationAction onClick={() => navigate('/')} icon={<MenuBook/>}/>
                </Tooltip>
                {localStorage.getItem('token') ? (
                    <>
                        <Tooltip title={t('menu.profile')} placement='top' arrow>
                            <BottomNavigationAction onClick={() => navigate('/profile')} icon={<AccountCircle/>}/>
                        </Tooltip>
                        <Tooltip title={t('menu.logout')} placement='top' arrow>
                            <BottomNavigationAction onClick={logout} icon={<Logout/>}/>
                        </Tooltip>
                    </>
                ) : (
                    <Tooltip title={t('menu.auth')} placement='top' arrow>
                            <BottomNavigationAction onClick={() => navigate('/auth')} icon={<Login/>}/>
                        </Tooltip>
                )}
            </BottomNavigation>
        </Paper>
    );
};

export default BottomMenu;