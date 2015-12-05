class Api::StepsController < ApplicationController

  def create
    @step = Step.new(step_params)

    if @step.save
      @step.records.create(
        name: "step created: #{@step.title}",
        user_id: @step.author_id
      )
      render "api/steps/show"
    else
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
    if !@step
      render json: { message: 'not found', status: 404 }
    elsif @step.update(step_params)
      @step.records.create(
        name: "step updated: #{@step.title}",
        user_id: @step.author_id
      )
      render "api/steps/show"
    else
      render json: @step.errors.full_messages
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
