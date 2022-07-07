import React from 'react';
import SearchForm from '../../components/SearchForm';
import Results from './components/Results';

const Search = () => {
  return (
    <section>
      <h1>Search</h1>
      <SearchForm />
      <section className='search-results'>
        <Results />
      </section>
    </section>
  )
};

export default Search;
