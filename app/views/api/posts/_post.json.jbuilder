json.extract! post, :id, :user_id, :title, :body, :category
json.image_url asset_path(post.image.url)
json.set! "user" do
  json.extract! post.user, :id, :username
  json.image_url asset_path(post.user.image.url)
end
