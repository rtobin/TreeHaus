json.(comment, :id, :commentable_id, :commentable_type, :created_at, :content, :author_id)

json.author do
  author = comment.author
  json.name author.name || author.email
  json.title author.title
end
