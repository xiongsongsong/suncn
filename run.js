/**
 * Created with JetBrains WebStorm.
 * User: yoom
 * Date: 12-5-1
 * Time: 下午7:35
 * To change this template use File | Settings | File Templates.
 */

var express = require('express'),
    app = express.createServer();
app.set('view engine', 'jade');
var path = require('path');

app.get('/assets/*', function (req, res) {
    var filePath = path.normalize(__dirname + req.url);
    res.sendfile(filePath);
});

app.get('*', function (req, res) {
    res.render('home', {rand:Math.random()});
});


app.listen(80);