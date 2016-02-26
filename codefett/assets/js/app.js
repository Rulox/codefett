angular.module('codefettLogin', []);

function mainController($scope, $http) {
    $scope.errors = {};
    
    $scope.login = function() {
        alert("HACEMOS LOGIN");
        $http.post('/auth/login/')
            .success(function(data) {
                alert("pi");
            })
            .error(function(data) {
                alert("pi tamiem");
            });
    }
}
