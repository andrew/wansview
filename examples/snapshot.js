var Webcam = require('../index.js'),
    fs = require('fs')

var webcam = new Webcam('192.168.1.178', 'admin', '123456')

webcam.snapshot().pipe(fs.createWriteStream('snapshot.png'));
