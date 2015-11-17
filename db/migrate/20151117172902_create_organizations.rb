class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.integer :name, null: false

      t.timestamps null: false
    end
  end
end
