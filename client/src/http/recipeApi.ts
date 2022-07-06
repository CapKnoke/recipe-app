import qs from 'qs';
import { SearchParams, RandomParams } from '../../../server/interfaces/api';
import { Recipe, RecipePreview } from '../interfaces/recipes';

export default {
  fetchById: async (id: number): Promise<Recipe> => {
    return fetch(`/api/recipes/${id}/info`)
      .then(res => res.json());
  },
  fetchBySearch: async (query: SearchParams): Promise<Array<RecipePreview>> => {
    return fetch(`/api/recipes/search?${qs.stringify(query)}`)
      .then(res => res.json());
  },
  fetchRandom: async (query: RandomParams | null): Promise<Recipe> => {
    return fetch(`/api/recipes/random${query ? `?${qs.stringify(query)}` : ''}`)
      .then(res => res.json());
  },
};
