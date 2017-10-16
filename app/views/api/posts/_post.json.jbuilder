json.extract! post, :id, :user_id, :title, :body, :category, :user
json.image_url asset_path(post.image.url)
