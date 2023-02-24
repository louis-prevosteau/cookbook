import { Tune } from '@mui/icons-material';
import { Drawer, FormControl, FormLabel, Grid, IconButton, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getRecipes } from '../redux/actions';
import { RootState } from '../redux/store';

const FilterDrawer = () => {

    const [state, setState] = useState(
        {
            category: ''
        }
    );
    const { categories } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const onFilter = () => {
        dispatch(getRecipes(state.category));
    };

    return (
        <Drawer variant='permanent' anchor='left' PaperProps={{ sx: { width: 250 } } }>
            <FormControl sx={{ marginLeft: 3 }}>
                <FormLabel>{t('home.filters.byCategory.title')}</FormLabel>
                <Grid direction={'column'}>
                    <Select value={state.category} onChange={(e) => setState({ ...state, category: e.target.value })}  sx={{ minWidth: 175 }}>
                        {categories.map((category) => (
                            <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                    <IconButton onClick={onFilter}>
                        <Tune/>
                    </IconButton>
                </Grid>
            </FormControl>
        </Drawer>
    );
};

export default FilterDrawer;