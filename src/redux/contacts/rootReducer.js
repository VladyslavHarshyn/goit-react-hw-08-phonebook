import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import items from './items/itemsSlice';
import filter from './filter/filterSlice';

import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  items,
  filter,
  auth: persistedReducer,
});

export default rootReducer;
