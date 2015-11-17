class ChangeOrganizationNameToOrganizationId < ActiveRecord::Migration
  def change
    remove_column :users, :organization_name
    add_column :users, :organization_id, :integer, null: false
  end
end
