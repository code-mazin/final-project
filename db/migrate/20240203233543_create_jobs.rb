class CreateJobs < ActiveRecord::Migration[7.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :salary
      t.string :technology
      t.string :email
      t.boolean :work_from_home
      t.boolean :published
      t.integer :app_deadline

      t.timestamps
    end
  end
end
