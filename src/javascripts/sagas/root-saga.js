import { getSearchData } from './search-saga';
import {GET_SEARCH_DATA} from "../actions/types";
import { takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeEvery(GET_SEARCH_DATA, getSearchData)
}
