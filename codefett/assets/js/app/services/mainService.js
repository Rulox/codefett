export default class MainService {
  constructor($http) {
    this.$http = $http;
  }
  
  // Example service function
  getData () {
    return this.$http({method: 'GET', url: './api' });
  }
}

MainService.$inject = ['$http'];