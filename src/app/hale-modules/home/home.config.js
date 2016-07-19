(function() {

  /* @ngInject yo */
  var moduleConfig;
  moduleConfig = function($stateProvider, triMenuProvider) {
    $stateProvider.state('triangular.home', {
      url: '/home',
      templateUrl: 'app/hale-modules/home/home.tmpl.html',
      controller: 'HomeController',
      controllerAs: 'home',
      data: {
        layout: {
          contentClass: 'full-image-background mb-bg-09'
        }
      }
    });
    triMenuProvider.addMenu({
      name: 'Customers',
      icon: 'zmdi zmdi-face',
      type: 'dropdown',
      priority: 0.1,
      children: [
        {
          name: 'System Info',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Project Status',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Documents',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Support',
          state: 'triangular.home',
          type: 'link'
        }
      ]
    });
    triMenuProvider.addMenu({
      name: 'Contractors',
      icon: 'fa fa-tree',
      type: 'dropdown',
      priority: 0.2,
      children: [
        {
          name: 'Company Info',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Pricing',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Accounts',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Reporting',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Support',
          state: 'triangular.home',
          type: 'link'
        }
      ]
    });
    triMenuProvider.addMenu({
      name: 'Utilities',
      icon: 'zmdi zmdi-flower-alt zmdi-hc-2x',
      type: 'dropdown',
      priority: 0.3,
      children: [
        {
          name: 'Alerts',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'PV Customers',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'NEM List',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'PV Heat Map',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Reporting',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Settings',
          state: 'triangular.home',
          type: 'link'
        }, {
          name: 'Support',
          state: 'triangular.home',
          type: 'link'
        }
      ]
    });
  };
  'use strict';
  angular.module('app.hale.home').config(moduleConfig);
})();
