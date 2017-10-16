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
    data: user
  });
};

export const postUser = (user) => (
  axios({
    method: 'POST',
    url: `${url}/api/users`,
    data: { user }
  })
);

export const updateUser = (userId, image) => (
  axios({
    method: 'PATCH',
    url: `${url}/api/users/${userId}`,
    dataType: "JSON",
    contentType: false,
    processData: false,
    data: image
  })
);
