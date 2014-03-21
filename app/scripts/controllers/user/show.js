/*'use strict';

angular.module('LibrApp').controller('UserShowCtrl', function ($scope, $http, $location) {

    $scope.queryUsers = function() {
        $http({method: 'GET', data : JSON.stringify($scope.user),   url: 'https://librappapiserver-c9-gerardogrimaldi.c9.io/api/users/' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
            success(function(data, status, headers, config) {
                $scope.users = data.Users;
                toastr.success("Cargando datos...");
            }).
            error(function(data, status, headers, config) {
                toastr.error("Error " + data.message + " " + status);
            });
        };

    $scope.queryUsers();

    $scope.createUser = function(user) {
        $location.path('/user/create');
    }

    $scope.editUser = function(user) {
       var modalInstance = $modal.open({
          templateUrl: 'views/partials/user_edit_modal.tpl.html',
          controller: 'editModalCtrl',
          resolve: {
            items: function () {
              return user;
            }
          }
        });
    };

    $scope.deleteUser = function(user){
        $http({method: 'DELETE', data : user, url: 'https://librappapiserver-c9-gerardogrimaldi.c9.io/api/user/' + user._id }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
            success(function(data, status, headers, config) {
                toastr.success("Borrado usuario " + user.name + ".");
                $scope.queryUsers();
            }).
            error(function(data, status, headers, config) {
                toastr.error("Error " + data.message + " " + status);
            });
    };
    

    $scope.gridOptions = { 
        data: 'users',
        columnDefs: [
            {field:'name', displayName:'Name'}, 
            {field:'email', displayName:'E-mail'},
            {displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn btn-sm btn-primary" ng-click="editUser(row.entity)" >Edit</button> '},
            {displayName: 'Delete', cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-sm btn-primary" ng-click="deleteUser(row.entity)" >Delete</button> '}
        ],
        multiSelect: false,
    };
});
*/