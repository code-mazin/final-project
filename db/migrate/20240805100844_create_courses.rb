class CreateCourses < ActiveRecord::Migration[7.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :technology
      t.integer :price
      t.integer :duration

      t.timestamps
    end
  end
end
