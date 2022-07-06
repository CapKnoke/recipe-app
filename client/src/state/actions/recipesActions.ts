import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../../interfaces/recipes';
import { RandomParams } from '../../../../server/interfaces/api';
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

export const getRandomRecipe = createAsyncThunk(
  'recipe/random',
  async (params: RandomParams): Promise<Recipe> => {
    const result = await recipeApi.fetchRandom(params);
    if (result.error) {
      throw new Error(result.error);
    }
    return result;
  }
);
