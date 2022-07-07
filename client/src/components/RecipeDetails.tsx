import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parseHtml from 'html-react-parser';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { getOneRandomRecipe, getRecipeById } from '../state/actions/recipesActions';
import Ingredients from './Ingredients';
import Steps from './Steps';

interface RecipeProps {
  random: boolean,
}

const RecipeDetails = ({ random }: RecipeProps) => {
  const recipe = useAppSelector(state => state.recipe.recipe);
  const loading = useAppSelector(state => state.recipe.loading);
  const error = useAppSelector(state => state.recipe.error);
  const errorMessage = useAppSelector(state => state.recipe.errorMessage);
  const dispatch = useAppDispatch();

  const params = useParams();

  useEffect(() => {
    if (random) {
      dispatch(getOneRandomRecipe());
    }
    if (params.id) {
      dispatch(getRecipeById(Number(params.id)));
    }
  }, []);
  if (loading) {
    return (
      <section className='recipe'>
        <h3 className='recipe__status-text'>loading...</h3>
      </section>
    )
  }
  if (error) {
    return (
      <section className='recipe'>
        <h3 className='recipe__status-text'>{errorMessage}</h3>
      </section>
    )
  }
  return (
    <>
      <section className='recipe-header'>
        <img className='recipe-header__img' src={recipe?.image} alt={recipe?.title} />
        <h1 className='recipe-header__title'>{recipe?.title}</h1>
      </section>
      <section className='recipe-body'>
        <Ingredients ingredients={recipe?.ingredients} />
        <section className='recipe-summary'>{parseHtml(`${recipe?.instructions}`)}</section>
        <Steps steps={recipe?.steps} />
      </section>
    </>
  );
};

export default RecipeDetails;
