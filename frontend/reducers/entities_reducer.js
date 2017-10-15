import { combineReducers } from "redux";
import postReducer from "./post_reducer";
import conversationReducer from "./conversation_reducer";
import messageReducer from "./message_reducer";

const entitiesReducer = combineReducers({
  posts: postReducer,
  conversations: conversationReducer,
  messages: messageReducer
});

export default entitiesReducer;
