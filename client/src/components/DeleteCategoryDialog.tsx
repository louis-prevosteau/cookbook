import { Delete } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CategoryModel } from '../models';
import { deleteCategory } from '../redux/actions';

const DeleteCategoryDialog = ({ category }: { category: CategoryModel }) => {

    const [state, setState] = useState(
        {
            open: false
        }
    );
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const onOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(deleteCategory(category._id));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Delete/>
            </IconButton>
            <Dialog open={state.open} onClose={onOpen}>
            <DialogTitle>{t('categories.delete.title', { category: category.name })}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('categories.delete.body', { category: category.name })}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onOpen}>{t('common.cancel')}</Button>
                    <Button onClick={onSubmit}>{t('common.submit')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteCategoryDialog;