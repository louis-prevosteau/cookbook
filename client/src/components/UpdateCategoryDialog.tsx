import { Edit } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CategoryModel } from '../models';
import { updateCategory } from '../redux/actions';

const UpdateCategoryDialog = ({ category }: { category: CategoryModel }) => {

    const [state, setState] = useState(
        {
            open: false,
            category: category
        }
    );
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const onOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateCategory(state.category._id, state.category));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Edit/>
            </IconButton>
            <Dialog open={state.open} onClose={onOpen}>
                <DialogTitle>{t('categories.update.title', { category: category.name })}</DialogTitle>
                <DialogContent>
                    <TextField label={t('categories.fields.name')} value={state.category.name} onChange={(event) => setState({ ...state, category: { ...state.category, name: event.target.value } })} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onOpen}>{t('common.cancel')}</Button>
                    <Button onClick={onSubmit}>{t('common.submit')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UpdateCategoryDialog;