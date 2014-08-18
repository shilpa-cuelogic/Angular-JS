'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
	  				templateUrl: 'partials/home.html', 
					controller: 'CtrlHome'
				}).
				when('/about-us', {
	  				templateUrl: 'partials/about-us.html'
				}).
				when('/join-us', {
	  				templateUrl: 'partials/join-us.html'
				}).
				when('/cuelogic/clients', {
	  				templateUrl: 'partials/clients.html'
				}).
				when('/terms-and-conditions', {
	  				templateUrl: 'partials/term-and-conditions.html'
				}).otherwise({
					redirectTo: '/home'
				});
}]);






