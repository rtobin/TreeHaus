class AddProjectIdToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :project_id, :integer, null: false
    add_index :todos, :project_id
  end
end
