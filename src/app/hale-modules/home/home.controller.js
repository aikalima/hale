(function() {
    'use strict';

    angular
        .module('app.hale.home')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.testData = ['triangular', 'is', 'great'];
    }
})();