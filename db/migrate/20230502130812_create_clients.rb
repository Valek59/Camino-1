class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :company
      t.string :role
      t.string :pro_email
      t.string :phone_number

      t.timestamps
    end
  end
end
