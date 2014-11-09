var router = require('express').Router();
var User = require("../../models/user");
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config');

router.post('/', function (req, res, next) {
    var oneUser = User
        .findOne({username: req.body.username})
        .select('password').select('username')
        .exec(function (err, user) {
            if (err) {
                return next(err);
            }

            if (!user) {
                console.log('no user found for username = ' + req.body.username + '; returning 401');
                return res.send(401);
            }

            console.log('user mathing username = ' + req.body.username + ': ' + oneUser);

            bcrypt.compare(req.body.password, user.password, function (err, valid) {
                if (err) {
                    return next(err);
                }

                if (!valid) {
                    console.log('wrong password; returning 401')
                    return res.send(401);
                }

                var token = jwt.encode({username: user.username}, config.secret);
                console.log('sending token: ' + token);
                res.send(token);
            });
        }
    );
});

module.exports = router;
