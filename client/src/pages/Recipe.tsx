import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {

    const { id } = useParams();

    return (
        <Container maxWidth='sm'>
            <RecipeCard id={id as string} />
        </Container>
    );
};

export default Recipe;