class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])

        render json: { errors: ["Not authorized, Please Log in"] }, status: :unauthorized unless @current_user      
    end

    def authorize_admin
        @current_user = User.find_by(id: session[:user_id])

        unless @current_user&.admin?
            render json: { errors: ["Admins only"] }, status: :forbidden
        end
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
