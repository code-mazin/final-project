class JobsController < ApplicationController
    
    skip_before_action :authorize, only: :index

    def index 
        render json: Job.all
    end

    # def show
    #     job = Job.find_by(id: params[:id])
    #     render json: job
    # end


    private

    def job_params
        params.permit(:title, :salary)
    end
end
