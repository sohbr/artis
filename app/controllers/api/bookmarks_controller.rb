class Api::BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
    else
      render json: @bookmark.errors.full_messages
    end
  end

  def destroy
    bookmark = Bookmark.find_by(
      user_id: bookmark_params[:user_id],
      post_id: bookmark_params[:post_id]
    )
    bookmark.destroy
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :post_id)
  end
end
