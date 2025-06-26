class CreateIdeas < ActiveRecord::Migration[7.1]
  def change
    create_table :ideas do |t|
      t.string :idea
      t.string :details

      t.timestamps
    end
  end
end
