import React from 'react';
import SearchForm from '../../components/SearchForm';
import './home.scss'

const Home = () => {
  return (
    <section className='home-screen'>
      <h1 className='home-screen__title'>Welcome</h1>
      <SearchForm />
      <h3 className='home-screen__subtitle'>Search Over 300,000 Recipes</h3>
    </section>
  )
};

export default Home;
