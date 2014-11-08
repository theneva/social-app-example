var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// Enable loading javascript files.
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/lib', express.static(__dirname + '/lib'));

// Enable CORS and communicating over JSON
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

// Set up posts API.
app.use('/api/posts', require('./controller/api/posts'));

// Set up Angular app.
app.use('/', require('./controller/static.js'));

var port = 3001;
app.listen(port, function () {
    console.log('Server listening on', port);
});
