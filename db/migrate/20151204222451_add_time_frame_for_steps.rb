class AddTimeFrameForSteps < ActiveRecord::Migration
  def change
    remove_column :steps, :due_date
    add_column :steps, :due_at, :datetime
    add_column :steps, :start_at, :datetime
  end
end
