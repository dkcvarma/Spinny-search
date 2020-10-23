import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './javascripts/components/App';
import searchReducer from './javascripts/reducers/search-reducer';
import rootSaga from './javascripts/sagas/root-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleWares = applyMiddleware(sagaMiddleware);

const store = createStore(searchReducer, composeEnhancers(middleWares));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
