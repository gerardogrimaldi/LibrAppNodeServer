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

// namespace
window.semantic = {
  handler: {}
};

semantic.menu = {};

// ready event
semantic.menu.ready = function() {

  // selector cache
  var
    $menuItem = $('.menu a.item, .menu .link.item'),
    $dropdown = $('.main.container .menu .dropdown'),
    // alias
    handler = {

      activate: function() {
        if(!$(this).hasClass('dropdown')) {
          $(this)
            .addClass('active')
            .closest('.ui.menu')
            .find('.item')
              .not($(this))
              .removeClass('active')
          ;
        }
      }

    }
  ;

  $dropdown
    .dropdown({
      on: 'hover'
    })
  ;

  $menuItem
    .on('click', handler.activate)
  ;

};


// attach ready event
$(document).ready(semantic.menu.ready);