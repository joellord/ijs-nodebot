var j5 = require("johnny-five");

var board = new j5.Board();

board.on("ready", function() {
  var led = new j5.Led(13);
  var ledOn = false;

  var sensor = new j5.Sensor("A0");
  sensor.on("change", function() {
    console.log(sensor.value);
  	if (sensor.value > 800 && !ledOn) {
  		led.on();
  		ledOn = true;
  	} else if (sensor.value < 1010 && ledOn) {
  		led.off();
  		ledOn = false;
  	}
  });
});