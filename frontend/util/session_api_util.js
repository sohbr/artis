import axios from 'axios';

const url = "http://localhost:3000";

export const postSession = (user) => (
  axios({
    method: 'POST',
    url: `${url}/api/session`,
    data: { user }
  })
);

export const deleteSession = (user) => {
  return axios({
    method: 'DELETE',
    url: `${url}/api/session`,
    data: { session_token: user.token }
  });
};

export const postUser = (user) => (
  axios({
    method: 'POST',
    url: `${url}/api/users`,
    data: { user }
  })
);
