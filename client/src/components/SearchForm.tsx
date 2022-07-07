import React, { FormEvent, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../state/hooks';
import { getSearchResults } from '../state/actions/searchActions';
import { setSearchToStorage } from '../utils/localStorage';
import searchIcon from '../assets/icons/search.svg';

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      const params = {
        query: inputRef.current.value,
        number: 12,
      };
      setSearchToStorage(params);
      dispatch(getSearchResults(params));
    }
    if (location.pathname !== '/recipes/search') {
      navigate('/recipes/search', { replace: false });
    }
  };

  return (
    <form className='search-form' action='submit' onSubmit={handleSearch}>
      <input ref={inputRef} className='search-form__field' type="text" name='search' placeholder='Search...' required/>
      <button type='submit' className='search-form__button'>
        <img className='search-form__button--img' src={searchIcon} alt='Search' />
      </button>
    </form>
  )
};

export default SearchForm;
