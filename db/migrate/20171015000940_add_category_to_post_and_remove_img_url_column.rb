class AddCategoryToPostAndRemoveImgUrlColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :img_url
    add_column :posts, :category, :string
  end
end
