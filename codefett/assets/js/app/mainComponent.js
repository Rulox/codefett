import angular from 'angular';

import MainController from './controllers/mainController.js';
import MainDirective from './directives/mainDirective.js';
import MainService from './services/mainService.js';

export default angular.module('main', [])
	.controller('mainController', MainController)
	.service('mainService', MainService)
	.directive('mainDirective', () => new MainDirective);