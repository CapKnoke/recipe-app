import { createSlice } from '@reduxjs/toolkit';
import { RecipePreview } from '../../interfaces/recipes';
import { getSearchResults } from '../actions/searchActions';

interface SearcResultsState {
  recipes: null | Array<RecipePreview>,
  number: number | null,
  offset: number | null,
  totalResults: number | null,
  loading: boolean,
  error: boolean,
  errorMessage: null | undefined | string,
}

const initialState = {
  recipes: [],
  number: null,
  offset: null,
  totalResults: null,
  loading: false,
  error: false,
  errorMessage: null } as SearcResultsState;

const searchResultsReducer = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.recipes = action.payload.results;
        state.number = action.payload.number;
        state.offset = action.payload.offset;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
        state.error = true;
      })
      .addCase(getSearchResults.pending, state => {
        state.error = false;
        state.errorMessage = null;
        state.loading = true;
      })
  },
});

export default searchResultsReducer.reducer;
