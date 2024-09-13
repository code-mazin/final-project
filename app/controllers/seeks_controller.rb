class SeeksController < ApplicationController

  def create
    seek = @current_user.seeks.create!(seek_params)
    render json: seek.job, status: :created
  end

  private

  def seek_params
    params.permit(:job_id)
  end

end
