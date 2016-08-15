;(function (angular) {
	'use strict'

	//创建模块
	var app = angular.module('movie_list',['ngRoute','service_jsonp'])

	//创建路由
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:movieType/:page?',{
			//目录相对于app
			templateUrl:'./movie_list/view.html',
			controller:'movie_listController'
		})
	}])

	//创建控制器
	app.controller('movie_listController',
		['$scope','$routeParams','$route','$window','MyService',
		function($scope,$routeParams,$route,$window,MyService){
			$scope.loading = false
			var page = ($routeParams.page||'1')-0 //-0是将字符串转化成数字
			$scope.page = page;
			var start = (page-1)*10

			MyService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,
			{start:start,count:10},
			function(data){
				console.log(data)
				$scope.data = data //获取这个对象
				$scope.total = data.total //总条数
				$scope.totalPage = $window.Math.ceil($scope.total/data.count) //总页数
				$scope.loading = true //加载
				//由于是异步
				$scope.$apply() //通知angular的数据模型发生了变化
			})

			$scope.getPage=function(nowPage){
				if(nowPage<1||nowPage>$scope.totalPage) return

				$route.updateParams({page:nowPage}) //当前的页码
			}
			
			/*//发送ajax请求接收数据
			$http.get('./in_theaters/in_theaters.json').then(function(response){
				$scope.data = response.data
			})*/
	}])

})(angular)