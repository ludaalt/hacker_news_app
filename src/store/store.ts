import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { updateDataReducer } from './updateDataReducer';
import { updateLoadingReducer } from './updateLoadingReducer';

const rootReducer = combineReducers({
  data: updateDataReducer,
  loadingStatus: updateLoadingReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
