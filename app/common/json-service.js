

(function(angular){
	'use strict';
	var app=angular.module('moviecat.jsonp',[]);
	app.service('myService',['$window',function($window){
		this.jsonp=function(url,arg,fn){
			var queryString='&';
			if(!arg){
				queryString='?';
			}
			for(var k in arg){
				queryString+=k+'='+arg[k]+'&'
			}

			url+=queryString;

			var myCallbackName='myJsonp_'+$window.Math.random().toString().substr(2);
			$window[myCallbackName]=fn;

			url+='callback='+myCallbackName;

			var scrip=$window.document.createElement('script');
			scrip.src=url;
			$window.document.body.appendChild(scrip);
		}	

	}])
})(angular)





