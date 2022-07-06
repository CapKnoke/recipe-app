import { createAsyncThunk } from '@reduxjs/toolkit';
import { RecipePreview } from '../../interfaces/recipes';
import { SearchParams } from '../../interfaces/api';
import recipeApi from '../../http/recipeApi';

export const getSearchResults = createAsyncThunk(
  'searchResults/getResults',
  async (params: SearchParams): Promise<RecipePreview[]> => {
    const results = await recipeApi.fetchBySearch(params);
    if (!results.length) {
      throw new Error('No Results');
    }
    return results;
  },
);
