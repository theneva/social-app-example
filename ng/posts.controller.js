angular.module('app').controller('PostsController', function ($scope, PostsService) {
    PostsService.fetch()
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

        PostsService.create(post)
            .success(function (post) {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
            .error(function (err) {
                console.log(err);
            });
    };
});
