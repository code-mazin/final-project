class AddDescToJobs < ActiveRecord::Migration[7.1]
  def change
    add_column :jobs, :desc, :string
  end
end
