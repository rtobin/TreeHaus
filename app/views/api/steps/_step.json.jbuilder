json.(step, :id, :title, :body, :author_id, :todo_id, :due_at, :start_at, :done, :created_at, :updated_at)

json.num_comments step.comments.count
json.author_name step.author.name || step.author.email

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
