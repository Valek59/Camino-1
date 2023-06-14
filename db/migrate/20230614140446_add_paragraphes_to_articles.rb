class AddParagraphesToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :paragraphes1, :text
    add_column :articles, :paragraphes2, :text
    add_column :articles, :paragraphes3, :text
    add_column :articles, :title1, :text
    add_column :articles, :title2, :text
    add_column :articles, :title3, :text
  end
end
