import angular from 'angular';
import main from './app/mainComponent.js'

angular.module('app', [
	'main'
]);

angular.bootstrap(document, ['app']);
