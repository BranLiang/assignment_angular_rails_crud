var CrudApp = angular.module('CrudApp', ['ui.router', 'restangular', 'ng-token-auth', 'ngFlash']);

CrudApp.config(function ($stateProvider, $urlRouterProvider, RestangularProvider, $authProvider) {
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');

	$authProvider.configure({
		apiUrl: 'http://localhost:3000'
	});

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('pins', {
			url: '/pins',
			templateUrl: 'templates/pin/index.html',
			controller: ['Restangular', '$scope', function (Restangular, $scope) {
				$scope.pins = Restangular.all('pins').getList().$object;
			}]
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/auth/login.html',
			controller: 'AuthCtrl'
		})
});
