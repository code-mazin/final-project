class CreateSavedJobs < ActiveRecord::Migration[7.1]
  def change
    create_table :saved_jobs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :job, null: false, foreign_key: true
      t.text :notes # optional feature

      t.timestamps
    end

    # Prevent duplicate saves (very important)
    add_index :saved_jobs, [:user_id, :job_id], unique: true
  end
end
