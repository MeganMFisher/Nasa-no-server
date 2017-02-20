angular.module('app').controller('homeCtrl', function($scope, mainSvc){
    
    $scope.recApodData = function(){
      mainSvc.getApodData().then(function(response){
        $scope.apods = response;
      })
    }
    $scope.recApodData();
  
})