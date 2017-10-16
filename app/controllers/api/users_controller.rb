class Api::UsersController < ApplicationController

  def index
    #may not need index of users if the conversation is going to start from
    #the post page
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/auth'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attribute(:image, params[:image])
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :avatar_url)
  end
end
