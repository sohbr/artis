import axios from 'axios';

const url = "http://localhost:3000";

export const getReviews = (recipientId) => (
  axios({
    method: 'GET',
    url: `${url}/api/reviews?recipientId=${recipientId}`,
  })
);

export const postReview = (review) => {
  return axios({
    method: 'POST',
    url: `${url}/api/reviews`,
    data: review
  });
};

export const deleteReview = (reviewId) => (
  axios({
    method: 'DELETE',
    url: `${url}/api/reviews/${reviewId}`
  })
);
