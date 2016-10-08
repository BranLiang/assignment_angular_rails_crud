CrudApp.controller('AuthCtrl', ['$scope', '$auth', 'Flash', '$rootScope', function ($scope, $auth, Flash, $rootScope) {
	$scope.current_user = {};

	$scope.login = function (params) {
		$auth.submitLogin(params).then(
			function success(user) {
				$scope.loginParams = {};
				Flash.create('success', 'Login Success!');
				$rootScope.$broadcast('user.loggedin', user);
				console.log(user);
			},
			function error(resp) {
				console.log(resp);
				Flash.create('danger', 'Login failure');
			}
		)
	};


}]);
