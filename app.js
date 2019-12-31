var express = require('express')

var app = express()

app.use(express.static('./dist'))

app.listen('8088', function () {
    console.log("黑马面面项目启动!");

})