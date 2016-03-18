export default class MainDirective {
  constructor() {
    this.template = '<div>{{ctrl.name}}</div>';
    this.restrict = 'E';
    this.scope = {};
        
    this.controller = MainDirectiveController;
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }

  // Directive compile function
  compile() {
		
  }
    
  // Directive link function
  link() {
		
  }
}

// Directive's controller
class MainDirectiveController {
  constructor () {
    this.name = 'david';
  }
}