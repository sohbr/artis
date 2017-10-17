json.extract! @bookmark, :user_id, :post_id
json.set! "post" do
  json.extract! @bookmark.post, :id, :user_id, :title, :body, :category
  json.image_url asset_path(@bookmark.post.image.url)
end
json.set! "user" do
  json.extract! @bookmark.post.user, :username
end
