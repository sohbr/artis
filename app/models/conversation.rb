# == Schema Information
#
# Table name: conversations
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  receiver_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Conversation < ApplicationRecord

  validates :author, :receiver, presence: true
  validates :author, uniquness: { scope: :receiver }

  belongs_to :author, class_name: :User
  belongs_to :receiver, class_name: :User

  has_many :personal_messages, -> { order(created_at: :asc) },
  dependent: :destroy

  scope :participating, -> (user) do
    where("(conversations.author_id = ? OR
      conversations.receiver_id = ?)", user.id, user.id)
  end

  def with(current_user)
    author == current_user ? receiver : author
  end

  def participates?(user)
    author == user || receiver == user
  end

end
