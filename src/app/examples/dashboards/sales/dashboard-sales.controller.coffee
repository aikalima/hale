do ->

  ### @ngInject ###

  DashboardSalesController = ($scope, $q, $timeout, $mdToast, $filter, $mdDialog, SalesService) ->
    vm = this
    #///////////////////////////////

    openOrder = (order, $event) ->
      $mdDialog.show
        controller: 'SalesOrderDialogController'
        controllerAs: 'vm'
        templateUrl: 'app/examples/dashboards/sales/order-dialog.tmpl.html'
        locals: order: order
        targetEvent: $event
      return

    createData = ->
      vm.salesData = SalesService.generateSales(vm.dateRange)
      vm.chartLineData = SalesService.createLineChartData(vm.salesData)
      vm.chartPieData = SalesService.createPieChartData(vm.salesData)
      vm.chartBarData = SalesService.createBarChartData(vm.salesData)
      return

    vm.dateRange =
      start: moment().startOf('week')
      end: moment().endOf('week')
    vm.query =
      order: 'date'
      limit: 5
      page: 1
    vm.openOrder = openOrder
    # events
    $scope.$on 'salesChangeDate', (event, $event) ->
      $mdDialog.show(
        controller: 'DateChangeDialogController'
        controllerAs: 'vm'
        templateUrl: 'app/examples/dashboards/sales/date-change-dialog.tmpl.html'
        locals: range: vm.dateRange
        targetEvent: $event).then ->
        # create new data
        createData()
        # pop a toast
        $mdToast.show $mdToast.simple().content($filter('triTranslate')('Date Range Updated')).position('bottom right').hideDelay(2000)
        return
      return
    # init
    createData()
    return

  'use strict'
  angular.module('app.examples.dashboards').controller 'DashboardSalesController', DashboardSalesController
  
  return
