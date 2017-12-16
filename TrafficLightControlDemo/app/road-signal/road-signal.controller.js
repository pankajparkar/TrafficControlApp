(function () {
    'use strict';

    RoadSignalController.$inject = ['$uibModal', 'DatacontextService'];

    function RoadSignalController($uibModal, datacontextService) {
        var roadSignal = this;

        //methods
        roadSignal.$onInit = $onInit;
        roadSignal.openModal = openModal;

        function getRoadSignal() {
            datacontextService.roadSignal().then(function (list) {
                roadSignal.list = list;
            })
        }

        function openModal(model) {
            $uibModal.open({
                template: '<road-signal-edit model="$resolve.currentModel"></road-signal-edit>',
                controller: angular.noop,
                resolve: {
                    currentModel: ['DatacontextService', function currentModel(datacontextService) {
                        return datacontextService.roadSignalById(model.Number);
                    }]
                }
            }).result.then(function () {
                getRoadSignal();
            });
        }

        function $onInit() {
            console.log(roadSignal)
        }
    }

    angular.module('traffic-light-control')
        .controller('RoadSignalController', RoadSignalController);
})();
