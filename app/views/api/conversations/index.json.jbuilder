@conversations.each do |conversation|
  json.set! conversation.id do
    conversation.partial! '/api/conversations/conversation', conversation: conversation
  end
end
