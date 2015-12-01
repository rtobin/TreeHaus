class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :author_id
      t.references :commentable, polymorphic: true, index: true
      t.timestamps null: false
    end

    add_index :comments, :author_id
  end
end
