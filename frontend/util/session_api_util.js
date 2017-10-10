import axios from 'axios';

const url = "http://localhost:3000";

export const postSession = (user) => (
  axios({
    method: 'POST',
    url: `${url}/api/session`,
    data: { user }
  })
);

export const deleteSession = () => (
  axios({
    method: 'DELETE',
    url: `${url}/api/session`
  })
);

export const postUser = (user) => (
  axios({
    method: 'POST',
    url: `${url}/api/users`,
    data: { user }
  })
);
