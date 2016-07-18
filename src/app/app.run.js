(function() {

  /* @ngInject */
  var runFunction;
  runFunction = function($rootScope, $state) {
    var errorHandle, redirectError;
    errorHandle = $rootScope.$on('$stateChangeError', redirectError);
    redirectError = function() {
      $state.go('500');
    };
    $rootScope.$on('$destroy', function() {
      errorHandle();
    });
  };
  'use strict';
  angular.module('app').run(runFunction);
})();
