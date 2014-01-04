# Wansview

Wansview webcam controller for direction and taking pictures

Only tested with [Wansview NC541W](http://www.amazon.co.uk/gp/product/B006UCJ64S/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B006UCJ64S&linkCode=as2&tag=teabass-21)

## Usage

    var Webcam = require('wansview')
    var webcam = new Webcam('192.168.1.178', 'admin', '123456')

    webcam.left()

    setTimeout(function(){
      webcam.stop()
      webcam.snapshot('leftUp.png')
    }, 5000)


## Commands

Movement:

    webcam.up()
    webcam.down()
    webcam.left()
    webcam.right()
    webcam.rightUp()
    webcam.rightDown()
    webcam.leftUp()
    webcam.leftDown()

Panning:

    webcam.panHorizontal()
    webcam.panVertical()

Take picture:

    webcam.snapshot('path/to/image.png')

## Copyright

Copyright (c) 2013 Andrew Nesbitt. See [LICENSE](https://github.com/andrew/wansview/blob/master/LICENSE) for details.
