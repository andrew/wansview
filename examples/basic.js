var Webcam = require('../index.js')

var webcam = new Webcam('192.168.1.178', 'admin', '123456')

webcam.leftUp()

setTimeout(function(){
  webcam.down()
  setTimeout(function(){
    webcam.stop()
  }, 3000)
}, 3000)
