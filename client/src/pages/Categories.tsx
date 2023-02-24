import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryList from '../components/CategoryList';
import CreateCategoryDialog from '../components/CreateCategoryDialog';

const Categories = () => {
    
    const { t } = useTranslation();

    return (
        <Container maxWidth='sm'>
            <Typography component={'h2'} sx={{ textAlign: 'center', marginTop: 10 }}>{t('categories.title')}</Typography>
            <CategoryList/>
            <CreateCategoryDialog/>
        </Container>
    );
};

export default Categories;