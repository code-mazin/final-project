class DropCourses < ActiveRecord::Migration[7.1]
  def change
    drop_table :courses
  end
end
