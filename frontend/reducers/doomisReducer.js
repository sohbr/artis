import { RECEIVE_DOOMIS } from '../actions/doomi_actions';

const doomisReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_DOOMIS:
      return action.doomis;
    default:
      return state;
  }
};

export default doomisReducer;
