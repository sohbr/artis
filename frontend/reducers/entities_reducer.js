import { combineReducers } from "redux";
import postReducer from "./post_reducer";
import conversationReducer from "./conversation_reducer";
import messageReducer from "./message_reducer";
import reviewReducer from "./review_reducer";

const entitiesReducer = combineReducers({
  posts: postReducer,
  conversations: conversationReducer,
  reviews: reviewReducer,
  messages: messageReducer
});

export default entitiesReducer;
