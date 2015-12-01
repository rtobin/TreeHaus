class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.integer :record_id, null: false
      t.timestamps null: false
    end

    add_index :notifications, :user_id
    add_index :notifications, :record_id
  end
end
