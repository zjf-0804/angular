;(function (angular) {
	'use strict'

	//创建一个主模块，将所有的子模块引用到主模块中
	var app = angular.module('moviecat',[
		'home_page',
		'moviecat_details',
		'movie_list',
		'atuo_active',
		'ngRoute'
		])

	app.controller('mainController',['$scope',function($scope){
		$scope.search=function(){
			$route.updateParams({
				movieType:'search',
				q:$scope.query
			})
		}
	}])
})(angular)