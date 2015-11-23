json.extract! user, :id, :name, :title, :email, :organization_id
json.projects do
  json.partial!('api/projects/project_less', collection: user.projects, as: :project)
end
