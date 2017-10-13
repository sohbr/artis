@personal_messages.each do |message|
  json.set! message.id do
    message.partial! '/api/personal_messages/message', message: message
  end
end
