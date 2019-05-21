import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from 'middleware/api';
import core from 'reducers/core';
const reducer = combineReducers({core});
const store = createStore(
    reducer,
    applyMiddleware(apiMiddleware, thunk)
);

export default store;