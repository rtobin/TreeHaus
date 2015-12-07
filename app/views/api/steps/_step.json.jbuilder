json.(step, :id, :title, :body, :author_id, :todo_id, :due_at, :start_at, :done, :created_at, :updated_at)

json.num_comments step.comments.count
json.author_name step.author.name || step.author.email

time_now = Time.now

t = (Time.now - step.created_at)
if t.abs >= 1.year
  json.created_at_in_words step.created_at.strftime('%a %d %b %Y %I:%M:%S %p')
elsif t.abs >= 5.days
  json.created_at_in_words step.created_at.strftime('%a %d %b %I:%M:%S %p')
elsif t.abs >= 23.hours
  json.created_at_in_words step.created_at.strftime('%a %d %I:%M:%S %p')
else
  json.created_at_in_words ActionController::Base.helpers.distance_of_time_in_words_to_now(
    step.created_at, include_seconds: true) + " ago"
end

t = (Time.now - step.updated_at)
if t.abs >= 1.year
  json.updated_at_in_words step.updated_at.strftime('%a %d %b %Y %I:%M:%S %p')
elsif t.abs >= 5.days
  json.updated_at_in_words step.updated_at.strftime('%a %d %b %I:%M:%S %p')
elsif t.abs >= 23.hours
  json.updated_at_in_words step.updated_at.strftime('%a %d %I:%M:%S %p')
else
  json.updated_at_in_words ActionController::Base.helpers.distance_of_time_in_words_to_now(
    step.updated_at, include_seconds: true) + " ago"
end

if step.due_at
  t = (Time.now - step.due_at)
  if t.abs >= 1.year
    json.due_at_in_words step.due_at.strftime('%a %d %b %Y %I:%M:%S %p')
  elsif t.abs >= 5.days
    json.due_at_in_words step.due_at.strftime('%a %d %b %I:%M:%S %p')
  elsif t.abs >= 23.hours
    json.due_at_in_words step.due_at.strftime('%a %d %I:%M:%S %p')
  else
    time_ref_str = step.due_at > time_now ? " from now" : " ago"
    json.due_at_in_words ActionController::Base.helpers.distance_of_time_in_words_to_now(
      step.due_at, include_seconds: true) + time_ref_str
  end
end

if step.start_at
  t = (Time.now - step.start_at)
  if t.abs >= 1.year
    json.start_at_in_words step.start_at.strftime('%a %d %b %Y %I:%M:%S %p')
  elsif t.abs >= 5.days
    json.start_at_in_words step.start_at.strftime('%a %d %b %I:%M:%S %p')
  elsif t.abs >= 23.hours
    json.start_at_in_words step.start_at.strftime('%a %d %I:%M:%S %p')
  else
    time_ref_str = step.start_at > time_now ? " from now" : " ago"
    json.start_at_in_words ActionController::Base.helpers.distance_of_time_in_words_to_now(
      step.start_at, include_seconds: true) + time_ref_str
  end
end

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
