import angular from 'angular';
import main from './main'

angular.element(document).ready(function() {
	return angular.bootstrap(document.body, [main.name], {
		// strictDi: true 
	});
});