json.extract! user, :id, :name, :title, :email, :organization_id

json.avatar_url asset_path(user.avatar.url)
