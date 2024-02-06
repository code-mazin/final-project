class JobsController < ApplicationController
    
    skip_before_action :authorize, only: :index

    def index 
        render json: Job.all
    end

    def create
        job = @current_user.jobs.create!(job_params)
        render json: job, status: :created
    end

    def update
        job = Job.find_by(id: params[:id])
        job.update(job_params)
        render json: job
    end

    def destroy
        job = Job.find_by(id: params[:id])
        job.destroy
        head :no_content
    end

    private

    def job_params
        params.permit(:title, :salary)
    end
end
