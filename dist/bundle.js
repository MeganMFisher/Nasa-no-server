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

// angular.module('app').controller('fireballCtrl', function ($scope, mainSvc) {
// $scope.test = 'its working';
// $scope.recFireballData = function () {
//     mainSvc.getFireballData().then(function (response) {
//         $scope.volcanos = response;
//     })
// }
// $scope.recFireballData();

//     var ctx = document.getElementById('myChart');
//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//             datasets: [{
//                 label: 'apples',
//                 data: [12, 19, 3, 17, 6, 3, 7],
//                 backgroundColor: "rgba(153,255,51,0.4)"
//             }, {
//                 label: 'oranges',
//                 data: [2, 29, 5, 5, 2, 3, 10],
//                 backgroundColor: "rgba(255,153,0,0.4)"
//             }]
//         }
//     });
// })

angular.module('app').controller('fireballCtrl', function ($scope, mainSvc) {

  // var ctx = document.getElementById('myChart');
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
  //     datasets: [{
  //       label: 'Energy',
  //       data: [],
  //       backgroundColor: "rgba(193,66,66,0.4)"
  //     }
  //     , {
  //       label: 'Velocity',
  //       data: [],
  //       backgroundColor: "rgba(245,152,29,0.4)"
  //     }]
  //   }
  // });

  recFireballData();

  function recFireballData() {
    mainSvc.getFireballData().then(function (response) {
      var energy = getEnergy(response.data);
      var velocity = getVelocity(response.data);
      var dates = getDate(response.data);
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
    return fireballsArray.map(function (fireball) {
      if (Number(fireball[1] < 50)) return Number(fireball[1]);else return 50;
    });
  }

  function getVelocity(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if (fireball[8]) return Number(fireball[8]);else return 0;
    });
  }

  function getDate(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if (fireball[0]) return fireball[0];else return 0;
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


  var fireballUrl = 'https://api.nasa.gov/SSD-CNEOS/Fireball?api_key=' + apiKey;

  this.getFireballData = function () {
    return $http({
      method: 'GET',
      url: fireballUrl
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  var ApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;

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