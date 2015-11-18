json.extract! user, :id, :name, :title, :email, :organization
json.projects do
  json.partial!('api/projects', collection: user.projects, as: :projects)
end
