import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { getSearchResults } from '../../../state/actions/searchActions';
import { getSearchFromStorage } from '../../../utils/localStorage';
import RecipePreviewCard from '../../../components/RecipePreviewCard';

const Results = () => {
  const recipes = useAppSelector(state => state.searchResults.recipes);
  const error = useAppSelector(state => state.searchResults.error);
  const errorMessage = useAppSelector(state => state.searchResults.errorMessage);
  const loading = useAppSelector(state => state.searchResults.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const searchQuery = getSearchFromStorage();
    if (searchQuery) {
      dispatch(getSearchResults(searchQuery));
    }
  }, [])
  if (error) {
    return (
      <>
        <h4 className='error-text'>{errorMessage}</h4>
      </>
    )
  }
  if (loading) {
    return (
      <>
        <h4 className='loading-text'>Loading...</h4>
      </>
    )
  }
  return (
    <>
      { recipes && recipes.map(recipe => <RecipePreviewCard key={recipe.id} recipe={recipe} />) }
    </>
  );
};

export default Results;
