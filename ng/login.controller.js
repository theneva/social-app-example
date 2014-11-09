angular.module('app').controller('LoginController', function ($scope, UsersService) {
    $scope.login = function (username, password) {
        UsersService.login(username, password).then(function (user) {
            console.log(user);
        });
    };
});
