json.(project, :id, :title, :description, :author_id, :archived)
json.todos.each do |todo|
    json.set! todo.id do
      json.partial! 'api/todos/todo', todo: todo
    end
  end
end
