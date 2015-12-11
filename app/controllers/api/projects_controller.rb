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
    @project = Project.new(project_params)
    @project.members << @current_user

    if @project.save
      @project.records.create(
        name: "project created: #{@project.title}",
        user_id: @project.author_id
      )
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
      @project.records.create(
        name: "project updated: #{@project.title}",
        user_id: @project.author_id
      )
      # redirect them to the new user's show page
      render "api/projects/show"
    else
      # input didn't pass validation;
      # re-render project form.
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    if Project.find(params[:id]).try(:destroy!)
      project.records.create(
        name: "project destroyed: #{project.title}",
        user_id: project.author_id
      )
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid project id', status: 404 }
    end
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
