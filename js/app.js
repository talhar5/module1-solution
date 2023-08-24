(function () {
  "use strict";

  angular
    .module("LunchCheckerApp", [])
    .controller("checkerController", checkerController);

  checkerController.$inject = ["$scope"];
  function checkerController($scope) {
    $scope.foodList = "";
    $scope.message = "";
    $scope.check = function () {
      let foodsArr = $scope.foodList.split(",");
      let foods_ = foodsArr.filter((item) => {
        if (item.trim() === "") return false;
        return true;
      });
      if (foods_.length === 0) {
        $scope.message = "Please enter data first";
      } else if (foods_.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }
})();
