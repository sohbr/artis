import merge from "lodash/merge";

import {
  RECEIVE_CONVERSATION,
  RECEIVE_CONVERSATIONS
} from "../actions/message_actions";

const conversationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CONVERSATION:
      newState[action.conversation.id] = action.conversation;
      return newState;

    case RECEIVE_CONVERSATIONS:
      return action.conversations;

    default:
      return oldState;
  }
};

export default conversationReducer;
