var j5 = require("johnny-five");

var board = new j5.Board();

board.on("ready", function() {
  var led = new j5.Led(13);

  button = new j5.Button(2);

  button.on("down", function() {
    led.toggle();
  });
});