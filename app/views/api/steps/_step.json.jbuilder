json.(step, :title, :body, :author_id, :todo_id, :due_date, :done, :created_at, :updated_at)

json.assignees do
  assignees = step.assignees
  unless assignees.nil?
    step.assignees.each do |assignee|
      json.set! assignee.id do
        json.partial! 'api/users/user', assignee: assignee
      end
    end
  end
end
