json.(comment, :id, :commentable_id, :commentable_type, :created_at, :content, :author_id)

json.author do
  author = comment.author
  json.name author.name || author.email
  json.title author.title
end

time_now = Time.now

time_from_now_created = (Time.now - comment.created_at)
if time_from_now_created.abs >= 1.year
  json.created_at_in_words comment.created_at.strftime('%a %d %b %Y %I:%M:%S %p')
elsif time_from_now_created.abs >= 5.days
  json.created_at_in_words comment.created_at.strftime('%a %d %b %I:%M:%S %p')
elsif time_from_now_created.abs >= 23.hours
  json.created_at_in_words comment.created_at.strftime('%a %d %I:%M:%S %p')
else
  json.created_at_in_words ActionController::Base.helpers.distance_of_time_in_words_to_now(
    comment.created_at, include_seconds: true) + " ago"
end
