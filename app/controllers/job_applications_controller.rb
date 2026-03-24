class JobApplicationsController < ApplicationController

  def create
    application = @current_user.job_applications.create!(
      job_application_params
    )
    # send confirmation email to user
    JobApplicationMailer.confirmation_email(application).deliver_later

    render json: application, status: :created
      rescue ActiveRecord::RecordNotUnique, ActiveRecord::RecordInvalid
    render json: { error: "You have already applied for this job" }, status: :unprocessable_entity
  end

private

  def job_application_params
    params.permit(:job_id, :cover_letter)
  end
end
