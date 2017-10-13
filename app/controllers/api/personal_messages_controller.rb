class Api::PersonalMessagesController < ApplicationController

  before_action :find_conversation!

  def create
    @personal_message =
      current_user.personal_messages.new(personal_message_params)
      @personal_message.conversation_id = @conversation.id

    if @personal_message.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  private

  def personal_message_params
    params.require(:personal_message).permit(:body)
  end

  def find_conversation!
    @conversation = Conversation.find_by(id: params[:conversation_id])
    redirect_to '/api/conversations' and return unless
      @conversation && @conversation.participates?(current_user)
  end
end
