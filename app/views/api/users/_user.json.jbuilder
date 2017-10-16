json.extract! user, :id, :username, :email
json.image_url asset_path(user.image.url)
json.bookmark_ids user.bookmarked_posts.ids
json.photos user.photos
