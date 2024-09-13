class CreateEnrolls < ActiveRecord::Migration[7.1]
  def change
    create_table :enrolls do |t|
      t.integer :user_id
      t.integer :course_id

      t.timestamps
    end
  end
end
