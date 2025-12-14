class JobApplicationsController < ApplicationController
  before_action :authorize

def create
  application = JobApplication.create!(
    job_id: params[:job_id],
    user: @current_user,
    cover_letter: params[:cover_letter]
  )

  render json: application, status: :created
end


  private

  def job_application_params
    params.permit(:job_id, :user_id, :cover_letter)
  end
end
