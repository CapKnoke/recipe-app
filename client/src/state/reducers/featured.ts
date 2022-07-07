import { createSlice } from '@reduxjs/toolkit';
import { RecipePreview } from '../../interfaces/recipes';
import { getFeatured } from '../actions/featuredActions';

interface FeaturedState {
  recipes: null | Array<RecipePreview>,
  loading: boolean,
  error: boolean,
  errorMessage: null | undefined | string,
}

const initialState = {
  recipes: [],
  loading: false,
  error: false,
  errorMessage: null } as FeaturedState;

const featuredReducer = createSlice({
  name: 'featured',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFeatured.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.recipes = action.payload;
      })
      .addCase(getFeatured.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
        state.error = true;
      })
      .addCase(getFeatured.pending, state => {
        state.error = false;
        state.errorMessage = null;
        state.loading = true;
      })
  },
});

export default featuredReducer.reducer;
