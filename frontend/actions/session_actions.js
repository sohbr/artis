export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import { postUser } from '../util/session_api_util';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const register = (user) => dispatch => {
  return postUser(user).then((res) => {
    console.log(res);
  }).catch((errors) => {
    console.log(errors.response);
  });
};
