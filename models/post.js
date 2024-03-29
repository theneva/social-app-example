var db = require('../db');

var post = db.Schema({
    username: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = db.model('Post', post);
