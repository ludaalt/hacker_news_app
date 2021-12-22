import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { updateNewsReducer } from './updateNewsReducer';
import { updateCommentsReducer } from './updateCommentsReducer';

const rootReducer = combineReducers({
  news: updateNewsReducer,
  comments: updateCommentsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
