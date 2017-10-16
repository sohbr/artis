export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW";

import {
  getReviews,
  postReview,
  deleteReview,
} from '../util/review_api_util';

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const destroyReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
});

export const getAllReviews = (id) => dispatch => (
  getReviews(id).then((res) => {
    dispatch(receiveReviews(res.data));
  }).catch((errors) => {
  })
);

export const createReview = (review) => dispatch => (
  postReview(review).then((res) => {
    return dispatch(receiveReview(res.data));
  }).catch((errors) => {
  })
);

export const deleteReviewById = (reviewId) => dispatch => {
  return deleteReview(reviewId).then((res) => {
    dispatch(destroyReview(res.data.id));
  }).catch((errors) => {
  });
};
