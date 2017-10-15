import {RECEIVE_REVIEW, RECEIVE_REVIEWS, DELETE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge(newState, {[action.review.id]: action.review});
    case DELETE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
