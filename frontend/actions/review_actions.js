export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW";

import {
  getReviews,
} from '../util/review_api_util';

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const getAllReviews = () => dispatch => (
  getReviews().then((res) => {
    dispatch(receiveReviews(res.data));
  }).catch((errors) => {
  })
);
