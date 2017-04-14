get '/games/new' do
  erb :'games/new'
end

get '/games/:id' do
  @game = Game.find(params[:id])
  if @game.done == false
    erb :'games/show/play'
  else
    erb :'games/show/done'
  end
end

post '/games' do
  @player1 = Player.find_or_create_by(name: params[:player1])
  @player2 = Player.find_or_create_by(name: params[:player2])
  @game = Game.new
  @game.players.push(@player1, @player2)
  @game.save!
  redirect "/games/#{@game.id}"
end

put '/games/:id' do
  p "=====================I AM A PUT ==============="
  @game = Game.find(params[:id])
  @game.winner = @game.players[params[:winner].to_i]
  @game.done = true
  @game.save
  @game.duration = @game.calculate_duration
  @game.save!
  erb :'games/show/done', layout: false
end
