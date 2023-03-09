import { Delete } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RecipeModel } from '../models';
import { deleteRecipe } from '../redux/actions';

const DeleteRecipeDialog = ({ recipe }: { recipe: RecipeModel }) => {

    const [state, setState] = useState(
        {
            open: false
        }
    );
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const onOpen = () => {
        setState({ ...state, open: !state.open});
    };

    const onSubmit = () => {
        dispatch(deleteRecipe(recipe._id));
        navigate('/');
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Delete />
            </IconButton>
            <Dialog open={state.open} onClose={onOpen}>
                <DialogTitle>{t('recipe.delete.title', { recipe: recipe.name })}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('recipe.delete.body', { recipe: recipe.name })}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onOpen}>{t('common.cancel')}</Button>
                    <Button onClick={onSubmit}>{t('common.submit')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteRecipeDialog;