(function () {
    'use strict';

    angular.module('traffic-light-control')
        .component('tlcHome', {
            templateUrl: '/app/home/home.component.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });

})();
