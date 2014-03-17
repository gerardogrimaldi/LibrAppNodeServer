'use strict';

var app = angular.module('LibrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngGrid'
  //,'ui.bootstrap'
  ,'restangular'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',            {templateUrl: 'views/main.html',        controller: 'MainCtrl'})
      .when('/navbar',      {templateUrl: 'views/navbar.html',      controller: 'MainCtrl'})
      .when('/user',        {templateUrl: 'views/user/index.html',  controller: 'IndexUserCtrl'})
      //.when('/user/create', {templateUrl: 'views/user/create.html', controller: 'UserCreateCtrl'})
      //.when('/users',       {templateUrl: 'views/user/show.html',   controller: 'UserShowCtrl'})
      .otherwise({redirectTo: '/'});
    //$locationProvider.html5Mode(true);
  }]);

app.config(['$httpProvider', function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://api.gerardogrimaldi.com/api');
});

//Ejemplo de injeccion restangular 
// Here it injects Restangular by itself
//angular.module('angularjs-starter').controller('NewCtrl', function($scope, Restangular) {
  // My controller code
//});