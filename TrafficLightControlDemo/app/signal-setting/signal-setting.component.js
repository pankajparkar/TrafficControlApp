(function () {
    'use strict';

    angular.module('traffic-light-control')
        .component('signalSetting', {
            templateUrl: '/app/signal-setting/signal-setting.component.html',
            controller: 'SignalSettingController',
            controllerAs: 'signalSetting',
            bindings: {
                settings: '<'
            }
        });

})();
