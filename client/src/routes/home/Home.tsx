import React from 'react';
import SearchForm from '../../components/SearchForm';
import './home.scss'

const Home = () => {
  return (
    <section className='home-screen'>
      <h1>Home</h1>
      <SearchForm />
    </section>
  )
};

export default Home;
