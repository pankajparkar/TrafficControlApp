(function () {
    'use strict';

    DatacontextService.$inject = ['$http'];

    //below service could easily migratable to angular-resource
    function DatacontextService($http) {
        var dataContext = this;

        //methods
        dataContext.signalSetting = signalSetting;
        dataContext.roadSignal = roadSignal;
        dataContext.saveSignalSetting = saveSignalSetting;
        dataContext.roadSignalById = roadSignalById;
        dataContext.saveRoadSignal = saveRoadSignal;

        function catchError(error) {
            console.log("Error", error);
        }

        function unWrapData(response) {
            return response.data;
        }

        function signalSetting() {
            return $http.get('/api/signalsetting')
                .then(unWrapData)
                .catch(catchError);
        }

        function saveSignalSetting(model) {
            return $http.post('/api/signalsetting', model)
                .then(unWrapData)
                .catch(catchError);
        }

        function roadSignal() {
            return $http.get('/api/roadsignal')
                .then(unWrapData)
                .catch(catchError);
        }

        function roadSignalById(id) {
            return $http.get('/api/roadsignal/'+id)
                .then(unWrapData)
                .catch(catchError);
        }

        function saveRoadSignal(model) {
            return $http.post('/api/roadsignal', model)
                .then(unWrapData)
                .catch(catchError);
        }
    }

    angular.module('traffic-light-control')
        .service('DatacontextService', DatacontextService);
})();
