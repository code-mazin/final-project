class EnrollsController < ApplicationController

  def create
    enroll = @current_user.enrolls.create!(enroll_params)
    render json: enroll.course, status: :created
  end


  private

  def enroll_params
    params.permit(:course_id)
  end
end
