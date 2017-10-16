import axios from 'axios';

// const url = "http://localhost:3000";
const url = "https://hire-artis.herokuapp.com";

export const postPost = (post) => {
  return axios({
    method: 'POST',
    url: `${url}/api/posts`,
    dataType: "JSON",
    contentType: false,
    processData: false,
    data: post
  });
};

export const getPost = (postId) => (
  axios({
    method: 'GET',
    url: `${url}/api/posts/${postId}`
  })
);

export const getPosts = () => (
  axios({
    method: 'GET',
    url: `${url}/api/posts`
  })
);

export const patchPost = (post) => (
  axios({
    method: 'PATCH',
    url: `${url}/api/posts/${post.id}`,
    data: { post }
  })
);

export const deletePost = (postId) => (
  axios({
    method: 'DELETE',
    url: `${url}/api/posts/${postId}`
  })
);

export const filterPosts = (searchTerm) => (
  axios({
    method: 'GET',
    url: `${url}/api/posts?searchTerm=${searchTerm}`,
  })
);

export const bookmarkedPosts = (userToken) => (
  axios({
    method: 'GET',
    url: `${url}/api/posts?bookmarks=true&session_token=${userToken}`,
  })
);
