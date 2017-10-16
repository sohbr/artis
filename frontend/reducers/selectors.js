export const selectPostsById = ({posts}, {currentUser}) => {
  const bookmarkedPostIds = currentUser.bookmark_ids;
  const filteredPosts =  Object.values(posts).filter((post) => {
    return bookmarkedPostIds.includes(post.id);
  });
  return filteredPosts;
};

export const selectPostsByCategory = ({posts}, category) => {
  if (category === "All") {
    return posts;
  } else {
    return Object.values(posts).filter((post) => {
      return post.category === category;
    });
  }
};
