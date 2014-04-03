'use strict';

angular.module('LibrApp').controller('IndexUserCtrl', function ($scope, $http, Restangular) {
    var baseUsers = Restangular.all('user');

    $scope.getUsers = function(){
        activeLoading();
        baseUsers.getList().then(function (users) {
            $scope.users = users;
        }, function errorCallback(response) {
            toastr.error("Error" + " " + response.data.message + " " + response.status);
        });
        disableLoading();
    };
    $scope.user = { };
    $scope.getUsers();

    $scope.createUser = function() {
        $(".Action").text("Create");
        $('.ui.modal').modal('show');
    }

    $scope.modalOK = function(user) {
        if($(".Action").text() == "Create"){
            baseUsers.post($scope.user).then(function () {
                $scope.user = { }    
                $scope.getUsers();
            },  function errorCallback() {
                toastr.error("Error " + " Oops error from server :(" + " " + data.message + " " + status);
            });
        } else {
            $scope.user.put().then(function () {
                $scope.getUsers();
                $scope.user = { }    
            },  function errorCallback() {
                toastr.error("Error " + " Oops error from server :(" + " " + data.message + " " + status);
            });
        }
    }

    $scope.gridOptions = { 
        data: 'users',
        columnDefs: [
            {field:'firstName', displayName:'First Name'},
            {field:'lastName', displayName:'Last Name'},
            {field:'email', displayName:'E-mail'},
            {displayName: 'Edit', cellTemplate: '<div id="editBtn" type="button" class="mini ui button"" ng-click="editUser(row.entity)" > <i class="edit sign icon"></i>Edit</div> '},
            {displayName: 'Delete', cellTemplate: '<div id="deleteBtn" type="button" class="mini ui button"" ng-click="deleteUser(row.entity)" ><i class="remove sign icon"></i>Delete</div> '}
        ],
        multiSelect: false,
    };
    $scope.editUser = function(user) {
        $(".Action").text("Update");
        $scope.user = Restangular.copy(user);
        $('.ui.modal').modal('show');
    };

    $scope.deleteUser = function(user){
        activeLoading()
        var userToDelete = user;
        userToDelete.remove().then(function () {
            $scope.users = _.without($scope.users, userToDelete);
        }, function errorCallback() {
            toastr.error("Error " + " Oops error from server :(" + " " + data.message + " " + status);

        });;
        disableLoading();
    };
});

function disableLoading(){
    $(".ui.active.dimmer").removeClass("active").addClass("disable");
}

function activeLoading() {
    $(".ui.active.dimmer").removeClass("disable").addClass("active");
}