class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.boolean :archived, null: false, defaul: false

      t.timestamps null: false
    end
  end
end
