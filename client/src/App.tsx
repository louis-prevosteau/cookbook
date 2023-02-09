import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import Auth from './pages/Auth';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/:id' element={<Recipe/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;