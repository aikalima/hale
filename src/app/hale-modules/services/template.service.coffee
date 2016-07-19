do ->

  ### @ngInject ###

  TemplateService = ["$http", "$q", ($http, $q) ->

  	makeid = ->
  		text = ''
  		possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678'
  		i = 0
  		while i < 20
  			text += possible.charAt(Math.floor(Math.random() * possible.length))
  			i++

  		text

  	{ 
  		makeid: makeid 
  	}

  ]  	

  'use strict'
  angular.module('app.hale.service').service 'TemplateService', TemplateService
  return
