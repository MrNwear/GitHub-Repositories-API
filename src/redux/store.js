import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReposReducer from './reducers/repositoriesReducer';
import thunk from 'redux-thunk';
const rootreducer = combineReducers({
  repos: ReposReducer,
});
const store = createStore(rootreducer);
export default store;
