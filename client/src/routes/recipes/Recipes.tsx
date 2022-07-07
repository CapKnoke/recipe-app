import React from 'react';
import { Outlet } from 'react-router-dom';
import './recipes.scss';

const Recipes = () => {
  return (
    <section className='recipes-container'>
      <h1>Recipes</h1>
      <Outlet />
    </section>
  )
};

export default Recipes;
