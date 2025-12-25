class JobApplicationsController < ApplicationController
  before_action :authorize

def create
  application = @current_user.job_applications.create!(
    job_application_params
  )
  # ✅ send confirmation email to user
  JobApplicationMailer.confirmation_email(application).deliver_later

  render json: application, status: :created
end



  private

  def job_application_params
    params.permit(:job_id, :cover_letter)
  end
end
