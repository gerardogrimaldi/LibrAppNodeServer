'use strict';
angular.module('LibrApp').controller('LoginUserCtrl', function ($scope, $http) {
    //$scope.user = {};
    $scope.Login = function() {
    var data = $scope.user;
    $http({method: 'POST', data : data, url: '/user/login' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
        success(function(data, status, headers, config) {
            //$scope.users = data.Users;
            toastr.success("Log in...");
        }).
        error(function(data, status, headers, config) {
            toastr.error("Error " + data.message + " " + status);
        });
    };
});