json.(project, :id, :title, :description, :author_id, :archived)

# json.progress do
#   progress = project.todos_progress
#   json.total_done_count progress[:total_done_count]
#   json.total_step_count progress[:total_step_count]
# end

json.members do
  project.members.each do |member|
    # for some reason this isn't setting id correctly ...
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end

json.todos do
  json.progress do
    progress = project.todos_progress
    json.total_done_count progress[:total_done_count]
    json.total_step_count progress[:total_step_count]
  end

  todos = project.todos
  unless todos.empty?
    todos.each do |todo|
      json.set! todo.id do
        json.partial! 'api/todos/todo', todo: todo
      end
    end
  end
end
