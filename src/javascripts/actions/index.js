import { GET_SEARCH_DATA, UPDATE_SEARCH_RESULTS, UPDATE_LOAD_MORE, UPDATE_LOADER } from './types';

export const updateSearchResults = (searchResults, setEmpty = false) => {
  return { type: UPDATE_SEARCH_RESULTS, searchResults, setEmpty };
};

export const getSearchResults = (query, page) => {
  return { type: GET_SEARCH_DATA, query, page };
};

export const updateLoadMore = condition => {
  return { type: UPDATE_LOAD_MORE, condition };
};

export const updateLoader = condition => {
  return { type: UPDATE_LOADER, condition };
};
