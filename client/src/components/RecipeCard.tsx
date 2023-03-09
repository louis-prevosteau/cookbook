import { AccessTime, ExpandMore } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Collapse, Divider, Grid, IconButton, IconButtonProps, styled, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredient, getIngredients, getRecipe } from '../redux/actions';
import { RootState } from '../redux/store';
import AddIngredientDialog from './AddIngredientDialog';
import DeleteRecipeDialog from './DeleteRecipeDialog';
import UpdateRecipeDialog from './UpdateRecipeDialog';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const Expand = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const RecipeCard = ({ id }: { id: string }) => {

    const [state, setState] = useState(
        {
            expanded: false
        }
    );
    const { recipe, ingredients } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getRecipe(id));
        dispatch(getIngredients(id));
    }, [id]);

    const onDeleteIngredient = (id: string) => {
        dispatch(deleteIngredient(id));
    };

    const onExpand = () => {
        setState({ ...state, expanded: !state.expanded });
    };
    
    return (
        <Card sx={{ maxWidth: 570 }}>
            <CardHeader
                action={
                    <Grid container direction='row'>
                        <AccessTime />
                        <Typography component='span'>{recipe.duration}</Typography>
                    </Grid>
                }
                title={recipe.name}
                subheader={recipe.user?.username + ' -- ' + recipe.category?.name}
            />
            <CardMedia
                component={'img'}
                height={300}
                image={recipe.image}
                alt={recipe.name}
            />
            <CardContent>
                <Grid container direction='row'>
                    {ingredients.length > 0 && ingredients.map((ingredient) => (
                        <Chip
                            key={ingredient._id}
                            label={`${ingredient.quantity} ${ingredient.unit} ${t('common.of')} ${ingredient.name}`}
                            onDelete={() => onDeleteIngredient(ingredient._id)}
                        />
                    ))}
                </Grid>
                <AddIngredientDialog recipe={recipe} />
                <Divider />
                <Typography component='p' variant='body1'>{recipe.body}</Typography>
            </CardContent>
            {recipe.tip && (
                <Collapse in={state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography component='p' variant='body1'>{recipe.tip}</Typography>
                </CardContent>
            </Collapse>
            )}
            <CardActions disableSpacing>
                <UpdateRecipeDialog recipe={recipe} />
                <DeleteRecipeDialog recipe={recipe} />
                {recipe.tip && (
                    <Tooltip title={t('recipe.tip')}>
                        <Expand
                            expand={state.expanded}
                            onClick={onExpand}
                            aria-expanded={state.expanded}
                            >
                            <ExpandMore />
                        </Expand>
                    </Tooltip>
                )}
            </CardActions>
        </Card>
    );
};

export default RecipeCard;