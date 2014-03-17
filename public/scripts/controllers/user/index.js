'use strict';

angular.module('LibrApp').controller('IndexUserCtrl', function ($scope, $http, Restangular) {
	var baseUsers = Restangular.all('users');
	baseUsers.getList().then(function (users) {
	
		$scope.allUsers = users.users;
	
	}, function errorCallback() {
  	
  		alert("Oops error from server :(");
	
	})
});