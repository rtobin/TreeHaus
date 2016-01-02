class Api::MembershipsController < ApplicationController
  def index
    @project_id = member_params[:project_id]
    project = Project.find(@project_id)
    @users = project.members
    render "api/users/index"
  end

  def create
    member = User.find_by_email(member_params.email)
    unless member
      render json: { message: 'invalid email', status: 422 }
    end

    membership = Membership.new(
      project_id: member_params.project_id,
      member_id: member.id
    )

    if membership.save
      @user = membership.member
      project = Project.find(member_params.project_id)
      # project.records.create(
      #   name: "#{@user.email} became member of #{membership.project.title}",
      #   user_id: current_user.id
      # )
      project.records.create(
        name: "#{current_user.email} added #{@user.email} to #{membership.project.title}",
        user_id: current_user.id
      )
      @project_id = member_params.project_id
      render "api/users/show_meta"
    else
      render json: membership.errors.full_messages, status: 422
    end
  end

  def destroy
    membership = Membership.where(
      member_id: member_params[:member_id],
      project_id: member_params[:project_id]
    )
    if membership.try(:destroy!)
      member = membership.member
      project = membership.project
      project.records.create(
        name: "#{member.email} membership revoked for #{project.title}",
        user_id: current_user.id
      )
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid membership params', status: 404 }
    end
  end

  private
  def member_params
    params.require(:membership).permit(
      :member_id,
      :project_id
    )
  end
end
