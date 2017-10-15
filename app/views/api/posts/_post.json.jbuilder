json.extract! post, :user_id, :title, :body, :category
json.image_url asset_path(post.image.url)
