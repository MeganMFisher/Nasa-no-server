  
  angular.module('app').service('mainSvc', function($http) {
  // this.test1 = 's';
  

    var fireballUrl = 'https://api.nasa.gov/SSD-CNEOS/Fireball?api_key=0mGbNN5DOFCTs63uL0cI8MQPechnF8x4FR8NY5EO';

      this.getFireballData = function(){
      return $http({
        method: 'GET',
        url: fireballUrl
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }

    var ApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=0mGbNN5DOFCTs63uL0cI8MQPechnF8x4FR8NY5EO';

      this.getApodData = function(){
      return $http({
        method: 'GET',
        url: ApodUrl
      }).then(function(response){
        console.log(response.data);
        return response.data;
      })
    }
  })
  




















