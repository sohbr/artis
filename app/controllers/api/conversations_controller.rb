class Api::ConversationsController < ApplicationController


  def index
    current_user = User.find_by(id: params[:user_id])
    @conversations = current_user.conversations
    # @existing_conversation_users = current_user.existing_conversation_users
  end

  def create

    # @other_user = User.find(params[:other_user])
    # @conversation = find_conversation(@other_user) ||
    @conversation = Conversation.new(identifier: SecureRandom.hex)
    # if !@conversation.persisted?
      if @conversation.save
      @conversation.subscriptions.create(user_id: params[:user_id])
      @conversation.subscriptions.create(user_id: params[:other_user])
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
