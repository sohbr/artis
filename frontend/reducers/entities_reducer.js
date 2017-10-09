import { combineReducers } from 'redux';
import doomisReducer from './doomisReducer';

const entitiesReducer = combineReducers({
  doomis: doomisReducer
});

export default entitiesReducer;
