var app = angular.module("Resumay", []);

app.controller("MyFirstController", function($scope) {
  $scope.color = "green";

  $scope.switchColor = function() {
      if ($scope.color === "green") {
          $scope.color = "red";
      } else {
          $scope.color = "green";
      }
  };
});