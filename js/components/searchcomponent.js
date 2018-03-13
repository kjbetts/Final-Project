(function() {
  var searchComponent = {
    templateUrl:"partials/search.html",
    controller: function(weatherService, $location){
      var vm = this;
        vm.userLocation = {};
        vm.finalInfo = {};
        vm.apiRequest = function(userLocation, finalInfo){
        finalInfo = weatherService.apiRequest(vm.userLocation);
         finalInfo.then(function() {
          $location.path("/results");
        });
      }
    }
  };

  angular
    .module("module")
    .component("searchComponent", searchComponent);
})();
