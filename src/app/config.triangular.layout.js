(function() {

  /* @ngInject */
  var config;
  config = function(triLayoutProvider) {
    triLayoutProvider.setDefaultOption('loaderTemplateUrl', 'app/layouts/loader/loader.tmpl.html');
    triLayoutProvider.setDefaultOption('loaderController', 'LoaderController');
    triLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'app/layouts/leftsidenav/leftsidenav.tmpl.html');
    triLayoutProvider.setDefaultOption('sidebarLeftController', 'LeftSidenavController');
    triLayoutProvider.setDefaultOption('sidebarRightTemplateUrl', 'app/layouts/rightsidenav/rightsidenav.tmpl.html');
    triLayoutProvider.setDefaultOption('sidebarRightController', 'RightSidenavController');
    triLayoutProvider.setDefaultOption('toolbarTemplateUrl', 'app/layouts/toolbar/toolbar.tmpl.html');
    triLayoutProvider.setDefaultOption('toolbarController', 'ToolbarController');
    triLayoutProvider.setDefaultOption('footerTemplateUrl', 'app/layouts/footer/footer.tmpl.html');
    triLayoutProvider.setDefaultOption('showToolbar', true);
    triLayoutProvider.setDefaultOption('toolbarSize', 'default');
    triLayoutProvider.setDefaultOption('toolbarShrink', true);
    triLayoutProvider.setDefaultOption('toolbarClass', 'full-image-background mb-bg-07');
    triLayoutProvider.setDefaultOption('contentClass', 'full-image-background mb-bg-09');
    triLayoutProvider.setDefaultOption('sideMenuSize', 'hidden');
    triLayoutProvider.setDefaultOption('footer', false);
  };
  'use strict';
  angular.module('app').config(config);
})();
