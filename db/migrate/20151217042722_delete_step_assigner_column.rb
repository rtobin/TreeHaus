class DeleteStepAssignerColumn < ActiveRecord::Migration
  def change
    remove_column :step_assignments, :assigner_id
  end
end
