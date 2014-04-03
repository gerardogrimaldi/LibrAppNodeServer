'use strict';
angular.module('LibrApp').controller('RegisterUserCtrl', function ($scope, $http) {
    //$scope.user = {};
    $scope.createUser = function() {
    var data = $scope.user;
    $http({method: 'POST', data : data, url: '/user/signup' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
        success(function(data, status, headers, config) {
            //$scope.users = data.Users;
            toastr.success("Log in...");
        }).
        error(function(data, status, headers, config) {
            toastr.error("Error " + data.message + " " + status);
        });
    };
});
