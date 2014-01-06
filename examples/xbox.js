var XboxController = require('xbox-controller'),
    Webcam = require('../index.js'),
    fs = require('fs')

var xbox = new XboxController
var webcam = new Webcam('192.168.1.178', 'admin', '123456')

var arrows = ["dup","ddown", "dleft", "dright"]

arrows.forEach(function(element, index, array) {
  xbox.on(element + ':press', function (key) {
    webcam[element.slice(1)]()
  });

  xbox.on(element + ':release', function (key) {
    webcam.stop()
  });
})

xbox.on('a:press', function (key) {
  webcam.snapshot.pipe(fs.createWriteStream((new Date).toString() + '.png'));
});
