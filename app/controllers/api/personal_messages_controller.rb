class Api::PersonalMessagesController < ApplicationController

  def create
    @personal_message = PersonalMessage.new(personal_message_params)
    if @personal_message.save
      #broadcasts to specific messages channel using conversation_id
      ActionCable.server.broadcast( "messages_#{params[:conversation_id]}",
        message: @personal_message.body,
        user: @personal_message.user.username
      )
      # render "api/users/#{params[:user_id]}/conversations/#{params[:conversation_id]}"
    else
      render "api/users/#{current_user.id}/conversations/#{conversation_id}"
    end
  end


  private

  def personal_message_params
    params.require(:personal_message).permit(:body, :conversation_id, :user_id)
  end

end
