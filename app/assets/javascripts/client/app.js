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
			controller: ['pinService', '$scope', function (pinService, $scope) {
				$scope.pins = pinService.all();
				$scope.$on('pin.created', function (event, pin) {
					$scope.pins.unshift(pin);
				})
			}]
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/auth/login.html',
			controller: 'AuthCtrl'
		})
		.state('pins.new', {
			url: '/new',
			templateUrl: 'templates/pin/new.html',
			controller: ['pinService', '$scope', function (pinService, $scope) {
				$scope.createPin = function (params) {
					pinService.new(params);
					$scope.pinParams = {};
				}
			}]
		})
});
