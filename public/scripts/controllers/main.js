'use strict';

angular.module('LibrApp')
  .controller('MainCtrl', function ($scope) {
  	/*$('.login').popup({
	  	on: 'click',
  	  	loading : 'loading',
      	title : 'Sign in',
    	  content  : "<login></login>"
	 });
	$scope.login = function(){
    alert("alert");
  };*/
  })
   .directive('login', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'scripts/controllers/minlogin.html'
    };
  });

