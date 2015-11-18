class UsersOnlyRequireEmailAndPassword < ActiveRecord::Migration
  def change
    remove_column :users, :name
    remove_column :users, :title
    remove_column :users, :organization_id
    add_column :users, :name, :string
    add_column :users, :title, :string
    add_column :users, :organization_id, :integer
  end
end
