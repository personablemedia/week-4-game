window.onload = function () {

  //define vars
  var wins = 0;
  var loses = 0;
  var myNumber = 0;

  // Get elements
  var cpuScore = document.getElementById("cpuScore");
  var myScore = document.getElementById("myScore");
  var myWins = document.getElementById("myWins");
  var myLoses = document.getElementById("myLoses");

  // get new jewel values
  getNewJewels = function () {
    $("#redbtn img").attr("alt", Math.floor((Math.random() * 12) + 1));
    $("#bluebtn img").attr("alt", Math.floor((Math.random() * 12) + 1));
    $("#greenbtn img").attr("alt", Math.floor((Math.random() * 12) + 1));
    $("#yellowbtn img").attr("alt", Math.floor((Math.random() * 12) + 1));
  };

  //start & restart the game
  newGame = function() {
    cpuScore.innerHTML = Math.floor((Math.random() * 120) + 1);
    myNumber = 0;
    myScore.innerHTML = myNumber;
    getNewJewels();
  }
  newGame();

  //button onclicks
  document.getElementById('redbtn').onclick = function() {
    myNumber = parseInt($("#redbtn img").attr("alt")) + myNumber;
    myScore.innerHTML = myNumber;
    check();
  };
  document.getElementById('bluebtn').onclick = function() {
    myNumber = parseInt($("#bluebtn img").attr("alt")) + myNumber;
    myScore.innerHTML = myNumber;
    check();
  };
  document.getElementById('greenbtn').onclick = function() {
    myNumber = parseInt($("#greenbtn img").attr("alt")) + myNumber;
    myScore.innerHTML = myNumber;
    check();
  };
  document.getElementById('yellowbtn').onclick = function() {
    myNumber = parseInt($("#yellowbtn img").attr("alt")) + myNumber;
    myScore.innerHTML = myNumber;
    check();
  };

 check = function () {
    //check to see if myscore is equal to or greater than cpuNum
    //console.log($(this).attr("myScore"));
    //$('#first').val();
    //console.log($(this).attr("cpuScore");
    if (parseInt(myScore.innerHTML) == cpuScore.innerHTML) {
      wins += 1;
      myWins.innerHTML = wins;
      newGame();
    }

    else if (parseInt(myScore.innerHTML) > cpuScore.innerHTML) {
      loses += 1;
      myLoses.innerHTML = loses;
      newGame();
    }

  };

};
