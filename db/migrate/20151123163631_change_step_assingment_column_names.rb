class ChangeStepAssingmentColumnNames < ActiveRecord::Migration
  def change
    remove_column :step_assignments, :assignee
    remove_column :step_assignments, :assigner
    add_column :step_assignments, :assignee_id, :integer, null: false
    add_column :step_assignments, :assigner_id, :integer, null: false
    add_index :step_assignments, :assignee_id
    add_index :step_assignments, :assigner_id

  end
end
