class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.string :img_url

      t.timestamps
    end
    add_index :posts, :user_id
  end
end
