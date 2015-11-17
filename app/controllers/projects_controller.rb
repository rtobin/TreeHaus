class ProjectsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :show]
  before_action :require_logged_in_as_project_author!, only: [:edit, :update, :destroy]

  def create
    # new project
    @project = Project.new(project_params)
    if @project.save
      # redirect them to the new project's show page
      redirect_to user_url(@user.id)
    else
      # input didn't pass validation;
      # re-render project form.
      render :new
    end
  end

  def new
    # present form for signup
    @user = User.new # dummy user object
    render :new
  end

  def show
    if current_user.nil?
      # let them log in
      redirect_to new_session_url
      return
    end

    @user = current_user
    render :show
  end

  def search
    if params[:query].present?
      @users = User.where("username ~ ?", params[:query])
    else
      @users = User.none
    end

    respond_to do |format|
      format.html { render :search }
      format.json { render :search }
    end
  end

  protected
  def user_params
    self.params.require(:user).permit(
            :email, :password, :name, :title, :organization_name)
  end
end
