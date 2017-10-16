class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(recipient_id: params[:recipientId])
    @reviews_avg = @reviews.average(:rating)
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.written_reviews.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if current_user && current_user.written_reviews.include?(@review)
      @review.destroy

      render :show
    else
      render json: ["You are not allowed to delete this review."], status: 401
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :recipient_id)
  end

end
