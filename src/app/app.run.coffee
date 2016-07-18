do ->

  ### @ngInject ###

  runFunction = ($rootScope, $state) ->
    # watches
    # redirect all errors to permissions to 500
    errorHandle = $rootScope.$on('$stateChangeError', redirectError)
    # remove watch on destroy
    # default redirect if access is denied

    redirectError = ->
      $state.go '500'
      return

    $rootScope.$on '$destroy', ->
      errorHandle()
      return
    return

  'use strict'
  angular.module('app').run runFunction
  
  return