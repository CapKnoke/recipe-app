import React from 'react';
import SearchForm from '../../components/SearchForm';
import Featured from './components/Featured';

const Overview = () => {
  return (
    <section>
      <h1>Overview</h1>
      <SearchForm />
      <Featured />
    </section>
  )
};

export default Overview;
