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
      .when('/',              {templateUrl: 'views/main.html',          controller: 'MainCtrl'})
      .when('/navbar',        {templateUrl: 'views/navbar.html',        controller: 'MainCtrl'})
      .when('/users',         {templateUrl: 'views/user/index.html',    controller: 'IndexUserCtrl'})
      .when('/user/login',    {templateUrl: 'views/user/login.html',    controller: 'LoginUserCtrl'})
      .when('/user/register', {templateUrl: 'views/user/create.html',   controller: 'IndexUserCtrl'})
      //.when('/user/create', {templateUrl: 'views/user/create.html', controller: 'UserCreateCtrl'})
      
      .otherwise({redirectTo: '/404'});
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
  //RestangularProvider.setBaseUrl('https://libraps-c9-gerardogrimaldi.c9.io/api');
  RestangularProvider.setBaseUrl('http://api.gerardogrimaldi.com/api');

  RestangularProvider.setDefaultHttpFields({cache: true});
  //RestangularProvider.setMethodOverriders(["put", "patch"]);

  // In this case we are mapping the id of each element to the _id field.
  // We also change the Restangular route. 
  // The default value for parentResource remains the same.
  RestangularProvider.setRestangularFields({
    id: "_id",
    route: "restangularRoute",
    selfLink: "self.href"
  });
});


//Ejemplo de injeccion restangular 
// Here it injects Restangular by itself
//angular.module('angularjs-starter').controller('NewCtrl', function($scope, Restangular) {
  // My controller code
//});