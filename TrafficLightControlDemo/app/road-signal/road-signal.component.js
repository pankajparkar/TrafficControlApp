(function () {
    'use strict';

    angular.module('traffic-light-control')
        .component('roadSignal', {
            templateUrl: '/app/road-signal/road-signal.component.html',
            controller: 'RoadSignalController',
            controllerAs: 'roadSignal',
            bindings: {
                list: '<'
            }
        });

})();
