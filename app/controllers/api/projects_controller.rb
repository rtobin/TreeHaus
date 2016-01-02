class Api::ProjectsController < ApplicationController
  before_action :logged_in?
  before_action :require_logged_in_as_project_member!, only: [:show, :edit, :update, :destroy]

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

    if @project.valid?
      emails = params[:emails].split(/\s*[ ,]\s*/)

      flagged_email = nil
      i = 0
      while i < emails.count
        email = emails[i]
        member = User.find_by_email(email)
        if member.nil?
          flagged_email = email
          break
        end
        i += 1
      end
      if flagged_email
        render json: ["\"#{flagged_email}\" is not associated with any Treehaus account"], status: 422
      else
        @project.save!
        @project.members << current_user
        emails.each do |email|
          member = User.find_by_email(email)
          @project.members << member
          membership = @project.memberships.last
          # membership.records.create(
          #   name: "#{member.email} became member of #{membership.project.title}",
          #   user_id: current_user.id
          # )
          @project.records.create(
            name: "#{current_user.email} added #{member.email} to #{membership.project.title}",
            user_id: current_user.id
          )
        end

        @project.records.create(
          name: "project created: #{@project.title}",
          user_id: @project.author_id
        )
        render "api/projects/show"
      end
    else
      # input didn't pass validation;
      # re-render project form.
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    emails = params[:emails].split(/\s*[ ,]\s*/)
    flagged_email = nil
    i = 0
    while i < emails.count
      email = emails[i]
      member = User.find_by_email(email)
      if member.nil?
        flagged_email = email
        break
      end
      i += 1
    end
    if flagged_email
      render json: ["\"#{flagged_email}\" is not associated with any Treehaus account"], status: 422
      return nil
    elsif @project.update(project_params)
      emails.each do |email|
        member = User.find_by_email(email)
        @project.members << member
        membership = @project.memberships.last
        # membership.records.create(
        #   name: "#{member.email} became member of #{membership.project.title}",
        #   user_id: current_user.id
        # )
        @project.records.create(
          name: "#{current_user.email} added #{member.email} to #{membership.project.title}",
          user_id: current_user.id
        )
        @project.records.create(
          name: "project updated: #{@project.title}",
          user_id: @project.author_id
        )
        # redirect them to the new user's show page
      end

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

  def require_logged_in_as_project_member!
    Project.find(params[:id]).members.map { |member| member.id }.include?(current_user.id)
  end
end
