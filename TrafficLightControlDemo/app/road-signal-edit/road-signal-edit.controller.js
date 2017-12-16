(function () {
    'use strict';

    RoadSignalEditController.$inject = ['$uibModalStack', 'DatacontextService'];

    function RoadSignalEditController($uibModalStack, datacontextService) {
        var roadSignalEdit = this;

        //methods
        roadSignalEdit.$onInit = $onInit;
        roadSignalEdit.close = close;
        roadSignalEdit.save = save;

        function save() {
            datacontextService.saveRoadSignal(roadSignalEdit.model).then(function () {
                alert("Record saved succefully.");
                close();
            });
        }

        function close() {
            var openedModal = $uibModalStack.getTop();
            $uibModalStack.close(openedModal.key);
        }

        function $onInit() {
            console.log(roadSignalEdit)
        }
    }

    angular.module('traffic-light-control')
        .controller('RoadSignalEditController', RoadSignalEditController);
})();
