CrudApp.controller('NavCtrl', ['$scope', '$auth', 'Flash', function ($scope, $auth, Flash) {
	$scope.$on('user.loggedin', function (event, user) {
		$scope.current_user = user;
	});

	$scope.logout = function () {
		$auth.signOut().then(
			function success(resp) {
				console.log(resp);
				Flash.create('success', 'Logout Success!');
				$scope.current_user = undefined;
			}
		)
	}
}]);
