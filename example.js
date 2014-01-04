var Webcam = require('./index.js')

var webcam = new Webcam('192.168.1.178', 'admin', '123456')

webcam.leftUp()
setTimeout(function(){
  webcam.snapshot('leftUp.png')
  webcam.leftDown()
  setTimeout(function(){
    webcam.snapshot('leftDown.png')
    webcam.rightUp()
    setTimeout(function(){
      webcam.snapshot('rightUp.png')
      webcam.rightDown()
      setTimeout(function(){
        webcam.snapshot('rightDown.png')
        webcam.stop()
      }, 2000)
    }, 2000)
  }, 2000)
}, 2000)
