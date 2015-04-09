import UsersController from './UsersController'

export default angular
	.module('users', ['ngMaterial'])
	.controller('UsersController', UsersController)
	.config(($mdThemingProvider) => {
		$mdThemingProvider
			.theme('default')
			.primaryPalette('brown');
	})
	;