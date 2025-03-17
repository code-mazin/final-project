class EnrollsController < ApplicationController

  def create
    enroll = @current_user.enrolls.create!(enroll_params)
    render json: enroll.course, status: :created
  end

  def destroy
    enroll = find_enroll
    enroll.destroy
    head :no_content
  end


  private

  def enroll_params
    params.permit(:course_id)
  end

  def find_enroll
    Enroll.find(params[:id])
  end
end
