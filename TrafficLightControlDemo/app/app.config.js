(function () {
    'use strict';

    routingFn.$inject = ['$routeProvider', '$locationProvider'];
    function routingFn($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                template: '<tlc-home></tlc-home>'
            })
            .when('/road-signal', {
                template: '<road-signal list="$resolve.list"></road-signal>',
                resolve: {
                    list: ['DatacontextService', function (datacontextService) {
                        return datacontextService.roadSignal();
                    }]
                }
            })
            .when('/signal-setting', {
                template: '<signal-setting settings="$resolve.settings"></signal-setting>',
                resolve: {
                    settings: ['DatacontextService', function (datacontextService) {
                        return datacontextService.signalSetting();
                    }]
                }
            })
            .when('/', { redirectTo: '/home' })
            .when('', { redirectTo: '/home' })
            .otherwise('/home');

        //removing '!' from the url
        $locationProvider.hashPrefix('')
    }

    angular.module('traffic-light-control')
        .config(routingFn);
})();