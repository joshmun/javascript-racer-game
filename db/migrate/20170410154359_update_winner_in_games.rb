class UpdateWinnerInGames < ActiveRecord::Migration
  def change
    remove_column :games, :winner
    add_column :games, :winner_id, :integer
  end
end
