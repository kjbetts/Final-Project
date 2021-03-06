(function() {
  function weatherService($location, $http) {
    var userLocation = {};
    var apiData = {};

    return {
      apiRequest: apiRequest,
      returnWeatherData: returnWeatherData,
      imageChanger: imageChanger,

    }

    function apiRequest(userLocation) {
      return $http({
        method: "GET",
        url: "https://api.wunderground.com/api/49fd7dffa669767a/conditions/q/" + userLocation.state + "/" + userLocation.city + ".json"
      }).then(function(response) {
        apiData.temperature = response.data.current_observation.feelslike_string;
        apiData.condition = response.data.current_observation.weather;
        apiData.time = response.data.current_observation.local_time_rfc822;
        apiData.city = response.data.current_observation.display_location.full
        return apiData
      })
    }

    function returnWeatherData() {

      return apiData;
    }

    function imageChanger(){
      var valueFromApi = apiData.temperature;
      var convertedToNumber = Number(valueFromApi.slice(0,2));


     if (convertedToNumber > 75){
        document.body.style.backgroundImage = "url('Images/sun.jpg')";
      } else if (convertedToNumber >= 50){
        document.body.style.backgroundImage = "url('Images/cloud.jpg')";
      } else {
        document.body.style.backgroundImage = "url('Images/ice.jpg')";
      }

    }

  }

  angular
    .module("module")
    .factory("weatherService", weatherService);
})();
