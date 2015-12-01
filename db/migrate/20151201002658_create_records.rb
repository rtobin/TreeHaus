class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :name
      t.references :recordable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
