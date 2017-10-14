# == Schema Information
#
# Table name: subscriptions
#
#  id              :integer          not null, primary key
#  conversation_id :integer
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Subscription < ApplicationRecord

  validates :conversation, :user, presence: true

  belongs_to :conversation
  belongs_to :user

end
