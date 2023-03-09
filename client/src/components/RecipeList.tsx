import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRecipes } from '../redux/actions';
import { RootState } from '../redux/store';
import LikeAction from './LikeAction';

const RecipeList = () => {

    const { recipes } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getRecipes());
    }, [])

    return (
        <List>
            {recipes.map((recipe) => (
                <div>
                    <ListItem
                        key={recipe._id}
                        secondaryAction={
                            <LikeAction recipe={recipe}/>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar alt={recipe.name} src={recipe.image}/>
                        </ListItemAvatar>
                        <ListItemText
                            onClick={() => navigate(`/${recipe._id}`)}
                            primary={recipe.name}
                            secondary={
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Typography component={'span'}>{recipe.user?.username}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component={'span'} fontWeight='bold'>{recipe.category?.name}</Typography>
                                </Grid>
                            </Grid>}
                        />
                    </ListItem>
                    <Divider/>
                </div>
            ))}
        </List>
    );
};

export default RecipeList;