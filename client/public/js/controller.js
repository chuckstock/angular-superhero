angular.module("myApp").controller("addSuperheroController", ["$scope", "$http",
function($scope, $http) {

  $scope.getSuperheros = function() {
    $http.get('/api/v1/superheros')
    .success(function(data) {
      $scope.superheros = data;
    });
  };

  $scope.getSuperheros();

  $scope.addSuperhero = function() {
    //post request for new superhero added
    $http.post('/api/v1/superheros', $scope.newSuperhero)
    .success(function(data) {
      $scope.superheros = data;
      $scope.getSuperheros();
      $scope.addForm.$setPristine();
      $scope.newSuperhero = {};
      $('#first').focus();
    });
  };

  $scope.deleteSuperhero = function() {
    var id = this.superhero._id;
    $http.delete('api/v1/superhero/' + id)
    .success(function(data) {
      console.log(data);
      $scope.getSuperheros();
    });
  };
}]);
