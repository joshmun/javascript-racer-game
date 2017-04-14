class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.float :duration
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
