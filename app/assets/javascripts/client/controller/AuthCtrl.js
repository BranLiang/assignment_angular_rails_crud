CrudApp.controller('AuthCtrl', ['$scope', '$auth', function ($scope, $auth) {
	$scope.login = function (params) {
		$auth.submitLogin(params).then(
			function success(resp) {
				console.log(resp);
			},
			function error(resp) {
				console.log(resp);
			}
		)
	}
}]);
