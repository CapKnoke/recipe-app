import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { getFeatured } from '../../../state/actions/featuredActions';
import RecipePreviewCard from '../../../components/RecipePreviewCard';

const Featured = () => {
  const recipes = useAppSelector(state => state.featured.recipes);
  const error = useAppSelector(state => state.featured.error);
  const errorMessage = useAppSelector(state => state.featured.errorMessage);
  const loading = useAppSelector(state => state.featured.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const params = {
      number: 6,
      tags: 'main dish',
    }
    dispatch(getFeatured(params));
  }, [])
  if (error) {
    return (
      <section className='featured'>
        <h4 className='featured__status-text'>{errorMessage}</h4>
      </section>
    )
  }
  if (loading) {
    return (
      <section className='featured'>
        <h4 className='featured__status-text'>Loading...</h4>
      </section>
    )
  }
  return (
    <section className='featured'>
      { recipes && recipes.map(recipe => <RecipePreviewCard key={recipe.id} recipe={recipe} />) }
    </section>
  );
}

export default Featured;
