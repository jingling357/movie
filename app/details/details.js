

(function(angular){
	'use strict';
	var app=angular.module('moviecat.details',['ngRoute','moviecat.jsonp']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/details/:id',{
			templateUrl:'./details/view.html',
			controller:'detailsController'
		})

	}])
	app.controller('detailsController',[
		'$scope','$routeParams','myService',function(
			$scope,$routeParams,myService){

			myService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,null,function(data){
				$scope.data=data;
				$scope.$apply();
			})
		}
	])


})(angular)




