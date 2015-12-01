class Api::SessionsController < ApplicationController


  def show
    @todo = Todo.find(params[:id])
    render "api/todos/show"
    # render json: Todo.find(params[:id])
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      todo.records.create(name: "todo created: #{todo.title}")
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.try(:destroy!)
      todo.records.create(name: "todo destroyed: #{todo.title}")
      render json: { message: 'destroyed' }
    else
      render json: { message: 'invalid todo', status: 404 }
    end
  end

  def update
    todo = Todo.find(params[:id])
    if !todo
      render json: { message: 'not found', status: 404 }
    elsif todo.update(todo_params)
      todo.records.create(name: "todo updated: #{todo.title}")
      render json: todo
    else
      render json: todo.errors.full_messages
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :done, :body, :author_id)
  end

end
