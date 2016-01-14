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
        project = @step.todo.project
        name = current_user.name || current_user.email
        # @step.assignees << current_user
        todo_name = Todo.find(@step.todo_id).title
        project.records.create(
          name: "#{name} created a task called \"#{@step.title}\" under the goal \"#{todo_name}\"",
          user_id: current_user.id
        )
        emails.each do |email|
          member = User.find_by_email(email)
          @step.assignees << member
          step_assignment = @step.step_assignments.last

          project.records.create(
            name: "#{name} assigned #{member.name || member.email} to the task: \"#{@step.title}\"",
            user_id: current_user.id
          )
        end
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
      project = @step.todo.project
      name = current_user.name || current_user.email
      todo_name = Todo.find(@step.todo_id).title
      project.records.create(
        name: "#{name} deleted task called \"#{@step.title}\" under the goal \"#{todo_name}\"",
        user_id: current_user.id
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
    elsif @step.update(step_params)
      project = @step.todo.project
      name = current_user.name || current_user.email
      todo_name = Todo.find(@step.todo_id).title
      project.records.create(
        name: "#{name} updated the task called \"#{@step.title}\" under the goal \"#{todo_name}\"",
        user_id: current_user.id
      )
      emails.each do |email|
        member = User.find_by_email(email)
        @step.assignees << member
        step_assignment = @step.step_assignments.last

        project.records.create(
          name: "#{name} assigned #{member.name || member.email} to the task: \"#{@step.title}\"",
          user_id: current_user.id
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
