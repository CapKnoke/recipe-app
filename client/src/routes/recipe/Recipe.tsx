import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import parseHtml from 'html-react-parser';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { getRecipeById, getOneRandomRecipe } from '../../state/actions/recipesActions';
import Ingredients from './components/Ingredients';
import Steps from './components/Steps';

const Recipe = () => {
  const recipe = useAppSelector(state => state.recipe.recipe);
  const loading = useAppSelector(state => state.recipe.loading);
  const error = useAppSelector(state => state.recipe.error);
  const errorMessage = useAppSelector(state => state.recipe.errorMessage);

  const location = useLocation();

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === '/recipes/random') {
      dispatch(getOneRandomRecipe());
    } else {
      dispatch(getRecipeById(Number(id)));
    }
  }, [])
  if (loading) {
    return (
      <section className='recipe'>
        <h3>loading...</h3>
      </section>
    )
  }
  if (error) {
    return (
      <section className='recipe'>
        <h3>{errorMessage}</h3>
      </section>
    )
  }
  return (
    <section className='recipe'>
      <section className='recipe-header'>
        <img src={recipe?.image} alt={recipe?.title} />
        <h1>{recipe?.title}</h1>
      </section>
      <section className='recipe-body'>
        <Ingredients ingredients={recipe?.ingredients} />
        <section className='recipe-summary'>{parseHtml(`${recipe?.instructions}`)}</section>
        <Steps steps={recipe?.steps} />
      </section>
    </section>
  );
};

export default Recipe;
