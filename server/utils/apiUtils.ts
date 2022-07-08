import qs, { ParsedQs } from 'qs';
import axios, { AxiosResponse } from 'axios';
import {
  Ingredient,
  Measures,
  Recipe,
  Step,
  StepEquipment,
  StepIngredient,
  RecipePreview,
} from '../../client/src/interfaces/recipes';
import {
  IngredientResponse,
  StepEquipmentResponse,
  StepIngredientResponse,
  StepResponse,
  RecipeResponse,
} from '../interfaces/api';

export const formatQuery = (params: ParsedQs | null): string => {
  const query = {...params, number: params?.number ? params.number : 1 };
  return `?${qs.stringify(query)}`;
};

export const fetchData = async (url: string): Promise<AxiosResponse> => {
  const options = process.env.ALT_API_KEY ? { headers: { 'x-api-key': process.env.ALT_API_KEY }} : {};
  const response = await axios(url, options)
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data));
  }
  return response;
};

const formatMeasures = (ingredient: IngredientResponse): Measures => ({
  us: {
    amount: ingredient.measures.us.amount,
    unit: ingredient.measures.us.unitShort,
  },
  metric: {
    amount: ingredient.measures.metric.amount,
    unit: ingredient.measures.metric.unitShort,
  }
});

const formatStepIngredients = (ingredients: StepIngredientResponse[]) => (
  ingredients.map((ingredient: StepIngredientResponse): StepIngredient => ({
    id: ingredient.id,
    name: ingredient.name,
  }))
);

const formatStepEquipment = (equipment: StepEquipmentResponse[]) => (
  equipment.map((item: StepEquipmentResponse): StepEquipment => ({
    id: item.id,
    name: item.name,
  }))
);

export const formatRecipe = (recipe: RecipeResponse): Recipe => {
  const ingredients = recipe.extendedIngredients
    .map((ingredient: IngredientResponse): Ingredient => ({
      id: ingredient.id,
      name: ingredient.name,
      measures: formatMeasures(ingredient),
    }));
  const steps = recipe.analyzedInstructions[0].steps
    .map((step: StepResponse): Step => ({
      number: step.number,
      step: step.step,
      ingredients: formatStepIngredients(step.ingredients),
      equipment: formatStepEquipment(step.equipment),
    }))
    return ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      readyInMinutes: recipe.readyInMinutes,
      ingredients: ingredients,
      summary: recipe.summary,
      instructions: recipe.instructions,
      steps: steps,
    })
};

export const formatRandom = (recipes: RecipeResponse[]): RecipePreview[] => {
  return recipes.map(recipe => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    imageType: recipe.imageType,
  }))
};
