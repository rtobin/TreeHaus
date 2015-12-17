json.partial! 'api/users/user', user: @user, project_id: nil

json.projects do
  unless @user.projects.nil?
    @user.projects.each do |project|
      json.set! project.id do
        json.partial! 'api/projects/project_less', project: project
      end
    end
  end
end
