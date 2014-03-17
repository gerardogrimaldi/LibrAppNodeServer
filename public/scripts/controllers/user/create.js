'use strict';

angular.module('LibrApp').controller('UserCreateCtrl', function ($scope, $http) {
  	$scope.createUser = function() {
		$http({method: 'POST', data : JSON.stringify($scope.user), url: 'https://librappapiserver-c9-gerardogrimaldi.c9.io/api/user/' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
			success(function(data, status, headers, config) {
				//debugger;
				toastr.success(data.message);
			// this callback will be called asynchronously
			// when the response is available
			}).
		  	error(function(data, status, headers, config) {
		  		//debugger;
		  		toastr.error("Error " + data.message);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			});
		}
});