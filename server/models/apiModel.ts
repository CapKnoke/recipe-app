import { ParsedQs } from 'qs';
import { fetchData, formatQuery, formatRecipe, formatRandom } from '../utils/apiUtils';
import { Recipe, RecipePreview } from '../../client/src/interfaces/recipes';
import { SearchResults } from '../interfaces/api';

export default {
  get: async (id: string): Promise<Recipe> => {
    const url = `https://api.spoonacular.com/recipes/${id}/information`;
    const response = await fetchData(url);
    return formatRecipe(response.data);
  },
  getRandom: async (params: ParsedQs | null): Promise<RecipePreview[]> => {
    const queryString = formatQuery(params);
    const url = `https://api.spoonacular.com/recipes/random${queryString}`
    const response = await fetchData(url);
    return formatRandom(response.data.recipes);
  },
  getOneRandom: async (): Promise<Recipe> => {
    const url = `https://api.spoonacular.com/recipes/random?number=1`
    const response = await fetchData(url);
    return formatRecipe(response.data.recipes[0]);
  },
  search: async (params: ParsedQs | null): Promise<SearchResults> => {
    if (!params?.query) {
      throw new Error('You must provide a search query');
    }
    const queryString = formatQuery(params);
    const url = `https://api.spoonacular.com/recipes/complexSearch${queryString}`
    const response = await fetchData(url);
    const result = response.data;
    return result;
  },
};
