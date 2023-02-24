import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeModel } from '../models';
import { getProfile, likeRecipe, unlikeRecipe } from '../redux/actions';
import { RootState } from '../redux/store';

const LikeAction = ({ recipe }: { recipe: RecipeModel }) => {

    const [state, setState] = useState(
        {
            like: false
        }
    );
    const { profile } = useSelector((state: RootState) => state);
    const user = localStorage.getItem('token');
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getProfile());
        if (recipe.likes?.includes(profile)) setState({ ...state, like: true });
        else setState({ ...state, like: false });
    }, [recipe.likes, state.like]);

    const onLike = () => {
        dispatch(likeRecipe(recipe._id!));
    };

    const onUnlike = () => {
        dispatch(unlikeRecipe(recipe._id!));
    };

    return (
        <Grid container>
            <Grid item>
                <IconButton onClick={state.like ? onUnlike : onLike}>
                    {state.like ? <Favorite/> : <FavoriteBorder/>}
                </IconButton>
            </Grid>
            <Grid item>
                <Typography>{recipe.likes?.length}</Typography>
            </Grid>
        </Grid>
    );
};

export default LikeAction;