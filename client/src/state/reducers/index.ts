import { combineReducers } from 'redux';

import recipeReducer from './recipe';
import searchResultsReducer from './searchResults';
import featuredReducer from './featured';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  searchResults: searchResultsReducer,
  featured: featuredReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
