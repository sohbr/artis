import { combineReducers } from 'redux';
import searchReducer from './search_reducer';

const uiReducer = combineReducers({
  search: searchReducer,
});

export default uiReducer;
