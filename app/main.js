import 'angular-material/angular-material.css!'

import angular from 'angular'
import 'angular-ui-router';
import material from 'angular-material'

import 'angular-animate'
import 'angular-aria'

import users from './users/Users'


let appModule = angular.module('app', ['ui.router', 'ngMaterial', users.name]); 

appModule.config([
		'$locationProvider', '$httpProvider', '$urlRouterProvider',
		'$stateProvider',
	function($locationProvider, $httpProvider, $urlRouterProvider, $stateProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$httpProvider.useApplyAsync(true);

	return $urlRouterProvider.otherwise('/');
}]);

export default appModule.run();