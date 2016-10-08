var CrudApp = angular.module('CrudApp', ['ui.router', 'restangular', 'ng-token-auth']);

CrudApp.config(function ($stateProvider, $urlRouterProvider, RestangularProvider, $authProvider) {
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');

	$authProvider.configure({
		apiUrl: 'http://localhost:3000'
	});

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('pins', {
			url: 'pins',
			templateUrl:
		})
});
