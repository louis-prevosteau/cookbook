import { Restaurant } from '@mui/icons-material';
import { ButtonGroup, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions';
import { RootState } from '../redux/store';
import DeleteCategoryDialog from './DeleteCategoryDialog';
import UpdateCategoryDialog from './UpdateCategoryDialog';

const CategoryList = () => {

    const { categories } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <List>
            {categories.map((category) => (
                <ListItem
                    key={category._id}
                    secondaryAction={
                        <ButtonGroup>
                            <UpdateCategoryDialog category={category}/>
                            <DeleteCategoryDialog category={category}/>
                        </ButtonGroup>
                    }
                >
                    <ListItemIcon>
                        <Restaurant/>
                    </ListItemIcon>
                    <ListItemText primary={category.name}/>
                </ListItem>
            ))}
        </List>
    );
};

export default CategoryList;