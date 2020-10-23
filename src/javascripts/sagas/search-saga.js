import { put, call } from 'redux-saga/effects';
import { getSearchResults } from  '../api/search';
import { updateSearchResults, updateLoadMore, updateLoader } from '../actions';

export const getSearchData = function*(action) {
  try {
    yield put(updateLoadMore(false));
    if(action.page === 1) {
      yield put(updateSearchResults([], true));
    }
    yield put(updateLoader(true));
    const searchResults = yield call(getSearchResults, action.query, action.page);
    if(searchResults && searchResults.results && searchResults.results.length > 0) {
      yield put(updateSearchResults(searchResults.results));
      yield put(updateLoadMore(true));
    }
    yield put(updateLoader(false));
  } catch (error) {
    yield put(updateLoader(false));
    yield put(updateLoadMore(false));
    yield put(updateSearchResults([]));
  }
};
