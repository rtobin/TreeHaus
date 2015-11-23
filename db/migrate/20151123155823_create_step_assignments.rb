class CreateStepAssignments < ActiveRecord::Migration
  def change
    create_table :step_assignments do |t|
      t.integer :step_id, null: false
      t.integer :assignee, null: false
      t.integer :assigner, null: false

      t.timestamps null: false
    end

    add_index :step_assignments, :step_id
    add_index :step_assignments, :assignee
    add_index :step_assignments, :assigner

  end
end
