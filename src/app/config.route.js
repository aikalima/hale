(function() {

  /* @ngInject */
  var routeConfig;
  routeConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('404', {
      url: '/404',
      views: {
        'root': {
          templateUrl: '404.tmpl.html',
          controller: 'ErrorPageController',
          controllerAs: 'vm'
        }
      }
    }).state('401', {
      url: '/401',
      views: {
        'root': {
          templateUrl: '401.tmpl.html',
          controller: 'ErrorPageController',
          controllerAs: 'vm'
        }
      }
    }).state('500', {
      url: '/500',
      views: {
        'root': {
          templateUrl: '500.tmpl.html',
          controller: 'ErrorPageController',
          controllerAs: 'vm'
        }
      }
    });
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.when('/', '/home');
    $urlRouterProvider.otherwise('/404');
  };
  'use strict';
  angular.module('app').config(routeConfig);
})();
