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

app.get('*', function (req, res) {
        res.render('home', {rand:Math.random()});
});

app.listen(8000);