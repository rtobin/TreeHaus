json.(project, :id, :title, :description, :author_id, :archived)

json.members do
  project.members.each do |member|
    # for some reason this isn't setting id correctly ...
    json.set! member.id do
      json.partial! 'api/users/user', user: member, project_id: project.id
    end
  end
end
