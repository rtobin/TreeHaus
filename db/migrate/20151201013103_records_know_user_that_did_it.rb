class RecordsKnowUserThatDidIt < ActiveRecord::Migration
  def change
    remove_column :records, :name
    add_column :records, :name, :string, null: false
    add_column :records, :user_id, :integer, null: false
  end
end
