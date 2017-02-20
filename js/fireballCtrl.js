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
      console.log(myChart)
    })
  }


  function getEnergy(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if(Number(fireball[1] < 50)) return Number(fireball[1])
      else return 50;
    })
  }


  function getVelocity(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if(fireball[8]) return Number(fireball[8])
      else return 0;
    })
  }

  function getDate(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if(fireball[0]) return (fireball[0])
      else return 0;
    })
  }


});