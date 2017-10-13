import {RECEIVE_POST, RECEIVE_POSTS, DELETE_POST} from '../actions/post_actions';
import merge from 'lodash/merge';

const postReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge(newState, action.posts);
    case RECEIVE_POST:
      return merge(newState, action.post);
    case DELETE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postReducer;
