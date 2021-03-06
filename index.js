var request = require('request'),
    MjpegConsumer = require("mjpeg-consumer");

var Webcam = function(ip, username, password){
  this.ip = ip
  this.username = username
  this.password = password

  this.left = function(){
    this.move(6)
  }

  this.right = function(){
    this.move(4)
  }

  this.up = function(){
    this.move(2)
  }

  this.down = function(){
    this.move(0)
  }

  this.panHorizontal = function(){
    this.move(28)
  }

  this.panVertical = function(){
    this.move(26)
  }

  this.leftUp = function(){
    this.move(93)
  }

  this.leftDown = function(){
    this.move(91)
  }

  this.rightUp = function(){
    this.move(92)
  }

  this.rightDown = function(){
    this.move(90)
  }

  this.stop = function(){
    this.move(1)
  }

  this.move = function(direction){
    this.sendCommand('/decoder_control.cgi?command='+direction)
  }

  this.snapshot = function(path){
    return this.sendCommand('/snapshot.cgi')
  }

  this.jpegStream = function(){
    return this.sendCommand("/videostream.cgi").pipe(new MjpegConsumer())
  }

  this.sendCommand = function(path){
    return request.get('http://'+this.ip+path).auth(username, password, false)
  }
}

module.exports = Webcam
