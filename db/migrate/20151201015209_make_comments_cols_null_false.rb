class MakeCommentsColsNullFalse < ActiveRecord::Migration
  def change
    remove_column :comments, :content
    remove_column :comments, :author_id
    add_column :comments, :content, :text, null: false
    add_column :comments, :author_id, :integer, null: false
    add_index :comments, :author_id
  end
end
