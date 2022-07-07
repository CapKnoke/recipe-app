import React from 'react';
import { Ingredient } from '../interfaces/recipes';
import { v4 as UUID } from 'uuid';

interface IngredientsProp {
  ingredients?: Ingredient[],
}

const Ingredients = ({ ingredients }: IngredientsProp) => {
  return (
    <section className='recipe-ingredients'>
      <ul className='ingredient-list'>
        {
          ingredients?.map(ingredient => {
            return (
              <li key={UUID().slice(24)} className='ingredient-list__ingredient'>
                {ingredient.measures.metric.amount}
                {' '}
                {ingredient.measures.metric.unit}
                {' '}
                {ingredient.name}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
};

export default Ingredients;
