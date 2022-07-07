import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';
import './recipes.scss';

const Recipes = () => {
  return (
    <>
      <section className='search-form-container'>
        <SearchForm />
      </section>
      <section className='recipes-container'>
        <Outlet />
      </section>
    </>
  )
};

export default Recipes;
