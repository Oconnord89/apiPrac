var app = angular.module('numModule');

app.controller('inputCtrl', function($scope, numService, $location){
$scope.searchNumber = function(x){
  numService.request(x);
  $location.path('/output');
}

});
