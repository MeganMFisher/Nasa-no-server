

angular.module('app').controller('fireballCtrl', function ($scope, mainSvc) {

  recFireballData();

  function recFireballData() {
    mainSvc.getFireballData().then(function (response) {
      console.log('hello', response)
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
      console.log(myChart)
    })
  }


  function getEnergy(fireballsArray) {
    console.log(fireballsArray)
    return fireballsArray.map(function (fireball) {
      console.log(fireball)
      if(Number(fireball.calculated_total_impact_energy_kt < 50)) return Number(fireball.calculated_total_impact_energy_kt)
      else return 50;
    })
  }


  function getVelocity(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if(fireball.velocity_components_km_s_vz) return Number(fireball.velocity_components_km_s_vz)
      else return 0;
    })
  }

  function getDate(fireballsArray) {
    return fireballsArray.map(function (fireball) {
      if(fireball.date_time_peak_brightness_ut) return (fireball.date_time_peak_brightness_ut)
      else return 0;
    })
  }


});