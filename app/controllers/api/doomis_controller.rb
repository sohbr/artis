class Api::DoomisController < ApplicationController
  def create
    @doomi = Doomi.new(doomi_params)
    debugger
    if @doomi.save
      render json: ["doomi created"]
    else
      render json: @doomi.errors.full_messages
    end
  end

  private

  def doomi_params
    params.require(:doomi).permit(:title, :user_id)
  end
end
