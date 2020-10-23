import { UPDATE_SEARCH_RESULTS, UPDATE_LOAD_MORE, UPDATE_LOADER } from '../actions/types';

const initialState = {
  results: [],
  showLoadMore: false,
  showLoader: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS: {
      const searchResults = action.searchResults && action.searchResults.results;
      const results = action.setEmpty ? [] : [...state.results, ...searchResults];
      return { ...state, results };
    }
    case UPDATE_LOAD_MORE: {
      return {
        ...state,
        showLoadMore: action.condition
      }
    }
    case UPDATE_LOADER: {
      return {
        ...state,
        showLoader: action.condition
      }
    }
    default:
      return state;
  }
}
