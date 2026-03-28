class SavedJobsController < ApplicationController

  def create
    bookmark = @current_user.saved_jobs.create!(
      saved_job_params
    )

    render json: bookmark, status: :created
      rescue ActiveRecord::RecordNotUnique, ActiveRecord::RecordInvalid
    render json: { error: "You have already saved this job" }, status: :unprocessable_entity
  end

  def index
  saved_jobs = @current_user.saved_jobs.includes(:job)

  render json: saved_jobs.map { |sj|
    {
      id: sj.id,
      job_id: sj.job.id,
      title: sj.job.title,
      technology: sj.job.technology
    }
  }
end

private

  def saved_job_params
    params.permit(:job_id, :notes)
  end

end
