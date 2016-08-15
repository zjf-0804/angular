;(function(angular){
	'use strict'

	//创建模块
	var app = angular.module('home_page',['ngRoute'])

	//创建路由
	app.config(['$routeProvider',function ($routeProvider) {
		//when的第一个参数是url的锚点值
		$routeProvider.when('/home_page',{
			templateUrl:'./home_page/view.html',
			controller:'home_pageController'
		})
	}])

	//创建控制器
	app.controller('home_pageController',[
			'$scope',function ($scope) {
				// 
			}
		])
})(angular)