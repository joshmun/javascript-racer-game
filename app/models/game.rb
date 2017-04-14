class Game < ActiveRecord::Base
  validate :game_only_has_two_players
  has_and_belongs_to_many :players
  belongs_to :winner, class_name: "Player"

  def game_only_has_two_players
    if self.players.length != 2
      errors.add(:invalid_number_of_players, "game can only have 2 players")
    end
  end

  def calculate_duration
    self.updated_at - self.created_at
  end

end
