class AddOrganizationColToUsers < ActiveRecord::Migration
  def change
    add_column :users, :organization_name, :string, null: false
  end
end
