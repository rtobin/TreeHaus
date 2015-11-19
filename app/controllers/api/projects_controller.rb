class Api::ProjectsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :show]
  # before_action :require_logged_in_as_project_author!, only: [:edit, :update, :destroy]

  def index
    @projects = current_user.projects
    render 'index'
  end

  def create
    project = Project.create!(project_params)
    render json: project
  end

  def destroy
    project = Project.find(params[:id]) 
  end

  protected
  def project_params
    self.params.require(:project).permit(
      :title,
      :description,
      :author_id,
      :archived
    )
  end
end
