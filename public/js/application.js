$(document).ready(function() {
  $(document).on('keyup', function(event) {
    var p1Position;
    $('tr#player1_strip').children().each(function(index) {
      if ($(this).hasClass('active')) {
        p1Position = index;
      }
    });
    var p2Position;
    $('tr#player2_strip').children().each(function(index) {
      if ($(this).hasClass('active')) {
        p2Position = index;
      }
    });
    if (p1Position === 29 || p2Position === 29 ) {
        $(document).off("keyup");
      var winner;
      if (p1Position === 29) {
        winner = 0;
      } else {
        winner = 1;
      };
      var pathName = window.location.pathname;
      $.ajax({
        url: pathName,
        type: "PUT",
        data: {winner}
      }).done(function(response){
        // $('.winner').show();
        $('.winner').slideDown();
        $('.winner').html(response);
      });
      // $(".board").hide();
      // $(".winner").show();
      // if ( p1Position === 29 ) {
      //   $(".winner").html("<p>Player 1 wins! Press space to restart</p>")
      // }
      // else {
      //   $(".winner").html("<p>Player 2 wins! Press Space to restart</p>")
      // }
    }
    else {
      if (event.which === 81) {
        updatePlayerPosition('player1', p1Position)
      };
      if (event.which === 80) {
        updatePlayerPosition('player2', p2Position)
      };
    };
  });
  // $(document).on('keyup', function(event) {
  //   if (event.which === 32) {
  //     resetBoard();
  //   };
  // });
});


function updatePlayerPosition(player, currentPosition) {
  var board;
  if (player === 'player1') {
    board = $('#player1_strip').children();
  }
  else {
    board = $('#player2_strip').children();
  };
  $(board[currentPosition]).removeClass('active');
  $(board[currentPosition + 1]).addClass('active');
};

function resetBoard() {
  // Remove all active classes
  // Set active class to td1
  // Show board
  // Remove winner div
  $('tr#player1_strip').children().each(function(index) {
        $(this).removeClass('active');
  });
  $('tr#player2_strip').children().each(function(index) {
        $(this).removeClass('active');
  });
  $($('tr#player1_strip').children()[0]).addClass('active');
  $($('tr#player2_strip').children()[0]).addClass('active');
  $(".board").show();
  $(".winner").hide();
};
