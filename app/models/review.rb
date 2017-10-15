class Review < ApplicationRecord
  validates :body, presence: true
  validates :rating, presence: true
  validates :author, uniqueness: {scope: :recipient}

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :recipient,
    class_name: 'User',
    foreign_key: :recipient_id,
    primary_key: :id
end
