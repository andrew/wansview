var Webcam = require('../index.js'),
    FileOnWrite = require("file-on-write");

var webcam = new Webcam('192.168.1.178', 'admin', '123456')
var writer = new FileOnWrite({
    path: './video',
    ext: '.jpg'
});

var stream = webcam.jpegStream()
stream.pipe(writer);

setTimeout(function(){
  writer.end()
}, 1000)

// convert to video using ffmpeg:
// $ ffmpeg -f image2 -pattern_type glob -i 'video/*.jpg' -r 2 video.mp4
