var app = angular.module('numModule');

app.service('numService', function($http){
  this.request = function(y) {$http({
  method:"GET",
  url: "https://cosmin-us-phone-number-lookup.p.mashape.com/get.php?phone=" + y,
  headers: {
    "X-Mashape-Key" : "c4U15bpgfOmshxgh6aUflXsXFgNYp1RhEE3jsnTHTVyWlzVitp",
    "Accept" : "application/json"
  }
}).then(function successResponse(result){
  console.log(result);
  return result;
},
  function errorResponse(result){
console.log('error');
  }
)}
});
