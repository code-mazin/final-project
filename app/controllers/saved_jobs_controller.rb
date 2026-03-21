class SavedJobsController < ApplicationController
  before_action : :authorize

  def create
    bookmark = @current_user.saved_jobs.create!(
      saved_job_params
    )

    render json: bookmark, status: :created
      rescue ActiveRecord::RecordNotUnique, ActiveRecord::RecordInvalid
    render json: { error: "You have already saved this job" }, status: :unprocessable_entity
  end

private

  def saved_job_params
    params.permit(:job_id, :notes)
  end

end
