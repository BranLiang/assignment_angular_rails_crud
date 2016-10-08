CrudApp.factory('pinService', ['Flash', 'Restangular', '$rootScope', function (Flash, Restangular, $rootScope) {
	// private
	var _pins = [];

	// public
	var pinService = {};

	pinService.all = function () {
		var _pins = Restangular.all('pins').getList().$object;
		return _pins
	};

	pinService.new = function (params) {
		return Restangular.all('pins').post({
			'pin': params
		}).then(
			function success(pin) {
				Flash.create('success', 'New Pin created!');
				$rootScope.$broadcast('pin.created', pin);
				_pins.push(pin)
				return pin;
			},
			function error(resp) {
				console.log(resp);
				Flash.create('danger', 'Pin create failure!');
			}
		)
	}

	return pinService;
}]);
