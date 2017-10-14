# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  body               :text             not null
#  img_url            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ApplicationRecord
  validates :title, :body, presence: true

  belongs_to :user

  has_attached_file :image, default_url: "https://res.cloudinary.com/jun/image/upload/v1506659435/Doge_sggjpf.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
