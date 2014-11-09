var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// Enable loading javascript files.
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/lib', express.static(__dirname + '/lib'));

// Enable CORS and communicating over JSON
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

// Mount API controllers.
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

// Set up Angular app.
app.use('/', require('./controllers/static.js'));

var port = 3001;
app.listen(port, function () {
    console.log('Server listening on', port);
});
