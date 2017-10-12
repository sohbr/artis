class Api::UsersController < ApplicationController

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

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :avatar_url)
  end
end
