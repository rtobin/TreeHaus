class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :title, null: false
      t.string :password_digest, null: false
      t.string :session_token,   null: false
      t.string :email, null: false
      t.attachment :avatar

      t.timestamps null: false
    end

    add_index :users, ["session_token"], unique: true
    add_index :users, ["email"], unique: true
  end
end
