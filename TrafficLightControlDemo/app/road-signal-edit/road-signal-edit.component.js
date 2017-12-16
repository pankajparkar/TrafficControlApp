(function () {
    'use strict';

    angular.module('traffic-light-control')
        .component('roadSignalEdit', {
            templateUrl: '/app/road-signal-edit/road-signal-edit.component.html',
            controller: 'RoadSignalEditController',
            controllerAs: 'roadSignalEdit',
            bindings: {
                model: '<'
            }
        });

})();
