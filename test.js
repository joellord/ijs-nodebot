var j5 = require("johnny-five");
var song = require("./song");

var board = new j5.Board();

board.on("ready", function() {
  var led1 = new j5.Led(28);
  var led2 = new j5.Led(30);
  var lmotor = new j5.Motor([ 3, 12 ]);
  var rmotor = new j5.Motor([11, 13]);
  var piezo = new j5.Piezo(32);

  function moveRobot(direction) {
    lmotor[direction](100);
    rmotor[direction](80);
    setTimeout(function() {
        lmotor.stop();
        rmotor.stop();
    }, 1000);
  }

  led1.blink(750);
  led2.blink(1000);
  // piezo.play(song);

  moveRobot("forward");
  moveRobot("reverse");

});