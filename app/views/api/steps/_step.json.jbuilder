json.(step, :id, :title, :body, :author_id, :todo_id, :due_date, :done, :created_at, :updated_at)

json.num_comments step.comments.count

json.assignees do
  assignees = step.assignees
  unless assignees.empty?
    step.assignees.each do |assignee|
      json.set! assignee.id do
        json.partial! 'api/users/user', assignee: assignee
      end
    end
  end
end
