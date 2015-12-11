class FixSpellingErrorForProjIdInTeams < ActiveRecord::Migration
  def change
    remove_column :teams, :prject_id
    add_column :teams, :project_id, :integer, null: false
    add_index :teams, :project_id
    add_index :team_memberships, :team_id
    add_index :team_memberships, :member_id
  end
end
