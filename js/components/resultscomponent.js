(function() {
  var resultsComponent = {
    templateUrl:"partials/results.html",
    controller: function(weatherService, $timeout){
      var vm = this;
      vm.weatherData = weatherService.returnWeatherData();
      weatherService.imageChanger();
      console.log(vm.weatherData);

      function startTime() {
          var today = new Date();
          var hr = today.getHours();
          var min = today.getMinutes();
          var sec = today.getSeconds();
          ap = (hr < 12) ? " AM " : " PM ";
          hr = (hr == 0) ? 12 : hr;
          hr = (hr > 12) ? hr - 12 : hr;
          //Add a zero in front of numbers<10
          hr = checkTime(hr);
          min = checkTime(min);
          sec = checkTime(sec);
          var timeDisplay = hr + " : " + min + " : " + sec + " " + ap;
          // document.getElementById("clock").innerHTML = timeDisplay; In Angular we do not modify the DOM anymore
          // instead we set model values and show them in the view via {{}}
          vm.time = timeDisplay;
          console.log(vm.time);
          var time = $timeout(function(){ startTime() }, 500);
      }
      function checkTime(i) {
          if (i < 10) {
              i = "0" + i;
          }
          return i;
      }
     startTime()
     checkTime()
    }
  };

  angular
    .module("module")
    .component("resultsComponent", resultsComponent);
})();
