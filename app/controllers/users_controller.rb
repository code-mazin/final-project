class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def update
        @current_user.update!(user_params_update)
        render json: @current_user, status: :accepted
    end

    # def destroy
    #     user = User.find_by(id: params[:id])
    #     if user
    #         user.destroy
    #         head :no_content
    #     else
    #         render json: { error: "User not found" }, status: :not_found
    #     end
    # end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def user_params_update
        params.permit(:bio, :email, :age, :years_of_exp)
    end
end
