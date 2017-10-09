class CreateDoomis < ActiveRecord::Migration[5.1]
  def change
    create_table :doomis do |t|
      t.string :title, null: false
      t.boolean :completed, null: false, default: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :doomis, :user_id
  end
end
