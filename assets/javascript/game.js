window.onload = function () {

  //define vars
  var wins = 0;
  var loses = 0;

  // Get elements
  var myWins = $('#myWins').text();
  var myLoses = $('#myLoses').text();

  // get new jewel values
  getNewJewels = function () {
    $("#redbtn img").val(Math.floor((Math.random() * 12) + 1));
    $("#bluebtn img").val(Math.floor((Math.random() * 12) + 1));
    $("#greenbtn img").val(Math.floor((Math.random() * 12) + 1));
    $("#yellowbtn img").val(Math.floor((Math.random() * 12) + 1));
  };

  //start & restart the game
  newGame = function() {
    $('#cpuScore').text(Math.floor((Math.random() * 101) + 19));
    $('#myScore').text(0);
    getNewJewels();
  }
  newGame();

  //button onclicks
  $('#redbtn').click(function(){
    $('#myScore').text((parseInt($("#redbtn img").val()) + parseInt($('#myScore').text())));
    check();
  });
  $('#bluebtn').click(function(){
    $('#myScore').text(parseInt($("#bluebtn img").val()) + parseInt($('#myScore').text()));
    check();
  });
  $('#greenbtn').click(function(){
    $('#myScore').text(parseInt($("#greenbtn img").val()) + parseInt($('#myScore').text()));
    check();
  });
  $('#yellowbtn').click(function(){
    $('#myScore').text(parseInt($("#yellowbtn img").val()) + parseInt($('#myScore').text()));
    check();
  });

 check = function () {
    //check to see if myscore is equal to or greater than cpuNum
    if (parseInt($('#myScore').text()) == parseInt($('#cpuScore').text())) {
      wins += 1;
      $('#myWins').text((wins));
      newGame();
    }
    else if (parseInt($('#myScore').text()) > parseInt($('#cpuScore').text())) {
      loses += 1;
      $('#myLoses').text((loses));
      newGame();
    }

  };

};
