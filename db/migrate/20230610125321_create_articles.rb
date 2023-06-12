class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :publication_date
      t.string :category
      t.string :title
      t.text :content
      t.string :url
      t.string :image
      t.integer :reading_time
      t.string :writer

      t.timestamps
    end
  end
end
