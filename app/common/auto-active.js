/*
* @Author: jing
* @Date:   2016-07-31 11:56:41
* @Last Modified by:   jing
* @Last Modified time: 2016-07-31 13:59:00
*/

(function(angular){
	'use strict';
	var app=angular.module('moviecat.auto-active',[]);
	app.directive('autoActive',['$location',function($location){
		return {
			link:function(scope,element,attributes){
				scope.loca=$location;
				scope.$watch('loca.url()',function(newValue,oldValue){
					var hash=element.children()[0].href.split('#')[1];
					if(newValue.startsWith(hash)){
						element.parent().children().removeClass(attributes.autoActive);
                		element.addClass(attributes.autoActive);
					}
				})
			}
		}
	}])
})(angular)