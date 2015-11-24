json.partial! 'api/users/user', user: @user

json.projects do
  unless @user.projects.nil?
    @user.projects.each do |project|
      json.set! project.id do
        json.partial! 'api/projects/project', project: project
      end
    end
  end
end
