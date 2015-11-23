class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body
      t.integer :todo_id
      t.integer :author_id, null: false
      t.boolean :done, null: false
      t.datetime :due_date

      t.timestamps null: false
    end

    add_index :steps, :todo_id
    add_index :steps, :author_id

  end

end
