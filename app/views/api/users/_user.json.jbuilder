json.extract! user, :id, :username, :email
json.bookmark_ids user.bookmarked_posts.ids
