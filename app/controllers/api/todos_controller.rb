class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find(params[:id])
    render "api/todos/show"
    # render json: Todo.find(params[:id])
  end

  def create
    @todo =Todo.new(todo_params)
    if @todo.save
      project = @todo.project
      name = current_user.name || current_user.email
      project.records.create(
<<<<<<< HEAD
        name: "#{name} created a goal called \"#{@todo.title}\"",
=======
        name: "#{name} created a goal called #{@todo.title}",
>>>>>>> 806aa69f204cd7e096175e7addf1645ae5925d56
        user_id: current_user.id
      )
      render "api/todos/show"
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.try(:destroy!)
      project = todo.project
      project.records.create(
        name: "todo destroyed: #{todo.title}",
        user_id: todo.author_id
      )
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid todo', status: 404 }
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if !@todo
      render json: { message: 'not found', status: 404 }
    elsif @todo.update(todo_params)
      project = @todo.project
      name = current_user.name || current_user.email
      project.records.create(
<<<<<<< HEAD
        name: "#{name} updated a goal called \"#{@todo.title}\"",
=======
        name: "#{name} updated a goal called #{@todo.title}",
>>>>>>> 806aa69f204cd7e096175e7addf1645ae5925d56
        user_id: @todo.author_id
      )
      render "api/todos/show"
    else
      render json: todo.errors.full_messages
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :done, :body, :author_id, :project_id)
  end

end
