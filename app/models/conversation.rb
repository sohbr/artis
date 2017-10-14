# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  identifier :string
#

class Conversation < ApplicationRecord

  validates :identifier, presence: true, uniqueness: true,
            case_sensitive: false


  has_many :personal_messages, -> { order(created_at: :asc) },
  dependent: :destroy
  has_many :subscriptions, dependent: :destroy
  has_many :users, through: :subscriptions

end
