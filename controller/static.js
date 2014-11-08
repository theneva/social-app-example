var router = require('express').Router();

router.get('/', function (req, res) {
    res.sendFile('layout/posts.html', {root: __dirname + "/.."});
});

module.exports = router;
