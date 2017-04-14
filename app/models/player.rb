class Player < ActiveRecord::Base
  validates :name, uniqueness: true, presence: true

  has_and_belongs_to_many :games
  has_many :won_games, class_name: "Game", foreign_key: :winner_id

end
