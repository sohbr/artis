import axios from 'axios';

const url = "http://localhost:3000";

export const postBookmark = (userId, postId) => (
  axios({
    method: "POST",
    url: `${url}/api/bookmarks?user_id=${userId}&post_id=${postId}`
  })
);
