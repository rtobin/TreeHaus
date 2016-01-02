class AllowSomeColumnsToBeNull < ActiveRecord::Migration
  def change
    remove_column :projects, :description
    remove_column :projects, :archived
    add_column :projects, :description, :text
    add_column :projects, :archived, :boolean, default: false

    remove_column :steps, :todo_id
    add_column :steps, :todo_id, :integer, null: false
    add_index :steps, :todo_id

  end
end
