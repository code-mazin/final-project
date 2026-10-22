class AddJobTypeToJobs < ActiveRecord::Migration[7.1]
  def change
    add_column :jobs, :job_type, :string
  end
end
