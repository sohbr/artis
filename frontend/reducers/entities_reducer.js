import { combineReducers } from "redux";
import postReducer from "./post_reducer";
import conversationReducer from "./conversation_reducer";
import messageReducer from "./message_reducer";
import reviewReducer from "./review_reducer";
import BookmarkedPostsReducer from "./bookmarked_post_reducer";

const entitiesReducer = combineReducers({
  posts: postReducer,
  bookmarks: BookmarkedPostsReducer,
  conversations: conversationReducer,
  reviews: reviewReducer,
  messages: messageReducer
});

export default entitiesReducer;
