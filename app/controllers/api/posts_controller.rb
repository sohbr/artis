class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    if params[:searchTerm]
      @posts = Post.where("LOWER(title) LIKE ? OR LOWER(category) LIKE ?", "%#{params[:searchTerm].downcase}%", "%#{params[:searchTerm].downcase}%")
    elsif params[:bookmarks]
      @posts = User.find_by(session_token: params[:session_token]).bookmarked_posts
    else
      @posts = Post.all.limit(80)
    end
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    post = Post.find(params[:id])
    if current_user && current_user.posts.include?(post)
      post.destroy
    else
      render json: ["You are not allowed to delete this post."], status: 401
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :image, :user_id, :category)
  end
end
