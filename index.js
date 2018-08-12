// function created to run when the DOM is ready
$(function(){
  var
  // variable created for game replay
  gameReset = $('#replay'),
  // player variable created to assing to next available possition in the game
  player = 1,
  // to check is the possition has been taken by the other player to prevent overwrite
  squareClicked,
  // To assgin a square in the game to the player and the position in the game
  sqrChosen,
  // player postion created to assign a square to the right player in the game
  playerPosition= [0,0,0,0,0,0,0,0];



  $('.square').on('click', changeTo)
  // function created to assing player to their chosen position in the game
  function changeTo() {

    sqrChosen = $(this).attr('id');
// switch statement is used to assing player to a position based on the square selected
    switch (sqrChosen) {
      case'sqr0':
      playerPosition[0] = player;
      break;
      case'sqr1':
      playerPosition[1] = player;
      break;
      case'sqr2':
      playerPosition[2] = player;
      break;
      case'sqr3':
      playerPosition[3] = player;
      break;
      case'sqr4':
      playerPosition[4] = player;
      break;
      case'sqr5':
      playerPosition[5] = player;
      break;
      case'sqr6':
      playerPosition[6] = player;
      break;
      case'sqr7':
      playerPosition[7] = player;
      break;
      case'sqr8':
      playerPosition[8] = player;
      break;
      default:
    }
    squareClicked = $(this);
    winCombo();
// if statement to check if a pistion has been allocated to the opposing player
    if (squareClicked.hasClass('x') || squareClicked.hasClass('o')) {
      // if a postion has been allocated to the other player a message will be dsiplayed
      $('h4').empty().append('Allocated to opponent');
    }
    else {

      if (player == 1) {
        squareClicked.addClass('x');
        player = 2;
        $('h4').empty();

      }
      else {
        squareClicked.addClass('o');
        player = 1;
        $('h4').empty();
      }
    }
  }

// checking winning combination
  function winCombo() {
    var winner = false;
    for (var i = 0; i < playerPosition.length; i+=3) {
      // checks player position against player's chosen square to check for a wining combination
      if (playerPosition[i]==player && playerPosition[i+1]==player && playerPosition[i+2]==player){
        winner == true;
        // if the player 1 is the winner a message will display with player 1 and has won message 
        $('h2').empty().append('player ' + player +' has won');
      }
    }

    for (var i = 0; i < 3; i++) {
      if (playerPosition[i] == player && playerPosition[i+3]== player && playerPosition[i+6]==player){
        winner == true;
        $('h2').empty().append('player ' + player +' has won');

      }

      if (playerPosition[0]==player && playerPosition[4]==player && playerPosition[8]==player || playerPosition[2]==player && playerPosition[4]==player && playerPosition[6]==player) {
        winner == true;
        $('h2').empty().append('player ' + player +' has won');
      }

    }
  }

})
