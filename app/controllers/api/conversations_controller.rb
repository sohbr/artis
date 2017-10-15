class Api::ConversationsController < ApplicationController

  # <script>
  #   createMessageChannel();
  #   // app/assets/javascripts/channels/messages.js
  #   messageForm();
  #   // app/assets/javascripts/messages_form.js
  # </script>
  ##Put in frontend components

  def index
    current_user = User.find_by(id: params[:user_id])
    @conversations = current_user.conversations
    # @existing_conversation_users = current_user.existing_conversation_users
  end

  def create
    @other_user = User.find(params[:other_user])
    @conversation = find_conversation(@other_user) ||
                    Conversation.new(identifier: SecureRandom.hex)
    if !@conversation.persisted?
      @conversation.save
      @conversation.subscriptions.create(user_id: current_user.id)
      @conversation.subscriptions.create(user_id: @other_user.id)
    end

    render :show
    # redirect_to user_chat_path(current_user, @chat,  :other_user => @other_user.id)
    ## needs to be converted to JSON
  end

  def show
    # @other_user = User.find(params[:other_user])
    @conversation = Conversation.find_by(id: params[:id])
    # @personal_message = PersonalMessage.new
  end

  private
  def find_conversation(second_user)
    conversations = current_user.conversations
    conversations.each do |conversation|
      conversation.subscriptions.each do |s|
        if s.user_id == second_user.id
          return chat
        end
      end
    end
    nil
  end

end
