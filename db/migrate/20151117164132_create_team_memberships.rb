class CreateTeamMemberships < ActiveRecord::Migration
  def change
    create_table :team_memberships do |t|
      t.integer :team_id, null: false
      t.integer :member_id,  null: false
      
      t.timestamps null: false
    end
  end
end
