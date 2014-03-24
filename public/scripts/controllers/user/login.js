
angular.module('LibrApp').controller('LoginUserCtrl', function ($scope, $http, $location) {
    $scope.user = {};
    $scope.Login = function() {
        $http({method: 'POST', data : JSON.stringify($scope.user),   url: '/user/login' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
            success(function(data, status, headers, config) {
                //$scope.users = data.Users;
                toastr.success("Log in...");
            }).
            error(function(data, status, headers, config) {
                toastr.error("Error " + data.message + " " + status);
            });
        };
    });