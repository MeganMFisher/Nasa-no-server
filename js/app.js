angular.module('app', ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'homeCtrl'
        })

        .state('volcano',{
            url: '/volcano',
            templateUrl: './views/volcano.html',
            controller: 'volcanoCtrl'
        })

        .state('fireball', {
            url: '/fireball',   
            templateUrl: './views/fireball.html',
            controller: 'fireballCtrl'
        })

        .state('dinosaur', {
          url: '/dinosaur',
          templateUrl: './views/dinosaur.html'
        })

})