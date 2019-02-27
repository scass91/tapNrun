document.addEventListener("DOMContentLoaded", function(event) {

  var user = prompt("Player 1, what is your name?");
  var user2 = prompt("Player 2, what is your name?");

  if (user != null) {
    document.getElementById("player1").innerHTML =
      "Lane 1:  " + user;
  }

  if (user2 != null) {
    document.getElementById("player2").innerHTML =
      "Lane 2:  " + user2;
  }

  display = new Display();
  display.startButton();

  display.canvas.addEventListener("mousedown", function () {
    if (display.mouseOn === true) {
      display.countdown()
      display.drawCanvas();
      display.infiniteDraw();
      display.player.moveAllowed = true;
      display.controller.enableControls();
    }
  })

})
