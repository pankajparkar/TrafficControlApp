(function () {
    'use strict';

    angular.module('traffic-light-control')
        .component('trafficLightControlApp', {
            templateUrl: '/app/app.component.html',
            controller: 'MainController',
            controllerAs: 'main'
        });

})();
