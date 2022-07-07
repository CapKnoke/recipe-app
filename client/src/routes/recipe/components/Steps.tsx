import React from 'react';
import { v4 as UUID } from 'uuid';
import { Step } from '../../../interfaces/recipes';

interface StepsProp {
  steps?: Step[]
}

const Steps = ({ steps }: StepsProp) => {
  return (
    <section className='recipe-steps'>
      <ul className='step-list'>
        {steps?.map(step => {
          return (
            <li key={step.number} className='step-list__step'>
              {step.equipment ? (
                <ul className='step-equipment'>
                  {step.equipment.map(item => <li key={UUID().slice(24)} className='step-equipment__item'>{item.name}</li>)}
                </ul>
              ) : null}
              {step.ingredients ? (
                <ul className='step-ingredients'>
                  {step.ingredients.map(ingredient => <li key={UUID().slice(24)} className='step-ingredients__item'>{ingredient.name}</li>)}
                </ul>
              ) : null}
              {step.step}
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default Steps;
