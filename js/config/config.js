(function() {
  angular.module("module")
  .config(function($routeProvider){
    $routeProvider
    .when("/search", {
      template:"<search-component></search-component>"
    })
    .when("/results", {
      template:"<results-component></results-component>"
    })
    .otherwise({redirectTo: "/search"});



  });
})();
