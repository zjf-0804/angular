;(function(angular){
	'use strict'

	var app = angular.module('service_jsonp',[])

	app.service('MyService',['$window',function($window){
		this.jsonp = function(url,arg,fn){
			//1.拼接url参数
			var querystring='?'
			for(var key in arg){
				querystring+=key+'='+arg[key]+'&'
			}
			url += querystring

			//动态的设置一个数据
			var myCallbackName = 'myJsonp_'+$window.Math.random().toString().substr(2)

			$window[myCallbackName] = fn

			url += 'callback='+myCallbackName
			//2.动态的创建script标签
			var scrip = $window.document.createElement('script')
			scrip.src = url
			$window.document.body.appendChild(scrip)
		}
	}])

})(angular)