$(function(){
// selecting the square element from index.html to change
var
gameReset = $('#replay'),
player = 1,
playerPosition= [0,0,0,0,0,0,0,0];



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
