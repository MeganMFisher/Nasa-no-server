'use strict';

angular.module('app', ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
    }).state('volcano', {
        url: '/volcano',
        templateUrl: './views/volcano.html',
        controller: 'volcanoCtrl'
    }).state('fireball', {
        url: '/fireball',
        templateUrl: './views/fireball.html',
        controller: 'fireballCtrl'
    }).state('dinosaur', {
        url: '/dinosaur',
        templateUrl: './views/dinosaur.html'
    });
});
'use strict';

angular.module('app').directive('animate', function () {});
'use strict';

angular.module('app').directive('colorDirective', function () {
    function colorChanger() {
        var colors = ['red', 'gold', 'orange', 'crimson', 'orangered'];

        return colors[Math.floor(Math.random() * colors.length)];
    }
    return {
        restrict: 'AE',
        template: '<div>Volcanoes</div>',
        link: function link(scope, element, attributes) {
            element.on('click', function () {

                setInterval(function () {

                    element.css('color', colorChanger());
                }, 1000);
            });
        }
    };
});
"use strict";
'use strict';

angular.module('app').controller('fireballCtrl', function ($scope, mainSvc) {

  recFireballData();

  function recFireballData() {
    mainSvc.getFireballData().then(function (response) {
      console.log('hello', response);
      var energy = getEnergy(response);
      var velocity = getVelocity(response);
      var dates = getDate(response);
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Energy',
            data: energy,
            backgroundColor: "rgba(245,152,29,0.4)"
          }, {
            label: 'Velocity',
            data: velocity,
            backgroundColor: "rgba(193,66,66,0.4)"
          }]
        }
      });
      console.log(myChart);
    });
  }

  function getEnergy(fireballsArray) {
    console.log(fireballsArray);
    return fireballsArray.map(function (fireball) {
      console.log(fireball);
      if (Number(fireball.calculated_total_impact_energy_kt < 50)) return Number(fireball.calculated_total_impact_energy_kt);else return 50;
    });
  }

  function getVelocity(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if (fireball.velocity_components_km_s_vz) return Number(fireball.velocity_components_km_s_vz);else return 0;
    });
  }

  function getDate(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if (fireball.date_time_peak_brightness_ut) return fireball.date_time_peak_brightness_ut;else return 0;
    });
  }
});
'use strict';

angular.module('app').directive('fireballDirective', function () {});
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, mainSvc) {

  $scope.recApodData = function () {
    mainSvc.getApodData().then(function (response) {
      $scope.apods = response;
    });
  };
  $scope.recApodData();
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSvc) {

  //  $scope.test = 'c';
  //   $scope.test1 = mainSvc.test1;

  // $scope.recData = function(){
  //   mainSvc.getData().then(function(response){
  //     $scope.volcanos = response;
  //   })
  // }
  // $scope.recData();

  // $scope.recFireballData = function(){
  //   mainSvc.getFireballData().then(function(response){
  //     $scope.volcanos = response;
  //   })
  // }
  // $scope.recFireballData();


  // $scope.recApodData = function(){
  //   mainSvc.getApodData().then(function(response){
  //     $scope.volcanos = response;
  //   })
  // }
  // $scope.recApodData();


});
'use strict';

angular.module('app').service('mainSvc', function ($http) {
  // this.test1 = 's';


  var fireballUrl = 'https://data.nasa.gov/resource/2af2-m89m.json';

  this.getFireballData = function () {
    return $http({
      method: 'GET',
      url: fireballUrl
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  var ApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + '0mGbNN5DOFCTs63uL0cI8MQPechnF8x4FR8NY5EO';

  this.getApodData = function () {
    return $http({
      method: 'GET',
      url: ApodUrl
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };
});
'use strict';

angular.module('app').directive('navBar', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/navbar.html'
    };
});
'use strict';

angular.module('app').controller('volcanoCtrl', function ($scope, mainSvc) {});