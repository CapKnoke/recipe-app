import { combineReducers } from 'redux';

import recipeReducer from './recipe';
import searchResultsReducer from './searchResults';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  searchResults: searchResultsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
