import { SearchParams } from "../../../server/interfaces/api";

export const getSearchFromStorage = (): SearchParams | null => {
  const storage = window.localStorage.getItem('searchQuery');
  if (!storage) {
    return null
  }
  return JSON.parse(storage);
};

export const setSearchToStorage = (params: SearchParams): void => {
  window.localStorage.setItem('searchQuery', JSON.stringify(params));
};
