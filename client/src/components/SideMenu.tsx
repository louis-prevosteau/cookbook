import { AccountCircle, Login, Logout, MenuBook } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const logout = () => localStorage.clear();

    return (
        <Drawer anchor='right' variant='permanent' open={false}>
            <List>
            <ListItem>
                <Tooltip title={t('menu.book')} placement='left' arrow>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemIcon>
                            <MenuBook/>
                        </ListItemIcon>
                    </ListItemButton>
                </Tooltip>
            </ListItem>
                {localStorage.getItem('token') ? (
                    <div>
                        <ListItem>
                            <Tooltip title={t('menu.profile')} placement='left' arrow>
                                <ListItemButton onClick={() => navigate('/profile')}>
                                    <ListItemIcon>
                                        <AccountCircle/>
                                    </ListItemIcon>
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <Logout/>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </div>
                ) : (
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/auth')}>
                            <ListItemIcon>
                                <Login/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Drawer>
    );
};

export default SideMenu;