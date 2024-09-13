class DropSignups < ActiveRecord::Migration[7.1]
  def change
    drop_table :signups
  end
end
