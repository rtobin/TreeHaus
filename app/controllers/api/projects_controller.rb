class Api::ProjectsController < ApplicationController
  # before_action :logged_in?, only: [:create, :show]
  # before_action :require_logged_in_as_project_author!, only: [:edit, :update, :destroy]

  def show
    @project = Project.find(params[:id])
    render "api/projects/show"
  end

  def index
    @projects = current_user.projects
    render 'api/projects/index'
  end

  def create
    @project = Project.create!(project_params)
    if @project.save
      # redirect them to the new user's show page
      render "api/projects/show"
    else
      # input didn't pass validation;
      # re-render project form.
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      # redirect them to the new user's show page
      render "api/projects/show"
    else
      # input didn't pass validation;
      # re-render project form.
      render json: @project.errors.full_messages, status: 422
    end
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
