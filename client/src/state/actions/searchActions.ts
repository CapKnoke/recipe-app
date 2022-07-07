import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchParams, SearchResults } from '../../../../server/interfaces/api';
import recipeApi from '../../http/recipeApi';

export const getSearchResults = createAsyncThunk(
  'searchResults/getResults',
  async (params: SearchParams): Promise<SearchResults> => {
    const response = await recipeApi.fetchBySearch(params);
    if (!response.results.length) {
      throw new Error('No Results');
    }
    return response;
  },
);
