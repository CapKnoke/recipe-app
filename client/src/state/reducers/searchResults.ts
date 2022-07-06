import { createSlice } from '@reduxjs/toolkit';
import { RecipePreview } from '../../interfaces/recipes';
import { getSearchResults } from '../actions/searchActions';

interface SearcResultsState {
  searchResults: null | Array<RecipePreview>,
  loading: boolean,
  error: boolean,
  errorMessage: null | undefined | string,
}

const initialState = { searchResults: [], loading: false, error: false, errorMessage: null } as SearcResultsState;

const searchResultsReducer = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.error = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getSearchResults.pending, state => {
        state.loading = true;
      })
  },
});

export default searchResultsReducer.reducer;