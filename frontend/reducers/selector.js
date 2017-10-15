import values from 'lodash/values';

export const asReviewsArray = state => values(state.entities.reviews);
