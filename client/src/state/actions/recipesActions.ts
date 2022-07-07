import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../../interfaces/recipes';
import recipeApi from '../../http/recipeApi';

export const getRecipeById = createAsyncThunk(
  'recipe/getById',
  async (id: number): Promise<Recipe> => {
    const result = await recipeApi.fetchById(id);
    if (result.error) {
      throw new Error(result.error);
    }
    return result;
  },
);

export const getOneRandomRecipe = createAsyncThunk(
  'recipe/oneRandom',
  async (): Promise<Recipe> => {
    const result = await recipeApi.fetchOneRandom();
    if (result.error) {
      throw new Error(result.error);
    }
    return result;
  }
);
