class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :recipient_id, null: false
      t.integer :author_id, null: false
      t.integer :rating, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :recipient_id
    add_index :reviews, [:author_id, :recipient_id], unique: true
  end
end
