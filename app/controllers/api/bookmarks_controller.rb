class Api::BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(
      user_id: params[:user_id],
      post_id: params[:post_id]
    )
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages
    end
  end

  def destroy
    bookmark = Bookmark.find_by(
      user_id: params[:user_id],
      post_id: params[:post_id]
    )
    bookmark.destroy
  end
end
