json.extract! user, :id, :name, :title, :email, :organization_id

project_id ||= nil

json.assignments do
  assignments = user.incomplete_assignments(project_id)
  unless assignments.empty?
    assignments.each do |step|
      # {stepID1: "title1", ...}
      json.extract! step, :id, :title
    end
  end
end

json.avatar_url asset_path(user.avatar.url)
