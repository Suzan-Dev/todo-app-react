import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todo/todo.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['todo'],
};

// store
const rootReducer = combineReducers({
  todo: todoReducer,
});

export default persistReducer(persistConfig, rootReducer);
