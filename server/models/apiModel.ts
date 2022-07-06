import qs, { ParsedQs } from 'qs';
import axios, { AxiosResponse } from 'axios';

const formatQuery = (params: ParsedQs | null): string => {
  const query = {...params, number: params?.number ? params?.number : 1 };
  return `?${qs.stringify(query)}`;
};

const fetchData = async (url: string): Promise<AxiosResponse> => {
  const options = process.env.API_KEY ? { headers: { 'x-api-key': process.env.API_KEY } } : {};
  const response = await axios(url, options)
  if (response.status !== 200) {
    throw new Error(JSON.parse(response.data));
  }
  return response;
};

export default {
  get: async (id: string): Promise<JSON> => {
    const url = `https://api.spoonacular.com/recipes/${id}/information`;
    const result = await fetchData(url);
    return result.data;
  },
  getRandom: async (params: ParsedQs | null): Promise<JSON> => {
    const queryString = formatQuery(params);
    const url = `https://api.spoonacular.com/recipes/random${queryString}`
    const result = await fetchData(url);
    return result.data.recipes[0];
  },
  search: async (params: ParsedQs | null): Promise<JSON> => {
    if (!params?.query) {
      throw new Error('You must provide a search query');
    }
    const queryString = formatQuery(params);
    const url = `https://api.spoonacular.com/recipes/complexSearch${queryString}`
    const result = await fetchData(url);
    return result.data.results;
  },
};
