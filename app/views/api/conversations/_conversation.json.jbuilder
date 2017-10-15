json.extract! conversation, :id, :created_at, :updated_at, :identifier, :personal_messages
json.subscriptions do
  json.array! conversation.subscriptions, :user_id
end
