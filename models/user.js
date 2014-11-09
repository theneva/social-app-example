var db = require('../db');

var user = db.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = db.model('User', user);
