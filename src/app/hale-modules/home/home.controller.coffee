do ->

  ### @ngInject ###
  HomeController = (TemplateService) ->
    model = @
    model.tester = TemplateService.makeid()
    return

  'use strict'
  angular.module('app.hale.home').controller 'HomeController', HomeController
  
  return