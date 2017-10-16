export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

import { postUser, postSession, deleteSession, updateUser } from "../util/session_api_util";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const register = (user) => dispatch => {
  return postUser(user).then((res) => {
    return dispatch(receiveCurrentUser(res.data));
  }).catch((errors) => {
    dispatch(receiveSessionErrors(errors.response.data));
  });
};

export const login = (user) => dispatch => {
  return postSession(user).then((res) => {
    return dispatch(receiveCurrentUser(res.data));
  }).catch((errors) => {
    dispatch(receiveSessionErrors(errors.response.data));
  });
};

export const editUser = (userId, image) => dispatch => {
  return updateUser(userId, image).then((res) => {
    return dispatch(receiveCurrentUser(res.data));
  }).catch((errors) => {
    dispatch(receiveSessionErrors(errors.response.data));
  });
};

export const logout = (user) => dispatch => {
  return deleteSession(user).then((res) => {
    return dispatch(receiveCurrentUser(null));
  }).catch((errors) => {

  });
};
