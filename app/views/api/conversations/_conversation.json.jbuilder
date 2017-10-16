json.extract! conversation, :id, :created_at, :updated_at, :identifier, :personal_messages, :users
json.subscriptions do
  json.array! conversation.subscriptions.each do |subs|
    json.extract! subs, :user
  end
end
