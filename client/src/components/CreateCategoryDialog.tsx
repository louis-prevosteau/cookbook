import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createCategory } from '../redux/actions';

const CreateCategoryDialog = () => {

    const [state, setState] = useState(
        {
            open: false,
            category: {
                name: ''
            }
        }
    );
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const onOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(createCategory(state.category));
    };

    return (
        <div>
            <IconButton onClick={onOpen}>
                <Add/>
            </IconButton>
            <Dialog open={state.open} onClose={onOpen}>
                <DialogTitle>{t('categories.create.title')}</DialogTitle>
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

export default CreateCategoryDialog;