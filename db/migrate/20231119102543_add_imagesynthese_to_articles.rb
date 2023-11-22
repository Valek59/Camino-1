class AddImagesyntheseToArticles < ActiveRecord::Migration[7.0]
  def change
      add_column :articles, :imagesynthese, :string
  end
end
