export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
import { postBookmark } from '../util/bookmark_api_util';

export const receiveBookmark = (bookmark) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const createBookmark = (userId, postId) => dispatch => (
  postBookmark(userId, postId).then((res) => {
    return dispatch(receiveBookmark(res.data.post));
  }).catch((errors) => {

  })
);
