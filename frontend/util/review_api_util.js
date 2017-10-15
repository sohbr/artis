import axios from 'axios';

const url = "http://localhost:3000";

export const getReviews = () => (
  axios({
    method: 'GET',
    url: `${url}/api/reviews`
  })
);
