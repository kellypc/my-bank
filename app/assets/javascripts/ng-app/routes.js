(function() {
  'use strict';

  angular
  .module('MyBank')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('portal/home');

      // # no hashURl anymore
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
      .state('portal', {
        url: '/portal',
        controller: 'BalanceCtrl',
        templateUrl: '/assets/ng-app/core/main.html'
      })
      .state('portal.home', {
        url: '/home',
        controller: 'BalanceCtrl',
        templateUrl: '/assets/ng-app/balance/balance.html'
      });
    }])
})();