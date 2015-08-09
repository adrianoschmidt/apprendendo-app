'use strict';

/**
 * Main module of the application.
 */
var seatmap = angular.module('seatmap', [ 'ngAnimate', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ngTasty', 'ui.bootstrap', 'pascalprecht.translate', 'angularMoment' ]);

seatmap.config(['$routeProvider','$translateProvider', 
                      function($routeProvider, $translateProvider) {
			$routeProvider
			.when('/', {
				templateUrl : 'views/pergunta1.html',
			})
			.when('/pergunta2', {
				templateUrl : 'views/pergunta2.html',
			})
			.when('/pergunta3', {
				templateUrl : 'views/pergunta3.html',
			})
			.when('/pergunta4', {
				templateUrl : 'views/pergunta4.html',
			})
			.when('/cadastro', {
				templateUrl : 'views/cadastro.html',
			})
			.when('/contato', {
				templateUrl : 'views/contato.html',
			})
			.when('/avaliacao', {
				templateUrl : 'views/avaliacao.html',
			})
			.otherwise({
				redirectTo : '/'
			});

		}]).run(['amMoment',
		        function(amMoment){
			amMoment.changeLocale('es');
		}]);
