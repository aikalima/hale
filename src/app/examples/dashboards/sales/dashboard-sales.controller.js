(function() {

  /* @ngInject */
  var DashboardSalesController;
  DashboardSalesController = function($scope, $q, $timeout, $mdToast, $filter, $mdDialog, SalesService) {
    var createData, openOrder, vm;
    vm = this;
    openOrder = function(order, $event) {
      $mdDialog.show({
        controller: 'SalesOrderDialogController',
        controllerAs: 'vm',
        templateUrl: 'app/examples/dashboards/sales/order-dialog.tmpl.html',
        locals: {
          order: order
        },
        targetEvent: $event
      });
    };
    createData = function() {
      vm.salesData = SalesService.generateSales(vm.dateRange);
      vm.chartLineData = SalesService.createLineChartData(vm.salesData);
      vm.chartPieData = SalesService.createPieChartData(vm.salesData);
      vm.chartBarData = SalesService.createBarChartData(vm.salesData);
    };
    vm.dateRange = {
      start: moment().startOf('week'),
      end: moment().endOf('week')
    };
    vm.query = {
      order: 'date',
      limit: 5,
      page: 1
    };
    vm.openOrder = openOrder;
    $scope.$on('salesChangeDate', function(event, $event) {
      $mdDialog.show({
        controller: 'DateChangeDialogController',
        controllerAs: 'vm',
        templateUrl: 'app/examples/dashboards/sales/date-change-dialog.tmpl.html',
        locals: {
          range: vm.dateRange
        },
        targetEvent: $event
      }).then(function() {
        createData();
        $mdToast.show($mdToast.simple().content($filter('triTranslate')('Date Range Updated')).position('bottom right').hideDelay(2000));
      });
    });
    createData();
  };
  'use strict';
  angular.module('app.examples.dashboards').controller('DashboardSalesController', DashboardSalesController);
})();
