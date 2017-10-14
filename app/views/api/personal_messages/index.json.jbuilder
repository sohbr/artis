@personal_messages.each do |message|
  json.set! message.id do
    json.partial! '/api/personal_messages/message', message: message
  end
end
