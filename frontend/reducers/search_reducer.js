import merge from 'lodash/merge';
import { RECEIVE_FILTER } from '../actions/search_actions';

const _defaultState = {
  filter: "All"
};

const searchReducer = (state = _defaultState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FILTER:
      return Object.assign({}, state, {filter: action.filter});
    default:
      return state;
  }
};

export default searchReducer;
