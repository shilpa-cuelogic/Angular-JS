'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  .controller('CtrlHome', ['$scope', function($scope) {
		  
	  $scope.personList = [{
		  id: 1,
		  name: "Shilpa Deshmukh"	
	  },
	  {
		  id: 2,
		  name: "Shinee Shah" 		 
	  },
	  {
		  id: 3,
		  name: "Shreya Shah" 		 
	  }
	  ];
	  
  }]);

