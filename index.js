$(function(){
// selecting the square element from index.html to change

var playerTurns = 0,
player = 1,
winMatch = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,5,8],[2,4,6]];

  $('.square').on('click', changeTo)
  function changeTo() {

    var squareClicked = $(this);

    if (squareClicked.hasClass('x') || squareClicked.hasClass('o')) {
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


})
