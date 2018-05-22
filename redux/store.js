import React from 'react';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

export const middleware = applyMiddleware(
  logger,
);

const initialState = {
  connected: false,
  user: null
}

const connection = (state = initialState, action) => {
    switch(action.type) {
      case 'CONNECTION_PENDING':
        return {
        connected: false,
        user: null
        };
      case 'CONNECTION_FULFILLED': 
        return {
          connected: true,
          user: action.payload
        };
      default: 
        return state;
    }
  }

export const reducers = () => combineReducers({
    connection,
});

export const store = createStore(reducers, middleware);

