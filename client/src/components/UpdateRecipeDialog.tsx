import { Edit } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RecipeModel } from '../models';
import { getCategories, updateRecipe } from '../redux/actions';
import { RootState } from '../redux/store';
// @ts-ignore
import FileBase from 'react-file-base64';

const UpdateRecipeDialog = ({ recipe }: { recipe: RecipeModel }) => {

    const { name, body, image, duration, tip } = recipe

    const [state, setState] = useState(
        {
            open: false,
            recipe: {
                name,
                image,
                body,
                duration,
                tip,
                category: ''
            }
        }
    );
    const { categories } = useSelector((state: RootState) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const onOpen = () => {
        setState({ ...state, open: !state.open});
    };

    const onSubmit = () => {
        dispatch(updateRecipe(recipe._id, state.recipe));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Edit />
            </IconButton>
            <Dialog open={state.open} onClose={onOpen}>
                <DialogTitle>{t('recipe.update.title', { recipe: recipe.name })}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField type='text' label={t('recipes.fields.name')} value={state.recipe.name} onChange={(e: any) => setState({ ...state, recipe: { ...state.recipe, name: e.target.value }})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>{t('recipes.fields.image')}</InputLabel>
                            <FileBase label={t('recipes.fields.image')} type='file' multiple={false} onDone={({ base64 }: { base64: any }) => setState({ ...state, recipe: { ...state.recipe, image: base64 } })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='text' label={t('recipes.fields.body')} value={state.recipe.body} multiline onChange={(e: any) => setState({ ...state, recipe: { ...state.recipe, body: e.target.value }})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Select fullWidth label={t('recipes.fields.category')} onChange={(e: any) => setState({ ...state, recipe: { ...state.recipe, category: String(e.target.value) } })}>
                                {categories.map((category) => (
                                    <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='text' value={state.recipe.duration} label={t('recipes.fields.duration')} onChange={(e) => setState({ ...state, recipe: { ...state.recipe, duration: e.target.value }})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type='text' value={state.recipe.tip} label={t('recipes.fields.tip')}  multiline onChange={(e) => setState({ ...state, recipe: { ...state.recipe, tip: e.target.value }})}/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onOpen}>{t('common.cancel')}</Button>
                    <Button onClick={onSubmit}>{t('common.submit')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UpdateRecipeDialog;