json.(todo, :title, :body, :author_id, :project_id, :done, :created_at, :updated_at)
json.steps do
  todo.steps.each do |step|
    json.set! step.id do
      json.partial! 'api/steps/step', step: step
    end
  end
end

json.assignees do
  todo.all_assignees.each do |assignee|
    json.set! assignee.id do
      json.partial! 'api/users/user', assignee: assignee
    end
  end
end
