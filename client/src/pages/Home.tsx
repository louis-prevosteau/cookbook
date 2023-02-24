import { Container } from '@mui/material';
import React from 'react';
import CreateRecipeDialog from '../components/CreateRecipeDialog';
import FilterDrawer from '../components/FilterDrawer';
import RecipeList from '../components/RecipeList';

const Home = () => {
    return (
        <Container maxWidth='sm'>
            <FilterDrawer/>
            <RecipeList/>
            <CreateRecipeDialog/>
        </Container>
    );
};

export default Home;