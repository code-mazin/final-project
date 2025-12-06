class JobsController < ApplicationController
    
    skip_before_action :authorize, only: :index
    before_action :authorize_admin, only: :create

    def index 
        render json: Job.all
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job, serializer: JobWithDescSerializer
    end

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
    end


    private

    def job_params
        params.permit(:title, :salary, :technology, :desc, :email, :work_from_home)
    end

    def find_job
        Job.find(params[:id])
    end
end

