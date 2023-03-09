import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, TextField, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { RecipeModel } from '../models';
import { createIngredient } from '../redux/actions';

const AddIngredientDialog = ({ recipe }: { recipe: RecipeModel }) => {

    const [state, setState] = useState(
        {
            open: false,
            ingredient: {
                name: '',
                quantity: 0,
                unit: ''
            }
        }
    );
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const onOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const onSubmit = () => {
        dispatch(createIngredient({ ...state.ingredient, recipe: recipe._id }));
    };

    return (
        <div>
            <Tooltip title={t('recipe.ingredients.create.title', { recipe: recipe.name })} placement='right' arrow>
                <IconButton onClick={onOpen}>
                    <Add />
                </IconButton>
            </Tooltip>
            <Dialog open={state.open} onClose={onOpen}>
                <DialogTitle>{t('recipe.ingredients.create.title', { recipe: recipe.name })}</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <TextField type='text' label={t('recipe.ingredients.fields.name')} onChange={(e) => setState({ ...state, ingredient: { ...state.ingredient, name: e.target.value } })} />
                        <TextField type='number' label={t('recipe.ingredients.fields.quantity')} onChange={(e) => setState({ ...state, ingredient: { ...state.ingredient, quantity: Number(e.target.value) } })} />
                        <TextField type='text' label={t('recipe.ingredients.fields.unit')} onChange={(e) => setState({ ...state, ingredient: { ...state.ingredient, unit: e.target.value } })} />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onOpen}>{t('common.cancel')}</Button>
                    <Button onClick={onSubmit}>{t('common.submit')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddIngredientDialog;