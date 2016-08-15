;(function(angular){

	'use strict'

	var app = angular.module('atuo_active',[])

	app.directive('atuoActive',['$location',function($location){
		return{
			link:function(scope,element,attributes){
				scope.loca = $location
				scope.$watch(loca.url(),function(newVal,oldVal){
					//得到每一个li的href属性
					var hash = element.children()[0].href.split('#')[1]
					// console.log(hash);
             		// startsWith判断一个字符串是不是以另一个字符串开始 ;
            		// endsWith 判断一个字符串是不是以另一个字符串结束;
             		console.log(attributes);
             		if(newVal.startsWith(hash)){
                	element.parent().children().removeClass(attributes.autoActive);
                	element.addClass(attributes.autoActive);
             		}
				})
			}
		}
	}])
})(angular)