export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POST = "DELETE_POST";

import {
  getPosts,
  getPost,
  postPost,
  patchPost,
  deletePost
} from '../util/post_api_util';

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const destroyPost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const getAllPosts = () => dispatch => (
  getPosts().then((res) => {
    dispatch(receivePosts(res.data));
  }).catch((errors) => {
    console.log(errors);
  })
);

export const getPostById = (postId) => dispatch => (
  getPost(postId).then((res) => {
    dispatch(receivePost(res.data));
  })
);

export const createPost = (post) => dispatch => (
  postPost(post).then((res) => {
    dispatch(receivePost(res.data));
  })
);

export const updatePost = (post) => dispatch => (
  patchPost(post).then((res) => {
    dispatch(receivePost(res.data));
  })
);

export const deletePostById = (postId) => dispatch => (
  deletePost(postId).then((res) => {
    dispatch(destroyPost(postId));
  })
);
