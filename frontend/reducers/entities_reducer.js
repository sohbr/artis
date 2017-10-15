import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import reviewReducer from './review_reducer';

const entitiesReducer = combineReducers({
  posts: postReducer,
  reviews: reviewReducer,
});

export default entitiesReducer;
