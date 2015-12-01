json.(todo, :id, :title, :body, :author_id, :project_id, :done, :created_at, :updated_at)
json.steps do
  steps = todo.steps
  unless steps.empty?
    steps.each do |step|
      json.set! step.id do
        json.partial! 'api/steps/step', step: step
      end
    end
  end
end

json.progress do
  progress = todo.progress
  json.step_count progress[:step_count]
  json.done_count progress[:done_count]
end

json.assignees do
  assignees = todo.all_assignees
  unless assignees.empty?
    assignees.each do |assignee|
      json.set! assignee.id do
        json.partial! 'api/users/user', assignee: assignee
      end
    end
  end
end
