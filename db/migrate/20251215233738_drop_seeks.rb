class DropSeeks < ActiveRecord::Migration[7.1]
  def change
    drop_table :seeks
  end
end
