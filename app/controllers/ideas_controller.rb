class IdeasController < ApplicationController
  def index
    render json: Idea.all
  end

  def create
    idea = @current_user.ideas.create!(idea_params)
    render json: idea, status: :created
  end

  private

  def idea_params
    params.permit(:idea, :details)
  end

end
