import { createAsyncThunk } from '@reduxjs/toolkit';
import { RandomParams } from '../../../../server/interfaces/api';
import recipeApi from '../../http/recipeApi';
import { RecipePreview } from '../../interfaces/recipes';

export const getFeatured = createAsyncThunk(
  'featured/getFeatured',
  async (params?: RandomParams): Promise<RecipePreview[]> => {
    console.log(params);
    const result = await recipeApi.fetchRandom(params ? params : {});
    if (!result.length) {
      throw new Error('No Results');
    }
    console.log(result);
    return result;
  }
);
