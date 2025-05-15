class JobsController < ApplicationController
    
    skip_before_action :authorize, only: :index

    def index 
        render json: Job.all
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job, serializer: JobWithDescSerializer
    end


    private

    def job_params
        params.permit(:title, :salary)
    end

    def find_job
        Job.find(params[:id])
    end
end
