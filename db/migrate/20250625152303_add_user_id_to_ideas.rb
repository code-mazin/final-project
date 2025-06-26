class AddUserIdToIdeas < ActiveRecord::Migration[7.1]
  def change
    add_column :ideas, :user_id, :integer, null: false
  end
end
