

(function(angular){
	'use strict';
	var app=angular.module('moviecat.top250',['ngRoute','moviecat.jsonp']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/top250/:page?',{
			templateUrl:'top250/view.html',
			controller:'top250Controller'
		})
	}]);

	app.controller('top250Controller',[
		'$scope','$http','$routeParams','$route','$window','myService'
		,function($scope,$http,$routeParams,$route,$window,myService){
		
			var page=($routeParams.page||'1')-0;
			$scope.page=page;
			var start=(page-1)*5;

			myService.jsonp('http://api.douban.com/v2/movie/top250',
			{start:start,count:5},function(data){
				$scope.data=data;
				$scope.total=data.total;
				$scope.totalPage=$window.Math.ceil($scope.total/data.count);
				$scope.$apply();
			});

			$scope.getPage=function(nowPage){
				if(nowPage<1||nowPage>$scope.totalPage){
					return;
				}

				$route.updateParams({page:nowPage});
			}
			
		

	}])

})(angular)


