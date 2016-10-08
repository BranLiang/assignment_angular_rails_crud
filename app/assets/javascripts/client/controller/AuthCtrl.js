CrudApp.controller('AuthCtrl', ['$scope', '$auth', 'Flash', function ($scope, $auth, Flash) {
	$scope.current_user = {};

	$scope.login = function (params) {
		$auth.submitLogin(params).then(
			function success(user) {
				$scope.current_user = user;
				$scope.loginParams = {};
				Flash.create('success', 'Login Success!');
			},
			function error(resp) {
				console.log(resp);
				Flash.create('danger', 'Login failure');
			}
		)
	};

	$scope.logout = function () {
		$auth.signOut().then(
			function success(resp) {
				console.log(resp);
				Flash.create('success', 'Logout Success!');
				$scope.current_user = {};
			}
		)
	}
}]);
