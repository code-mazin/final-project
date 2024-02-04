class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :image_url
      t.string :bio
      t.string :email
      t.integer :age
      t.integer :years_of_exp

      t.timestamps
    end
  end
end
