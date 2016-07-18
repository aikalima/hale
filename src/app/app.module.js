(function() {
  'use strict';
  angular.module('app', ['ui.router', 'permission', 'triangular', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload', 'app.translate', 'app.permission', 'app.examples', 'app.hale']).constant('API_CONFIG', {
    'url': 'http://triangular-api.oxygenna.com/'
  });
})();
