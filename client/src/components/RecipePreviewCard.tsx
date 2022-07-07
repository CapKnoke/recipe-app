import React, { KeyboardEvent, MouseEvent } from 'react';
import { RecipePreview } from '../interfaces/recipes';
import { useNavigate } from 'react-router-dom';

interface RecipePreviewProp {
  recipe: RecipePreview,
}

const RecipePreviewCard = ({ recipe }: RecipePreviewProp) => {
  const navigate = useNavigate();
  const handleNavigate = (e: MouseEvent | KeyboardEvent): void => {
    if (e.currentTarget instanceof HTMLElement) {
      navigate(`../${e.currentTarget.id}`, { replace: false });
    }
  };
  return (
    <section
      id={recipe.id.toString()}
      onClick={handleNavigate}
      onKeyDown={e => {
        if (e.code === 'Space' || e.code === 'Enter') {
          handleNavigate(e);
        }
      }}
      className='preview-card'
      role='button'
      tabIndex={0}
    >
      <img className='preview-card__img' src={recipe.image} />
      <section className='preview-body'>
        <h3 className='preview-body__title'>
          {recipe.title}
        </h3>
      </section>
    </section>
  );
};

export default RecipePreviewCard;