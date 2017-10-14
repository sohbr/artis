class AddIdentifier < ActiveRecord::Migration[5.1]
  def change
    add_column :conversations, :identifier, :string

    remove_column :conversations, :author_id
    remove_column :conversations, :receiver_id
  end
end
