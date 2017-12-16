(function () {
    'use strict';

    HomeController.$inject = ['$http', '$q', '$interval', '$timeout', 'DatacontextService'];

    function HomeController($http, $q, $interval, $timeout, datacontextService) {
        var home = this,
            stopSignalInterval,
            signalTimeout;

        //methods
        home.$onInit = $onInit;
        home.$onDestroy = $onDestroy;
        home.getCurrentConfig = getCurrentConfig;
        home.getRoadSignals = getRoadSignals;

        function getRoadSignals() {
            return datacontextService.roadSignal().then(function (res) {
                home.items = res;
            });
        }

        function getCurrentConfig() {
            return datacontextService.signalSetting().then(function (res) {
                home.signalSetting = res;
            });
        }

        function evaluateEachSignalForDefaultInterval(collection, index) {
            return $interval(function () {
                var currentItem = collection[index];
                currentItem.active = false;
                index = ++index % 4;
                collection[index].active = true;
                signalTimeout = null;
            }, home.signalSetting.DefaultInterval);
        }

        function evaluateEachSignal(collection, index) {
            var currentItem = collection[index];
            signalTimeout = $timeout(function () {
                currentItem.active = false;
                index = ++index % 4;
                collection[index].active = true;
                signalTimeout = null;
                evaluateEachSignal(collection, index);
            }, currentItem.Interval || home.signalSetting.DefaultInterval);
        }

        function stopSignal() {
            if (stopSignalInterval) $interval.cancel(stopSignalInterval);
            if (signalTimeout) $timeout.cancel(signalTimeout);;
        }

        function startSignal(collection){
            var initIndex = 0,
                len = collection.length,
                filteredCollection = collection.filter(function (item) {
                    return !item.Interval;
                });

            //intial kickoff
            collection[initIndex].active = true;
            //pass default interval
            if (filteredCollection.length === len) {
                stopSignalInterval = evaluateEachSignalForDefaultInterval(collection, initIndex);
            } else {
                evaluateEachSignal(collection, initIndex);
            }
        }

        function listenToTurnOffAndOnSignal() {
            //Receive below event from server through signalR
            $rootScope.$on('TurnOffAndOnSignal', function (event, data) {
                //TODO
                //1. currentTime > startTime 
                //   Stop signals using stopSignal();
                //2. currentTime <= endTime 
                //   Start signals $onInit();
            });
        }

        function $onInit() {
            $q.all([
                getCurrentConfig(),
                getRoadSignals()
            ]).then(function () {
                    startSignal(home.items);
                }
            );
        }

        //clearning up stuff while migrating one route to another
        function $onDestroy() {
            stopSignal();
        }
    }

    angular.module('traffic-light-control')
        .controller('HomeController', HomeController);
})();
