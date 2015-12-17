class Api::StepsController < ApplicationController

  def create
    @step = Step.new(step_params)

    if @step.valid?
      emails = params[:assignees].split(/\s*[ ,]\s*/)

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
        @step.save!
        # @step.assignees << current_user
        emails.each do |email|
          member = User.find_by_email(email)
          @step.assignees << member
          step_assignment = @step.step_assignments.last
          step_assignment.records.create(
            name: "assigned #{member.name || member.email} to #{step_assignment.step.title}",
            user_id: current_user.id
          )

        end

        @step.records.create(
          name: "step created: #{@step.title}",
          user_id: @step.author_id
        )
        render "api/steps/show"
      end
    else
      # input didn't pass validation;
      # re-render step form.
      render json: @step.errors.full_messages, status: 422
    end
  end

  def index
    @steps = Todo.find(params[:todo_id]).steps
    render json: @steps
  end

  def destroy
    @step = Step.find(params[:id])
    if @step.try(:destroy!)
      @step.records.create(
        name: "step destroyed: #{@step.title}",
        user_id: @step.author_id
      )
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid step', status: 404 }
    end
  end

  def update
    @step = Step.find(params[:id])

    assignees = params[:assignees] || ""
    emails = assignees.split(/\s*[ ,]\s*/)
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
    elsif @step.update(project_params)
      emails.each do |email|
        member = User.find_by_email(email)
        @step.assignees << member
        step_assignment = @step.step_assignments.last
        step_assignment.records.create(
          name: "#{member.email} became member of #{step_assignment.step.title}",
          user_id: current_user.id
        )
        step_assignment.records.create(
          name: "#{current_user.email} added #{member.email} to #{step_assignment.step.title}",
          user_id: current_user.id
        )
        @step.records.create(
          name: "step updated: #{@step.title}",
          user_id: @step.author_id
        )
        # redirect them to the new user's show page
      end

      render "api/steps/show"

    else
      # input didn't pass validation;
      # re-render step form.
      render json: @step.errors.full_messages, status: 422
    end
  end

  private
  def step_params
    params.require(:step).permit(
      :title,
      :done,
      :body,
      :todo_id,
      :author_id,
      :due_at,
      :start_at
    )
  end
end
