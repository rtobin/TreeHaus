@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', {user: user, project_id: @project_id}
  end
end
