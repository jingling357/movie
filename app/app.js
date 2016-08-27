/*
* @Author: jing
* @Date:   2016-07-29 20:06:30
* @Last Modified by:   jing
* @Last Modified time: 2016-07-31 13:03:34
*/

(function(angular){
	var app=angular.module('moviecat',[
			'moviecat.home_page',
			'moviecat.details',
			'moviecat.movie_list',
			'moviecat.auto-active',
			'ngRoute'
		]);
	app.controller('mainController',['$scope','$route',function($scope,$route){
		$scope.search=function(){
			$route.updateParams({
				movieType:'search',
				q:$scope.query
			})
		}
	}])
})(angular)