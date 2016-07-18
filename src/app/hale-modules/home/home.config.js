(function() {

  /* @ngInject yo */
  var moduleConfig;
  moduleConfig = function($stateProvider, triMenuProvider) {
    $stateProvider.state('triangular.home', {
      url: '/home',
      templateUrl: 'app/hale-modules/home/home.tmpl.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      data: {
        layout: {
          contentClass: 'layout-column'
        }
      }
    });
    triMenuProvider.addMenu({
      name: 'Contractors',
      icon: 'fa fa-tree',
      type: 'dropdown',
      priority: 1.1,
      children: [
        {
          name: 'Search',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Top Rated',
          state: 'triangular.home',
          type: 'link'
        }
      ]
    });
    triMenuProvider.addMenu({
      name: 'Utilities',
      icon: 'fa fa-tree',
      type: 'dropdown',
      priority: 2,
      children: [
        {
          name: 'Search',
          state: 'triangular.home',
          type: 'link'
        }
      ]
    });
    triMenuProvider.addMenu({
      name: 'Customers',
      icon: 'fa fa-tree',
      type: 'dropdown',
      priority: 2,
      children: [
        {
          name: 'Search',
          state: 'triangular.home',
          type: 'link'
        }
      ]
    });
  };
  'use strict';
  angular.module('app.hale.home').config(moduleConfig);
})();
