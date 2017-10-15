import merge from "lodash/merge";
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";

const messageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;

    case RECEIVE_MESSAGES:
      return action.messages;

    default:
      return oldState;
  }
};

export default messageReducer;
