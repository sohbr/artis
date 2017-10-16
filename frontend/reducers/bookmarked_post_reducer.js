import {
  RECEIVE_BOOKMARKED_POSTS
} from '../actions/post_actions';

import merge from 'lodash/merge';

const bookmarkedPostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOKMARKED_POSTS:
      return merge(newState, action.posts);
    default:
      return state;
  }
};

export default bookmarkedPostsReducer;
