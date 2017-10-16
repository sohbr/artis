export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_BOOKMARKED_POSTS = "RECEIVE_BOOKMARKED_POSTS";

import {
  getPosts,
  getPost,
  postPost,
  patchPost,
  deletePost,
  filterPosts,
  bookmarkedPosts,
} from '../util/post_api_util';

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receiveBookmarkedPosts = (posts) => ({
  type: RECEIVE_BOOKMARKED_POSTS,
  posts
});

export const destroyPost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const getAllPosts = () => dispatch => (
  getPosts().then((res) => {
    return dispatch(receivePosts(res.data));
  }).catch((errors) => {
  })
);

export const getBookmarkedPosts = (userToken) => dispatch => (
  bookmarkedPosts(userToken).then((res) => {
    return dispatch(receiveBookmarkedPosts(res.data));
  }).catch((errors) => {

  })
);

export const getPostById = (postId) => dispatch => (
  getPost(postId).then((res) => {
    dispatch(receivePost(res.data));
  }).catch((errors) => {
  })
);

export const createPost = (post) => dispatch => (
  postPost(post).then((res) => {
    return dispatch(receivePost(res.data));
  }).catch((errors) => {
  })
);

export const updatePost = (post) => dispatch => (
  patchPost(post).then((res) => {
    dispatch(receivePost(res.data));
  }).catch((errors) => {
  })
);

export const deletePostById = (postId) => dispatch => (
  deletePost(postId).then((res) => {
    dispatch(destroyPost(postId));
  }).catch((errors) => {
  })
);

export const searchPosts = (searchTerm) => dispatch => (
  filterPosts(searchTerm).then((res) => {
    dispatch(receivePosts(res.data));
  }).catch((errors) => {
    console.log(errors);
  })
);
