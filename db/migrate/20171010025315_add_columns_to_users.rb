class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :email, :string
    add_column :users, :avatar_url, :string

    drop_table :doomis
  end
end
