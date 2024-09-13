class CreateSeeks < ActiveRecord::Migration[7.1]
  def change
    create_table :seeks do |t|
      t.integer :user_id
      t.integer :job_id

      t.timestamps
    end
  end
end
