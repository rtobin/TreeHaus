class CreateMembers < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :project_id, null: false
      t.integer :member_id,  null: false

      t.timestamps null: false
    end

    add_index :memberships, :project_id
    add_index :memberships, :member_id
  end
end
