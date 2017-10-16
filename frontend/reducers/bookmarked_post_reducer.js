import {
  RECEIVE_BOOKMARKED_POSTS,
} from '../actions/post_actions';

import {
  RECEIVE_BOOKMARK
} from '../actions/bookmark_actions';

import merge from 'lodash/merge';

const bookmarkedPostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOKMARKED_POSTS:
      return action.posts;
    case RECEIVE_BOOKMARK:
      return merge(newState, {[action.bookmark.id]: action.bookmark});
    default:
      return state;
  }
};

export default bookmarkedPostsReducer;
