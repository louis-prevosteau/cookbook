import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RecipeModel } from '../models';
import { likeRecipe, unlikeRecipe } from '../redux/actions';

const LikeAction = ({ recipe }: { recipe: RecipeModel }) => {

    const [state, setState] = useState(
        {
            likes: recipe.likes
        }
    );
    const dispatch = useDispatch<any>();
    const { user } = JSON.parse(localStorage.getItem('profile') as string );

    const onLike = () => {
        dispatch(likeRecipe(recipe._id as string));
        setState({ ...state, likes: [...state.likes as [], user._id] });
    };

    const onUnlike = () => {
        dispatch(unlikeRecipe(recipe._id as string));
        setState({ ...state, likes: state.likes?.filter((id) => id !== user._id) });
    };

    return (
        <Grid container>
            <Grid item>
                <IconButton onClick={state.likes?.find((like) => like === user._id) ? onUnlike : onLike}>
                    {state.likes?.find((like) => like === user._id) ? <Favorite/> : <FavoriteBorder/>}
                </IconButton>
            </Grid>
            <Grid item>
                <Typography>{state.likes?.length}</Typography>
            </Grid>
        </Grid>
    );
};

export default LikeAction;