import qs, { ParsedQs } from 'qs';
import axios, { AxiosResponse } from 'axios';
import { query } from 'express';

const fetchData = async (url: string): Promise<AxiosResponse> => {
  const options = process.env.API_KEY ? { headers: { 'x-api-key': process.env.API_KEY } } : {};
  const response = await axios(url, options)
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data));
  }
  return response;
}

export default {
  get: async (id: string): Promise<JSON> => {
    const url = `https://api.spoonacular.com/recipes/${id}/information`;
    const result = await fetchData(url);
    return result.data;
  },
  getRandom: async (params: ParsedQs | null): Promise<JSON> => {
    const query = params ? {...params, number: params.number ? params.number : 1 } : null;
    const url = `https://api.spoonacular.com/recipes/random${query ? `?${qs.stringify(query)}` : ''}`
    const result = await fetchData(url);
    return result.data.recipes;
  },
  search: async (params: ParsedQs | null): Promise<JSON> => {
    const query = {...params, number: params?.number ? params?.number : 1 };
    console.log(query);
    console.log(params);
    if (!params?.query) {
      throw new Error('You must provide a search query');
    }
    const url = `https://api.spoonacular.com/recipes/complexSearch${query ? `?${qs.stringify(query)}` : ''}`
    const result = await fetchData(url);
    return result.data.results;
  },
};
