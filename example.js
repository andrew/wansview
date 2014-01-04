var Webcam = require('./index.js')

var webcam = new Webcam('192.168.1.178', 'admin', '123456')

webcam.leftUp()

setTimeout(function(){
  webcam.stop()
  webcam.snapshot('leftUp.png')
}, 5000)
