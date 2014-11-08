var app = angular.module('app', []);
app.controller('PostsController', function ($scope, $http) {
    $http.get('/api/posts')
        .success(function (posts) {
            $scope.posts = posts;
        });

    $scope.addPost = function () {
        // Verify that the values exist.
        if (!($scope.postUsername || $scope.postBody)) {
            return;
        }

        var post = {
            username: $scope.postUsername,
            body: $scope.postBody
        };

        $http.post('/api/posts', post)
            .success(function (post) {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
            .error(function (err) {
                console.log(err);
            });
    }
});
