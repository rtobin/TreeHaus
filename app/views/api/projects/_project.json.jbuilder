json.(project, :id, :title, :description, :author_id, :archived)

json.progress do
  todos = project.todos
  total_step_count = 0
  total_done_count = 0
  todos.each do |todo|
    progress = todo.progress
    total_step_count += progress.step_count
    total_done_count += progress.done_count
  end
  json.total_done_count = total_done_count
  json.total_step_count = total_step_count
end

json.todos do
  todos = project.todos
  unless todos.empty?
    todos.each do |todo|
      json.set! todo.id do
        json.partial! 'api/todos/todo', todo: todo
      end
    end
  end
end
