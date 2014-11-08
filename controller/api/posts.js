var router = require('express').Router();

var Post = require('../../js/model/Post');

router.get('/', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                return next(err);
            }

            res.json(posts);
        });
});

router.post('/', function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });

    console.log('got post: ' + post);

    post.save(function (err, post) {
        if (err) {
            return next(err);
        }

        res.json(201, post);
    });
});

module.exports = router;
