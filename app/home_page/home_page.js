
(function(angular){
	'use strict';
	var app=angular.module('moviecat.home_page',['ngRoute']);

	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/home_page',{
			templateUrl:'./home_page/view.html',
			controller:'home_pageController'
		})
	}])


	app.controller('home_pageController',['$scope',function($scope){
		
	}])
})(angular)