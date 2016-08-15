;(function (angular) {
	'use strict'

	var app = angular.module('moviecat_details',['ngRoute','service_jsonp'])

	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/details/:id',{
			templateUrl:'./details/view.html',
			controller:'detailsController'
		})
	}])

	app.controller('detailsController',['$scope','$routeParams','MyService',function ($scope,$routeParams,MyService) {
		MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,null,function(data){
			$scope.data = data
			$scope.$apply()
		})
	}])
})(angular)