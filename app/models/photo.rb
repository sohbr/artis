class Photo < ApplicationRecord
  validates :image_url, presence: true

  belongs_to :user
end
