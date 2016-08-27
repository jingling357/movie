

(function(angular){
	'use strict';
	var app=angular.module('moviecat.movie_list',['ngRoute','moviecat.jsonp']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:movieType/:page?',{
			templateUrl:'movie_list/view.js',
			controller:'movie_listController'
		})
	}]);

	app.controller('movie_listController',[
		'$scope','$http','$routeParams','$route','$window','myService'
		,function($scope,$http,$routeParams,$route,$window,myService){
		  $scope.loading=false;
			var page=($routeParams.page||'1')-0;
			$scope.page=page;
			var start=(page-1)*5;

			myService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,
			{start:start,count:5},function(data){
				$scope.data=data;
				$scope.total=data.total;
				$scope.totalPage=$window.Math.ceil($scope.total/data.count);
				$scope.loading=true;
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





