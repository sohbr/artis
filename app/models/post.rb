class Post < ApplicationRecord
  validates :title, :body, presence: true

  belongs_to :user

  has_attached_file :image, default_url: "https://res.cloudinary.com/jun/image/upload/v1506659435/Doge_sggjpf.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
