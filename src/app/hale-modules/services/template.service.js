(function() {

  /* @ngInject */
  var TemplateService;
  TemplateService = [
    "$http", "$q", function($http, $q) {
      var makeid;
      makeid = function() {
        var i, possible, text;
        text = '';
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678';
        i = 0;
        while (i < 20) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          i++;
        }
        return text;
      };
      return {
        makeid: makeid
      };
    }
  ];
  'use strict';
  angular.module('app.hale.service').service('TemplateService', TemplateService);
})();
