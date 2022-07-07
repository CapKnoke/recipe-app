import { createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../interfaces/recipes';
import { getRecipeById, getOneRandomRecipe } from '../actions/recipesActions';

interface RecipeState {
  recipe: null | Recipe,
  loading: boolean,
  error: boolean,
  errorMessage: undefined | string | null,
}

const initialState = { recipe: null, loading: false, error: false, errorMessage: null } as RecipeState;

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getRecipeById.pending, state => {
        state.loading = true;
      })
      .addCase(getOneRandomRecipe.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getOneRandomRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getOneRandomRecipe.pending, state => {
        state.loading = true;
      })
  },
});

export default recipeSlice.reducer;
