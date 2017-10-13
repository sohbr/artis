# == Schema Information
#
# Table name: personal_messages
#
#  id              :integer          not null, primary key
#  body            :text             not null
#  conversation_id :integer          not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class PersonalMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
